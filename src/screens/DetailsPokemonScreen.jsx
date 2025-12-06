import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsPokemonScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Button
        title='Atrás'
        onPress={ () => navigation.goBack() }
      />
      <Text>DetailsPokemonScreen</Text>
    </SafeAreaView>
  )
}

export default DetailsPokemonScreen

const styles = StyleSheet.create({})