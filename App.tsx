import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppProps {

}

const App: React.SFC<AppProps> = () => {

  let [test, setTest] = useState();
  
  useEffect(()=>{
    setTest(39)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Mooko Media Offer Wall App</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28a745',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headertext: {
    fontSize: 30,
    marginTop: 300
  }
});
