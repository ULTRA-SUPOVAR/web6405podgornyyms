# web6405podgornyyms

ЛР1

Подгорный Максим Сергеевич

6405-010302D

Научный руководитель: Кренц Антон Анатольевич
Тема НИР: Использование параллельных вычислений для моделирования режимов работы полупроводникового лазера

![image](https://github.com/user-attachments/assets/c3ef845d-d06e-4b4c-b6a3-b8065380a7fb)

# web6405podgornyyms

ЛР 2

# Sabaton Fan Page

Это веб-сайт, посвященный шведской метал-группе Sabaton. На сайте представлена информация о группе, их альбомах, предстоящих концертах и контактах для связи. Дизайн сайта вдохновлен официальным стилем группы, с черным фоном и яркими цветами для удобного чтения.

## Структура сайта

- **Главная страница**: Общая информация о группе и их дискография.
- **Альбомы**: Полный список альбомов группы с датами выхода и списками песен.
- **Концерты**: Информация о предстоящих концертах, включая даты, города и места проведения.
- **Контакты**: Ссылки на официальные социальные сети группы и контактная информация.

## Технологии

Сайт разработан с использованием HTML и CSS.

# web6405podgornyyms

Подгорный Максим Сергеевич

6405-010302D

# Лабораторная работа № 3: Основы JavaScript

## Цель работы
Целью данной лабораторной работы является изучение основ JavaScript и реализация заданных функций, которые демонстрируют различные аспекты работы с этим языком программирования.

## Описание функций
В рамках лабораторной работы была реализована следующая функциональность:

1. **isInteger(n)** - Проверяет, является ли число целым.
2. **even()** - Возвращает массив четных чисел от 2 до 20 включительно.
3. **sumTo(n)** - Считает сумму чисел от 1 до n с использованием цикла.
4. **recSumTo(n)** - Считает сумму чисел от 1 до n, используя рекурсию.
5. **factorial(n)** - Вычисляет факториал заданного числа n.
6. **isBinary(n)** - Определяет, является ли число двойкой в степени.
7. **fibonacci(n)** - Находит N-е число Фибоначчи.
8. **getOperationFn(initialValue, operatorFn)** - Создает функцию для выполнения заданной операции над начальным значением.
9. **sequence(start, step)** - Создает генератор арифметической последовательности.
10. **deepEqual(firstObject, secondObject)** - Сравнивает два значения или объекта рекурсивно.

## Лабораторная работа №4

**Тема:** Современный CSS, обработка событий на JavaScript и асинхронность.

**Цель:** Модернизировать web-сайт из лабораторной работы №2 с использованием технологий HTML, CSS и JavaScript, изучить работу с Flexbox, Grid, анимациями CSS, асинхронными запросами и обработкой событий в JavaScript.

**Задачи:**

1.  **Вёрстка с помощью Flexbox:** Сверстать страницу "Главная" (`index.html`) с использованием Flexbox.
2.  **Вёрстка с помощью Grid:** Сверстать страницу "Альбомы" (`albums.html`) с использованием Grid.
3.  **Реализация анимации CSS:** Добавить анимацию на страницу "Главная" (`index.html`) - анимированный заголовок и логотип.
4.  **Реализация формы с отправкой POST-запроса:** Создать форму обратной связи на странице "Контакты" (`contact.html`) с отправкой данных на сервер (без реальной обработки на стороне сервера) по нажатию кнопки "Отправить".
5.  **Проверка введённых данных:** Реализовать проверку полей формы обратной связи на странице "Контакты" (`contact.html`) с использованием событийной модели JavaScript. Выводить сообщения об ошибках при некорректном заполнении полей.
6.  **Реализация асинхронного запроса:** Загружать данные для страниц "Новости" (`index.html`), "Концерты" (`concerts.html`) и "Альбомы" (`albums.html`) с помощью асинхронных запросов к `db.json`, размещенному в папке `LR4`, с использованием `mock-json-server`. Обрабатывать возможные ошибки при загрузке данных.
7.  **Слияние веток:** Выполнить слияние предыдущих лабораторных работ (ветки `LR2`) в ветку `main` через pull-request.
8.  **Создание ветки `LR4`:** Создать отдельную ветку `LR4` для выполнения лабораторной работы №4.
9.  **Дополнение `README.md`:** Дополнить файл `README.md` описанием лабораторной работы №4.
10. **Создание папки `LR4`:** Создать папку `LR4` в корне репозитория.
11. **Размещение `db.json`:** Поместить файл `db.json` (используемый `mock-json-server`) в папку `LR4`.
12. **Слияние ветки `LR4` с `main`:** После выполнения всех задач, выполнить слияние ветки `LR4` с веткой `main`.

**Реализация:**

В ходе выполнения лабораторной работы были модернизированы следующие страницы:

*   **`index.html` (Главная):**
    *   Вёрстка выполнена с использованием **Flexbox**.
    *   Добавлена **анимация CSS** для заголовка (плавное появление) и логотипа (увеличение при наведении).
    *   Реализована загрузка новостей с помощью **асинхронного запроса** к `db.json`.
*   **`albums.html` (Альбомы):**
    *   Вёрстка выполнена с использованием **Grid**.
    *   Реализована загрузка списка альбомов с помощью **асинхронного запроса** к `db.json`.
*   **`concerts.html` (Концерты):**
    *   Реализована загрузка списка концертов с помощью **асинхронного запроса** к `db.json`.
*   **`contact.html` (Контакты):**
    *   Создана **форма обратной связи** с полями для имени, email и сообщения.
    *   Реализована отправка данных формы с помощью **POST-запроса** (без серверной обработки).
    *   Добавлена **проверка полей формы** на стороне клиента с использованием JavaScript. Выводятся сообщения об ошибках при пустых полях или некорректном формате email.

**Используемые технологии:**

*   HTML5
*   CSS3 (Flexbox, Grid, Animations)
*   JavaScript (ES6+)
*   Fetch API
*   `mock-json-server`

**Запуск `mock-json-server`:**

Для запуска `mock-json-server` необходимо перейти в папку `LR4` и выполнить команду:

```bash
npx json-server --watch db.json
