# U05-RESTFUL-API-jossan93
### Komma igång
Skapa en .env-fil baserat på .env.example.

Kör npm install && npm run build.

Starta upp Docker och kör docker compose up -d i terminalen.

Anslut till den lokala databasen med:mongodb://root:123@localhost:27017/

Skapa en ny lokal databas API_books och en collection Book.

Ladda upp copy of database.json i MongoDB Compass eller kopiera och klistra in datan.

Uppdatera dokumenten och starta servern:npm start

### Endpoints

## Hämta alla böcker

GET /api/books

Hämtar en lista över alla böcker.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books

# Statuskoder:

200 OK – Returnerar en lista med böcker.

500 Internal Server Error – Något gick fel på servern.

## Hämta en bok med en del av en titel

GET /api/books/partialTitle

Söker efter böcker med en titel som matchar en delsträng.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books/partialTitle \
     -H "Content-Type: application/json" \
     -d '{ "Title": "The" }'

Statuskoder:

200 OK – Returnerar en lista av matchande böcker.

400 Bad Request – Titel saknas i förfrågan.

404 Not Found – Ingen bok hittades med den titeln.

## Hämta en bok med ID

GET /api/books/:bookID

Hämtar en specifik bok baserat på ID.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books/67d9be8ca468f84b663c1dfd

Statuskoder:

200 OK – Returnerar boken.

404 Not Found – Ingen bok hittades med det angivna ID:t.

500 Internal Server Error – Felaktigt ID-format.

## Skapa en ny bok

POST /api/books/createBook

Lägger till en ny bok i databasen.

Exempel på cURL-anrop:

curl -X POST http://localhost:3000/api/books/createBook \
     -H "Content-Type: application/json" \
     -d '{
           "Title": "New Book",
           "ISBN": "123456789",
           "Summary": "A great book about...",
           "Author": "John Doe"
         }'

Statuskoder:

201 Created – Boken skapades framgångsrikt.

400 Bad Request – Saknade eller ogiltiga fält.

500 Internal Server Error – Något gick fel på servern.

## Uppdatera en bok

PUT /api/books/update/:id

Uppdaterar en befintlig bok baserat på ID.

Exempel på cURL-anrop:

curl -X PUT http://localhost:3000/api/books/update/67e13f37c3fb42e80d6f5545 \
     -H "Content-Type: application/json" \
     -d '{
           "Title": "Updated Book Title",
           "Summary": "Updated Summary"
         }'

Statuskoder:

200 OK – Boken uppdaterades.

404 Not Found – Ingen bok med det angivna ID:t hittades.

500 Internal Server Error – Något gick fel på servern.

## Radera en bok

DELETE /api/books/delete/:id

Tar bort en bok baserat på ID.

Exempel på cURL-anrop:

curl -X DELETE http://localhost:3000/api/books/delete/67e13f37c3fb42e80d6f5545

Statuskoder:

200 OK – Boken raderades.

404 Not Found – Ingen bok hittades med det angivna ID:t.

500 Internal Server Error – Något gick fel på servern.

### Köra mot den deployade versionen

## Hämta alla böcker

GET /api/books

Hämtar en lista över alla böcker.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/

Statuskoder:

200 OK – Returnerar en lista med böcker.

500 Internal Server Error – Något gick fel på servern.

## Hämta en bok med en del av en titel

GET /api/books/partialTitle

Söker efter böcker med en titel som matchar en delsträng.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/partialTitle \
     -H "Content-Type: application/json" \
     -d '{ "Title": "The" }'

Statuskoder:

200 OK – Returnerar en lista av matchande böcker.

400 Bad Request – Titel saknas i förfrågan.

404 Not Found – Ingen bok hittades med den titeln.

## Hämta en bok med ID

GET /api/books/:bookID

Hämtar en specifik bok baserat på ID.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/67d9be8ca468f84b663c1dfd

Statuskoder:

200 OK – Returnerar boken.

404 Not Found – Ingen bok hittades med det angivna ID:t.

500 Internal Server Error – Felaktigt ID-format.

## Skapa en ny bok

POST /api/books/createBook

Lägger till en ny bok i databasen.

Exempel på cURL-anrop:

curl -X POST https://u05-restful-api-jossan93.onrender.com/api/books/createBook \
     -H "Content-Type: application/json" \
     -d '{
           "Title": "New Book",
           "ISBN": "123456789",
           "Summary": "A great book about...",
           "Author": "John Doe"
         }'

Statuskoder:

201 Created – Boken skapades framgångsrikt.

400 Bad Request – Saknade eller ogiltiga fält.

500 Internal Server Error – Något gick fel på servern.

## Uppdatera en bok

PUT /api/books/update/:id

Uppdaterar en befintlig bok baserat på ID.

Exempel på cURL-anrop:

curl -X PUT https://u05-restful-api-jossan93.onrender.com/api/books/update/67e13f37c3fb42e80d6f5545 \
     -H "Content-Type: application/json" \
     -d '{
           "Title": "Updated Book Title",
           "Summary": "Updated Summary"
         }'

Statuskoder:

200 OK – Boken uppdaterades.

404 Not Found – Ingen bok med det angivna ID:t hittades.

500 Internal Server Error – Något gick fel på servern.

## Radera en bok

DELETE /api/books/delete/:id

Tar bort en bok baserat på ID.

Exempel på cURL-anrop:

curl -X DELETE https://u05-restful-api-jossan93.onrender.com/api/books/delete/67e13f37c3fb42e80d6f5545

Statuskoder:

200 OK – Boken raderades.

404 Not Found – Ingen bok hittades med det angivna ID:t.

500 Internal Server Error – Något gick fel på servern.


### Länk till den deployade sidan
https://u05-restful-api-jossan93.onrender.com