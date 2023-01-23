import React, { useEffect, useState } from 'react'
import {
  View, Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,

} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import { Picker } from '@react-native-picker/picker'

const db = openDatabase({ name: 'khang' })

const update = () => {
  useEffect(() => {
    fetchproduct();
  }, [])

  const [ulist, setulist] = useState([])
  const [id, setid] = useState(0)
  const [uprice, setuprice] = useState(0)

  function fetchproduct() {
    db.transaction(
      txn => {
        txn.executeSql(
          `select * from product1`, [],
          (sqltxn, res) => {
            let resultset = []
            let len = res.rows.length;
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i)
              resultset.push({
                id: record.id,
                name: record.name,
              });
            }
            setulist(resultset)
            console.log("all products are fetched")
          },
          (error) => {
            console.log("error occured while fetching")
          }
        )
      }
    )
  }

  const updatepro = (uprice, uid) => {
    db.transaction(
      txn => {
        txn.executeSql(
          `update product1 set price=? where id=?`, [uprice, uid],
          (sqltxn, res) => {
            fetchproduct()
            console.log("selected data updated successfully")
          },
          (error) => {
            console.log("error while updating data")
          }
        )
      }
    )
  }

  return (
    <View style={styles.container}>
      <Text>select the value to delete</Text>
      <Picker
        style={{
          backgroundColor: 'purple',
          color: 'white',
          width: 290,
          left: 35,
          top: 20,
        }}
        selectedValue={id}
        onValueChange={value => setid(value)}
      >
        {ulist.map(data => {
          return (
            <Picker.Item label={data.name} value={data.id} />
          );

        })}
      </Picker>

      <TextInput
        style={{ backgroundColor: "yellow", color: "red", marginTop: 30 }}
        placeholder='enter the price to update'
        value={uprice}
        onChangeText={(value) => { setuprice(value) }}
      />
      <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
        <Button
          title='update price'
          onPress={() => { updatepro(uprice,id) }}
        />
      </View>
    </View>
  )
}
export default update;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

