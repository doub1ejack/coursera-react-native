import React, { Component } from 'react';
import {Card, ListItem} from 'react-native-elements';
import {View, Text, FlatList} from "react-native";
import {LEADERS} from "../shared/leaders";

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			leaders: LEADERS
		}
	}

	static navigationOptions = {
		title: 'About Us'
	};

	render() {

		console.log('all leaders: ' + JSON.stringify(this.state.leaders) );

		const renderLeader = ({leader, index}) => {

			console.log('leader: ' + leader);
			console.log('index: ' + index);

			return(
				<ListItem
					key={index}
					title='[LEADER TITLE]'//{leader.name}
					titleStyle={{fontWeight: 'bold', color: '#512DA8'}}
					subtitle='person'
					hideChevron={true}
					leftAvatar={{ source: require('./images/alberto.png')}}
				/>
			);
		}

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


				<Card
					title={'Corporate Leadership'}
					containerStyle={{borderWidth: 1, borderColor: '#512DA8'}}
				>
					<FlatList
						data={this.state.leaders}
						renderItem={renderLeader}
						keyExtractor={leader => leader.id.toString()}
					/>
				</Card>
			</View>
		);
	}
}

export default About;