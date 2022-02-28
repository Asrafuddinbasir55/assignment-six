
const main = document.getElementById('phone-container');

const allPhone = () => {
  document.getElementById('phone-container').innerHTML = ''
   document.getElementById('sppiner').style.display = 'block'
  const searchValue = document.getElementById('search-box').value;
  const error = document.getElementById('error')
  // console.log(error);
  console.log(searchValue);
  if((searchValue == '')) {
    // alert('please enter a value')
    error.innerText = 'please give a positive value'
    searchValue.textContent = ''
    main.textContent = ''
  }
  else if (searchValue <= 0) {
    document.getElementById('phone-container').innerHTML = ''
    error.innerText = 'please give a positive value'
    searchValue.textContent = ''
    error.textContent = ''
  }
  else {
    main.textContent = ''
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
   .then(data => phoneDetail(data.data.slice(0, 20))) 
    searchValue.textContent = ''
    error.textContent = '' 
  }
}

    //  phone detalils

const phoneDetail = (phones) => {
  if (phones) {
    document.getElementById('sppiner').style.display = 'none'
  }
  else {
    document.getElementById('sppiner').style.display = 'block'
     console.log('plaease i value');
  }
  // console.log(phones);
  for(const phone of phones) {
    // console.log(phone);
  const div = document.createElement('div')
  div.classList.add('col-lg-4')
  div.classList.add('col-sm-1')
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

   //  show phone datails
   
    const phoneDetails = (phoneId) => {
    document.getElementById('phone-container').innerHTML = ''
    // console.log(phoneId);
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}` 
     fetch(url)
     .then(res => res.json())
      .then(data => phoneDetails(data.data)) 
     
      const phoneDetails = (info) => {
        console.log(info);
      document.getElementById('phone-details').innerHTML = `
      <div class="card-body text-center">
      <img src="${info.image}" class="card-img-top w-25" alt="">
      <h5 class="card-title">${info.name}</h5>
      <p class="card-text">releaseDate: ${info.releaseDate}</p>
      <p class="card-text">main Features: ${info.mainFeatures.chipSet}</p>
      <p class="card-text">Memory: ${info.mainFeatures.memory}</p>
      <p class="card-text">DisplaySize: ${info.mainFeatures.displaySize}</p>
      <p class="card-text">Sensors: ${info.mainFeatures.sensors}</p>
      <p class="card-text">Storage: ${info.mainFeatures.storage}</p>
      <p class="card-text">Others: ${info.mainFeatures.others}</p>

       <p class="card-text">id: ${info.slug}</p>
       
      </div>
      `
      // console.log(info);
    }

}

