import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList';
import PostAddForm from '../PostAddForm';
import nanoid from 'nanoid';


import styled from 'styled-components';

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`

class App extends Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);

		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);



		this.state = {
			data : [
				{
					id: 'pqRT',
					label: 'Going to learn React',
					important: false,
					like: false
				},
				{
					id: 'fRhn',
					label: 'I need to pause',
					important: false,
					like: false

				},
				{
					id: 'aQRte',
					label: 'That is so good',
					important: false,
					like: false
				}
				],
				term: "",
				filter: "all"
		}
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
		if (body === "") {
			return 
		}
		const newItem = {
			label: body,
			important: false,
			id: nanoid(4)
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}
	editItem(label, id){
		const newItem = {
			label: label,
			important: false,
			id: nanoid(4)
		}
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const newArr = [...data.slice(0, index), newItem,  ...data.slice(index+1)];
			return {
				data: newArr
			}
		})
	}
	toggleProp (prop, id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = {...old, [prop]: !old[prop]};
			const newArray = [...data.slice(0, index), newItem,  ...data.slice(index+1)];
			return {
				data: newArray
			}
		})
	}
	onToggleImportant(id){
		this.toggleProp('important', id);
	}
	onToggleLiked(id){
		this.toggleProp('like', id);
	}
	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}
	onUpdateSearch(term){
		this.setState({term});
	}
	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like)
		} else {
			return items;
		}
	}
	onFilterSelect(filter) {
		this.setState({filter});
	}
    render(){
					const {data, term, filter} = this.state;
					const liked = data.filter(item => item.like).length;
					const allPosts = data.length;
					const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
					return (
						<AppBlock>
							<AppHeader
							liked = {liked}
							allPosts={allPosts} />
							<div className="search-panel d-flex">
							 
								<SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
								<PostStatusFilter 
								filter={filter}
								onFilterSelect = {this.onFilterSelect}/>
							</div>
							<PostList 
							posts={visiblePosts}
							onDelete={this.deleteItem}
							onEdit={this.editItem}
							onToggleImportant={this.onToggleImportant}
							onToggleLiked={this.onToggleLiked} />
							<PostAddForm 
							 onAdd = {this.addItem}/>
	
						</AppBlock>
					);
				}
}

export default App
