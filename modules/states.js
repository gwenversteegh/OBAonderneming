import { container } from "./render.js"


export function showLoadingState(){
    container.insertAdjacentHTML('afterbegin', 
        `<p>
        Some books are on the way, just a moment!
        </p>`)
}

export function hideLoadingState(){
    container.removeChild(container.firstElementChild);
}

export function showErrorState(){
    container.insertAdjacentHTML('afterbegin', 
        `<p>
        I'm sorry, something went wrong... please reload the page
        </p>`)
}