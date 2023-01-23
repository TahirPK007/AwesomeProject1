import {
    View, Text,
    Button
} from 'react-native'
import React from 'react'

const home = ({ navigation }) => {
    return (
        <View>
            <Button
                title='insert'
                onPress={() => {
                    navigation.navigate("insert");
                }}
            />
            <Button
                title='search'
                onPress={() => {
                    navigation.navigate("search");
                 }}
            />
            <Button
                title='update'
                onPress={() => { 
                    navigation.navigate("update");
                }}
            />
            <Button
                title='deletep'
                onPress={() => {
                    navigation.navigate("deletep");
                 }}
            />
        </View>
    )
}

export default home;