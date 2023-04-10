import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {useRef} from 'react';
import {useState} from 'react';

const Textinputs = () => {
  const ref1 = useRef();
  const [isfocus, setisfocus] = useState(false);
  const [placeholder, setplaceholder] = useState('Enter Password');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{borderBottomWidth: 1, width: '90%'}}
        placeholder="Enter Name"
        onSubmitEditing={() => {
          ref1.current.focus();
        }}
      />
      <TextInput
        style={{marginTop: 20, width: '90%', borderWidth: 2, paddingLeft: 10}}
        placeholder="Enter Name"
        ref={ref1}
      />
      <TextInput
        style={{
          marginTop: 20,
          width: '90%',
          borderWidth: 2,
          paddingLeft: 10,
          borderRadius: 10,
        }}
        placeholder="Enter Name"
      />
      <TextInput
        style={{
          marginTop: 20,
          width: '90%',
          borderWidth: 2,
          paddingLeft: 10,
          borderRadius: 10,
        }}
        placeholder="Enter Number"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => {
          alert('heloo');
        }}
      />
      {/* input with icon */}
      <View
        style={{
          marginTop: 20,
          width: '90%',
          height: 50,
          borderWidth: 2,
          paddingLeft: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/3.jpg')}
          style={{height: 24, width: 24}}
        />
        <TextInput style={{marginLeft: 10}} placeholder="Enter Password" />
      </View>
      {/* //input with text on top */}
      <View
        style={{
          marginTop: 20,
          width: '90%',
          height: 50,
          borderWidth: 2,
          paddingLeft: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{marginLeft: 10}}
          placeholder={placeholder}
          onFocus={() => {
            setisfocus(true);
            setplaceholder('');
          }}
          onBlur={() => {
            setisfocus(false);
            setplaceholder('Enter Password');
          }}
        />
        {isfocus && (
          <Text
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              left: 20,
              top: -10,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 10,
            }}>
            {'Enter Password'}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Textinputs;
