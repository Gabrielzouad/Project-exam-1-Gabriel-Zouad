let pageNumber = 1;
const url = "https://www.gabrielzouad.no/wp-json/wp/v2/posts/?page=" + pageNumber;
const prosjektContainer = document.querySelector(".prosjekter");

async function apiCall() {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < 10; i++) {
      const projekts = data[i];
      const title = projekts.title;
      const links = projekts._links["wp:featuredmedia"];
      const imageResponse = await fetch(links[0].href);
      const imageObject = await imageResponse.json();

      prosjektContainer.innerHTML += `<div class="prosjekt">
                                      <p class="prosjektTittel">${title.rendered}</p>
                                      <a href="enkeltprosjekt.html?id=${projekts.id}&name=${projekts.slug}"> 
                                      <img class="prosjektBilde" src=${imageObject.source_url}></a>
                                      </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}
function pageIndex() {
  pageNumber++;
  apiCall(url);
}
apiCall(url);
