import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from '../components/general/Separator';

const DetailsPokemonScreen = ({ route }) => {
  const { pokemon } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={18} color="#333" style={styles.icon} />
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
      
      <Separator marginVertical={20} />

      <View style={styles.card}>
        <Text style={styles.title}>{pokemon.nombre.toUpperCase()} # {pokemon.numero}</Text>
        <Image style={styles.sprite} source={{ uri: pokemon.sprite }} />
        <Text style={styles.text}>Peso: <Text style={styles.span}>{pokemon.peso / 10} Kg</Text></Text>
        <Text style={styles.text}>Tipo: <Text style={styles.span}>{pokemon.tipos
          .map(t => t.charAt(0).toUpperCase() + t.slice(1))
          .join(', ')
        }</Text></Text>
        <Text style={styles.subtitle}>Habilidades:</Text>
        <View style={styles.abilitiesContainer}>
          {pokemon.habilidades.map((hab, idx) => {
            const habilidadCapitalizada =
              hab.charAt(0).toUpperCase() + hab.slice(1);
            return (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{habilidadCapitalizada}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsPokemonScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,

    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  sprite: {
    width: 250,
    height: 150,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight: 'bold'
  },
  subtitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  abilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  chip: {
    backgroundColor: '#e8e8e8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500'
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  icon: {
    marginRight: 8
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600'
  },
  span: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
    fontWeight: '500',
  },
});