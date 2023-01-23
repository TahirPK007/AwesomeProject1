import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,
} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import { Picker } from '@react-native-picker/picker'


const db = openDatabase({ name: 'khang' })


const deletep = () => {
  useEffect(() => {
    fetchproduct();
  }, [])
  const [dlist, setdlist] = useState([])
  const [id, setid] = useState(0)

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
            setdlist(resultset)
            console.log("all products are fetched")
          },
          (error) => {
            console.log("error occured while fetching")
          }
        )
      }
    )
  }

  const delpro = (id) => {
    db.transaction(
      txn => {
        txn.executeSql(
          `delete from product1 where id=?`, [id],
          (sqltxn, res) => {
            fetchproduct()
            console.log("selected data deleted successfully")
          },
          (error) => {
            console.log("error while deleting data")
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
        {dlist.map(data => {
          return (
            <Picker.Item label={data.name} value={data.id} />
          );

        })}
      </Picker>
      <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
        <Button
          title='delete product'
          onPress={()=>{delpro(id)}}
        />
      </View>


    </View>
  )
}

export default deletep;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})