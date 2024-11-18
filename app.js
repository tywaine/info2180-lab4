document.getElementById('btnSearch').addEventListener('click', () => {
    const query = document.getElementById('txtSearch').value.trim();
    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = 'An error occurred while fetching the superhero data.';
        });
});