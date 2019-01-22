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
	async getAllBooks() {
		const res = await this.getResource(`/books?page=1&pageSize=100`);
		return res.map(this._transformBook());
	}
	async getBook(id) {
		const res = await this.getResource(`/books/${id}`);
		return this._transformBook(res)
	}
	async getAllHouses() {
		const res = this.getResource(`/houses?page=1&pageSize=100`);
		return res.map(this._transformHouse(res));
	}
	async getHouse(id) {
		const res = this.getResource(`/houses/${id}`);
		return this._transformHouse(res)
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
	_transformBook(book) {
		return {
			name: book.name,
			numberofPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.realised
		}
	}
}
export default GotService;