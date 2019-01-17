import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
 display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 26px;\
	}
	h2 {
		font-size: 1.2rem;
  color: grey;
	}
`

const AppHeader = ({liked, allPosts}) => {
 let note = 'записей'
	switch(allPosts % 10) {
		case 1:
		 allPosts % 100 === 11 ? note = 'записей' : note = 'запиcь'
			break
			case 2:
		 allPosts % 100 === 12 ? note = 'записей' : note = 'запиcи'
			break
			case 3:
		 allPosts % 100 === 13 ? note = 'записей' : note = 'запиcи'
			break
			case 4:
		 allPosts % 100 === 14 ? note = 'записей' : note = 'запиcи'
			break
			case 5:
		 note = 'записей'
			break
			case 6:
		 note = 'записей'
			break
			case 7:
		 note = 'записей'
			break
			case 8:
		 note = 'записей'
			break
			case 9:
		 note = 'записей'
			break
  default: note = 'записей'
    break
}
    return (
				<Header >
					<h1>Александр Серов</h1>
					<h2>{allPosts} {note}, из них понравилось {liked}</h2>
				</Header>
				);
}

export default AppHeader
