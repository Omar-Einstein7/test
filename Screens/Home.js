import { Text, View , TextInput,Button , Image,StyleSheet } from 'react-native'
import React ,{useState} from 'react'


const Home = ({navigation}) => {
    
  const [inputValue, setInputValue] = useState('');

  const goToScreen2 = () => {
    navigation.navigate('Details', { input: inputValue });
  };


  return (
    <View style={styles.container}>
      <Image 
      source={require('../assets/favicon.png')} style={styles.logo} />
    <TextInput
     style={styles.input}
      placeholder="Enter Your Name"
      value={inputValue}
      onChangeText={text => setInputValue(text)}
    />
    <Button title="Next" onPress={goToScreen2} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});


export default Home

