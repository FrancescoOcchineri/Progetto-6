document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.invia');
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
                console.log(json);
                json.forEach(product => {
                    let productInfo = document.createElement('div');
                    let title = document.createElement('h4');
                    title.className = "text-danger";
                    productInfo.classList.add('product-info');
                    productInfo.innerHTML = `
                    <li class="text-white mt-2">${product.name} --  Category: ${product.description} --  Brand: ${product.brand} --  Price: ${product.price}€ --  ID: ${product._id}</li>
                    `;
                    let info = document.querySelector('.productInfo')
                    info.appendChild(productInfo);
                });
            })
            .catch(error => console.error('Errore durante la richiesta:', error));
    }
    getData(url);

    function createData(json, url) {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    function deleteProduct() {
        let productId = document.querySelector('#product-id-input').value;
        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
                "Content-Type": "application/json"
            }

        })
            .catch(error => console.error('Errore durante la richiesta DELETE:', error));
    }

    function modifyProduct() {
        let productId = document.querySelector('#product-id-input').value;
        let name = document.querySelector('#name').value;
        let description = document.querySelector('#category').value;
        let brand = document.querySelector('.form-select').value;
        let img = document.querySelector('#img').value;
        let price = document.querySelector('#price').value;
        let data = {
            name: name,
            description: description,
            brand: brand,
            imageUrl: img,
            price: price
        };

        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'PUT',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dati modificati:', data);
            })
            .catch(error => console.error('Errore durante la richiesta PUT:', error));
    }

    button.addEventListener('click', () => {
        event.preventDefault()
        let name = document.querySelector('#name').value
        let description = document.querySelector('#category').value
        let brand = document.querySelector('.form-select').value
        let img = document.querySelector('#img').value
        let price = document.querySelector('#price').value
        let product = {
            name: name,
            description: description,
            brand: brand,
            imageUrl: img,
            price: price
        }
        createData(product, url)
    })
    let back = document.querySelector('.back')
    back.addEventListener('click', () => {
        window.location = 'home.html'
    })
    let home = document.querySelector('.home')
    home.addEventListener('click', () => {
        window.location = 'home.html'
    })
    let cancella = document.querySelector('.cancella');
    cancella.addEventListener('click', () => {
        let conferma = confirm('Are you sure to delete this product?')
        if (conferma) {
            deleteProduct();
        } else { }
    })
    let modify = document.querySelector('.modify')
    modify.addEventListener('click', () => {
        modify.classList.add('d-none')
        let edit = document.querySelector('.edit')
        edit.classList.remove('d-none')
        let cancella = document.querySelector('.cancella')
        cancella.classList.remove('d-none')
        let invia = document.querySelector('.invia')
        invia.classList.add('d-none')
        let gameId = document.querySelector('.padd')
        gameId.classList.remove('d-none')
        alert('For DELETE using only "Game ID in the "Product in stock" section')
        let backto = document.querySelector('.return')
        backto.classList.remove('d-none')
        backto.addEventListener('click', () => {
            modify.classList.remove('d-none')
            edit.classList.add('d-none')
            cancella.classList.add('d-none')
            invia.classList.remove('d-none')
            gameId.classList.add('d-none')
            backto.classList.add('d-none')
        })
    })
    let edit = document.querySelector('.edit')
    edit.addEventListener('click', () => {
        modifyProduct()
    })
    let reset = document.querySelector('.reset')
    reset.addEventListener('click', () => {
        let conferma = confirm('Are you sure to reset all form?')
        if (conferma) {
            reset.setAttribute('type', 'reset')
        } else {
            reset.setAttribute('type', 'button')
        }
    })
})