import { useContext, useState } from 'react';
import { EstadosContext } from '../../../contextos';
import { StyleSheet } from 'react-native';
import iconoBoton from './search.png';

const BarraDeBusqueda = () => {
  const [ entrada, setEntrada ] = useState('');
  const {
    estadoBusqueda : [ , setBusqueda ]
  } = useContext(EstadosContext);

  const actualizarEntrada = e => {
    setEntrada(e.target.value);
  };

  const establecerBusqueda = () => {
    setBusqueda(entrada);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Nombre de Pokémon'
          onChange={ actualizarEntrada }
        />
        <button
          type='button'
          onClick={ establecerBusqueda }
        >
          <img src={ iconoBoton } alt='Buscar'/>
        </button>
      </div>
    </div>
  );
};

export default BarraDeBusqueda;

const styles = StyleSheet.create({
  
});
