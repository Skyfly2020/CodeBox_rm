const buttons = document.querySelectorAll('[data-link]');

// Добавляем обработчик событий на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Получаем значение ссылки
        if (link) {
            window.location.href = link; // Перенаправляем текущую вкладку
        }
    });
});


function searchCourse() {
    const input = document.getElementById('courseName').value.trim();
    if (input) {
        // Переход на страницу поиска с передачей параметра courseName
        window.location.href = `search-container.html?courseName=${encodeURIComponent(input)}`;
    } else {
        alert('Введите название курса!');
    }
}

const courses = [
    { name: "Python", id: 1, link: "pyt1.html", icon: "pythons.ico" },
    { name: "PHP", id: 2, link: "pyt1.html", icon: "phps.ico"  },
    { name: "Java", id: 3, link: "pyt1.html", icon: "javas.ico"  },
    { name: "c++", id: 4, link: "pyt1.html", icon: "cpps.ico"  },
    { name: "DJango", id: 5, link: "pyt1.html", icon: "pydjs.ico" },
    { name: "c#", id: 6, link: "pyt1.html", icon: "cshp.ico"  }
];

function displayResults() {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('courseName')?.toLowerCase() || '';

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(searchQuery)
    );

    if (filteredCourses.length === 0) {
        resultsContainer.innerHTML = '<p>Курсы не найдены</p>';
    } else {
        filteredCourses.forEach(course => {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'catalog-btn-cont';

            const header = document.createElement('div');
            header.className = 'catalog-btn-header';

            const headerText = document.createElement('div');
            headerText.className = 'catalog-btn-header-text';
            headerText.textContent = course.name;

            const icon = document.createElement('img');
            icon.src = course.icon;
            icon.alt = "Иконка курса";
            icon.className = 'icon-btn';

            header.appendChild(headerText);
            header.appendChild(icon);

            const button = document.createElement('div');
            button.className = 'catalog-btn';
            button.setAttribute('data-link', course.link);

            const buttonText = document.createElement('div');
            buttonText.className = 'catalog-btn-text';
            buttonText.textContent = "Начать обучение";

            const buttonIcon = document.createElement('img');
            buttonIcon.src = "menu_b.png"; // Заменить на нужную иконку
            buttonIcon.alt = "Меню";
            buttonIcon.className = 'catalog-btn-menu-icon';

            button.appendChild(buttonText);
            button.appendChild(buttonIcon);

            buttonContainer.appendChild(header);
            buttonContainer.appendChild(button);

            resultsContainer.appendChild(buttonContainer);
        });

        // Обработчик событий для кнопок
        const buttons = document.querySelectorAll('[data-link]');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const link = button.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            });
        });
    }
}

window.onload = displayResults;
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Функция для выполнения поиска
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const searchParams = new URLSearchParams();
            searchParams.set('courseName', query);
            window.location.href = `search-container.html?${searchParams.toString()}`;
        }
    }

    // Обработчик на кнопку "Найти"
    searchButton.addEventListener('click', performSearch);

    // Обработчик на нажатие Enter
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});