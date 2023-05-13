import React, {useState, useCallback} from 'react';
import {View, Button, Text} from 'react-native';

const UseCallbackk = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  //the useCallback hook is used to memoize a function, which means it returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is typically used to optimize performance by preventing unnecessary re-rendering of child components.
  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View>
      <Button title="Increment" onPress={handleButtonClick} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default UseCallbackk;
