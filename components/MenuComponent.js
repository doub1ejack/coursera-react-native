import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES
		}
	}

	static navigationOptions = { title: 'Menu' };

	render() {

		// extract this for use with onPress below 
		const { navigate } = this.props.navigation;

		const renderMenuItem = ({item, index}) => {
			return(
				<ListItem 
					key={index}
					title={item.name}
					titleStyle={{fontWeight: 'bold', color: '#512DA8'}}
					subtitle={item.description}
					hideChevron={true}
					leftAvatar={{ source: require('./images/uthappizza.png')}}
					onPress={() => navigate('DishDetail', { dishId: item.id }) }
					/>
			);
		}

		return(
			<FlatList 
				data={this.state.dishes} 
				renderItem={renderMenuItem}
				keyExtractor={item => item.id.toString()}
				/>
		);
	}
}

export default Menu;