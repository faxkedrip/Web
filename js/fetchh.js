function fetchAndDisplayAuthors() {
    fetch('authors.json')
        .then(response => response.json())
        .then(authorsData => {
            const authorContainer = document.getElementById("authorContainer");
            authorsData.forEach(author => {
                const authorElement = document.createElement("div");
                authorElement.classList.add("author");
  
                authorElement.innerHTML = `
                    <img src="${author.pic}" style="width: 25rem">
                    <article class="NyamNyam">
                        <h3>${author.name}</h3>
                        <p>Birthdate: ${author.birthdate}</p>
                        <p>Country: ${author.country}</p>
                    </article>
                `;
                authorContainer.appendChild(authorElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
fetchAndDisplayAuthors();

document.addEventListener('DOMContentLoaded', function () {
    const jsonUrl = 'https://api.jsonbin.io/v3/b/65aeffa3266cfc3fde7e3427/latest';
    let booksData;

    function fetchAndDisplayBooks(category = '') {
        const bookList = document.querySelector('.book-list');
        bookList.innerHTML = '';

        const filteredBooks = category
            ? booksData.record.filter(book => book.category === category)
            : booksData.record;

        filteredBooks.forEach(book => {
            const bookElement = document.createElement('article');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <img src="${book.pic}" alt="${book.name}">
                <h3>${book.name}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: $${book.price.toFixed(2)}</p>
                <a href="#" class="btn">Сагсанд хийх</a>
            `;
            bookList.appendChild(bookElement);
        });
    }

    function handleSidebarItemClick(category) {
        const sidebar = document.querySelector('.sidebar');
        const mainSection = document.querySelector('section');

        sidebar.classList.remove('active');
        mainSection.style.marginRight = '0';

        fetchAndDisplayBooks(category);
    }

    const sidebarItems = document.querySelectorAll('.sidebar ul li a');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedCategory = item.textContent.trim();
            handleSidebarItemClick(selectedCategory);
        });
    });

    const categoryButton = document.getElementById('categoryButton');
    categoryButton.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar');
        const mainSection = document.querySelector('section');

        sidebar.classList.toggle('active');
        mainSection.style.marginRight = sidebar.classList.contains('active') ? '20%' : '0';
    });

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            booksData = data;
            fetchAndDisplayBooks();
        })
        .catch(error => console.error('Error fetching data:', error));
});
