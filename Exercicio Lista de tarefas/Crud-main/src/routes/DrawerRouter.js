import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lista_Tarefas from '../screens/tarefas/Tarefas';

const Drawer = createDrawerNavigator()

export default function DrawerRouter() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Atividade">
            <Drawer.Screen name='Atividade' component={Lista_Tarefas}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})