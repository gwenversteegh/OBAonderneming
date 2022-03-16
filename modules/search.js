import { getData } from "./getData.js"


const zoekBalk = document.querySelector("input[type='text']")

export function zoeken (){
    let searchTerm = zoekBalk.value ? zoekBalk.value : "ondernemen"
    console.log(searchTerm)
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const key = "bfdd3deee1f7b77b3d021e958f75c7ee"
    const detail = "Default"
    let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
    console.log(url)
    getData(url)
    }

    zoekBalk.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        zoeken()
    }
})