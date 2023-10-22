import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.theworld}>The world’s Best Bike</Text>
      <View style= {styles.control}>
      <View style = {styles.vall}>
        <Text style = {styles.tall}>
          <center>All</center>
        </Text>
      </View>
      <View style = {styles.vRoadbike}>
        <Text style = {styles.tRoadbike}>
          <center>Roadbike</center>
        </Text>
      </View>
      <View style = {styles.vMountain}>
        <Text style = {styles.tMountain}>
          <center>Mountain</center>
        </Text>
      </View>
      </View>
      <View style = {styles.VT1}>
        <View style = {styles.Vbike1}>
          <Image style = {styles.img1}source={require('./bifour_-removebg-preview.png')}></Image>
          <Text><center style = {styles.tpina}>Pinarello<br></br>1800</center></Text>
          <Text style = {styles.t$}><center>$</center></Text>
          <Image style = {styles.imgtim1}source={require('./heart.png')}></Image>
        </View>
        <View style = {styles.Vbike2}>
          <Image style = {styles.img2}source={require('./bione-removebg-preview.png')}></Image>
          <Text style = {styles.tpina2}><center>Pina Mountain<br></br>1700</center></Text>
          <Text style = {styles.t$2}><center>$</center></Text>
          <Image style = {styles.imgtim2}source={require('./heart.png')}></Image>
        </View>
      </View>
      <View style = {styles.VT2}>
        <View style = {styles.Vbike3}>
          <Image style = {styles.img3}source={require('./bithree_removebg-preview.png')}></Image>
          <Text><center style = {styles.tpina3}>Pina Bike<br></br>1500</center></Text>
          <Text style = {styles.t$3}><center>$</center></Text>
          <Image style = {styles.imgtim3}source={require('./heart.png')}></Image>
        </View>
        <View style = {styles.Vbike4}>
          <Image style = {styles.img4}source={require('./bitwo-removebg-preview.png')}></Image>
          <Text style = {styles.tpina4}><center>Pinarello<br></br>1900</center></Text>
          <Text style = {styles.t$4}><center>$</center></Text>
          <Image style = {styles.imgtim4}source={require('./heart.png')}></Image>
        </View>
      </View>
      <View style = {styles.VT3}>
        <View style = {styles.Vbike5}>
          <Image style = {styles.img5}source={require('./bithree_removebg-preview.png')}></Image>
          <Text><center style = {styles.tpina5}>Pinarello<br></br>2700</center></Text>
          <Text style = {styles.t$5}><center>$</center></Text>
          <Image style = {styles.imgtim5}source={require('./heart.png')}></Image>
        </View>
        <View style = {styles.Vbike6}>
          <Image style = {styles.img6}source={require('./bione-removebg-preview.png')}></Image>
          <Text style = {styles.tpina6}><center>Pinarello<br></br>1350</center></Text>
          <Text style = {styles.t$6}><center>$</center></Text>
          <Image style = {styles.imgtim6}source={require('./heart.png')}></Image>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
    height: 812,
  },
  theworld: {
    color: '#E94141',
    fontSize: 25,
    bottom: 60,
    right: 55,
    fontWeight: 'bold',
  },
  control:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 45
  },
  vall:{
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#E9414187',
    width: 99,
    height: 32,

  },
  tall:{
    color: '#E94141',
    marginVertical: 5,
  },  
  vRoadbike:{
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#E9414187',
    width: 99,
    height: 32,
    marginHorizontal: 25,
  },
  tRoadbike:{
    color: '#E94141',
    marginVertical: 5,
  }, 
  vMountain:{
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#E9414187',
    width: 99,
    height: 32,
  },
  tMountain:{
    color: '#E94141',
    marginVertical: 5,
  }, 
  VT1:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  Vbike1:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
  },
  img1:{
    top: 10,
    width: 135,
    height: 127,
    marginHorizontal: 15
  },
  tpina:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$:{
    color: '#F7BA83',
    right: 30,  
    bottom: 27,
    fontSize: 20
  },
  imgtim1:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
  Vbike2:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
    marginHorizontal:15,
  },
  img2:{
    top: 10,
    width: 125,
    height: 127,
    marginHorizontal: 15
  },
  tpina2:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$2:{
    color: '#F7BA83',
    right: 30,  
    bottom: 17,
    fontSize: 20
  },
  imgtim2:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
  VT2:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 15,
    top: 1,
  },
  Vbike3:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 15
  },
  img3:{
    top: 10,
    width: 135,
    height: 127,
    marginHorizontal: 15,
  },
  tpina3:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$3:{
    color: '#F7BA83',
    right: 30,  
    bottom: 27,
    fontSize: 20
  },
  imgtim3:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
  Vbike4:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
  },
  img4:{
    top: 10,
    width: 145,
    height: 127,
    marginHorizontal: 15
  },
  tpina4:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$4:{
    color: '#F7BA83',
    right: 30,  
    bottom: 17,
    fontSize: 20
  },
  imgtim4:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
  VT3:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
  },
  Vbike5:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
  },
  img5:{
    top: 10,
    width: 135,
    height: 127,
    marginHorizontal: 15
  },
  tpina5:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$5:{
    color: '#F7BA83',
    right: 30,  
    bottom: 27,
    fontSize: 20
  },
  imgtim5:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
  Vbike6:{
    backgroundColor: '#F7BA8326',
    width: 167,
    height: 200,
    borderRadius: 10,
    marginHorizontal:15,
  },
  img6:{
    top: 10,
    width: 125,
    height: 127,
    marginHorizontal: 15
  },
  tpina6:{
    color: '#00000099',
    fontSize: 20,
    top: 10,
  },
  t$6:{
    color: '#F7BA83',
    right: 30,  
    bottom: 17,
    fontSize: 20
  },
  imgtim6:{
    width: 25,
    height: 25,
    bottom: 200,
    left:5,
  },
});
