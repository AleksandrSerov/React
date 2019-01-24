import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

const ErrorGroup = styled.div`
	background-color: white;
	text-align: center;
	font-weight: 700;
	span {
		width: 20px;
	}
`
const ItemDetailsBox = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
		h4 {
			margin-bottom: 20px;
			text-align: center;
		}
		span:nth-child(1) {
			font-weight: bold;
		}
`
const SelectItem = styled.span`
		position: absolute;
		color: white;
		font-weight: 700;
		font-size: 20px;
`
const Field = ({item, field, label}) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
					<span >{label}</span>
					<span>{item[field]}</span>
				</li>
	)
}
export {
	Field
}
export default class ItemDetails extends Component {
	gotService = new GotService();
	state = {
		item: null,
		loading: false,
		error: false
	}
	componentDidMount() {
		this.updateItem();
	}
	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}
	componentDidCatch() {		
		this.setState({
			error: true
		})
	}
	updateItem() {
		const {itemId} = this.props;
		if (!itemId) {
			return;
		}
		this.setState({loading: true});
		this.props.getItem(itemId)
		.then((item) => {
			this.setState({
				item,
			 loading: false})
		})
	}
	
	render() {
		if (this.state.error) {
			return (
				<ErrorGroup className="rounded">
					<span>Eror, please try to reload page</span>
				</ErrorGroup>
			)
		}
		if (!this.state.item) {
			return <SelectItem>Please select Item</SelectItem>
		}
		if (!this.state.item) {
			return <Spinner/>
		}
		const {loading} = this.state;
		const spinner = loading ? <Spinner/> : null;
		const content = !loading ? <Content item = {this.state.item} childrens = {this.props.children}/> : null;
		console.log(this.props.children)
		return (
			<ItemDetailsBox className="rounded">
				{spinner}
				{content}
			</ItemDetailsBox>
		);
	}
}
const Content = ({item, childrens}) => {
	const {name} = item;
	return (
		<>
		 <h4>{name}</h4>
			<ul>
				{React.Children.map(childrens, (child) => {
					return React.cloneElement(child, {item})

				})}
			</ul>
		</>

	)
	
}