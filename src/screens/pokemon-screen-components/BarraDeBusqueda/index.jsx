import { useContext, useState } from 'react';
import { EstadosContext } from '../../../contextos';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BarraDeBusqueda = () => {
  const [entrada, setEntrada] = useState('');
  const {
    estadoBusqueda: [, setBusqueda]
  } = useContext(EstadosContext);

  const actualizarEntrada = v => {
    setEntrada(v);
  };

  const establecerBusqueda = () => {
    setBusqueda(entrada);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Nombre de Pokémon'
        onChangeText={actualizarEntrada}
      />
      <TouchableOpacity
      style={styles.btn}
        onPress={establecerBusqueda}
      >
        <FontAwesome
          name="search"
          color={'#000'}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BarraDeBusqueda;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  btn: {
    paddingHorizontal: 10
  }
});
