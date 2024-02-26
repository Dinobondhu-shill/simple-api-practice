function photoByClick (){
  fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(photo => getPhoto(photo))
}

function getPhoto (photos){
  const photoGallery = document.getElementById('photo-container')
  for(const photo of photos){
    const photoDiv = document.createElement('div')
    photoDiv.innerHTML = `
    
    <h3>${photo.title}</h3>
    <h5>Id:${photo.id}</h5>
    <img src="${photo.url}" >

    `
    photoGallery.appendChild(photoDiv);
  }
}