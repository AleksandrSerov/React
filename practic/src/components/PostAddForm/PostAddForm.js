import React from 'react';
import './postAddForm.css'
import styled from 'styled-components';

const BottomPanel = styled.div`
	display: flex;
	margin-top: 20px;
	input {
		width: auto;
  flex-grow: 1;
		margin-right: 3px;
	}
`
const PostAddForm = ({onAdd}) => {
	return (
		<BottomPanel>
	  <input
				type="text"
				placeholder="О чем вы думаете сейчас?"
				className="form-control"
			/>
			<button
			 type="submit"
				className="btn btn-outline-secondary"
				onClick={() => onAdd("hello")}>
				 добавить
				</button>
		</BottomPanel>

	)
}
export default PostAddForm;
