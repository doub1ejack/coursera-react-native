import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, Text} from "react-native";

class Contact extends Component {

	static navigationOptions = {
		title: 'Contact Us'
	};

	render() {
		return(
			<View>
				<Card
					title={'Our Address'}
					containerStyle={{borderWidth: 1, borderColor: '#512DA8'}}
				>
					<Text style={{marginBottom: 10}}>
						121, Clear Water Bay Road{'\n'}
						Clear Water Bay, Kowloon{'\n'}
						HONG KONG
					</Text>
					<Text style={{marginBottom: 10}}>
						Tel: +852 1234 5678{'\n'}
						Fax: +852 8765 4321
					</Text>
					<Text style={{marginBottom: 10}}>
						Email:confusion@food.net
					</Text>
				</Card>
			</View>
		);
	}
}

export default Contact;