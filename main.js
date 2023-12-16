document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    console.log('Name: ' + name)
    var name = document.getElementById('emailInput').value;
    console.log('email: ' + name)
    var name = document.getElementById('passwordInput').value;
    console.log('password: ' + name)
    var name = document.getElementById('repasswordInput').value;
    console.log('repassword: ' + name)
});
