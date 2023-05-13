import {View, Text} from 'react-native';
import React, {useLayoutEffect, useRef} from 'react';

const Uselayouteffect = () => {
  //the useLayoutEffect hook is similar to the useEffect hook, but it runs synchronously immediately after the DOM has been updated. It is typically used for performing measurements or manipulating the layout of components.
  const textRef = useRef(null);
  const width = textRef.current.measure((x, y, width, height, pageX, pageY) => {
    console.log('Width:', width);
  });
  return (
    <View>
      <Text ref={textRef}>Example Text</Text>
      {/* we have a <Text> component with a ref attribute set to textRef. We use the measure() method on the ref to get the width of the text element. This measurement operation is performed synchronously in the useLayoutEffect callback. */}
    </View>
  );
};

export default Uselayouteffect;
