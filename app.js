document.getElementById('btnSearch').addEventListener('click', () => {
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
});