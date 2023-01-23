import React, { useEffect, useState } from 'react';
import { FlatList, Text, View , TextInput,Button, StyleSheet, TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid} from 'react-native';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

export default imagedbapi = () => {

 const[name,setname]=useState('');
 const[contact,setcontact]=useState();
 const[imageData, setImageData] = useState()
 const [filePath, setFilePath] = useState({});

  const addflower=async()=>{
    
    let data = new FormData()
    data.append('name',name)
    data.append('contact',contact)
    data.append('image',imageData)

    let response = await fetch('http://10.0.2.2/ecom%20api/api/Flower/Addflower',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type' : 'multipart/form-data'
      },
      body:data
    })
    let json = await response.json()
    console.log(json)
  }

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
 
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } 
    else 
    
    {
      return true
    };
  };
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64:true
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      console.log('Response Assets = ', response.assets[0].uri);
 
 
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
   
      setImageData({
        'uri' : response.assets[0].uri,
        'name' : response.assets[0].fileName,
        'type' : response.assets[0].type
      })
      setFilePath(response.assets[0]);
    });
  };

  return (
    <View style={{ flex: 1, padding: 24}}>
<Text>flower Name:</Text>
<TextInput onChangeText={(value)=>setname(value)} style={{borderWidth:2,borderColor:'black'}}/>
<Text> contact:</Text>
<TextInput onChangeText={(value)=>setcontact(value)} style={{borderWidth:2,borderColor:'black'}}/>
<Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />
<TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')} >
             <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>

      <Button title='Add flower' onPress={()=>addflower()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});