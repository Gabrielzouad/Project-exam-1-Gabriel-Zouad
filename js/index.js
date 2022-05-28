const url = "https://www.gabrielzouad.no/wp-json/wp/v2/posts";
const prosjektContainer = document.querySelector(".prosjekter");
let data = "";
async function apiCall() {
  try {
    const response = await fetch(url);
    data = await response.json();

    const property = data[prosjektNumber];
    const title = property.title;
    const links = property._links["wp:featuredmedia"];
    const imageResponse = await fetch(links[0].href);
    const imageObject = await imageResponse.json();

    prosjektContainer.innerHTML = `<div class="prosjekt">
                                      <p class="prosjektTittel">${title.rendered}</p>
                                      <a href="enkeltprosjekt.html?id=${property.id}&name=${property.slug}"> 
                                      <img class="prosjektBilde" src=${imageObject.source_url} alt=${title.rendered}></a>
                                      </div>`;
  } catch (err) {
    console.log(err);
  }
}

let prosjektNumber = 0;

prosjektIndex(prosjektNumber);

function plusProsjekt(n) {
  prosjektIndex((prosjektNumber += n));
}

function currentProsjekt(n) {
  prosjektIndex((prosjektNumber = n));
}

function prosjektIndex(n) {
  if (n > data.length - 1) {
    prosjektNumber = 0;
  }
  if (n < 1) {
    prosjektNumber = data.length;
  }

  apiCall(url);
}
