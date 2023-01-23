import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const cart = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <ScrollView>
                <Text>Home</Text>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                    </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                    </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150 }} source={require('../assets/3.jpg')} />
                    <Button
                        title='Add to cart'

                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default cart