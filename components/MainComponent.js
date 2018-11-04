import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

class Main extends Component {

	render() {

		const MenuNavigator = createStackNavigator(
			{ // Manifest of possible screens
				Menu: {screen: Menu},
				DishDetail: {screen: DishDetail}
			},
			{ // Default config for all screens
				initialRouteName: 'Menu',
				navigationOptions: {
					headerStyle: {backgroundColor: '#512DA8'},
					headerTintColor: '#fff',
				}
			}
		);

		const HomeNavigator = createStackNavigator(
			{ // Manifest of possible screens
				Home: {screen: Home}
			},
			{ // Default config for all screens
				initialRouteName: 'Home',
				navigationOptions: ({ navigation }) => ({
					headerStyle: {backgroundColor: '#512DA8'},
					headerTintColor: '#fff',
				})
			}
		);


		const MainNavigator = createDrawerNavigator(
			{ // Manifest of possible screens
				Home: {
					screen: HomeNavigator,
					navigationOptions: {
						title: 'Home',
						drawerLabel: 'Home'
					}
				},
				Menu: {
					screen: MenuNavigator,
					navigationOptions: {
						title: 'Menu',
						drawerLabel: 'Menu'
					}
				}
			},
			{ // Default config for all screens
				drawerBackgroundColor: '#D1C4E9' // light purple
			}
		);

		return (
			<View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
				<MainNavigator/>
			</View>
		);
	}
}

export default Main;