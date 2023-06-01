import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Stats } from '../screens/Stats'
import { CreateMeal } from '../screens/CreateMeal'

const { Navigator, Screen, } = createNativeStackNavigator()

export function StackRoutes () {

  return (
    <Navigator
      initialRouteName={'home'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='stats'
        component={Stats}
      />
      <Screen
        name='createmeal'
        component={CreateMeal}
      />
    </Navigator>
  )
}