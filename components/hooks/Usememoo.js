import {View, Text, Button} from 'react-native';
import React, {useState, useMemo} from 'react';

const Usememoo = () => {
  //the useMemo hook is used to memoize the result of a computation. It returns a memoized value that only changes when one of the dependencies has changed. It is typically used to optimize performance by avoiding unnecessary re-computation of values.
  const [count, setcount] = useState(0);
  const doublecount = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <View>
      <Text>UsememooL count = {count}</Text>
      <Button
        title="increment"
        onPress={() => {
          setcount(count + 1);
        }}
      />
    </View>
  );
};

export default Usememoo;
