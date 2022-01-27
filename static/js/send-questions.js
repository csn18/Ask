'use strict';

const addForm = document.querySelector('.add-answer')

addForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let data = new FormData()
    let currentUrl = document.URL

    data.append('answer_name', document.querySelector('.as-name').value)
    data.append('', document.querySelector('.image-answer').files[0])

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.post(`${currentUrl}add/`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
})
