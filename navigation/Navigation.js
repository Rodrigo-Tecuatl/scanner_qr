import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Scanner from '../screen/qr/Scanner';
import Networkin from '../screen/qr/Networkin';

export default function Navigation() {
	return (
		<NavigationContainer>
			<NavigationStack />
      {/* <NavigationTopTabs /> */}
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function NavigationStack() {
	return(
		<Stack.Navigator>
			<Stack.Screen name="stackQr" component={ NavigationTopTabs } />
			{/* <Stack.Screen name="StackScanner" component={ Scanner } /> */}
		</Stack.Navigator>
	);
}

const TopTab = createMaterialTopTabNavigator();

function NavigationTopTabs() {
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="topNetworkin" component={ Networkin } />
      <TopTab.Screen name="topScanner" component={ Scanner } />
    </TopTab.Navigator>
  );
}