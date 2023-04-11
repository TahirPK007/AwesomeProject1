import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Flatlist = () => {
  //   const [pros, setpros] = useState([
  //     {data: [1, 1, 1, 1], isSelected: false},
  //     {data: [1, 1, 1, 1], isSelected: false},
  //   ]);
  //   const select = index => {
  //     let tempdata = pros;
  //     tempdata.map((item, ind) => {
  //       if (index == ind) {
  //         item.isSelected = !item.isSelected;
  //       } else {
  //         item.isSelected = false;
  //       }
  //     });
  //     let temp = [];
  //     tempdata.map(item => {
  //       temp.push(item);
  //     });
  //     setpros(temp);
  //   };
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  //   useEffect(() => {
  //     getproducts();
  //   }, []);

  const getproducts = () => {
    setloading(true);
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setloading(false);
        setproducts(json);
      });
  };
  return (
    <View style={{flex: 1}}>
      <Text>Flatlist</Text>
      <RefreshControl
        style={{flex: 1}}
        refreshing={loading}
        onRefresh={() => {
          getproducts();
        }}>
        <View>
          <FlatList
            data={products}
            //to show the data horizontally
            // horizontal
            //   showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: 'white',
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: 100,
                      height: 100,

                      resizeMode: 'center',
                    }}
                  />
                  <View style={{paddingLeft: 20}}>
                    <Text>{item.title}</Text>
                    <Text>
                      {item.description.length > 30
                        ? item.description.substring(0, 40) + '...'
                        : item.description}
                    </Text>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </RefreshControl>
      {/* nested flatlist and expanded flatlist */}
      {/* <View>
        <FlatList
          data={pros}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <Text>{'item' + (index + 1)}</Text>
                {item.isSelected && (
                  <FlatList
                    data={item.data}
                    renderItem={({item, index}) => {
                      return (
                        <View>
                          <Text>{'sub item' + (index + 1)}</Text>
                        </View>
                      );
                    }}
                  />
                )}
                {item.isSelected ? (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 20,
                      backgroundColor: 'orange',
                      width: 40,
                      height: 20,
                    }}
                    onPress={() => {
                      select(index);
                    }}>
                    <Text>Up</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 20,
                      backgroundColor: 'orange',
                      width: 40,
                      height: 20,
                    }}
                    onPress={() => {
                      select(index);
                    }}>
                    <Text>down</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View> */}
    </View>
  );
};

export default Flatlist;
