import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import nanoid from 'nanoid';
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
		charList: null,
		error: false
	}
	componentDidCatch() {		
		this.setState({
			error: true
		})
	}
	componentDidMount() {
		this.gotService.getAllCharacters()
		.then( (charList) => {
			this.setState({
				charList
			})
		})
	}
	renderItems(arr) {
		return arr.map((item, i) => {
			const id = 'i' + nanoid(4);
			return (
				<li 
					key = {id}
					className="list-group-item"
					onClick= {() => this.props.onCharSelected(41 + i)}					>
					{item.name}
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
					const {charList} = this.state;
					if (!charList) {
						return <Spinner/>
					}
					const items = this.renderItems(charList);

        return (
            <ListGroup >
               {items}
            </ListGroup>
        );
    }
}