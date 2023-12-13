class Product {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

let p1 = new Product("Diablo IV", "Open-world RPG", "Blizzard Entertainment", "https://m.media-amazon.com/images/I/61SrkfhCyCL._AC_SL1400_.jpg", 79.99);
let p2 = new Product("The Witcher 3", "Action RPG", "CD Projekt", "https://m.media-amazon.com/images/I/81AeDNt4STL._AC_SL1500_.jpg", 49.99);
let p3 = new Product("Cyberpunk 2077", "Open-world RPG", "CD Projekt", "https://m.media-amazon.com/images/I/81ciqPxpHEL._AC_SL1500_.jpg", 59.99);
let p4 = new Product("Red Dead Redemption 2", "Action-Adventure", "Rockstar Games", "https://m.media-amazon.com/images/I/81GEQY7xeAL._AC_SL1500_.jpg", 39.99);
let p5 = new Product("Assassin's Creed Valhalla", "Action RPG", "Ubisoft", "https://m.media-amazon.com/images/I/71t3-jTtScL._AC_SL1500_.jpg", 69.99);
let p6 = new Product("Final Fantasy XV", "Action RPG", "Square Enix", "https://m.media-amazon.com/images/I/71CNs8FaCAL._AC_SL1500_.jpg", 49.99);
let p7 = new Product("Ghost of Tsushima", "Action-Adventure", "Sucker Punch Productions", "https://m.media-amazon.com/images/I/81R1L3xzD1S._AC_SL1500_.jpg", 59.99);
let p8 = new Product("Horizon Zero Dawn", "Action RPG", "Guerrilla Games", "https://m.media-amazon.com/images/I/81DXz-lWkSL._AC_SL1500_.jpg", 39.99);
let p9 = new Product("Elder Scrolls V: Skyrim", "Action RPG", "Bethesda Game Studios", "https://m.media-amazon.com/images/I/81WP+qz1eTL._AC_SL1500_.jpg", 29.99);

document.addEventListener("DOMContentLoaded", async () => {
    getData(url);
});

let url = "https://striveschool-api.herokuapp.com/api/product/";

function getData(url) {
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let cardImages = document.querySelectorAll('.card img');
            for (let i = 0; i < cardImages.length; i++) {
                cardImages[i].src = json[i].imageUrl
            }
            let cardTitle = document.querySelectorAll('.card-title');
            for (let i = 0; i < cardTitle.length; i++) {
                cardTitle[i].innerHTML = json[i].name
            }
            let cardDescription = document.querySelectorAll('.description');
            for (let i = 0; i < cardDescription.length; i++) {
                cardDescription[i].innerHTML = json[i].description
            }
            let cardBrand = document.querySelectorAll('.brand');
            for (let i = 0; i < cardBrand.length; i++) {
                cardBrand[i].innerHTML = json[i].brand
            }
            let cardPrice = document.querySelectorAll('.price');
            for (let i = 0; i < cardPrice.length; i++) {
                cardPrice[i].innerHTML = json[i].price + '€'
            }
            for (let i = 9; i < json.length; i++) {
                let grid = document.querySelector('.g-5')
                let card = document.createElement('div');
                card.className = 'col'
                card.innerHTML = `
            <div class="card h-100" style="width: 18rem;">
                <img src="${json[i].imageUrl}" class="card-img-top h-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${json[i].name}</h5>
                    <p class="card-text description fw-bold">${json[i].description}</p>
                    <p class="card-text brand">${json[i].brand}</p>
                    <p class="card-text price mt-auto">${json[i].price}€</p>
                    <button type="button" class="btn btn-warning"><i
                    class="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-danger mx-2 elimina"><i
                    class="bi bi-trash-fill"></i></button>
                </div>
            </div>
        `;
                grid.appendChild(card);
            }
        })
}

function createData(data, url) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
            "Content-Type": "application/json"
        }
    })
        .catch(err => console.log(err))
}

function deleteData(productId) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
        method: 'DELETE',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
            "Content-Type": "application/json"
        }
    })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    let back = document.querySelector('.office');
    back.addEventListener('click', () => {
        window.location = 'backoffice.html'
    })
    let buttonDelete = document.querySelectorAll('.elimina');
    buttonDelete.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
        })
    })
    let cardId = document.querySelectorAll('.card-id');
    for (let i = 0; i < cardId.length; i++) {
        cardId[i].innerHTML = json[i]._id;
    }
})




