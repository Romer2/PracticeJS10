let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


let array = [{ title: 'Название новости', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!' },{ title: 'Название новости', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!' },{ title: 'Название новости', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!' }];

let form = document.forms.news;
let titleInput = form.elements.title;
let descInput = form.elements.desc;
let btn = form.elements.btn;
// btn.addEventListener('click', form)

let flag = true;
form.addEventListener('submit', addNew);
function addNew(event){
    event.preventDefault();

    let title = titleInput.value;
    let desc = descInput.value;
    if (titleInput.classList.contains('error')) {
        titleInput.classList.remove('error');
        titleErr.innerHTML = "";
    }
    if (descInput.classList.contains('error')) {
        descInput.classList.remove('error');
        descErr.innerHTML = '';
    }


    if (title === '') {
        titleErr.innerHTML = 'Заполните поле';
        flag = false;
        titleInput.classList.add('error');
    } else if (title.length <= 8) {
        titleErr.innerHTML = 'Название должно быть не менее 8 символов';
        flag = false;
        titleInput.classList.add('error');
    }

    if (desc === '') {
        descErr.innerHTML = 'Заполните поле';
        flag = false;
        descInput.classList.add('error');
    } else if (desc.length > 300) {
        descErr.innerHTML = 'Описание должно быть не более 300 символов';
        flag = false;
        descInput.classList.add('error');
    }

    if (flag) {

        array.push({
            title: title,
            description: desc
        });
        title = '';
        desc = '';
        modal.classList.remove('modal_active');
        displayNews();

    }


};

function formatNews(newsItem) {
    return `<h3>${newsItem.title}</h3><p class="news-item__p">${newsItem.description}</p>`;
}

const output = document.querySelector('.news-wrapper');
function displayNews() {
    output.innerHTML = ''; 
    array.forEach(news => {
        let formNews = formatNews(news);
        let newsItem = document.createElement('div');
        newsItem.classList.add("news-item")
        newsItem.innerHTML = formNews;
        output.appendChild(newsItem);
    });
}


displayNews()