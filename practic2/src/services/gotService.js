class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}
	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + 
			`, recived ${res.status}`);
		}
		return await res.json();
	}
	async getAllCharacters() {
		const res = await this.getResource(`/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter) 
	}
	async getCharacter(id) {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}
	getAllBooks() {
		return this.getResource(`/books?page=1&pageSize=100`);
	}
	getBook(id) {
		return this.getResource(`/books/${id}`);
	}
	getAllHouses() {
		return this.getResource(`/houses?page=1&pageSize=100`);
	}
	getHouse(id) {
		return this.getResource(`/houses/${id}`);
	}
	_transformCharacter(char) {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture
		}
	}
	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons
		}
	}
	_transformHBook(book) {
		return {
			name: book.name,
			numberofPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.realised
		}
	}
}
export default GotService;