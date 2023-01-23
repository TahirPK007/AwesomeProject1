import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
  } from 'react-native';

const MyTodo = () => {

  const [myapidata , setmyapidata ] = useState([]);  
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={{flexDirection:'row'}}>
        <View style={{width: '20%',}}>
       <Text>{item.userId}</Text>
        </View>
        <View style={{width: '60%',}}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        </View>
        <View style={{width: '20%',flexDirection:'row'}}>
        <Text>{item.completed}</Text>
        </View>
     
     
     
      </View>
    </TouchableOpacity>
  )

  const todosapi = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        var arr = [];
        json.forEach(element => {
          if (element['userId'] == 8) {
            arr.push(element);
          }
        })
        setmyapidata(arr);
      })
      .catch(error => {
        console.error(error)
      })
  };

  const renderItem = ({ item }) => {
    const backgroundColor = 'silver';
    const color = 'white';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )
  }

  useEffect(() => {
    todosapi()
  })

  return (
    <View style={styles.container}>
      <View style={styles.ContactBook}>
        <FlatList
          myapidata={myapidata}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      },
      Heading: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
      HeadingText: {
        marginTop: 30,
        fontSize: 30,
        color: 'lightgreen'
      },
      item: {
        padding: 10,
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 5,
        width: '90%',
        margin: 10,
      },
      title: {
        fontSize: 21
      },
      ContactBook: {
        flex: 2,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
        marginLeft: 10,
        marginRight:15,
        backgroundColor: 'red'
      },
      ContactInformation: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      row: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
      },
      input: {
        height: 50,
        margin: 18,
        borderWidth: 3,
        borderRadius: 8,
        width: '80%',
        borderColor: 'grey',
        padding: 15,
      },
      button: {
        alignItems: "center",
        width: '80%',
        backgroundColor: "purple",
        padding: 20,
      },
})

export default MyTodo;