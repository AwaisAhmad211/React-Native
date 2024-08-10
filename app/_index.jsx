import { useState } from 'react';
import {StyleSheet, Text, View , ScrollView} from 'react-native';
import { Button } from 'react-native-web';


let [name,setName] = useState("Usman")
export default function Index() {
  function fun(){
    setName("Awais")
  }
  return (
        <View >
          <Text>{name}</Text>
          <Button title="Press ME" onPress={fun}/>
        </View>
  );
}