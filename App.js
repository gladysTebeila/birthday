import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


const image = { uri: "./images/pic.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.card}>Birthday Card</Text>
      <Image 
      style={styles.img}
      source={require('./images/pic.jpg')}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.body}>
        <Text>
          HAPPY Birthday
          Never forget age means nothing withiout the minds
          
          </Text>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor:'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },image: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -200,
    marginLeft: '15%',
    marginRight: '15%',
  },
  img: {
    marginTop: 100,
    height: 200,
    width: 200,
  }
});

