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
                    <h3>${author.name}</h3>
                    <p>Birthdate: ${author.birthdate}</p>
                    <p>Country: ${author.country}</p>
                `;
                authorContainer.appendChild(authorElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
  }
  fetchAndDisplayAuthors();