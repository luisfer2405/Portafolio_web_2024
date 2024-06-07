// scripts.js

function showToolInfo(tool) {
    const toolInfo = document.getElementById('tool-info');
    let info = '';

    switch(tool) {
        case 'HTML':
            info = 'HTML es el lenguaje estándar para crear páginas web.';
            break;
        case 'CSS':
            info = 'CSS es un lenguaje de estilo utilizado para describir la presentación de un documento escrito en HTML o XML.';
            break;
        case 'JavaScript':
            info = 'JavaScript es un lenguaje de programación que permite crear contenido dinámico en las páginas web.';
            break;
        case 'Python':
            info = 'Python es un lenguaje de programación interpretado, de alto nivel y de propósito general.';
            break;
        case 'SQL':
            info = 'SQL es un lenguaje estándar para gestionar y manipular bases de datos relacionales.';
            break;
        // Añade más casos para otras herramientas
        default:
            info = 'Selecciona una herramienta para ver más información.';
    }

    toolInfo.innerHTML = info;
    toolInfo.style.display = 'block';
}


let currentProject = 1;

function showProject(projectNumber) {
    const projects = [
        {
            img: 'images/project1.jpg',
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1.'
        },
        {
            img: 'images/project2.jpg',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2.'
        },
        {
            img: 'images/project3.jpg',
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3.'
        }
        // Añadir más proyectos según sea necesario
    ];

    const projectImage = document.querySelector('.project-image img');
    const projectTitle = document.querySelector('.project-description h2');
    const projectDescription = document.querySelector('.project-description p');

    const projectDots = document.querySelectorAll('.project-dot');
    projectDots.forEach(dot => dot.classList.remove('active'));
    projectDots[projectNumber - 1].classList.add('active');

    projectImage.src = projects[projectNumber - 1].img;
    projectTitle.textContent = projects[projectNumber - 1].title;
    projectDescription.textContent = projects[projectNumber - 1].description;

    currentProject = projectNumber;
}

document.addEventListener('DOMContentLoaded', () => {
    showProject(currentProject);
});