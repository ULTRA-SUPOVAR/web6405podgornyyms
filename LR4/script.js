async function fetchNews() {
    try {
      const response = await fetch('http://localhost:3000/news');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const news = await response.json();
      displayNews(news);
    } catch (error) {
      console.error('Ошибка при загрузке новостей:', error);
      displayNewsError();
    }
  }
  
  function displayNews(news) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
  
    if (news.length === 0) {
      const noNewsMessage = document.createElement('p');
      noNewsMessage.textContent = 'Новостей пока нет.';
      newsContainer.appendChild(noNewsMessage);
      return;
    }
  
    news.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
  
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      const date = document.createElement('p');
      date.classList.add('date');
      date.textContent = item.date;
  
      const content = document.createElement('p');
      content.textContent = item.content;
  
      newsItem.appendChild(title);
      newsItem.appendChild(date);
      newsItem.appendChild(content);
  
      newsContainer.appendChild(newsItem);
    });
  }
  
  function displayNewsError() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
  
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Произошла ошибка при загрузке новостей.';
    newsContainer.appendChild(errorMessage);
  }
  
  fetchNews();

  async function fetchConcerts() {
    try {
      const response = await fetch('http://localhost:3000/concerts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const concerts = await response.json();
      displayConcerts(concerts);
    } catch (error) {
      console.error('Ошибка при загрузке концертов:', error);
      displayConcertsError();
    }
  }
  
  function displayConcerts(concerts) {
    const concertsList = document.getElementById('concerts-list');
    concertsList.innerHTML = '';
  
    if (concerts.length === 0) {
      const noConcertsMessage = document.createElement('tr');
      noConcertsMessage.innerHTML = `<td colspan="3">Концертов пока нет.</td>`;
      concertsList.appendChild(noConcertsMessage);
      return;
    }
  
    concerts.forEach(concert => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${concert.date}</td>
        <td>${concert.city}</td>
        <td>${concert.venue}</td>
      `;
      concertsList.appendChild(row);
    });
  }
  
  function displayConcertsError() {
    const concertsList = document.getElementById('concerts-list');
    concertsList.innerHTML = '';
  
    const errorMessage = document.createElement('tr');
    errorMessage.innerHTML = `<td colspan="3" class="error-message">Произошла ошибка при загрузке списка концертов.</td>`;
    concertsList.appendChild(errorMessage);
  }
  
  fetchConcerts();

  async function fetchAlbums() {
    try {
      const response = await fetch('http://localhost:3000/albums');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const albums = await response.json();
      displayAlbums(albums);
    } catch (error) {
      console.error('Ошибка при загрузке альбомов:', error);
      displayAlbumsError();
    }
  }
  
  function displayAlbums(albums) {
    const albumsContainer = document.getElementById('albums-container');
    albumsContainer.innerHTML = '';
  
    if (albums.length === 0) {
      const noAlbumsMessage = document.createElement('p');
      noAlbumsMessage.classList.add('error-message');
      noAlbumsMessage.textContent = 'Альбомов пока нет.';
      albumsContainer.appendChild(noAlbumsMessage);
      return;
    }
  
    albums.forEach(album => {
      const article = document.createElement('article');
      article.innerHTML = `
          <h3>${album.title} (${album.year})</h3>
          <p><strong>Дата выхода:</strong> ${album.releaseDate}</p>
          <p><strong>Описание:</strong> ${album.description}</p>
          <h4>Список песен:</h4>
          <ul>
            ${album.songs.map(song => `<li>${song}</li>`).join('')}
          </ul>
      `;
      albumsContainer.appendChild(article);
    });
  }
  
  function displayAlbumsError() {
    const albumsContainer = document.getElementById('albums-container');
    albumsContainer.innerHTML = '';
  
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Произошла ошибка при загрузке списка альбомов.';
    albumsContainer.appendChild(errorMessage);
  }
  
  fetchAlbums();

// --- contact.html ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            // Сброс сообщений об ошибках (изначально скрываем)
            nameError.textContent = '';
            nameError.style.display = 'none';
            emailError.textContent = '';
            emailError.style.display = 'none';
            messageError.textContent = '';
            messageError.style.display = 'none';


            let isValid = true;

            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Пожалуйста, введите ваше имя';
                nameError.style.display = 'block'; // Показываем сообщение об ошибке
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Пожалуйста, введите ваш email';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Пожалуйста, введите корректный email';
                emailError.style.display = 'block';
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Пожалуйста, введите сообщение';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                const formData = new FormData(form);
                const data = {};
                for (const [key, value] of formData) {
                    data[key] = value;
                }

                try {
                    const response = await fetch('http://localhost:3000/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Очистка полей формы после успешной отправки
                    form.reset();

                    alert('Сообщение успешно отправлено!');
                } catch (error) {
                    console.error('Ошибка при отправке сообщения:', error);
                    alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
                }
            }
        });
    }
});

// --- Функция валидации email ---
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}