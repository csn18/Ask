
const inputLoadFile = document.querySelector('#file-input')
const previewImage = document.querySelector('.loaded-image')

inputLoadFile.addEventListener('change', function (){
  const [file] = this.files
  if (file) {
    previewImage.src = URL.createObjectURL(file)
  }
})
