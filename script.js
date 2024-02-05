document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("signature");
    var ctx = canvas.getContext("2d");
    var drawing = false;
  
    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchmove", draw);
  
    function startDrawing(e) {
      e.preventDefault();
      var touch = e.touches[0];
      drawing = true;
      draw(touch);
    }
  
    function stopDrawing() {
      drawing = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!drawing) return;
  
      var touch = e.touches[0];
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";
  
      ctx.lineTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
    }
  });
  
  function clearSignature() {
    var canvas = document.getElementById("signature");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  