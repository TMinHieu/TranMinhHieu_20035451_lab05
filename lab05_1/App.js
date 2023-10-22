import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.Vtext}>
        <Text style = {styles.text1}>
          <center>A premium online store for<br></br> sporter and their stylish choice</center>
       </Text>
      </View>
      <View style = {styles.V1}>
        <Image style = {styles.img1}source={require('./bifour_-removebg-preview.png')}></Image>
      </View>
      <Text style = {styles.tpower}>
        <center>POWER BIKE <br></br>SHOP</center>
      </Text>
      <View style={ styles.Vred}>
        <Text style = {styles.Tred}>
          <center>Get Started</center>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Vtext:{
    width: 359,
    height: 87,
    marginBottom: 50
  },
  text1:{
    fontSize: '24px',
    fontWeight: 'bold',
  },
  V1:{
    backgroundColor: '#E941411A',
    width: 359,
    height: 388,
    bottom: 50,
    borderRadius: 50,

  },
  img1:{
    width: 292,
    height: 270,
    marginHorizontal: 35,
    marginVertical: 60
  },
  tpower:{
    fontSize: 26,
    fontWeight: 'bold',
    bottom: 50,
  },
  Vred:{
    backgroundColor: '#E94141',
    borderRadius: 30,
    width: 340,
    height: 61,
  },
  Tred:{
    color: '#FEFEFE',
    fontSize: 27,
    marginVertical: 8,
  },

});
