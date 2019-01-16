import React from 'react';
import PostListItem from '../PostListItem';
import { ListGroup } from 'reactstrap';
import './postList.css'
const PostList = ({posts, onDelete}) => {
	const isObject = (value) => {
		return value && typeof value === 'object' && value.constructor === Object;
		}
	const elements = posts.map((item) => {
		if (isObject(item)) {
			const {id, ...itemProps} = item
			return (
			<li key={id} className='list-group-item'>
				<PostListItem {...itemProps}
				onDelete={() => onDelete(id)}/>
				</li>
			)
		}
		
	})

	return (
		<ListGroup className="app-list list-group">
		{elements}
		</ListGroup>
	)
}

export default PostList;
