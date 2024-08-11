// Función para encriptar el texto
function encriptar() {
    const input = document.getElementById('userInput');
    let texto = input.value;
    let textoEncriptado = '';

    // Encriptar: reemplaza cada carácter por el siguiente en el alfabeto
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Letras mayúsculas
            textoEncriptado += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Letras minúsculas
            textoEncriptado += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
        } else {
            // Otros caracteres (espacios, puntuación) permanecen sin cambios
            textoEncriptado += texto[i];
        }
    }

    input.value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    const input = document.getElementById('userInput');
    let texto = input.value;
    let textoDesencriptado = '';

    // Desencriptar: reemplaza cada carácter por el anterior en el alfabeto
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Letras mayúsculas
            textoDesencriptado += String.fromCharCode((charCode - 65 - 1 + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Letras minúsculas
            textoDesencriptado += String.fromCharCode((charCode - 97 - 1 + 26) % 26 + 97);
        } else {
            // Otros caracteres (espacios, puntuación) permanecen sin cambios
            textoDesencriptado += texto[i];
        }
    }

    input.value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copyText() {
    // Obtiene el elemento de input
    let input = document.getElementById('userInput');
    
    if (input.value !== "") { // Verifica que haya texto en el input
        // Selecciona el texto del input
        input.select();
        input.setSelectionRange(0, 99999); // Para dispositivos móviles

        // Copia el texto al portapapeles
        navigator.clipboard.writeText(input.value).then(function() {
            console.log('Texto copiado al portapapeles: ' + input.value);
            
            // Llama a la función para limpiar el campo de entrada
            clearInput();
        }).catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });
    } else {
        console.log('No hay texto para copiar');
    }
}

// Función para limpiar el campo de entrada
function clearInput() {
    document.getElementById('userInput').value = "";
}

