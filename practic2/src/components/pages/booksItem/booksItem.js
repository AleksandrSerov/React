import React, {Component} from 'react';
import gotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails'


export default class BooksItem extends Component {
	gotService = new gotService();
	render () {
		return (
			<ItemDetails itemId={this.props.itemId} getItem = {this.gotService.getBook}>
				<Field field='name' label='Name'/>
				<Field field='numberofPages' label='Number of pages'/>
				<Field field='publiser' label='Publiser'/>
				<Field field='released' label='Released'/>
			</ItemDetails>
		)
	}
}