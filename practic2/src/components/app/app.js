import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
class App extends Component {
	state = {
		showRandomChar: true
	}

	toggleBlock = () => {
		this.setState({
			showRandomChar: !this.state.showRandomChar
		})
	}
	render() {
		
		const randomChar = this.state.showRandomChar ? <RandomChar show = {this.toggleBlock}/> : null;
		return(
			<>
				<Container>
				 <Header />
			 </Container>
			 <Container>
				<Row>
					<Col lg={{size: 5, offset: 0}}>
					<button onClick={this.toggleBlock}>Click</button>
					{randomChar}
					</Col>
				</Row>
				<CharacterPage/>
			</Container>
			</>
	 )
	}
}

export default App;