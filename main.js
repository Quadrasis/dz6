const namePost = document.getElementById('namePost')
const surnamePost = document.getElementById('surnamePost')
const emailPost = document.getElementById('emailPost')
const btnPost = document.getElementById('btnPost')
const URL = 'http://localhost:3333/users';
//POST запрос
const postUser = () => {
    const dataUser = {
        name: namePost.value,
        surname: surnamePost.value,
        email: emailPost.value
    }
    let post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }
    fetch(URL, post).then(response => response.json())
}
btnPost.addEventListener('click', postUser)
// PATCH запрос
const namePatch = document.getElementById('namePatch')
const surnamePatch = document.getElementById('surnamePatch')
const emailPatch = document.getElementById('emailPatch')
const btnPatch = document.getElementById('btnPatch')
const userID = document.getElementById('userID')
const getUser = document.getElementById('getUser')
function getUserID (){
    const id = userID.value;

    fetch(`${URL}/${id}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }else {
                return `Error ${response.status}`
            }
        })
            .then(data => console.log(data))
}
function patchUserID (){
    const id = document.getElementById('id')
    const dataUser = {
        name: namePatch.value,
        surname: surnamePatch.value,
        email: emailPatch.value
    }
    let patch = {
        method: 'PATCH',
        headers: {
            'Content-tye': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }
    fetch(`http://localhost:3333/users/${id.value}`, patch).then(response => response.json()).then(res => console.log(res))
    // fetch(`${URL}/${id.value}`, patch).then(response => response.json()).then(res => console.log(res))
}
btnPatch.addEventListener('click',patchUserID)
getUser.addEventListener('click', getUserID)
//Метод DELETE
const nameDelete = document.getElementById('nameDelete')
const surnameDelete = document.getElementById('surnameDelete')
const emailDelete = document.getElementById('emailDelete')
const btnDelete = document.getElementById('btnDelete')
function deleteUser () {
    const id = document.getElementById('deleteID')
    const dataUser = {
        name: nameDelete.value,
        surname: surnameDelete.value,
        email: emailDelete.value
    }
    const DELETE = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }
    fetch(`http://localhost:3333/users/${id.value}`, DELETE).then(response => response.json()).then(res => res.status)
}
btnDelete.addEventListener('click', deleteUser)