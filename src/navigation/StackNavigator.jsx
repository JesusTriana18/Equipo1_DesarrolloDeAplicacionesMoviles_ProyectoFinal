import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchPokemonScreen from '../screens/SearchPokemonScreen';
import DetailsPokemonScreen from '../screens/DetailsPokemonScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Search Pokemon" component={SearchPokemonScreen} />
            <Stack.Screen name="Details Pokemon" component={DetailsPokemonScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

