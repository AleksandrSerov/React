const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
let employersNames = [];

employersNames = employers.filter((name) => {
	return name.length > 0;
}).map((name) => name.toLowerCase().trim());


const sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

let calcCash = (own = 0, ...everyCash) => {
	[everyCash] = everyCash;
	let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;
	return total;
};

let money = calcCash(null, sponsors.cash);

let makeBusiness = (owner, director = 'Victor', cash, emp) => {
	const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
	console.log('And we have a sponsors: ');
	console.log(...sumSponsors);
	console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};
makeBusiness(...['Sam', null, money, employersNames]);