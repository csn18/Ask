'use strict';
console.log('connect qs')

const addFormQuestions = document.querySelector('.add-question')
const addFormAnswers = document.querySelector('.add-answer')
const inputLoadFile = document.querySelector('#file-input')
const previewImage = document.querySelector('.loaded-image')

try {
    addFormQuestions.addEventListener('submit', function (e) {
        e.preventDefault()

        let data = new FormData()
        let currentUrl = document.URL

        data.append('answer_name', document.querySelector('.qs-name').value)

        console.log(data)
        console.log(currentUrl)

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(`${currentUrl}add/`, data)
    })
} catch {
    console.log('error')
}

try {
    addFormAnswers.addEventListener('submit', function (e) {
        e.preventDefault()

        let data = new FormData()
        let currentUrl = document.URL


        data.append('answer_name', document.querySelector('.as-name').value)
        data.append('image', document.querySelector('#file-input').files[0])


        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(`${currentUrl}add/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    })
} catch {
    console.log('error')
}


inputLoadFile.addEventListener('change', function () {
    const [file] = this.files
    if (file) {
        previewImage.src = URL.createObjectURL(file)
    }
})
