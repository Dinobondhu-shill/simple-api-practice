function getPost (){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}

function displayPost(data) {
  const div = document.getElementById("post-container")
  for (const post of data) {
    const innerDiv = document.createElement('div')
    innerDiv.innerHTML = `
    <h4>User Id: ${post.id}</h4>
    <h2>Post title: ${post.title}</h2>
    <p>Post: ${post.body}</p>
    
    `
    div.appendChild(innerDiv);
  }
}