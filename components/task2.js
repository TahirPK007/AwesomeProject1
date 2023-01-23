import { View, Text,
    Button,

 } from 'react-native'
import React from 'react'

const task2 = ({navigation}) => {

    const data1=[
        {
            title:"java",
            author:"aftab",
            price:200,
            page:1500
        },
        {
            title:"oop",
            author:"ali",
            price:200,
            page:1500
        },
        {
            title:"pf",
            author:"noman",
            price:200,
            page:1500
        },
    ]
  return (
    <View>
      <Text> this is task2</Text>
      {
        data1.map(data=>{
            return (
                <View>
                    <Button
                    title={data.title}
                    onPress={()=>{navigation.navigate("task2data",{paramkey:data})}}
                    />
                </View>
            )
        })
      }
    </View>
  )
}

export default task2;