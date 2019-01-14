import React from 'react';
import PostListItem from '../PostListItem';
import './postList.css'
const PostList = ({posts}) => {
	const isObject = (value) => {
		return value && typeof value === 'object' && value.constructor === Object;
		}
	const elements = posts.map((item) => {
		if (isObject(item)) {
			const {id, ...itemProps} = item
			return (
			<li key={id} className='list-group-item'>
				<PostListItem {...itemProps}/>
				</li>
			)
		}
		
	})

	return (
		<ul className="app-list list-group">
		{elements}
		</ul>
	)
}

export default PostList;
