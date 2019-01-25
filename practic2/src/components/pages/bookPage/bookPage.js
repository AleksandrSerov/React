import React, {Component} from 'react';
import ItemList from '../../itemList';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';
class BookPage extends Component {
	state = {
		error: false
	}
	gotService = new GotService();

	componentDidCatch() {
		this.setState({
			error: true
		})
	}
	render () {
		if (this.state.error) {
			return <span>Error</span>
		}
		return (
			<ItemList 
			onItemSelected = {(itemId) => {
				this.props.history.push(itemId)
			}}
			getData= {this.gotService.getAllBooks} 
			renderItem={({name}) => name}/>
		)
	}
}
export default withRouter(BookPage);