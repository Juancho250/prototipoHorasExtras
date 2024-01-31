document.addEventListener('DOMContentLoaded', function () {
    var $canvas = document.getElementById('canvas');
    var contexto = $canvas.getContext('2d');
    var haComenzadoDibujo = false;
    var xAnterior, yAnterior, xActual, yActual;

    function startDrawing(e) {
        e.preventDefault();
        haComenzadoDibujo = true;
        var cursorPos = getCursorPosition(e);
        xAnterior = cursorPos.x;
        yAnterior = cursorPos.y;
        draw(xAnterior, yAnterior);
    }

    function draw(x, y) {
        if (!haComenzadoDibujo) return;

        contexto.lineWidth = 2;
        contexto.lineCap = 'round';
        contexto.strokeStyle = '#000';

        contexto.beginPath();
        contexto.moveTo(xAnterior, yAnterior);
        contexto.lineTo(x, y);
        contexto.stroke();
        contexto.closePath();

        xAnterior = x;
        yAnterior = y;
    }

    function endDrawing() {
        haComenzadoDibujo = false;
    }

    function getCursorPosition(e) {
        var rect = $canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        } else {
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    }

    $canvas.addEventListener('mousedown', startDrawing);
    $canvas.addEventListener('mousemove', function (e) {
        var cursorPos = getCursorPosition(e);
        draw(cursorPos.x, cursorPos.y);
    });
    $canvas.addEventListener('mouseup', endDrawing);
    $canvas.addEventListener('mouseout', endDrawing);

    // Eventos táctiles
    $canvas.addEventListener('touchstart', function (e) {
        startDrawing(e.touches[0]);
    });
    $canvas.addEventListener('touchmove', function (e) {
        var cursorPos = getCursorPosition(e.touches[0]);
        draw(cursorPos.x, cursorPos.y);
    });
    $canvas.addEventListener('touchend', endDrawing);
    $canvas.addEventListener('touchcancel', endDrawing);

    // Limpiar las coordenadas previas cuando el dedo se levanta o el ratón se suelta
    document.addEventListener('mouseup', function () {
        endDrawing();
    });

    // Limpiar el canvas al hacer clic en el botón "Limpiar"
    document.getElementById('btnLimpiar').addEventListener('click', function () {
        contexto.clearRect(0, 0, $canvas.width, $canvas.height);
    });

    // Descargar la firma como imagen PNG al hacer clic en el botón "Descargar"
    document.getElementById('btnDescargar').addEventListener('click', function () {
        const enlace = document.createElement('a');
        enlace.download = "firma.png";
        enlace.href = $canvas.toDataURL("image/png");
        enlace.click();
    });

    // Enviar formulario al hacer clic en el botón "Enviar"
    document.getElementById('btnEnviar').addEventListener('click', function () {
        alert("DATOS ENVIADOS CORRECTAMENTE");
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    });
});
