import { Image, StyleSheet, View, Text } from 'react-native';

const Tarjeta = ({ pokemon: { nombre, numero, peso, tipos, habilidades, sprite } }) => {
  return (
    <View>
      <View>
        <Text>{ `${ nombre.toUpperCase() } - #${ numero }` }</Text>
      </View>
      <View>
        <Text>
          <Text>Peso: </Text>
          { `${ peso / 10 } kg` }
        </Text>
        <Text>
          <Text>Tipos: </Text>
          { tipos.join(', ') }
        </Text>
        <Text>
          <Text>Habilidades:</Text>
        </Text>
        <View>
          {
            habilidades.map((h, i) => (
              <Text key={ i }>
                { h }
              </Text>
            ))
          }
        </View>
      </View>
      <View>
        <Image
          style={ styles.sprite }
          source={ { uri: sprite } }
        />
      </View>
    </View>
  );
};

export default Tarjeta;

const styles = StyleSheet.create({
  sprite: { height: 75, width: 75 }
});
