import { useContext } from 'react';
import { EstadosContext } from '../../../contextos';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Filtros = () => {
  const {
    estadoPokemonConsultados : [ , setPokemonConsultados ],
    estadoBusqueda : [ , setBusqueda ]
  } = useContext(EstadosContext);

  const invertirPokemonConsultados = () => {
    setPokemonConsultados(ps => ps.toReversed());
  };

  const limpiarFiltro = () => setBusqueda('');

  return (
    <View>
      <TouchableOpacity
        onPress={ invertirPokemonConsultados }
      >
        <Text>Invertir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={ limpiarFiltro }
      >
        <Text>Limpiar filtro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filtros;

const styles = StyleSheet.create({
  
});
