# OBA ondernemen

## Link to github Pages:
https://gwenversteegh.github.io/OBAonderneming/

## About
Het is een single-page-website voor jonge ondernemers die zich meer willen inlezen en meer informatie willen over het opstarten en onderhouden van een onderneming. 

## Features

### Searchbalk
Voor de ondernemer die even snel een boek wilt zoeken of al weet welk boek hij wil, maar nog iets meer informatie nodig heeft, kan bovenin de pagina doormiddel van de zoekbalk zijn/haar boek zoeken. Wanneer er niks gezocht wordt, worden de ondernemingsboeken automatisch getoond.

<img width="231" alt="Screenshot 2022-03-18 at 11 21 13" src="https://user-images.githubusercontent.com/70900763/158985642-1d997588-4b5c-4357-9507-daf1a430be06.png">

### Hover for information
Wanneer je over de boeken hovert, of op de telefoon op een boek klikt, kun je meer informatie lezen over het boek. Een soort korte samenvatting.

<img width="369" alt="Screenshot 2022-03-18 at 11 22 33" src="https://user-images.githubusercontent.com/70900763/158985790-ca38bb65-b4ff-483e-9a92-f62a9cd647ca.png">

### Loadingstate
Wanneer het internet erg traag is zal er een loadingstate te zien zijn. Hierdoor weet de gebruiker dat ze nog eventjes moeten wachten, maar dat de boeken er wel aankomen.

<img width="231" alt="Screenshot 2022-03-18 at 11 21 33" src="https://user-images.githubusercontent.com/70900763/158985706-3f7acf52-9b53-4b2e-8583-704e56dc7590.png">

### Errorstate
Wanneer er iets mis gaat met het ophalen van de data zal er een errorstate te zien zijn. De gebruiker moet de pagina dan even herladen zodat de data opnieuw opgehaald wordt.

<img width="231" alt="Screenshot 2022-03-18 at 11 21 26" src="https://user-images.githubusercontent.com/70900763/158985689-ef0c3890-e2d3-4807-9e60-698198b4ade1.png">


## Activity Diagram

<img width="797" alt="Screenshot 2022-03-18 at 11 20 27" src="https://user-images.githubusercontent.com/70900763/158985508-a6f06fc2-8624-4b6e-af64-897fa0240da3.png">

## Hoe instaleer je het?
Github kan lastig zijn om te gebruiken wanneer je niet weet hoe het werkt. Download als eerst de Github desktop app. Dit scheelt veel tijd en moeite. Wanneer je op mijn Github pagina bent zul je rechtsbovenin een groene button zien met "code". Klik op deze button en klik op "open with github desktop". Nu kun je mijn code op je eigen computer gebruiken en aanpassen.

<img width="305" alt="Screenshot 2022-03-08 at 09 22 13" src="https://user-images.githubusercontent.com/70900763/157196877-86eb761c-f184-4eae-803f-39bbc56f5548.png"> <img width="380" alt="Screenshot 2022-03-08 at 09 23 28" src="https://user-images.githubusercontent.com/70900763/157196928-f4d6b20c-eb01-4fab-8648-f04ec7ef63c3.png">

## API informatie
Er worden twee API's gebruikt. De eerste is voor de boeken en de 2e is voor leermaterialen.

1.https://zoeken.oba.nl/api/v1/search/?q=%22voeding%22&refine=true&authorization=16c19e6083308c984c452600134989ba&sort=act_dt_asc&output=json

2.http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json
