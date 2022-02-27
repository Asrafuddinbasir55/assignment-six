


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
        <button class="btn btn-info">Detailes</button>

    </div>
    </div>
   `;
  parent.appendChild(div)
  console.log(phone);
    }
 
//    console.log(phone);
 }