let images = ['img/img_1.jpg','img/img_2.jpg', 'img/img_3.jpg'];
let imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++) {
	imgs[i].style = 'display: none';
	imgs[i].setAttribute('src', images[i]);
}
// Без промисов
// imgs[0].addEventListener('load', () => {
// 	imgs[0].style = 'display: inline-block';
// })

// imgs[1].addEventListener('load', () => {
// 	imgs[1].style = 'display: inline-block';
// })
// imgs[2].addEventListener('load', () => {
// 	imgs[2].style = 'display: inline-block';
// })

// С промисами
let limg0 = new Promise ((resolve, reject) => {
	imgs[0].addEventListener('load', resolve());
	imgs[0].addEventListener('error', reject(images[0]));
})

let limg1 = new Promise ((resolve, reject) => {
	imgs[1].addEventListener('load', resolve());
	imgs[1].addEventListener('error', reject(images[1]));
})

let limg2 = new Promise ((resolve, reject) => {
	imgs[2].addEventListener('load', resolve());
	imgs[2].addEventListener('error', reject(images[2]));
})
Promise.all([limg0, limg1, limg2]).then(values => {
	for (item of imgs) {
		item.style = 'display: inline-block';
	}
}).catch(
	reason => {
		console.error(reason);
	}
)
