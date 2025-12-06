import { StyleSheet } from 'react-native';

const Tarjeta = ({ pokemon: { nombre, numero, peso, tipos, habilidades, sprite } }) => {
  return (
    <div>
      <div>
        <strong>{ `${ nombre.toUpperCase() } - #${ numero }` }</strong>
      </div>
      <div>
        <p>
          <strong>Peso: </strong>
          { `${ peso / 10 } kg` }
        </p>
        <p>
          <strong>Tipos: </strong>
          { tipos.join(', ') }
        </p>
        <p>
          <strong>Habilidades:</strong>
        </p>
        <ul>
          {
            habilidades.map((h, i) => (
              <li key={ i }>
                { h }
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <img src={ sprite } alt={ `Sprite ${ nombre }` }/>
      </div>
    </div>
  );
};

export default Tarjeta;

const styles = StyleSheet.create({
  
});
