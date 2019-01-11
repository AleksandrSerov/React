import Employers from './Employers'
import Money from './Money'

let employers = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
employers = employers.sort();

const sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

let money = new Money(sponsors, null, sponsors.cash);

class MakeBusiness {
	constructor(owner, director = 'Victor', cash, emp) {
		this.owner = owner;
		this.director = director;
		this.cash = cash;
		this.emp = emp;
	}
	showInfo() {
		const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
	 console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
	 console.log('And we have a sponsors: ');
	 console.log(...sumSponsors);
	 console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
	}
}

const business = new MakeBusiness(...['Sam', null, money.calcCash(), employers.sort()]);
business.showInfo();