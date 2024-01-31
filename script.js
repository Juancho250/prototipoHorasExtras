document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var drawing = false;

    function startDrawing(e) {
        drawing = true;
        var pos = getCursorPosition(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }

    function draw(e) {
        if (!drawing) return;

        var pos = getCursorPosition(e);

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        ctx.quadraticCurveTo(ctx.previousX, ctx.previousY, (pos.x + ctx.previousX) / 2, (pos.y + ctx.previousY) / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo((pos.x + ctx.previousX) / 2, (pos.y + ctx.previousY) / 2);

        ctx.previousX = pos.x;
        ctx.previousY = pos.y;
    }

    function endDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    function getCursorPosition(e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    // Eventos para PC
    canvas.addEventListener('mousedown', function (e) {
        var pos = getCursorPosition(e);
        startDrawing(pos);
    });

    canvas.addEventListener('mousemove', function (e) {
        draw(e);
    });

    canvas.addEventListener('mouseup', endDrawing);

    // Eventos táctiles
    canvas.addEventListener('touchstart', function (e) {
        var pos = getCursorPosition(e.touches[0]);
        startDrawing(pos);
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

