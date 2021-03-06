import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import {Card,  Icon} from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import moment from 'moment';

const DarkPurple = '#512DA8';

/**
 * @todo: make the state of the favorites persistent
 */
class DishDetail extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			favorites: []
		}
	}

	static navigationOptions = { title: 'Dish Details' }

	/**
	 * Adds a dish as a favorite.
	 * @param dishId The unique dish id to add as a favorite.
	 */
	markFavorite(dishId) {
		this.setState({ favorites: this.state.favorites.concat(dishId)})
	}

	render() {
		const dishId = this.props.navigation.getParam('dishId', '');

		/**
		 * Renders a number (eg 4) as a 5-star rating (★★★★☆) using fontawesome icons
		 * @TODO this would make a good component, instead of a function.  Meh.
		 */
		function RenderStars(stars){
			var starList = [];
			var starIcon = (name) => <Icon key={i} name={name} type='font-awesome' size={20} color={DarkPurple} />

			for(var i=0; i<5; i++){
				if(i<stars) {
					starList.push( starIcon('star') );
				}
				else {
					starList.push( starIcon('star-o') );
				}
			}

			return(starList);
		}

		/**
		 * Render comments in a card at the end of the menu item
		 * @constructor
		 */
		function RenderComments(props){
			const comments = props.comments;
			const renderCommentItem = ({item, index}) =>  {
				return(
					<View key={index} style={{margin:10}}>
						<Text>{RenderStars(item.rating)}</Text>
						<Text style={{fontSize: 14}}>{item.comment}</Text>
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

		/**
		 * Renders a dish and it's comments
		 * @constructor
		 */
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
						<Text style={{margin:10}}>
							<Icon
								raised
								reverse
								name={props.favorite ? 'heart' : 'heart-o' }
								type='font-awesome'
								size={16}
								color={DarkPurple}
								onPress={() => props.favorite ? console.log('Already favorited') : props.onPress() }
							/>
						</Text>
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
			<ScrollView>
				<RenderDish
					dish={this.state.dishes[ +dishId ]}
					comments={this.state.comments.filter(comment => comment.dishId === dishId)}
					favorite={this.state.favorites.some(el => el === dishId)}
					onPress={() => this.markFavorite(dishId)}
				/>
			</ScrollView>
		);
	}
}

export default DishDetail;