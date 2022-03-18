import { getData, getData2 } from "./modules/getData.js"
import { sectionInViewport, sectionInViewportBack  } from "./modules/scroll.js"
import {zoeken} from "./modules/search.js"
import { showLoadingState } from "./modules/states.js"

getData()
getData2()
showLoadingState()
zoeken()
sectionInViewport()
sectionInViewportBack()



fetch(url)
    .then (function(response){
        response.json()
    })
    .then(data => {
        console.log(data.results)
    })

