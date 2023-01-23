import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    FlatList,
} from 'react-native'
import { RadioButton } from 'react-native-paper';
import { openDatabase } from 'react-native-sqlite-storage'


const db = openDatabase({ name: 'khang' })
const insert = () => {
    
    const [name, setname] = useState('')
    const [price, setprice] = useState(0)
    const [company, setcompany] = useState('')
    const [unit, setunit] = useState('')
    const [pplist, setpplist] = useState([])



    const createtable = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `create table if not exists product1 (id integer primary key autoincrement,name varchar(50),price int,company varchar(50),unit varchar(50))`, [],
                    (sqltxn, res) => {
                        console.log("table created successfully")
                    },
                    (error) => {
                        console.log("error occured during table creation")
                    }
                )
            }
        )
    }

    const addproduct = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    `insert into product1(name,price,company,unit) values(?,?,?,?)`,
                    [name, price, company, unit],
                    (sqltxn, res) => {
                        Alert.alert("data added successfully")
                        fetchproduct()
                    },
                    (error) => {
                        console.log("eror occured while saving data")
                    }
                )
            }
        )
    }
    function fetchproduct () {
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
                                price: record.price,
                                company: record.company,
                                unit: record.unit,
                            });
                        }
                        setpplist(resultset)
                        console.log("all products are fetched")
                    },
                    (error) => {
                        console.log("error occured while fetching")
                    }
                )
            }
        )
    }
    useEffect(
        () => {
            createtable()
            fetchproduct()
        }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Enter the details of the product to save in db</Text>
            <TextInput style={styles.input}
                placeholder='Enter product name'
                value={name}
                onChangeText={(value) => { setname(value) }}
            />
            <TextInput style={styles.input}
                placeholder='Enter product price'
                value={price}
                onChangeText={(value) => { setprice(value) }}
            />
            <TextInput style={styles.input}
                placeholder='Enter product company'
                value={company}
                onChangeText={(value) => { setcompany(value) }}
            />
            <Text style={{ fontSize: 20, marginTop: 10 }}>Select Unit</Text>
            <RadioButton.Group
                onValueChange={(value) => { setunit(value) }} value={unit}>
                <RadioButton.Item label='kg' value="kg" />
                <RadioButton.Item label="ltr" value="ltr" />
            </RadioButton.Group>
            <Button
                title='save data'
                onPress={addproduct}
            />

            <FlatList
                data={pplist}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                (
                    <View style={{color: "white", margin: 10, }}>
                        <Text style={styles.box}>{item.name}</Text>
                        <Text style={styles.box}>{item.price}</Text>
                        <Text style={styles.box}>{item.company}</Text>
                        <Text style={styles.box}>{item.unit}</Text>
                    </View>
                )
                }
            />

        </View>
    )
}

export default insert;

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
    },
    box:{
        height:20,
        width:100,
        borderWidth:2,
        borderColor:"red",
        borderRadius:10,
        marginTop:5,
        textAlign:"center"
    }
})