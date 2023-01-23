import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'


const screenA = ({navigation}) => {
    return (
        <View>
         <Text>this is screen-a</Text>
         <Button
         title='go to screen b'
         onPress={()=>{
            navigation.navigate("screenB");
         }}
         />
        </View>
    );
}

export default screenA;
