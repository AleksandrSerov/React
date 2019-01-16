import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList';
import PostAddForm from '../PostAddForm';
// import nanoid from 'nanoid';


import styled from 'styled-components';

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`

class App extends Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.state = {
			data : [
				{
					id: 'pqRT',
					label: 'Going to learn React',
					important: true
				},
				{
					id: 'fRhn',
					label: 'I need to pause',
					important: false
				},
				{
					id: 'aQRte',
					label: 'That is so good',
					important: false
				}
	   ]
		}
	}
	getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
	deleteItem(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id)
			const newArr = [...data.slice(0, index), ...data.slice(index+1)];
			return {
				data: newArr
			}
		})
		}
	addItem(body) {
		const randomId = Math.floor(Math.random() * (100 - 10)) + 10;
		const newItem = {
			label: body,
			important: false,
			id: randomId
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}
    render(){
					return (
						<AppBlock>
							<AppHeader />
							<div className="search-panel d-flex">
								<SearchPanel />
								<PostStatusFilter />
							</div>
							<PostList 
							posts={this.state.data}
							onDelete={this.deleteItem} />
							<PostAddForm 
							 onAdd = {this.addItem}/>
	
						</AppBlock>
					);
				}
}

export default App
