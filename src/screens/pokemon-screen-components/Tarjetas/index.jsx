import { useContext, useEffect } from 'react';
import Switch from 'switch-expr-vanilla';
import { EstadosContext } from '../../../contextos';
import Tarjeta from './Tarjeta';
import { StyleSheet } from 'react-native';

const resumirPokemon = pokemon => ({
  nombre: pokemon.name,
  numero: pokemon.id,
  peso: pokemon.weight,
  tipos: pokemon.types.map(t => t.type.name),
  habilidades: pokemon.abilities.map(a => a.ability.name),
  sprite: pokemon.sprites.front_default
});

const consultarPokemonPorNombre = async (nombre) => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ nombre }`)
      .then(res => res.json());

    return resumirPokemon(pokemon);
  }
  catch (e) {
    return null;
  }
};

const consultarPokemon = async () => {
    const { results: resultadoNombres } = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=151")
      .then(res => res.json());

    const nombres = resultadoNombres.map(o => o.name);

    const pokemons = await Promise.all(nombres.map(consultarPokemonPorNombre));

    return pokemons;
};

const Tarjetas = () => {
  const {
    estadoPokemonConsultados : [ pokemonConsultados, setPokemonConsultados ],
    estadoBusqueda : [ busqueda ]
  } = useContext(EstadosContext);

  useEffect(() => {
    const establecerPokemonConsultados = async () => {
      if (busqueda === '') {
        const listaDePokemon = await consultarPokemon();

        setPokemonConsultados(listaDePokemon);
      }
      else {
        // Puede ser null
        const pokemonEncontrado = await consultarPokemonPorNombre(busqueda);

        setPokemonConsultados(pokemonEncontrado ? [ pokemonEncontrado ] : []);
      }
    };

    establecerPokemonConsultados();
  }, [ busqueda ]);

  return (
    <div>
      {
        Switch(pokemonConsultados)
        .Case(ps => ps === undefined, <h1>Cargando Pokémon...</h1>)
        .Case(ps => ps.length === 0, <h1>No se encontró el Pokémon</h1>)
        .Default(ps => ps.map(p => <Tarjeta key={ p.numero } pokemon={ p }/>))
      }
    </div>
  );
};

export default Tarjetas;

const styles = StyleSheet.create({
  
});
