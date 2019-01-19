class Money {
	constructor(sponsors, own = 0, ...everyCash) {
		this.sponsors = sponsors;
		this.own = own;
		this.everyCash = everyCash;
	}
	calcCash() {
		[this.everyCash] = this.everyCash;
		let total = this.everyCash.reduce((total, currentValue) => total + currentValue) + this.own;
		return total;
	}
}
export default Money;