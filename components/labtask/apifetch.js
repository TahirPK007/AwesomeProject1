import { View, Text,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'

const apifetch = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        apidata();
    }, [])


    const apidata = async () => {
        try {
            const response = await fetch('http://10.0.2.2/ecom%20api/api/User/Allusers');
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
      <Text>apifetch</Text>

      <FlatList

                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.password}</Text>
                    </View>
                )}
            />

    </View>
  )
}

export default apifetch