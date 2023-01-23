import { View, Text } from 'react-native';
import React from 'react';
import input from './input';

const login = () => {
    const [name, setname] = useState({username:"ali",password:"khan"})
    const [pass, setpass] = useState("")

    const onclick=()=>{
        setname({e})

    }
  return (
    <View>
      <input input='enter your name'
      value={name.username}
      abc={(e)=>onclick(e)}
      />
    </View>
  )
}

export default login