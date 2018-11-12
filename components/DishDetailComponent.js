import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import moment from 'moment';

class DishDetail extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS
		}
	}

	static navigationOptions = { title: 'Dish Details' }

	render() {
		const dishId = this.props.navigation.getParam('dishId', '');

		function RenderComments(props){
			const comments = props.comments;
			const renderCommentItem = ({item, index}) =>  {
				return(
					<View key={index} style={{margin:10}}>
						<Text style={{fontSize: 14}}>{item.comment}</Text>
						<Text style={{fontSize: 12}}>{item.rating} stars</Text>
						<Text style={{fontSize: 12}}>-- {item.author}, {moment(item.date).format("MMM Do 'YY")}</Text>
					</View>
				);
			}

			return(
				<Card  title="Comments">
					<FlatList
						data={comments}
						renderItem={renderCommentItem}
						keyExtractor={item => item.id.toString() }
						/>
				</Card>
			);

		}

		function RenderDish(props) {
			const dish = props.dish;
			const comments = props.comments;

			if(dish != null) {
				return(
					<Card
						featuredTitle={dish.name}
						containerStyle={{borderWidth: 1, borderColor: '#512DA8'}}
						image={ require('./images/uthappizza.png') }
						>
						<Text style={{margin:10}}>{dish.description}</Text>
						<RenderComments comments={comments} />
					</Card>
				);
			}
			else {
				return(
					<View></View>
				);
			}
		}

		return(
			<RenderDish
				dish={this.state.dishes[ +dishId ]}
				comments={this.state.comments.filter(comment => comment.dishId === dishId)}
			/>
		);
	}
}

export default DishDetail;