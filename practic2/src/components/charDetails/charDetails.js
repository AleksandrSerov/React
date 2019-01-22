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
const CharDetailsBox = styled.div`
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
const SelectChar = styled.span`
		position: absolute;
		color: white;
		font-weight: 700;
		font-size: 20px;


`
export default class CharDetails extends Component {
	gotService = new GotService();
	state = {
		char: null,
		loading: false,
		error: false
	}
	componentDidMount() {
		this.updateChar();
	}
	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
		this.foo.bar = 0;
	}
	componentDidCatch() {		
		this.setState({
			error: true
		})
	}
	updateChar() {
		const {charId} = this.props;
		if (!charId) {
			return;
		}
		this.setState({ loading : true})
		this.gotService.getCharacter(charId)
		.then((char) => {
			this.setState({
				char,
			 loading: false})
		})
	}
    render() {
					console.log(this.state.error);
					if (this.state.error) {
						return (
							<ErrorGroup className="rounded">
							 <span>Eror, please try to reload page</span>
							</ErrorGroup>
						)
					}
					if (!this.state.char) {
						return <SelectChar>Please select Character</SelectChar>
					}
					if (!this.state.char) {
						return <Spinner/>
					}
					const {loading} = this.state;
					const spinner = loading ? <Spinner/> : null;
		   const content = !loading ? <Content char = {this.state.char}/> : null;
        return (
            <CharDetailsBox className="rounded">
															{spinner}
															{content}
            </CharDetailsBox>
        );
    }
}
const Content = ({char}) => {
	const {name, gender, born, died, culture} = char;
	return (
		<>
		 <h4>{name}</h4>
			<ul>
				<li className="list-group-item d-flex justify-content-between">
					<span >Gender</span>
					<span>{gender ? gender : 'no information'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Born</span>
					<span>{born ? born : 'no information'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Died</span>
					<span>{died ? died : 'no information'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Culture</span>
					<span>{culture ? culture : 'no information'}</span>
				</li>
			</ul>
		</>

	)
	
}