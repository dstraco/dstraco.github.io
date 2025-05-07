const print = document.querySelector('#print-button');

print.addEventListener('click', () => {
    window.print();
});

print.addEventListener('mouseover', () => {
    print.style.width = '30px';
});

print.addEventListener('mouseout', () => {
    print.style.width = '24px';
});