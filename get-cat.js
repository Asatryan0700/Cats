let loc = window.location.search
loc = loc.substring(1)
let api = "andy1337";
const box = document.querySelector(".eeee");


const getCat = function() { 
fetch(`https://sb-cats.herokuapp.com/api/2/${api}/show/${loc}`)
  .then(res => res.json())
  .then(data => {
      let card = `
      <div class="card_of_cat">
      <div class="card-img_b" style="${data.data.img_link && `background-image: url(${data.data.img_link})`}"></div>
          <h4>${data.data.name}</h4>
          <br>
          <span>Возраст ${data.data.age} лет/года</span>
          <br>
          <span>${data.data.rate}/10</span>
          <span>ID: ${data.data.id}</span>
          <p>${data.data.description}</p>
          <br>
      </div>`;
  box.innerHTML += card;
  })    
};
getCat();

