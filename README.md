# U05-RESTFUL-API-jossan93
# Komma igång
Skapa en .env-fil baserat på .env.example.

Kör npm install && npm run build.

Starta upp Docker och kör docker compose up -d i terminalen.

Anslut till den lokala databasen med:mongodb://root:123@localhost:27017/

Skapa en ny lokal databas API_books och en collection Book.

Ladda upp copy of database.json i MongoDB Compass eller kopiera och klistra in datan.

Uppdatera dokumenten och starta servern:npm start

# Endpoints

## Köra mot den lokala versionen

### Hämta alla böcker

GET /api/books

Hämtar en lista över alla böcker.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books

Statuskoder:

200 OK – Returnerar en lista med böcker.

500 Internal Server Error – error getting books.

### Hämta en bok med en del av en titel

GET /api/books/partialTitle

Söker efter böcker med en titel som matchar en delsträng.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books/partialTitle \
     -H "Content-Type: application/json" \
     -d '{ "title": "The" }'

Statuskoder:

200 OK – Returnerar en lista av matchande böcker.

400 Bad Request – title is required.

404 Not Found – No books found with the given title.

500 Internal Server Error - error getting books.

### Hämta en bok med ID

GET /api/books/:bookID

Hämtar en specifik bok baserat på ID.

Exempel på cURL-anrop:

curl -X GET http://localhost:3000/api/books/67d9be8ca468f84b663c1dfd

Statuskoder:

200 OK – Returnerar boken.

404 Not Found – book not found.

500 Internal Server Error – invalid ID format.

### Skapa en ny bok

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

201 Created – book has been added.

400 Bad Request – All fields (title, ISBN, Summary, Author) are required.

500 Internal Server Error – Error creating book.

### Uppdatera en bok

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

200 OK – Book updated successfully.

404 Not Found – book not found.

500 Internal Server Error – Error updating book.

### Radera en bok

DELETE /api/books/delete/:id

Tar bort en bok baserat på ID.

Exempel på cURL-anrop:

curl -X DELETE http://localhost:3000/api/books/delete/67e13f37c3fb42e80d6f5545

Statuskoder:

200 OK – book has been deleted.

404 Not Found – book not found.

500 Internal Server Error – Error deleting book.

## Köra mot den deployade versionen

### Hämta alla böcker

GET /api/books

Hämtar en lista över alla böcker.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/

Statuskoder:

200 OK – Returnerar en lista med böcker.

500 Internal Server Error – error getting books.

### Hämta en bok med en del av en titel

GET /api/books/partialTitle

Söker efter böcker med en titel som matchar en delsträng.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/partialTitle \
     -H "Content-Type: application/json" \
     -d '{ "title": "The" }'

Statuskoder:

200 OK – Returnerar en lista av matchande böcker.

400 Bad Request – title is required.

404 Not Found – No books found with the given title".

500 Internal Server Error - error getting books.

### Hämta en bok med ID

GET /api/books/:bookID

Hämtar en specifik bok baserat på ID.

Exempel på cURL-anrop:

curl -X GET https://u05-restful-api-jossan93.onrender.com/api/books/67d9be8ca468f84b663c1dfd

Statuskoder:

200 OK – Returnerar boken.

404 Not Found – book not found.

500 Internal Server Error – invalid ID format.

### Skapa en ny bok

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

201 Created – book has been added.

400 Bad Request – All fields (title, ISBN, Summary, Author) are required.

500 Internal Server Error – Error creating book.

### Uppdatera en bok

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

200 OK – Book updated successfully.

404 Not Found – book not found.

500 Internal Server Error – Error updating book.

### Radera en bok

DELETE /api/books/delete/:id

Tar bort en bok baserat på ID.

Exempel på cURL-anrop:

curl -X DELETE https://u05-restful-api-jossan93.onrender.com/api/books/delete/67e13f37c3fb42e80d6f5545

Statuskoder:

200 OK – book has been deleted.

404 Not Found – book not found.

500 Internal Server Error – Error deleting book.


# Länk till den deployade sidan
https://u05-restful-api-jossan93.onrender.com