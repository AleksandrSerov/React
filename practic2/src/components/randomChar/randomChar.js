import React, {Component} from 'react';
import gotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'
const RandomCharBlock = styled.div`
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

export default class RandomChar extends Component {
	constructor(){
		super();
		this.updateChar();
	}
	gotService = new gotService();
	state = {
		char: {},
		loading: true
	}
	onCharLoaded = (char) => {
		this.setState({
			char,
			loading: false,
			error: false
		})
	}
	onError = (err) => {
		this.setState({
			error: true,
		 loading: false
		})
	}
	updateChar() {
		// const id = Math.floor(Math.random()*140 + 25);
		const id = Math.floor(111111111);

		this.gotService.getCharacter(id)
		.then(this.onCharLoaded)
		.catch(this.onError)
	}
    render() {
					const {char, loading, error} = this.state;
					const content = !(loading || error) ? <View char={char}/> : null;
					const errorMessage = error ? <ErrorMessage/> : null;
					const spinner = loading ? <Spinner/> : null;
        return (
            <RandomCharBlock className="rounded">
												{errorMessage}
												{spinner}
												{content}
												
            </RandomCharBlock>
        );
    }
}

const View = ({char}) => {
	const {name, gender, born, died, culture} = char;
	return (
		<>
		<h4>Random Character: {name ? name : 'no information' }</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span >Gender</span>
					<span>{gender ? gender : 'no information' }</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Born</span>
					<span>{born ? born : 'no information' }</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Died</span>
					<span>{died ? died : 'no information'} </span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span >Culture</span>
					<span>{culture ? culture : 'no information' }</span>
				</li>
				</ul>
		</>
	)
}