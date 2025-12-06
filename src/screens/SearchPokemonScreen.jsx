import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// Contextos
import { EstadosContext } from '../contextos';

// Componentes
import BarraDeBusqueda from './pokemon-screen-components/BarraDeBusqueda';
import Filtros from './pokemon-screen-components/Filtros';
import Tarjetas from './pokemon-screen-components/Tarjetas';
import Titulo from './pokemon-screen-components/Titulo';

const SearchPokemonScreen = ({ navigation }) => {
  const [ pokemonConsultados, setPokemonConsultados ] = useState(undefined);
  const [ busqueda, setBusqueda ] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <Titulo texto='Pokédex'/>
        <EstadosContext.Provider
          value={ {
            estadoPokemonConsultados : [ pokemonConsultados, setPokemonConsultados ],
            estadoBusqueda : [ busqueda, setBusqueda ]
          } }
        >
          <BarraDeBusqueda/>
          <Filtros/>
          <Tarjetas/>
        </EstadosContext.Provider>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchPokemonScreen

const styles = StyleSheet.create({})