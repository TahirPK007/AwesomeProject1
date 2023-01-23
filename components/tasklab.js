import { View, Text, FlatList,StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const tasklab = () => {


    const [data, setdata] = useState([])

    useEffect(() => {
        apidata();
    }, [])


    const apidata = async () => {
        try {
            const response = await fetch('http://10.0.2.2/ecom%20api/api/Aftab/Allnames');
            const mydata = await response.json();
            setdata(mydata);
            console.log(mydata);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text>tasklab</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{flex:1}}>
                        <Text style={styles.txt}>{item.id}</Text>
                        <Text style={styles.txt}>{item.name}</Text>
                        <Text style={styles.txt}>{item.category}</Text>
                        <Text style={styles.txt}>{item.price}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default tasklab

const styles=StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
    },
    txt:{
        // flex:1,
        width:200,
        color:"red",
        height:20,
        width:"50%",
        backgroundColor:"yellow"
    }

})