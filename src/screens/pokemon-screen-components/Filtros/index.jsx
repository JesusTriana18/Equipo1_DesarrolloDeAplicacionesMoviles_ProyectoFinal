import { useContext } from 'react';
import { EstadosContext } from '../../../contextos';
import { StyleSheet } from 'react-native';

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
    <div>
      <button
        type='button'
        onClick={ invertirPokemonConsultados }
      >
        Invertir
      </button>
      <button
        type='button'
        onClick={ limpiarFiltro }
      >
        Limpiar filtro
      </button>
    </div>
  );
};

export default Filtros;

const styles = StyleSheet.create({
  
});
