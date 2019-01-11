let images = ['http://alserov.ru/React/lesson-01adv/img/img_1.jpg',
'http://alserov.ru/React/lesson-01adv/img/img_2.jpg', 
'http://alserov.ru/React/lesson-01adv/img/img_3.jpg'];

function loadImage(path) {
	return new Promise((resolve, reject) => {
		let image = new Image();
		image.src = path;
		image.onload = () => resolve(image);
		image.onerror = () => reject(path);
	});
}
let promises = [];
for (let item of images) {
	promises[promises.length] = loadImage(item);
}
Promise.all(promises).then(value => {
	for (let item of value) {
		document.body.appendChild(item);
	}
}).catch( reason => {
	console.error(reason);
})