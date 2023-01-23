import { View, Text,
Button,
 } from 'react-native'
import React from 'react'

const task3 = ({navigation}) => {
  return (
    <View>
<Button
title='new pizza'
onPress={()=>{navigation.navigate("NewPizza")}}
/>
<Button
title='take order'
onPress={()=>{navigation.navigate("TakeOrder")}}
/>
    </View>
  )
}

export default task3;