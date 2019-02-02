import React, {Component} from 'react';
import ItemList from '../../itemList';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class CharacterPage extends Component {
	state = {
		selectedItem: null,
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
			getData= {this.gotService.getAllCharacters} 
			renderItem={({name}) => name}/>
		)
	}
}
export default withRouter(CharacterPage);