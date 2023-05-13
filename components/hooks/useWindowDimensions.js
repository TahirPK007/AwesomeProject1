import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';

const useWindowDimensionss = () => {
  //It allows you to retrieve the dimensions of the window or the screen and keep track of changes in those dimensions. It is commonly used to create responsive layouts or adjust the styling of components based on the window dimensions.

  const windowDimensions = useWindowDimensions();
  return (
    <View>
      <Text>Window Width: {windowDimensions.width}</Text>
      <Text>Window Height: {windowDimensions.height}</Text>
    </View>
  );
};

export default useWindowDimensionss;
