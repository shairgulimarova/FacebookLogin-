const form = document.querySelector('.form');
const emailPhone = document.querySelector('.emailPhone');
console.log(emailPhone)
const password = document.querySelector(".password");
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

const accountForget = document.querySelector('.accountForget');
const firstSection = document.querySelector(".entranceSection");
const secondSection = document.querySelector('.searchAccauntSection');
const cancel = document.querySelector('.cancel');
const search = document.querySelector('.search');
const emailPhoneThird = document.querySelector('.thirdInput')
const fillInEmail = document.querySelector('.fillInEmail');
const thirdSection = document.querySelector('.createAccauntSection');
const newAccaunt = document.querySelector('.newAccaunt');
const x = document.querySelector('.x');
const registerMe = document.querySelector('.registerMe');

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

accountForget.addEventListener('click', function(event) {
  event.preventDefault()
  firstSection.style.display = 'none';
  secondSection.style.display = 'block';

})

cancel.addEventListener('click', function(event) {
  event.preventDefault();
  secondSection.style.display = 'none';
  firstSection.style.display = 'block';
});

search.addEventListener('click', function(event) {
  event.preventDefault();
  if (!emailPhoneThird.validity.valid) {
    fillInEmail.style.display = 'block'
  } else {
    getApiData();
  }
});

newAccaunt.addEventListener('click', function(event) {
  event.preventDefault();
  thirdSection.style.display = 'block';
  firstSection.style.opacity = '0.2';
  thirdSection.classList.add('active');
})

x.addEventListener('click', function() {
  createAccauntSection.style.display = 'none';
  firstSection.style.opacity = '10';
})

  registerMe.addEventListener('click', function(event) {
    event.preventDefault();
    firstSection.style.display = 'none';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'none';
    container.innerHTML = `<h1>Happy Back End</h1>`
    container.style.color = '#1877f2';
  }); 




