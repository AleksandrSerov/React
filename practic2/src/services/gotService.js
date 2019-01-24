class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}
	
	 getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + 
			`, recived ${res.status}`);
		}
		return await res.json();
	}
	 getAllCharacters = async () => {
		const res = await this.getResource(`/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter) 
	}
	 getCharacter = async (id) => {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}
	 getAllBooks = async () => {
		const res = await this.getResource(`/books?page=1&pageSize=100`);
		return res.map(this._transformBook);
	}
	 getBook = async (id) => {
		const res = await this.getResource(`/books/${id}`);
		return this._transformBook(res)
	}
	 getAllHouses = async () => {
		const res = await this.getResource(`/houses?page=1&pageSize=100`);
		return res.map(this._transformHouse);
	}
	 getHouse = async (id) => {
		const res = await this.getResource(`/houses/${id}`);
		return this._transformHouse(res)
	}
	_transformCharacter = (char) => {
		return {
			name: char.name || 'no information',
			gender: char.gender || 'no information',
			born: char.born || 'no information',
			died: char.died || 'no information',
			culture: char.culture || 'no information',
			id: char.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/characters\//, "" )
		}
	}
	_transformHouse = (house) => {
		return {
			name: house.name || 'no information',
			region: house.region || 'no information',
			words: house.words || 'no information',
			titles: house.titles || 'no information',
			overlord: house.overlord || 'no information',
			ancestralWeapons: house.ancestralWeapons || 'no information',
			id: house.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/houses\//, "" )
		}
	}
	_transformBook = (book) => {
		return {
			name: book.name || 'no information',
			numberofPages: book.numberOfPages || 'no information',
			publiser: book.publiser || 'no information',
			released: book.realised || 'no information',
			id: book.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/books\//, "" )
		}
	}
}
export default GotService;