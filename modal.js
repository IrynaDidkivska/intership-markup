const nav = document.getElementById('myModal');

const openBtn = document.getElementById('myBtn');

const closeBtn = document.getElementsByClassName('btn-close')[0];

openBtn.onclick = function () {
	nav.style.display = 'block';
};

closeBtn.onclick = function () {
	nav.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == nav) {
		nav.style.display = 'none';
	}
};
