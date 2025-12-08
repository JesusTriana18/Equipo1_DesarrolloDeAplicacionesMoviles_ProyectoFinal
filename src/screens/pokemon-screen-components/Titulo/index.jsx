import { StyleSheet, Text, View } from 'react-native';

const Titulo = ({ texto }) => (
  <View>
    <Text style={styles.title}>{ texto }</Text>
  </View>
);

export default Titulo;

const styles = StyleSheet.create({
  
});
