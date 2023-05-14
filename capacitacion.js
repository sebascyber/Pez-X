function login(){
    user = document.getElementById('usuario').value;
    password = document.getElementById('contraseña').value;

    if (user == 'Pez-X' && password == 'Phishing'){
        window.location = "capacitacion.html";
        alert('Bienvenido a ' + user);
    }else{
        alert('Usuario o contraseña incorrecta');
    }
}
