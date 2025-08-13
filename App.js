import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const App = () => {

  return(
      <View style = {styles.content}>
        <Text>
          Hello World!
        </Text>
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