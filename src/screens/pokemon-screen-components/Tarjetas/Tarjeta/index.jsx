import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tarjeta = ({ pokemon }) => {
  const { nombre, numero, tipos, sprite, habilidades } = pokemon;
  const navigation = useNavigation();

  const irADetalles = () => {
    navigation.navigate('Details Pokemon', {
      pokemon,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${nombre.toUpperCase()} - #${numero}`}</Text>
      <Text style={styles.text}>
        Tipo: <Text style={styles.span}>
          {tipos
            .map(t => t.charAt(0).toUpperCase() + t.slice(1))
            .join(', ')
          }
        </Text>
      </Text>

      <Image
        style={styles.sprite}
        source={{ uri: sprite }}
      />

      <TouchableOpacity style={styles.button} onPress={irADetalles}>
        <FontAwesome
          name="info-circle"
          size={16}
          color="#333"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tarjeta;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  sprite: {
    height: 100,
    width: 120,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  span: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
    fontWeight: '500',
  },
  button: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignSelf: 'stretch',
  },
  icon: {
    marginRight: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});