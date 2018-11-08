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
					headerStyle: {backgroundColor: '#512DA8', paddingLeft: 15},
					headerTintColor: '#fff',
					headerLeft:
						<Icon
							name='menu'
							size={24}
							color='white'
							onPress={() => navigation.toggleDrawer()}
						/>
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
					headerStyle: {backgroundColor: '#512DA8', paddingLeft: 15},
					headerTintColor: '#fff',
					headerLeft:
						<Icon
							name='menu'
							size={24}
							color='white'
							onPress={() => navigation.toggleDrawer()}
						/>
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
					headerStyle: {backgroundColor: '#512DA8', paddingLeft: 15},
					headerTintColor: '#fff',
					headerLeft:
						<Icon
							name='menu'
							size={24}
							color='white'
							onPress={() => navigation.toggleDrawer()}
						/>
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
					headerStyle: {backgroundColor: '#512DA8', paddingLeft: 15},
					headerTintColor: '#fff',
					headerLeft:
						<Icon
							name='menu'
							size={24}
							color='white'
							onPress={() => navigation.toggleDrawer()}
						/>,
				})
			}
		);


		const MainNavigator = createDrawerNavigator(
			{ // Manifest of possible screens
				Home: {
					screen: HomeNavigator,
					navigationOptions: {
						title: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({tintColor}) => (
							<Icon
								name='home'
								type='font-awesome'
								size={24}
								color={tintColor}
							/>
						)
					}
				},
				Menu: {
					screen: MenuNavigator,
					navigationOptions: {
						title: 'Menu',
						drawerLabel: 'Menu',
						drawerIcon: ({tintColor}) => (
							<Icon
								name='list'
								type='font-awesome'
								size={24}
								color={tintColor}
							/>
						)
					}
				},
				About: {
					screen: AboutNavigator,
					navigationOptions: {
						title: 'About Us',
						drawerLabel: 'About Us',
						drawerIcon: ({tintColor}) => (
							<Icon
								name='info'
								type='font-awesome'
								size={24}
								color={tintColor}
							/>
						)
					}
				},
				Contact: {
					screen: ContactNavigator,
					navigationOptions: {
						title: 'Contact Us',
						drawerLabel: 'Contact Us',
						drawerIcon: ({tintColor}) => (
							<Icon
								name='address-card'
								type='font-awesome'
								size={24}
								color={tintColor}
							/>
						)
					}
				}
			},
			{ // Default config for all screens
				initialRouteName: 'About',
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