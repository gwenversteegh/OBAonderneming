import { getData } from "./getData.js"


export const zoekBalk = document.querySelector("input[type='text']")

export function zoeken (){
    getData()
    }

    zoekBalk.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        zoeken()
    }
})