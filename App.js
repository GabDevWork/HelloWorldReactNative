import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const App = () => {

  return(
      <View style = {styles.content}>
        <Text>
          Hello World!
        </Text>
        <Image source = {require('./src/img/cachorro.jpg')}/>
      </View>
  );
}



const styles = StyleSheet.create({
    content: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue', 
      marginBlock: 'auto'
    }
  });


export default App;