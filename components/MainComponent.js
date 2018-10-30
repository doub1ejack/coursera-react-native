import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { createStackNavigator } from 'react-navigation';

class Main extends Component {

	render() {

		const MenuNavigator = createStackNavigator(
			{
				Menu: { screen: Menu },
				DishDetail: { screen: DishDetail }
			},
			{
				initialRouteName: 'Menu',
				navigationOptions: {
					headerStyle: { backgroundColor: '#512DA8' },
					headerTintColor: '#fff',
				}
			}
		)

		return (
			<View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
				<MenuNavigator />
			</View>
		);
	}
}

export default Main;