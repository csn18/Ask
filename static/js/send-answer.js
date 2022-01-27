'use strict';

const addForm = document.querySelector('.add-question')

addForm.addEventListener('submit', function (e){
    e.preventDefault()

    let data = new FormData()
    let currentUrl = document.URL

    data.append('answer_name', document.querySelector('.qs-name').value)

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.post(`${currentUrl}add/`, data)
})
