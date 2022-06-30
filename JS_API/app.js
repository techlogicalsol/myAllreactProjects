const app = document.querySelector('#root')
const search = document.querySelector('#srch')
const btnSearch = document.querySelector('button')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const perPage = document.querySelector('#per-page')

//fetch api

const photos = async(value, page, perpage) =>{
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container)

    const settings = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': '563492ad6f917000010000012ca599504ebe41049e30d189b7401240'
        }
    }
    const URL = `https://api.pexels.com/v1/search?page=${page}&per_page=${perpage}&query=${value}`

    const response = await fetch(URL, settings)
    // console.log(response)

    const data = await response.json()
    console.log(data.photos)
    const photos = data.photos


    if(response.status >= 200 && response.status < 400){
        photos.forEach(photo => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h2 = document.createElement('div');
            h2.textContent = photo.photographer
            
            const img = document.createElement('img');
            img.src = `${photo.src.medium}`

            card.appendChild(h2)
            card.appendChild(img)
            container.appendChild(card)
            
        });
    }
    else{
        const err = document.createElement('h2');
        err.textContent = `Sorry it is not working`
        app.appendChild(err)
    }
}

let value = 'car';
let page = 1;
let perpage = 15;

function showPhotos(){
    const reset = document.querySelector('.container')
    app.removeChild(reset);
    photos(value, page, perpage)
}

btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    value = search.value.toLowerCase();
    console.log(value)
    if(value !== ''){
        showPhotos()
    }
})


next.addEventListener('click', ()=>{
    page += 1;
    showPhotos()
})

prev.addEventListener('click', ()=>{
    page === 1 ? page = 1 : page -= 1;
    showPhotos()
})

perPage.addEventListener('change', ()=>{
    perpage = perPage.value;
    showPhotos()
})

photos(value, page, perpage)