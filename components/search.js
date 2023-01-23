import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'khang' })

const search = () => {
  const [rbtn, setrbtn] = useState("")
  const [search, setsearch] = useState("")
  const [plist, setplist] = useState([])

  const searchproduct = () => {
    if (rbtn === "company") {
      db.transaction(
        txn => {
          txn.executeSql(
            `select * from product1 where company=?`, [search],
            (sqltxn, res) => {
              let len = res.rows.length;
              let resultset = []
              for (let i = 0; i < len; i++) {
                let record = res.rows.item(i)
                resultset.push({
                  id: record.id,
                  name: record.name,
                  price: record.price,
                  company: record.company,
                  unit: record.unit
                })
              }
              setplist(resultset)
            },
            (error) => {
              console.log("error occured while searching with company name")
            }
          )
        }
      )
    }
    else if (rbtn === "product") {
      db.transaction(
        txn => {
          txn.executeSql(
            `select * from product1 where name=?`, [search],
            (sqltxn, res) => {
              let len = res.rows.length;
              let resultset = []
              for (let i = 0; i < len; i++) {
                let record = res.rows.item(i)
                resultset.push({
                  id: record.id,
                  name: record.name,
                  price: record.price,
                  company: record.company,
                  unit: record.unit
                })
              }
              setplist(resultset)
            },
            (error) => {
              console.log("error occured while searching with product name")
            }
          )
        }
      )
    }
    else if (rbtn === "price") {
      db.transaction(
        txn => {
          txn.executeSql(
            `select * from product1 where price>?`, [search],
            (sqltxn, res) => {
              let len = res.rows.length;
              let resultset = []
              for (let i = 0; i < len; i++) {
                let record = res.rows.item(i)
                resultset.push({
                  id: record.id,
                  name: record.name,
                  price: record.price,
                  company: record.company,
                  unit: record.unit
                })
              }
              setplist(resultset)
            },
            (error) => {
              console.log("error occured while searching with product name")
            }
          )
        }
      )
    }
    else{
      Alert.alert("pls select any of the radio button")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='enter to search'
        value={search}
        onChangeText={(value) => { setsearch(value) }}
      />
      <RadioButton.Group onValueChange={(value) => { setrbtn(value) }} value={rbtn}>
        <RadioButton.Item label='company' value='company' />
        <RadioButton.Item label='product' value='product' />
        <RadioButton.Item label='price' value='price' />
      </RadioButton.Group>
      <Button
        title='search'
        onPress={searchproduct}
      />
      <FlatList
        data={plist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
        (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.company}</Text>
            <Text>{item.unit}</Text>
          </View>
        )
        }
      />
    </View>
  )
}

export default search;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "red",
    borderWidth: 2,
    height: 40,
    width: "50%",
    marginTop: 10,
    borderRadius: 10,
  }
})