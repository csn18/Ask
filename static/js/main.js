'use strict';
const addFormQuestions = document.querySelector('.add-question')
const inputLoadFile = document.querySelector('#file-input')
const previewImage = document.querySelector('.loaded-image')
const updateProfileBtn = document.querySelector('.update-profile-btn')

updateProfileBtn.addEventListener('click', function() {
    let block = document.createElement('div')
    block.classList.add('update-profile-window')
    document.querySelector('.container').appendChild(block)
})

try {
    addFormQuestions.addEventListener('submit', function (e) {
        e.preventDefault()

        let data = new FormData()
        let currentUrl = document.URL

        data.append('answer_name', document.querySelector('.qs-name').value)

        document.getElementById('id_question_name').value = ''
        QuestionSuccessAdded()
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(`${currentUrl}add/`, data)
    })
} catch {
    console.log('error')
}


function QuestionSuccessAdded() {
    let block = document.createElement('div')
    let text = document.createElement('h5')

    block.classList.add('success-added-info')
    block.classList.add('animate__animated')
    block.classList.add('animate__bounceInLeft')
    text.innerText = 'Вопрос был отправлен'

    block.appendChild(text)
    document.querySelector('.container').append(block)

    setTimeout(() => {
        let element = document.querySelector('.success-added-info')
        element.classList.remove('animate__bounceInLeft')
        element.classList.add('animate__bounceOutLeft')
    }, 2000)

    setTimeout(() => {
        document.querySelector('.success-added-info').remove()
    }, 3500)
}

inputLoadFile.addEventListener('change', function () {
    const [file] = this.files
    if (file) {
        previewImage.src = URL.createObjectURL(file)
    }
})
