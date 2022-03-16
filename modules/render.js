
export const container = document.querySelector(".container")

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
