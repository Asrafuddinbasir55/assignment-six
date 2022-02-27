
// const phoneDetails = document.getElementById('phone-details');

const allPhone = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => phoneDetail(data.data))
   //  console.log(searchValue);
    }
   
    const phoneDetail = (phones) => {
   
       for(const phone of phones) {
       const parent = document.getElementById('phone-container');
       const div = document.createElement('div')
       div.innerHTML = `
      <div class="card border w-25">
        
       <div class="pro-pic">
         <img class="w-50" src="${phone.image}" alt="">
       </div>
       <h2>Name: ${phone.phone_name}</h2>
       <h5>Brand: ${phone.brand}</h5>
       <p>Slug: ${phone.slug}</p>
   
       <div class="allbutton">
           <button onclick="details('${phone.slug}')" class="btn btn-info">Detailes</button>
   
       </div>
       </div>
      `;
     parent.appendChild(div)
   //   console.log(phone);
       }
    
   //    console.log(phone);
    }
   
    const details = (id) => {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
         // console.log(data);
    }
   



    const phoneDetails = (info) => {
        console.log(info);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${info.image}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${info.name}</h5>
        <p class="card-text">releaseDate: ${info.releaseDate}</p>
        <p class="card-text">main Features: ${info.mainFeatures.chipSet}</p>
        <p class="card-text">${info.mainFeatures.displaySize}</p>
        <p class="card-text">${info.mainFeatures.memory}</p>
        <p class="card-text">id: ${info.slug}</p>
        </div>
        `
        div.textContent = ''
        phoneDetails.appendChild(div)
      }
     






      fetch(url)
      .then(res => res.json())
      .then(data => 
        // console.log(data.data);
        // const allPhones = data.data
        // console.log(allPhone);
        // const singlePhone = allPhones.find(phones => phones.id === id)
        // console.log(singlePhone)
       
        const phoneDetails = (info) => {
          const div = document.createElement('div');
          div.innerHTML = `
          <img src="${id.image}" class="card-img-top" alt="">
          <div class="card-body">
          <h5 class="card-title">${id.name}</h5>
          <p class="card-text">releaseDate: ${id.releaseDate}</p>
           <p class="card-text">main Features: ${id.mainFeatures}</p>
          <p class="card-text">${id.mainFeatures}</p>
          <p class="card-text">${id.mainFeatures}</p>
          <p class="card-text">id: ${id.slug}</p>
          </div>
          ` 
         main.appendChild(div)
         
        }


        
    //  .then(data => {
    //    console.log(data.data)
    //    const phoneDetails = (phoneId) => {
    //      const div = document.createElement('div');
    //      div.innerHTML = `
    //      <img src="${data.image}" class="card-img-top" alt="">
    //      <div class="card-body">
    //      <h5 class="card-title">${data.name}</h5>
    //      <p class="card-text">releaseDate: ${data.releaseDate}</p>
    //       <p class="card-text">main Features: ${data.mainFeatures.chipSet}</p>
    //      <p class="card-text">${data.mainFeatures.memory}</p>
    //      <p class="card-text">${data.mainFeatures.displaySize}</p>
    //      <p class="card-text">id: ${data.slug}</p>
    //      </div>
    //      ` 
    //     main.appendChild(div)
    //    }
        
    //    }) 