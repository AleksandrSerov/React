import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService'
import Spinner from '../spinner'
const ListGroup = styled.ul`
li {
	cursor: pointer;
}
`
const ErrorGroup = styled.div`
	background-color: white;
	text-align: center;
	font-weight: 700;
`
export default class ItemList extends Component {
	gotService = new gotService();
	state = {
		itemList: null,
		error: false
	}
	componentDidCatch() {		
		this.setState({
			error: true
		})
	}
	componentDidMount() {
		const {getData} = this.props;
		getData()
		.then( (itemList) => {
			this.setState({
				itemList
			})
		})
	}
	renderItems(arr) {
		return arr.map((item) => {
			const {id} = item;
			const label = this.props.renderItem(item);
			return (
				<li 
					key = {id}
					className="list-group-item"
					onClick= {() => this.props.onItemSelected(id)}					>
					{label}
				</li>
			)
		});
	}
    render() {
					if(this.state.error) {
						return (
							<ErrorGroup className="list-group-item" >
        <span>Error, please reload page</span>
       </ErrorGroup>
						)
					}
					const {itemList} = this.state;
					if (!itemList) {
						return <Spinner/>
					}
					const items = this.renderItems(itemList);

        return (
            <ListGroup>
               {items}
            </ListGroup>
        );
    }
}