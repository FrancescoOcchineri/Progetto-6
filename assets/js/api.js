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
                json.forEach(p => {
                    console.log(p._id)
                })
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
            .then(response => {
                if (response.ok) {
                    fetchProducts();
                } else {
                    console.error('Errore durante la richiesta DELETE:', response.statusText);
                }
            })
            .catch(error => console.error('Errore durante la richiesta DELETE:', error));
    }

    button.addEventListener('click', () => {
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
        let inputControl = document.querySelector('.controllo')
        if ((inputControl.value == "") || (inputControl == "undefined")) {
            alert("Il campo Nome è obbligatorio.");
            document.modulo.nome.focus();
            return false;
        }
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
        deleteProduct();
    })

})