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
        var x, y;

        if (e.touches) {
            // Evento táctil
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            // Evento de ratón
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        if (drawing) {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';

            ctx.lineTo(x, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
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
        draw(e);
    });

    canvas.addEventListener('touchend', endDrawing);
    canvas.addEventListener('touchcancel', endDrawing);

    // Limpiar las coordenadas previas cuando el dedo se levanta o el ratón se suelta
    document.addEventListener('mouseup', function () {
        endDrawing();
    });
});
