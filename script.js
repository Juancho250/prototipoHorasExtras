document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("signature");
    var ctx = canvas.getContext("2d");
    var drawing = false;
  
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
  
    function startDrawing(e) {
      drawing = true;
      draw(e);
    }
  
    function stopDrawing() {
      drawing = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!drawing) return;
  
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";
  
      ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    }
  });
  
  function clearSignature() {
    var canvas = document.getElementById("signature");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  