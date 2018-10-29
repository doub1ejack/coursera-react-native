import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

	const renderMenuItem = ({item, index}) => {
		return(
			<ListItem 
				key={index}
				title={item.title}
				subtitle={item.description}
				hideChevron={true}
				leftAvatar={{ source: require('./images/uthappizza.png')}}
				onPress={() => props.onPress(item.id)}
				/>
		);
	}
	return(
		<FlatList 
			data={props.dishes} 
			renderItem={renderMenuItem}
			keyExtractor={item => item.id.toString()}
			/>
	);
}

export default Menu;