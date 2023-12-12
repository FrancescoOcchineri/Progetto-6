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
let p2 = new Product("The Witcher 3", "Action RPG", "CD Projekt", "https://m.media-amazon.com/images/I/81FK7ZyBvTL._AC_SL1500_.jpg", 49.99);
let p3 = new Product("Cyberpunk 2077", "Open-world RPG", "CD Projekt", "https://m.media-amazon.com/images/I/81ciqPxpHEL._AC_SL1500_.jpg", 59.99);
let p4 = new Product("Red Dead Redemption 2", "Action-Adventure", "Rockstar Games", "https://m.media-amazon.com/images/I/71az6dtuJxL._AC_SL1500_.jpg", 39.99);
let p5 = new Product("Assassin's Creed Valhalla", "Action RPG", "Ubisoft", "https://m.media-amazon.com/images/I/81FgG8d4P0L._AC_SL1500_.jpg", 69.99);
let p6 = new Product("Final Fantasy XV", "Action RPG", "Square Enix", "https://m.media-amazon.com/images/I/91gOxtYdu9L._AC_SL1500_.jpg", 49.99);
let p7 = new Product("Ghost of Tsushima", "Action-Adventure", "Sucker Punch Productions", "https://m.media-amazon.com/images/I/81cIKu20eKL._AC_SL1500_.jpg", 59.99);
let p8 = new Product("Horizon Zero Dawn", "Action RPG", "Guerrilla Games", "https://m.media-amazon.com/images/I/61Cn9b-2YfL._AC_SL1500_.jpg", 39.99);
let p9 = new Product("Elder Scrolls V: Skyrim", "Action RPG", "Bethesda Game Studios", "https://m.media-amazon.com/images/I/71zwAO5o5rL._AC_SL1500_.jpg", 29.99);

document.addEventListener("DOMContentLoaded", async () => {
    getData(url);
});

let url = "https://striveschool-api.herokuapp.com/api/product/";

function getData(url) {
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU0OWMwNTgzNTAwMTg1MjJmODgiLCJpYXQiOjE3MDIzNzY3NzcsImV4cCI6MTcwMzU4NjM3N30.vNStGYea9QyMEVDBApMNADTJtNOZ7J0Hg6Z4ldzcaXQ'
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let img = document.querySelectorAll('img');
            img.forEach(image => {
                image.src = json[0].imageUrl
            })
        })
}

function createData(data, uri) {
    fetch(uri, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU0OWMwNTgzNTAwMTg1MjJmODgiLCJpYXQiOjE3MDIzNzY3NzcsImV4cCI6MTcwMzU4NjM3N30.vNStGYea9QyMEVDBApMNADTJtNOZ7J0Hg6Z4ldzcaXQ',
            "Content-Type": "application/json"
        }
    })
        .catch(err => console.log(err))
}





