const limpiarCanvas = () => {
    // Colocar color blanco en fondo de canvas
    contexto.fillStyle = COLOR_FONDO;
    contexto.fillRect(0, 0, $canvas.width, $canvas.height);
};

$btnLimpiar.onclick = limpiarCanvas;

$btnDescargar.onclick = () => {
    // Limpiar el canvas antes de descargar
    limpiarCanvas();

    const enlace = document.createElement('a');
    // El título
    enlace.download = "Firma.png";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = $canvas.toDataURL();
    // Hacer clic en él
    enlace.click();
};
