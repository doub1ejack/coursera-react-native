import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES
		}
	}

	static navigationOptions = { title: 'Dish Details' }

	render() {
		const dishId = this.props.navigation.getParam('dishId', '');

		function RenderDish(props) {
			const dish = props.dish;

			if(dish != null) {
				return(
					<Card
						featuredTitle={dish.name}
						containerStyle={{borderWidth: 1, borderColor: '#512DA8'}}
						image={ require('./images/uthappizza.png') }
						>
						<Text style={{margin:10}}>{dish.description}</Text>
					</Card>
				);
			}
			else {
				return(
					<View></View>
				);
			}
		}

		return( <RenderDish dish={this.state.dishes[ +dishId ]} /> );
	}
}

export default DishDetail;