import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res}) => {
	return (
		<div className ="background">
			<div className ="counter-block">
				<div className ="counter">{counter}</div>
			</div>
			<button onClick = {inc} className ="plus-block"></button>
			<button onClick = {dec}  className ="minus-block"></button>
			<button onClick = {res} className ="reset-block"></button>
	</div>
	);
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
}

export default connect(mapStateToProps, actions)(Counter);