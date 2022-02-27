
const main = document.getElementById('phone-container');

const allPhone = () => {
  const searchValue = document.getElementById('search-box').value;
  const error = document.getElementById('error')
  console.log(error);
  console.log(searchValue);
  if(isNaN(searchValue == '') || searchValue <= 0) {
    // alert('please enter a value')
    error.innerText = 'please give a value'
    searchValue.value = ''
    main.innerHTML = ''
  }
  else if (searchValue <= 0) {
    error.innerText = 'please give a positive value'
    searchValue.value = ''
    error.innerHTML = ''
  }
  else {
    main.innerHTML = ''
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => phoneDetail(data.data))
    searchValue.value = ''
    error.innerHTML = ''
    
  }
}

const phoneDetail = (phones) => {
  // console.log(phones);
  for(const phone of phones) {
    // console.log(phone);
  const div = document.createElement('div')
  div.classList.add('col-lg-4')
  div.classList.add('mb-5')
  div.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${phone.image}" class="card-img-top w-75" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${phone.phone_name}</h5>
    <p class="card-text">Brand: ${phone.brand}</p>
    <p>Slug: ${phone.slug}</p>
    <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn 
    btn-primary">Detailes</button>
   </div>
  </div>
  `
  main.appendChild(div)
  }  
}

    const phoneDetails = (phoneId) => {
   console.log(phoneId);
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}` 
     fetch(url)
     .then(res => res.json())
      .then(data => phoneDetails(data.data)) 

    const phoneDetails = (info) => {
      document.getElementById('phone-details').innerHTML = `
      <div class="card-body">
      <img src="${info.image}" class="card-img-top w-25" alt="">
      <h5 class="card-title">${info.name}</h5>
      <p class="card-text">releaseDate: ${info.releaseDate}</p>
      <p class="card-text">main Features: ${info.mainFeatures.chipSet}</p>
      <p class="card-text">${info.mainFeatures.memory}</p>
      <p class="card-text">${info.mainFeatures.displaySize}</p>
       <p class="card-text">id: ${info.slug}</p>
      </div>
      `
      console.log(info);
    }

}

