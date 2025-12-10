import { useContext } from 'react';
import { EstadosContext } from '../../../contextos';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Filtros = () => {
  const {
    estadoPokemonConsultados: [, setPokemonConsultados],
    estadoBusqueda: [, setBusqueda],
  } = useContext(EstadosContext);

  const invertirPokemonConsultados = () => {
    setPokemonConsultados((ps) => ps.toReversed());
  };

  const limpiarFiltro = () => setBusqueda('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={invertirPokemonConsultados}>
        <FontAwesome name="exchange" size={16} color="#333" style={styles.icon} />
        <Text style={styles.buttonText}>Invertir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={limpiarFiltro}>
        <FontAwesome name="times-circle" size={16} color="#333" style={styles.icon} />
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filtros;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: '100%',
    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    marginRight: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
 
});