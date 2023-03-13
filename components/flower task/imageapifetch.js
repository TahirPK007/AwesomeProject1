import { View, Text, FlatList, Image,ScrollView,Button } from 'react-native'
import React, { useState, useEffect } from 'react'



const imageapifetch = ({navigation}) => {


    const showItem = ({ item, index }) => {
        const imageuri = `http://10.0.2.2/ecom api/Content/Uploads/${item.image}`;
        return (
            <View style={{ marginTop: 10, alignItems: 'center', }} key={index}>
                <ScrollView style={{
                }}>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 8, color: 'black', fontWeight: 'bold' }}>  {item.name}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 8, color: 'black', fontWeight: 'bold' }}>  {item.contact}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: imageuri }} style={{ height: 200, width: 200 }} />
                    </View>
                </ScrollView>
            </View>
        )
    }

    const [data, setdata] = useState([])

    useEffect(() => {
        apidata();
    }, [])



    const apidata = async () => {
        try {
            const response = await fetch('http://10.0.2.2/ecom%20api/api/Flower/Fetchflowers');
            const mydata = await response.json();
            setdata(mydata);
            console.log(mydata);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <View>
            <Text>imageapifetch</Text>
            <View>
                <Button
                title='add new flower image'
                onPress={()=>navigation.navigate("imagedbapi")}
                />
            </View>
            <FlatList

                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={showItem}
            />
        </View>
    )
}

export default imageapifetch;