let correo = ['juan.pizo.ueb@gmail.com'];
let password = ['1033098102'];
 function cargar(){
    let usuario = document.getElementById('correo').value;
    let contraseña = document.getElementById('contra').value;

    if(usuario == correo && contraseña == password)
    {
        window.location = "index.html";
    }
    else
    {
        alert("Usuario incorrecto");
    }
 }