import { Image, StyleSheet, View, Text } from 'react-native';

const Tarjeta = ({ pokemon: { nombre, numero, peso, tipos, habilidades, sprite } }) => {
  return (
    <View style={styles.container}>
      <Text>{`${nombre.toUpperCase()} - #${numero}`}</Text>
      <Text>Peso: {`${peso / 10} kg`} </Text>
      <Text>Tipos: {tipos.join(', ')}</Text>
      <Text>Habilidades:</Text>
      {
        habilidades.map((h, i) => (
          <Text key={i}>
            {h}
          </Text>
        ))
      }
      <Image
        style={styles.sprite}
        source={{ uri: sprite }}
      />
    </View>
  );
};

export default Tarjeta;

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
  marginVertical: 10,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flex: 1
},
  sprite: { height: 75, width: 75 }
});
