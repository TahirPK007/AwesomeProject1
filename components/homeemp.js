import React from "react";
import {
    View,
    Text,
    Pressable,
    Button,

} from "react-native"

const homeemp = ({navigation}) => {
    return (
        <View>

            <Pressable
            onPress={()=>{navigation.navigate("employee")}}
            hitSlop={{top:10,bottom:10,left:10,right:10}}
            android_ripple={{color:"red"}}
            >
                <Text>Go to employee form</Text>
            </Pressable>
            <Pressable
            onPress={()=>{navigation.navigate("employeedata")}}
            hitSlop={{top:10,bottom:10,left:10,right:10}}
            android_ripple={{color:"red"}}
            >
                <Text>check employee data</Text>
            </Pressable>
            <Button
            title="go to quiz 1"
            onPress={()=>{navigation.navigate("quiz1")}}
            />
        </View>
    )

}
export default homeemp;