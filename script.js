const form = document.querySelector('.form');
const emailPhone = document.querySelector('.emailPhone');
const password = document.querySelector(".password");
const btn = document.querySelector('.btn');
const container = document.querySelector('.container')

emailPhone.addEventListener('input', function() {
  if (emailPhone.validity.valid) {
    emailPhone.classList.remove('error');
    emailPhone.nextElementSibling.classList.remove('show');
  }
})

password.addEventListener('input', function() {
  if (password.validity.valid) {
    password.classList.remove('error');
    password.nextElementSibling.classList.remove('show');
  }
})

function getApiData() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let output = '';
      users.forEach(user => {
        output += `
        <li>${user.login}</li>`
      })
      container.innerHTML = output;
    })
}



btn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!emailPhone.validity.valid) {
    emailPhone.classList.add('error');
    emailPhone.nextElementSibling.classList.add('show');
  }

  if (!password.validity.valid) {
    password.classList.add('error');
    password.nextElementSibling.classList.add('show')
  } else {
    getApiData();
  }



})