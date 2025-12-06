import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from '../components/Separator';
import Link from '../components/Link';

const AboutScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokémon API</Text>
      <Separator marginVertical={10} />
      <Text style={styles.text}>
        La PokéAPI es una API pública que proporciona información detallada sobre los videojuegos de Pokémon, incluyendo especies, movimientos, habilidades, objetos y estadísticas. Sus datos están disponibles en formato JSON, lo que facilita su uso en aplicaciones web, móviles y proyectos educativos.
      </Text>
      <Separator marginVertical={10} />
      <Text style={styles.text}>
        Es gratuita, de acceso inmediato y cuenta con documentación clara, lo que la convierte en una herramienta útil para desarrolladores y fans de Pokémon que quieran explorar o integrar información del universo Pokémon.
      </Text>
      <Separator marginVertical={10} />
      <Link text="Enlace de la API" url="https://pokeapi.co/" />

      <Image
        source={require('../assets/pokeball-3d.png')}
        style={styles.image}
      />
    </SafeAreaView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
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
  },
  image: {
    width: 600,      // Ancho
    height: 250,     // Alto
    alignSelf: 'center', // Centrarla horizontalmente
    marginTop: 20,
    resizeMode: 'contain' // Mantiene la proporción para que no se deforme
  },
})