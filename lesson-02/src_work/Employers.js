class Employers {
	constructor (employersList) {
		this.employersList = employersList;
	}
	sort() {
		this.employersList = this.employersList.filter((name) => {
			return name.length > 0;
		}).map((name) => name.toLowerCase().trim());
		return this.employersList;
	}
}
export default Employers;