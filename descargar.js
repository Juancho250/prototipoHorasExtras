// Descargar la firma como imagen PNG
$btnDescargar.onclick = () => {
    const enlace = document.createElement('a');
    // Establecer el título y formato del archivo
    enlace.download = "firma.png";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = $canvas.toDataURL("image/png");
    // Hacer click en él
    enlace.click();
};
