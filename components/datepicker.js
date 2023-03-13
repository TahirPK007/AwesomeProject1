import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const datepicker = () => {
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Text>datepicker</Text>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Button title="date" onPress={() => setOpen(true)} />
    </View>

  );
};

export default datepicker;
