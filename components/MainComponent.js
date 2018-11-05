import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {Card, Icon} from 'react-native-elements';

class Main extends Component {

	render() {

		const MenuNavigator = createStackNavigator(
			{ // Manifest of possible stack-nav screens
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
			{ // Manifest of possible stack-nav screens
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

		const AboutNavigator = createStackNavigator(
			{ // Manifest of possible stack-nav screens
				About: {screen: About}
			},
			{ // Default config for all screens
				initialRouteName: 'About',
				navigationOptions: ({ navigation }) => ({
					headerStyle: {backgroundColor: '#512DA8'},
					headerTintColor: '#fff',
				})
			}
		);

		const ContactNavigator = createStackNavigator(
			{ // Manifest of possible stack-nav screens
				Contact: {screen: Contact}
			},
			{ // Default config for all screens
				initialRouteName: 'Contact',
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
				},
				Contact: {
					screen: ContactNavigator,
					navigatorOptions: {
						title: 'Contact',
						drawerLabel: 'Contact',
					}
				},
				About: {
					screen: AboutNavigator,
					navigatorOptions: {
						title: 'About Us',
						drawerLabel: 'About Us',
					}
				}
			},
			{ // Default config for all screens
				initialRouteName: 'Contact',
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