import React,{useState,useEffect} from 'react';
import { View, Text,
TextInput,

 } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'imagedb' })



const imagedb = () => {

    const [name, setfirst] = useState("")
    const [filepath, setfilepath] = useState({})
    const [type, settype] = useState("")



    const createtable=()=>{
        db.transaction(
            txn=>{
                txn.executeSql(
                    `create table if not exists image (id integer autoincremetn,name text,base64 text,type text)`,[],
                    (sqltxn,res)=>
                    {
                      console.log("table created successfully");
                    },
                    (error)=>
                    {
                      console.log("error occured while creating tables");
                    }
                )
            }
        )

        const insertion=()=>{
          
        }



    }


  return (
    <View>
      <Text>imagedb</Text>
    </View>
  )
}

export default imagedb;