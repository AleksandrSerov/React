import {createStore} from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.value;
		case 'RES':
			return 0
		default:
			return state;
	}
}
const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec());
});
document.getElementById('reset').addEventListener('click', () => {
	store.dispatch(res());
});
const update = () => {
	document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);
