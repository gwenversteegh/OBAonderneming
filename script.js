import { getData } from "./modules/getData.js"
import { sectionInViewport, sectionInViewportBack  } from "./modules/scroll.js"
import {zoeken} from "./modules/search.js"



zoeken ()
sectionInViewport()
sectionInViewportBack()

const url = 'https://zoeken.oba.nl/api/v1/search/?q=%22voeding%22&refine=true&authorization=16c19e6083308c984c452600134989ba&sort=act_dt_asc&output=json' //&branch=OBA%20geuzenveld'


fetch(url)
    .then (function(response){
        response.json()
    })
    .then(data => {
        console.log(data.results)
    })

