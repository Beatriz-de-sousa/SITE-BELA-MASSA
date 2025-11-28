const trilho = document.getElementById('trilho');
const body = document.body;

trilho.addEventListener('click', () => {
    body.classList.toggle('dark');
    trilho.classList.toggle('dark');
});


