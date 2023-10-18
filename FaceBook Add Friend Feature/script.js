let addfriend = document.getElementById("add");
let change = document.getElementById('change');
let check = 0;

addfriend.addEventListener('click', () => {
    if (check == 0) {
        change.innerHTML = "Friend";
        change.style.color='Green'
        addfriend.innerHTML = 'Remove';
        addfriend.style.backgroundColor='black'
        addfriend.style.color='white'
        check = 1;
    }
    else if (check == 1) {
        change.innerHTML = "Stranger";
        change.style.color='red'
        addfriend.innerHTML = 'Add Friend';
        addfriend.style.backgroundColor='purple'
        addfriend.style.color='white'
        check = 0;
    }
});
