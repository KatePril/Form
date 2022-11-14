let btn = document.getElementById('Submit')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Name').value = 'Дякую!';
    document.getElementById('Email').value = 'Приємного користування!';
})

let btn2 = document.getElementById('Submit2')
btn2.addEventListener('click', (e) => {
    let name = document.getElementById('Name2').value;
    let email = document.getElementById('Email2').value;
    alert(`${name} ${email}`);
})