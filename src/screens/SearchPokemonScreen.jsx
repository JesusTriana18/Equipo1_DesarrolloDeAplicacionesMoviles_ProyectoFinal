import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// Contextos
import { EstadosContext } from '../contextos';

// Componentes
import BarraDeBusqueda from './pokemon-screen-components/BarraDeBusqueda';
import Filtros from './pokemon-screen-components/Filtros';
import Tarjetas from './pokemon-screen-components/Tarjetas';
import Separator from '../components/general/Separator';

const SearchPokemonScreen = ({ navigation }) => {
  const [pokemonConsultados, setPokemonConsultados] = useState(undefined);
  const [busqueda, setBusqueda] = useState('');

  return (
    <SafeAreaView>
      <Text style={styles.title}>Pokedex</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Separator marginVertical={10} />
        <EstadosContext.Provider
          value={{
            estadoPokemonConsultados: [pokemonConsultados, setPokemonConsultados],
            estadoBusqueda: [busqueda, setBusqueda]
          }}
        >
          <BarraDeBusqueda />
          <Separator marginVertical={6} />
          <Filtros />
             <Separator marginVertical={12} />
          <Tarjetas />
        </EstadosContext.Provider>
        <Separator marginVertical={20}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchPokemonScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
})