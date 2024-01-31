document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var drawing = false;

    function startDrawing(e) {
        drawing = true;
        draw(e);
    }

    function draw(e) {
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        if (drawing) {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';

            if (!ctx.previousX) {
                ctx.beginPath();
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            ctx.previousX = x;
            ctx.previousY = y;
        }
    }

    function endDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    // Eventos para PC
    canvas.addEventListener('mousedown', function (e) {
        startDrawing(e);
    });

    canvas.addEventListener('mousemove', function (e) {
        draw(e);
    });

    canvas.addEventListener('mouseup', endDrawing);

    // Eventos táctiles
    canvas.addEventListener('touchstart', function (e) {
        startDrawing(e.touches[0]);
    });

    canvas.addEventListener('touchmove', function (e) {
        var cursorPos = getCursorPosition(e.touches[0]);
        draw(cursorPos);
    });

    canvas.addEventListener('touchend', endDrawing);
    canvas.addEventListener('touchcancel', endDrawing);

    // Limpiar las coordenadas previas cuando el dedo se levanta o el ratón se suelta
    document.addEventListener('mouseup', function () {
        endDrawing();
    });

    function getCursorPosition(e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
});

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
