import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from '../components/Separator';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Separator marginVertical={10} />
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
      />
        <Separator marginVertical={10} />
      <Text style={styles.title}>Desarrollo de Aplicaciones Móviles</Text>
      <Separator marginVertical={5} />
      <Text style={styles.title}>Equipo #1</Text>
      <Separator marginVertical={10} />
      <Text style={styles.text}>- Contreras Basurto Alexis Alberto - C20212391</Text>
       <Separator marginVertical={5} />
      <Text style={styles.text}>- Triana Corvera Jesus Antonio - C20212681</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 600,
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'contain'
  },
})