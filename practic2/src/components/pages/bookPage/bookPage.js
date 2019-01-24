import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails'
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock'

export default class BookPage extends Component {
	state = {
		selectedItem: null,
		error: false
	}
	gotService = new GotService();
	onItemSelected = (id) => {
		this.setState({
			selectedItem: id
		})
	}
	componentDidCatch() {
		this.setState({
			error: true
		})
	}
	render () {
		if (this.state.error) {
			return <span>Error</span>
		}
		const itemList = (
			<ItemList 
			onItemSelected = {this.onItemSelected}
			getData= {this.gotService.getAllBooks} 
			renderItem={({name}) => name}/>
		)
		const itemDetails = (
			<ItemDetails itemId={this.state.selectedItem} getItem = {this.gotService.getBook}>
				<Field field='name' label='Name'/>
				<Field field='numberofPages' label='Number of pages'/>
				<Field field='publiser' label='Publiser'/>
				<Field field='released' label='Released'/>
			</ItemDetails>
		)
		return (
			<RowBlock left={itemList} right={itemDetails}/>
		)
	}
}