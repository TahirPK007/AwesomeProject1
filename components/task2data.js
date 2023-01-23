import { View, Text } from 'react-native'
import React from 'react'

const task2data = ({route,navigation}) => {
    
  return (
    <View style={{backgroundColor:"yellow"}}>
        <Text style={{color:"black"}}>{route.params.paramkey.title}</Text>
        <Text style={{color:"black"}}>{route.params.paramkey.author}</Text>
        <Text style={{color:"black"}}>{route.params.paramkey.price}</Text>
        <Text style={{color:"black"}}>{route.params.paramkey.page}</Text>
    </View>
  )
}

export default task2data;