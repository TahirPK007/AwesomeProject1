import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'


const db = openDatabase({ name: 'employee' })

const employeedata = () => {

    useEffect(() => {
        fetchemp();
    }, [])

    const [empl, setempl] = useState([])

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

    return (
        <View>
            <FlatList
                data={empl}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: "black", margin: 10, padding: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>emp name: {item.name}</Text>
                        <Text style={{ color: "white" }}>emp scale: {item.scale}</Text>
                        <Text style={{ color: "white" }}>emp eligibility: {item.eligible}</Text>
                        <Text style={{ color: "white" }}>emp gender: {item.gender}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default employeedata;