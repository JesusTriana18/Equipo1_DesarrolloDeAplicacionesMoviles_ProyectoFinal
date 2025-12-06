import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchPokemonScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>SearchPokemonScreen</Text>
      <Button
        title='Ir'
        onPress={ () => navigation.navigate('Details Pokemon') }
      />
    </SafeAreaView>
  )
}

export default SearchPokemonScreen

const styles = StyleSheet.create({})