import React, {Component} from 'react';
import './postAddForm.css'
import styled from 'styled-components';

const BottomPanel = styled.form`
	display: flex;
	margin-top: 20px;
	input {
		width: auto;
  flex-grow: 1;
		margin-right: 3px;
	}
`
class PostAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ""
		}
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		

	}
	onValueChange(e) {
		console.log(e.target.value);
		this.setState({
			text: e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		this.props.onAdd(this.state.text)
		this.setState({
			text: ""
		});
	}
	render() {
		return (
			<BottomPanel onSubmit={this.onSubmit}>
				<input
					type="text"
					placeholder="О чем вы думаете сейчас?"
					className="form-control"
					onChange={this.onValueChange}
					value={this.state.text}
				/>
				<button
					type="submit"
					className="btn btn-outline-secondary"
					>
						добавить
					</button>
			</BottomPanel>
		)}
	}

export default PostAddForm;
