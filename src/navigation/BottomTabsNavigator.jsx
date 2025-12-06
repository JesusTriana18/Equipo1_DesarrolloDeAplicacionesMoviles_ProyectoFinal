import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Importamos los iconos

import AboutScreen from '../screens/AboutScreen';
import StackNavigator from './StackNavigator';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{

                tabBarActiveTintColor: '#3b82f6',
                tabBarInactiveTintColor: 'gray',
                headerShown: false, 
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />

            <Tab.Screen 
                name='Search' 
                component={StackNavigator} 
                options={{
                    title: 'Búsqueda',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome 
                            name="search" 
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />
            
            <Tab.Screen 
                name='About' 
                component={AboutScreen} 
                options={{
                    title: 'Acerca de',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            name="information-circle-outline" 
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator