document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('visitForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('successMessage').style.display = 'block';
    });
});
