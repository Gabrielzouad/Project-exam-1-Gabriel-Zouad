const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const infoContainer = document.querySelector(".infoContainer");
const id = params.get("id");
const detailAPI = "https://www.gabrielzouad.no/wp-json/wp/v2/posts/" + id;

async function callDetails() {
  try {
    const response = await fetch(detailAPI);
    const data = await response.json();
    const title = data.title;
    const links = data._links["wp:featuredmedia"];
    const imageResponse = await fetch(links[0].href);
    const imageObject = await imageResponse.json();

    var date = data.date.slice(0, 10); //for å slippe unødvendig info

    infoContainer.innerHTML = `<div class="prosjekt">
                                    <img class="prosjektBilde" alt=${title.rendered} src=${imageObject.source_url}>
                                    <div class="detailedInfo">
                                        <h1 class="tittel">${title.rendered}</h1>
                                        <p class="info">${data.content.rendered}</p>
                                        <p class="dato">${date}</p>
                                    </div>
                                    <div class="modal"><span class="cross">&times;</span>
                                          <img src=${imageObject.source_url} alt=${title.rendered}>
                                    </div
                               </div>`;

    const bilde = document.querySelector(".prosjektBilde");
    const modal = document.querySelector(".modal");
    const cross = document.querySelector(".cross");

    function addClass() {
      modal.style.display = "block";
    }

    function removeClass() {
      modal.style.display = "none";
    }

    bilde.addEventListener("click", addClass);
    cross.addEventListener("click", removeClass);
  } catch (err) {
    console.log(err);
  }
}
callDetails();
