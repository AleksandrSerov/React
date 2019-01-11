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

export {money, sponsors};