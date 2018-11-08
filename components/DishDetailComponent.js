import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

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

		function GetAverageRatingFormatted(comments){
			var totalRating = comments.reduce( function(a, b){
				return a + b['rating'];
			}, 0);
			return(totalRating/comments.length + "/" + comments.length);
		}

		function RenderComments(props){
			const comments = props.comments;

			if(comments != null){
				return(
					<View>
						<Text style={{margin:10}}>{GetAverageRatingFormatted(comments)} | There are {comments.length} comments</Text>
					</View>
				)
			}
			else{
				return(
					<View>No comments</View>
				);
			}
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