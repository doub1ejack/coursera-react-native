import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, Text} from "react-native";

class About extends Component {

	static navigationOptions = {
		title: 'About Us'
	};

	render() {
		return(
			<View>
				<Card
					title={'Our History'}
					containerStyle={{borderWidth: 1, borderColor: '#512DA8'}}
				>
					<Text style={{marginBottom: 10}}>
						Started in 2010, Ristorante con Fusion quickly established
						itself as a culinary icon par excellence in Hong Kong. With
						its unique brand of world fusion cuisine that can be found
						nowhere else, it enjoys patronage from the A-list clientele
						in Hong Kong.  Featuring four of the best three-star Michelin
						chefs in the world, you never know what will arrive on your
						plate the next time you visit us.
					</Text>
					<Text>
						The restaurant traces its humble beginnings to The Frying Pan,
						a successful chain started by our CEO, Mr. Peter Pan, that
						featured for the first time the world's best cuisines in a pan.
					</Text>
				</Card>
			</View>
		);
	}
}

export default About;