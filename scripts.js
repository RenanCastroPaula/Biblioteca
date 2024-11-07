const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');
const livrosEmDestaqueSections = document.querySelectorAll('.livros-em-destaque');

leftArrows.forEach((leftArrow, index) => {
    leftArrow.addEventListener('click', () => {
        livrosEmDestaqueSections[index].scrollBy({
            left: -250, 
            behavior: 'smooth'
        });
    });
});

rightArrows.forEach((rightArrow, index) => {
    rightArrow.addEventListener('click', () => {
        livrosEmDestaqueSections[index].scrollBy({
            left: 250,
            behavior: 'smooth'
        });
    });
});
