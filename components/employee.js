import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Text,
    Pressable,
    Alert,
    FlatList,
    TouchableOpacity,


} from "react-native"
import { Picker } from "@react-native-picker/picker";
import CheckBox from "@react-native-community/checkbox";
import { RadioButton } from "react-native-paper";
import { openDatabase } from 'react-native-sqlite-storage'


const db = openDatabase({ name: 'employee' })


const employee = () => {
    const [name, setname] = useState("")
    const [picker, setpicker] = useState("")
    const [check, setcheck] = useState(false)
    const [radio, setradio] = useState("")
    const [empl, setempl] = useState([])
    const [btn, setbtn] = useState("add")
    const [id, setid] = useState(0)

    useEffect(() => {
        createtable();
        fetchemp();
    }, [])


    const createtable = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `create table if not exists emp (id integer primary key autoincrement,name varchar(50),scale varchar(50),eligible varchar(50),gender varchar(50))`, [],
                    (sqltxn, res) => {
                        console.log("table created successfully")
                    },
                    (error) => {
                        console.log("error occured while creating table")
                    }

                )
            }
        )
    }



    const insert = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `insert into emp(name,scale,eligible,gender) values(?,?,?,?)`,
                    [name, picker, check, radio],
                    (sqltxn, res) => {
                        Alert.alert("data added succesfully")
                        fetchemp();
                    },
                    (error) => {
                        Alert.alert("error occured while adding data")
                    }
                )
            }
        )
    }

    const fetchemp = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `select * from emp`, [],
                    (sqltxn, res) => {
                        let resultset = []
                        let len = res.rows.length;
                        for (let i = 0; i < len; i++) {
                            let record = res.rows.item(i)
                            resultset.push({
                                id: record.id,
                                name: record.name,
                                scale: record.scale,
                                eligible: record.eligible,
                                gender: record.gender
                            })
                        }
                        setempl(resultset)
                        console.log("all emps are fetched")
                    },
                    (error) => {
                        console.log("error occured while fetching employees")
                    }
                )
            }
        )
    }

    const updateemp = (name, picker, radio, id) => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `update emp set name=?,scale=?,gender=? where id=?`,
                    [name, picker, radio, id],
                    (sqltxn, res) => {
                        Alert.alert("emp data updated succesfully")
                        fetchemp();
                        setbtn("add")
                    },
                    (error) => {
                        Alert.alert("error occured while updating emp data")
                    }
                )
            }
        )
    }

    const btt = () => {
        if (btn === "add") {
            insert();
            fetchemp();
        }
        else {
            updateemp(name, picker, radio, id);
            fetchemp();
        }
    }
    function editemp({ item }) {
        setid(item.id)
        setname(item.name)
        setpicker(item.scale)
        setradio(item.gender)
        setbtn('Update')
      }

    return (

        <View>
            <TextInput
                placeholder="enter employee name"
                value={name}
                onChangeText={(value) => { setname(value) }}
            />


            <Picker
                style={{ backgroundColor: "purple" }}
                selectedValue={picker}
                onValueChange={(value) => { setpicker(value) }}
            >

                <Picker.Item label="jr developer" value="jr developer" />
                <Picker.Item label="sr developer" value="sr developer" />
            </Picker>
            <Text>are you eligible for this job?</Text>
            <CheckBox
                value={check}
                onValueChange={(value) => { setcheck(value) }}
            />
            <RadioButton.Group
                onValueChange={(value) => { setradio(value) }}
                value={radio}
            >

                <RadioButton.Item label="male" value="male" />
                <RadioButton.Item label="female" value="female" />
            </RadioButton.Group>


            <Pressable
                style={{
                    backgroundColor: "purple", alignItems: "center",
                    height: 40, width: "50%", justifyContent: "center",
                }}
                onPress={btt}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                android_ripple={{ color: "red" }}
            >
                <Text>{btn}</Text>
            </Pressable>
            <FlatList
                data={empl}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: "black", margin: 10, padding: 10, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => editemp({ item })}>
                            <Text style={{ color: "white" }}>emp name: {item.name}</Text>
                            <Text style={{ color: "white" }}>emp scale: {item.scale}</Text>
                            <Text style={{ color: "white" }}>emp eligibility: {item.eligible}</Text>
                            <Text style={{ color: "white" }}>emp gender: {item.gender}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>

    )

}


export default employee;