import React, {Component} from 'react';
import gotService from '../../services/gotService'
import styled from 'styled-components';
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
	constructor(props){
		super(props)
		
		this.state = {
			randomChar: new gotService().getCharacter(Math.floor((Math.random() * 190) + 10)).then(res => {
				this.setState({
					randomChar: res
				})
			})
		}
	}
    render() {
					const {randomChar} = this.state;
        return (
            <RandomCharBlock className="rounded">
                <h4>Random Character: {randomChar.name ? randomChar.name : 'no information' }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span >Gender
                        </span>
                        <span>{randomChar.gender ? randomChar.gender : 'no information' }</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span >Born
                        </span>
                        <span>{randomChar.born ? randomChar.born : 'no information' }</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span >Died
                        </span>
                        <span>{randomChar.died ? randomChar.died : 'no information'} </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span >Culture
                        </span>
                        <span>{randomChar.culture ? randomChar.culture : 'no information' }</span>
                    </li>
                </ul>
            </RandomCharBlock>
        );
    }
}
