import {employersNames} from './Employers'
import {money, sponsors} from './Money'

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

const business = new MakeBusiness(...['Sam', null, money, employersNames]);
business.showInfo();