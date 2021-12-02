import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from '../screen/qr/Scanner';
import Networkin from '../screen/qr/Networkin';

export default function Navigation() {
	return (
		<NavigationContainer>
			<NavigationStack />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function NavigationStack() {
	return(
		<Stack.Navigator>
			<Stack.Screen name="networkin" component={ Networkin } />
			<Stack.Screen name="scanner" component={ Scanner } />
		</Stack.Navigator>
	);
}