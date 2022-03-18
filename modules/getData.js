import { render, renderData2 } from "./render.js"
import { hideLoadingState, showErrorState } from "./states.js"


// const cors = "https://cors-anywhere.herokuapp.com/"
// const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
// const query = "boeken"
// const key = "bfdd3deee1f7b77b3d021e958f75c7ee"
const secret = "4289fec4e962a33118340c888699438d"
// const detail = "Default"
// const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

const config = {
  Authorization: `Bearer ${secret}`,
}

export function getData(url){
  fetch(url, config)
    .then((response) => {
      return response.json()
    })
    
    .then((data) => {
      console.log('data:')
      console.log(data.results)
      hideLoadingState()
      render(data)
  })

  .catch((err) => {
    console.log('error')
  console.log(err)
  showErrorState(err)
})
}
  

export function getData2(){
  const cors = "https://cors-anywhere.herokuapp.com/"
  let url = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data2) => {
      console.log('data2')
      console.log(data2)
      renderData2(data2)
  })
  .catch((err) => {
      console.log('error')
      console.log(err)
  })
}