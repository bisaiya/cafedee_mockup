let btnRefresh = document.querySelector('.btn-refresh');
let selected = document.getElementsByClassName('dropdown-item');
console.log(selected);
btnRefresh.addEventListener('click', refresh);

function refresh() {
	for(let i= 0; i < selected.length; i++) {
		selected[i].classList.remove('selected');
    }
    console.log('clicked')
}
