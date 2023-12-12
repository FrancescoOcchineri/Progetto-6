document.addEventListener('DOMContentLoaded', () => {
    let name = document.querySelector('#name').value
    let description = document.querySelector('#category').value
    let brand = document.querySelector('.form-select').value
    let img = document.querySelector('#img').value
    let price = document.querySelector('#price').value
    let product = {
        name: name,
        description: description,
        brand: brand,
        img: img,
        price: price
    }

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
                console.log(json);

            })
            .catch(error => console.error('Errore durante la richiesta:', error));
    }
    getData(url)
    createData(product, url)

    function createData(product, url) {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU0OWMwNTgzNTAwMTg1MjJmODgiLCJpYXQiOjE3MDIzNzY3NzcsImV4cCI6MTcwMzU4NjM3N30.vNStGYea9QyMEVDBApMNADTJtNOZ7J0Hg6Z4ldzcaXQ',
                "Content-Type": "application/json"
            }
        })
            .catch(err => console.log(err))
    }
})