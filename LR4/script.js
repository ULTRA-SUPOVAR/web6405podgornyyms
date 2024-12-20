/**
 * @function fetchNews
 * @description Асинхронно загружает новости с сервера.
 * @async
 */
async function fetchNews() {
    try {
      // Отправляем GET-запрос на сервер для получения новостей
      const response = await fetch('http://localhost:3000/news');
      // Проверяем, успешен ли запрос
      if (!response.ok) {
        // Если запрос не успешен, выбрасываем ошибку
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Преобразуем ответ в JSON
      const news = await response.json();
      // Вызываем функцию для отображения новостей
      displayNews(news);
    } catch (error) {
      // Обрабатываем ошибки при загрузке новостей
      console.error('Ошибка при загрузке новостей:', error);
      // Вызываем функцию для отображения сообщения об ошибке
      displayNewsError();
    }
  }
  
  /**
   * @function displayNews
   * @description Отображает новости на странице.
   * @param {Array} news - Массив объектов новостей.
   */
  function displayNews(news) {
    // Получаем контейнер для новостей по ID
    const newsContainer = document.getElementById('news-container');
    // Очищаем содержимое контейнера
    newsContainer.innerHTML = '';
  
    // Проверяем, есть ли новости
    if (news.length === 0) {
      // Если новостей нет, создаем и добавляем сообщение об этом
      const noNewsMessage = document.createElement('p');
      noNewsMessage.textContent = 'Новостей пока нет.';
      newsContainer.appendChild(noNewsMessage);
      return;
    }
  
    // Перебираем массив новостей
    news.forEach(item => {
      // Создаем элемент div для каждой новости
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
  
      // Создаем заголовок новости
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      // Создаем элемент для даты новости
      const date = document.createElement('p');
      date.classList.add('date');
      date.textContent = item.date;
  
      // Создаем элемент для содержимого новости
      const content = document.createElement('p');
      content.textContent = item.content;
  
      // Добавляем заголовок, дату и содержимое в элемент новости
      newsItem.appendChild(title);
      newsItem.appendChild(date);
      newsItem.appendChild(content);
  
      // Добавляем элемент новости в контейнер
      newsContainer.appendChild(newsItem);
    });
  }
  
  /**
   * @function displayNewsError
   * @description Отображает сообщение об ошибке при загрузке новостей.
   */
  function displayNewsError() {
    // Получаем контейнер для новостей по ID
    const newsContainer = document.getElementById('news-container');
    // Очищаем содержимое контейнера
    newsContainer.innerHTML = '';
  
    // Создаем и добавляем сообщение об ошибке
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Произошла ошибка при загрузке новостей.';
    newsContainer.appendChild(errorMessage);
  }
  
  // Вызываем функцию для загрузки новостей
  fetchNews();

  /**
   * @function fetchConcerts
   * @description Асинхронно загружает список концертов с сервера.
   * @async
   */
  async function fetchConcerts() {
    try {
      // Отправляем GET-запрос на сервер для получения списка концертов
      const response = await fetch('http://localhost:3000/concerts');
      // Проверяем, успешен ли запрос
      if (!response.ok) {
        // Если запрос не успешен, выбрасываем ошибку
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Преобразуем ответ в JSON
      const concerts = await response.json();
      // Вызываем функцию для отображения списка концертов
      displayConcerts(concerts);
    } catch (error) {
      // Обрабатываем ошибки при загрузке списка концертов
      console.error('Ошибка при загрузке концертов:', error);
      // Вызываем функцию для отображения сообщения об ошибке
      displayConcertsError();
    }
  }
  
  /**
   * @function displayConcerts
   * @description Отображает список концертов на странице.
   * @param {Array} concerts - Массив объектов концертов.
   */
  function displayConcerts(concerts) {
    // Получаем элемент списка концертов по ID
    const concertsList = document.getElementById('concerts-list');
    // Очищаем содержимое списка
    concertsList.innerHTML = '';
  
    // Проверяем, есть ли концерты
    if (concerts.length === 0) {
      // Если концертов нет, создаем и добавляем сообщение об этом
      const noConcertsMessage = document.createElement('tr');
      noConcertsMessage.innerHTML = `<td colspan="3">Концертов пока нет.</td>`;
      concertsList.appendChild(noConcertsMessage);
      return;
    }
  
    // Перебираем массив концертов
    concerts.forEach(concert => {
      // Создаем строку таблицы для каждого концерта
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${concert.date}</td>
        <td>${concert.city}</td>
        <td>${concert.venue}</td>
      `;
      // Добавляем строку в список концертов
      concertsList.appendChild(row);
    });
  }
  
  /**
   * @function displayConcertsError
   * @description Отображает сообщение об ошибке при загрузке списка концертов.
   */
  function displayConcertsError() {
    // Получаем элемент списка концертов по ID
    const concertsList = document.getElementById('concerts-list');
    // Очищаем содержимое списка
    concertsList.innerHTML = '';
  
    // Создаем и добавляем сообщение об ошибке в виде строки таблицы
    const errorMessage = document.createElement('tr');
    errorMessage.innerHTML = `<td colspan="3" class="error-message">Произошла ошибка при загрузке списка концертов.</td>`;
    concertsList.appendChild(errorMessage);
  }
  
  // Вызываем функцию для загрузки списка концертов
  fetchConcerts();

  /**
   * @function fetchAlbums
   * @description Асинхронно загружает список альбомов с сервера.
   * @async
   */
  async function fetchAlbums() {
    try {
      // Отправляем GET-запрос на сервер для получения списка альбомов
      const response = await fetch('http://localhost:3000/albums');
      // Проверяем, успешен ли запрос
      if (!response.ok) {
        // Если запрос не успешен, выбрасываем ошибку
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Преобразуем ответ в JSON
      const albums = await response.json();
      // Вызываем функцию для отображения списка альбомов
      displayAlbums(albums);
    } catch (error) {
      // Обрабатываем ошибки при загрузке списка альбомов
      console.error('Ошибка при загрузке альбомов:', error);
      // Вызываем функцию для отображения сообщения об ошибке
      displayAlbumsError();
    }
  }
  
  /**
   * @function displayAlbums
   * @description Отображает список альбомов на странице.
   * @param {Array} albums - Массив объектов альбомов.
   */
  function displayAlbums(albums) {
    // Получаем контейнер для альбомов по ID
    const albumsContainer = document.getElementById('albums-container');
    // Очищаем содержимое контейнера
    albumsContainer.innerHTML = '';
  
    // Проверяем, есть ли альбомы
    if (albums.length === 0) {
      // Если альбомов нет, создаем и добавляем сообщение об этом
      const noAlbumsMessage = document.createElement('p');
      noAlbumsMessage.classList.add('error-message');
      noAlbumsMessage.textContent = 'Альбомов пока нет.';
      albumsContainer.appendChild(noAlbumsMessage);
      return;
    }
  
    // Перебираем массив альбомов
    albums.forEach(album => {
      // Создаем элемент article для каждого альбома
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
      // Добавляем элемент альбома в контейнер
      albumsContainer.appendChild(article);
    });
  }
  
  /**
   * @function displayAlbumsError
   * @description Отображает сообщение об ошибке при загрузке списка альбомов.
   */
  function displayAlbumsError() {
    // Получаем контейнер для альбомов по ID
    const albumsContainer = document.getElementById('albums-container');
    // Очищаем содержимое контейнера
    albumsContainer.innerHTML = '';
  
    // Создаем и добавляем сообщение об ошибке
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Произошла ошибка при загрузке списка альбомов.';
    albumsContainer.appendChild(errorMessage);
  }
  
  // Вызываем функцию для загрузки списка альбомов
  fetchAlbums();

// --- contact.html ---
// Добавляем обработчик события DOMContentLoaded для выполнения кода после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем форму по ID
    const form = document.getElementById('contact-form');
    // Проверяем, существует ли форма на странице
    if (form) {
        // Добавляем обработчик события submit для формы
        form.addEventListener('submit', async (event) => {
            // Предотвращаем стандартное поведение формы (перезагрузку страницы)
            event.preventDefault();

            // Получаем поля ввода и элементы для вывода ошибок
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


            // Флаг валидации
            let isValid = true;

            // Проверяем поле "Имя"
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Пожалуйста, введите ваше имя';
                nameError.style.display = 'block'; // Показываем сообщение об ошибке
                isValid = false;
            }

            // Проверяем поле "Email"
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Пожалуйста, введите ваш email';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Пожалуйста, введите корректный email';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Проверяем поле "Сообщение"
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Пожалуйста, введите сообщение';
                messageError.style.display = 'block';
                isValid = false;
            }

            // Если форма валидна, отправляем данные на сервер
            if (isValid) {
                // Собираем данные формы
                const formData = new FormData(form);
                const data = {};
                for (const [key, value] of formData) {
                    data[key] = value;
                }

                try {
                    // Отправляем POST-запрос на сервер
                    const response = await fetch('http://localhost:3000/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });

                    // Проверяем, успешен ли запрос
                    if (!response.ok) {
                        // Если запрос не успешен, выбрасываем ошибку
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Очистка полей формы после успешной отправки
                    form.reset();

                    // Выводим сообщение об успешной отправке
                    alert('Сообщение успешно отправлено!');
                } catch (error) {
                    // Обрабатываем ошибки при отправке сообщения
                    console.error('Ошибка при отправке сообщения:', error);
                    // Выводим сообщение об ошибке
                    alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
                }
            }
        });
    }
});

/**
 * @function isValidEmail
 * @description Проверяет, является ли строка корректным email-адресом.
 * @param {string} email - Строка для проверки.
 * @returns {boolean} - Возвращает true, если строка является корректным email-адресом, иначе false.
 */
function isValidEmail(email) {
    // Регулярное выражение для проверки email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Возвращаем результат проверки
    return re.test(email);
}