import React, {Component} from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import CharacterItem from '../pages/characterItem';
import BookPage from '../pages/bookPage';
import BooksItem from '../pages/booksItem';
import HousePage from '../pages/housePage';
import HouseItem from '../pages/houseItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GotService from '../../services/gotService';
import {Button} from 'reactstrap';
import './app.css';
class App extends Component {
	state = {
		showRandomChar: false
	}
	gotService = new GotService();
	toggleBlock = () => {
		this.setState({
			showRandomChar: !this.state.showRandomChar
		})
	}
	render() {
		const randomChar = this.state.showRandomChar ? <RandomChar show = {this.toggleBlock}/> : null;
		return(
			<Router>
				<div className="app">
					<Container>
					 <Header/>
				 </Container>
				 <Container>
					<Row>
						<Col lg={{size: 5}}>
						<Button color="primary" className="randomCharBtn" onClick={this.toggleBlock}>Show Random Character</Button>
						{randomChar}
						</Col>
					</Row>
					<Route path="/" exact render ={()=>{
						return (
							<Jumbotron className="jum">
							<h1 className="jum-header">Hello, user!</h1>
							<p className="lead">This is example of a simple single page aplication.</p>
							<hr/>
							<p>It uses basic React functionality.</p>
							<p>You can watch characters, houses and books.</p>
							<p>Also you can watch random character.</p>
						</Jumbotron>
						)
					}}></Route>
					<Route path="/character" exact component={CharacterPage}></Route>
					<Route path="/character/:id" render={
						({match}) => {
							const {id} = match.params;
							return <CharacterItem itemId={id}/>
						}
					}></Route>
					<Route path="/house" exact component={HousePage}></Route>
					<Route path="/house/:id" render={
						({match}) => {
							const {id} = match.params;
							return <HouseItem itemId={id}/>
						}
					}></Route>
					<Route path="/book" exact component={BookPage}></Route>
					<Route path="/book/:id" render={
						({match}) => {
							const {id} = match.params;
							return <BooksItem itemId={id}/>
						}
					}></Route>
				</Container>
				</div>
			</Router>
	 )
	}
}

export default App;