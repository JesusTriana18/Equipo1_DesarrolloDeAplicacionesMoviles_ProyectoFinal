import { useContext, useState } from 'react';
import { EstadosContext } from '../../../contextos';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const BarraDeBusqueda = () => {
  const [ entrada, setEntrada ] = useState('');
  const {
    estadoBusqueda : [ , setBusqueda ]
  } = useContext(EstadosContext);

  const actualizarEntrada = v => {
    setEntrada(v);
  };

  const establecerBusqueda = () => {
    setBusqueda(entrada);
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder='Nombre de Pokémon'
          onChangeText={ actualizarEntrada }
        />
        <TouchableOpacity
          onPress={ establecerBusqueda }
        >
          <Image
            source={ require('./search.png') }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BarraDeBusqueda;

const styles = StyleSheet.create({
  
});
