import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList';
import PostAddForm from '../PostAddForm';

import './app.css';


const App = () => {
	const data = [
		{
			id: '1',
			label: 'Going to learn React',
			important: true
		},
		{
			id: '2',
			label: 'I need to pause',
			important: false
		},
		{
			id: '3',
			label: 'That is so good',
			important: false
		}
	]
    return (
					<div className="app">
						<AppHeader />
						<div className="search-panel d-flex">
							<SearchPanel />
							<PostStatusFilter />
						</div>
						<PostList posts={data} />
						<PostAddForm />

					</div>
				);
}

export default App
