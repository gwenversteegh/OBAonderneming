
export const container = document.querySelector(".container")
export const container2 = document.querySelector(".container2")


export function render(data) {
  const results = data.results

    container.innerHTML=""
    results.forEach((item, i) => {
      container.insertAdjacentHTML('afterbegin', 
      `<article>
      <h2>
        ${item.authors ? item.authors[0] : "Geen author"}
      </h2>
      <p>
        ${item.summaries ? item.summaries[0] : "Geen samenvatting"}
      </p>
      <img src="${item.coverimages ? item.coverimages[1] : 'Geen foto'}">
    </article>`)
  })
}


export function renderData2(data2) {
  const results = data2.results

  // resultatenLijst.innerHTML=""
  results.forEach((item, i) => {
      container2.insertAdjacentHTML('afterbegin',
          `<li>
          <h6>${item.titles}</h6>
          <p>${item.summaries}</p>
          <a href="${item.detailLink}">>  Open leerdocument</a> 
          </li>`)
})
}