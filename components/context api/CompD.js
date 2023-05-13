import {View, Text} from 'react-native';
import React from 'react';
import {myContext, emailContext} from './ComponentA';
import {useContext} from 'react';
const CompD = ({name}) => {
  const namee = useContext(myContext);
  const email = useContext(emailContext);
  return (
    <View>
      <Text>comp d</Text>
      <Text>{namee}</Text>
      <Text>{email}</Text>
    </View>
    // <myContext.Consumer>
    //   {mName => {
    //     return (
    //       <emailContext.Consumer>
    //         {emaill => {
    //           return (
    //             <View>
    //               <Text>CompD</Text>
    //               {/* <Text>{'name ' + name}</Text> */}
    //               <Text>{mName}</Text>
    //               <Text>{emaill}</Text>
    //             </View>
    //           );
    //         }}
    //       </emailContext.Consumer>
    //     );
    //   }}
    // </myContext.Consumer>
  );
};

export default CompD;
