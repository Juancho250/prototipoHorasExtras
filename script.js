document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var drawing = false;

    function startDrawing(e) {
        e.preventDefault();
        drawing = true;
        var cursorPos = getCursorPosition(e);
        draw(cursorPos.x, cursorPos.y);
    }

    function draw(x, y) {
        if (!drawing) return;

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

    function endDrawing() {
        drawing = false;
        ctx.previousX = null;
        ctx.previousY = null;
    }

    function getCursorPosition(e) {
        var rect = canvas.getBoundingClientRect();
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

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', function (e) {
        var cursorPos = getCursorPosition(e);
        draw(cursorPos.x, cursorPos.y);
    });
    canvas.addEventListener('mouseup', endDrawing);

    // Eventos táctiles
    canvas.addEventListener('touchstart', function (e) {
        startDrawing(e.touches[0]);
    });
    canvas.addEventListener('touchmove', function (e) {
        var cursorPos = getCursorPosition(e.touches[0]);
        draw(cursorPos.x, cursorPos.y);
    });
    canvas.addEventListener('touchend', endDrawing);
    canvas.addEventListener('touchcancel', endDrawing);

    // Limpiar las coordenadas previas cuando el dedo se levanta o el ratón se suelta
    document.addEventListener('mouseup', function () {
        endDrawing();
    });

    document.addEventListener('touchend', function () {
        endDrawing();
    });
});

function enviar() {
    alert("DATOS ENVIADOS CORRECTAMENTE");
}