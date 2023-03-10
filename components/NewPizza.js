import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'PizzaDatabase.db'});
const NewPizza = () => {
const [flavour, setFlavour] = useState('');
const [price, setPrice] = useState();
const [size, setSize] = useState('S');
const ADD_PRODUCT = () => {
let query = 'INSERT INTO Pizza(flavour, size, price) VALUES(?,?,?)';
db.transaction(txn => {
txn.executeSql(
query,
[flavour, size, price],
(tx, res) => {
console.log(res);
ToastAndroid.show(
'New Pizza Added Successfully!',
ToastAndroid.SHORT,
);
},
error => {
console.log('ERROR');
},
);
});
};
const submitHandler = () => {
ADD_PRODUCT();
clearFields();
};
const clearFields = () => {
setFlavour('');
setSize('S');
setPrice('');
};
return (
<View style={styles.container}>
<View style={styles.innerContainer}>
{/* Flavour */}
<View style={styles.flavour}>
<Text style={styles.text}>Flavour</Text>
<TextInput
style={styles.input}
value={flavour}
onChangeText={value => setFlavour(value)}
/>
</View>
{/* Size */}
<View style={styles.size}>
<Text style={styles.text}>Size</Text>
<RadioButton.Group
onValueChange={value => setSize(value)}
value={size}>
<RadioButton.Item label="S" value="S" />
<RadioButton.Item label="L" value="L" />
<RadioButton.Item label="XL" value="XL" />
</RadioButton.Group>
</View>
{/* Price */}
<View style={styles.price}>
<Text style={styles.text}>Price</Text>
<TextInput
style={styles.input}
value={price}
onChangeText={value => setPrice(value)}
/>
</View>
{/* Save Button */}
<Button mode="contained" style={styles.button} onPress={submitHandler}>
Save
</Button>
</View>
</View>
);
};
export default NewPizza;


const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
innerContainer: {
width: '90%',
overflow: 'hidden',
},
flavour: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-around',
},
input: {
width: '70%',
},
text: {
fontSize: 18,
fontWeight: 'bold',
marginRight: 20,
},
size: {
width: '70%',
marginVertical: 20,
flexDirection: 'row',
marginLeft: 18,
},
price: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-around',
},
button: {
marginTop: 40,
width: '40%',
alignSelf: 'center',
marginBottom: 30,
padding: 10,
backgroundColor: '#68B984',
},
});