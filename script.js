// script.js

// Az API-ról való lekérdezés és az adatok feldolgozása
fetch('https://randomuser.me/api/')
  .then(response => response.json()) // JSON formátumra alakítjuk a választ
  .then(data => {
    const user = data.results[0]; // Az első felhasználó adatai
    const pictureUrl = user.picture.large; // Nagy méretű kép URL-je

    // A lekért kép beállítása az <img> elembe
    document.getElementById('user-image').src = pictureUrl;
  })
  .catch(error => {
    console.error('Hiba történt a lekérdezés során:', error);
  });