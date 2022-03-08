
$(document).ready(function() {$("#draggable1").draggable(); })

$(document).ready(function() {$("#draggable2").draggable(); })

$(document).ready(function() {$("#draggable3").draggable(); })


document.querySelectorAll('.invisible1').forEach(function(span){
    span.addEventListener('click', function(){
      this.classList.remove('.invisible1');
    });
  });

  document.querySelectorAll('.invisible2').forEach(function(span){
    span.addEventListener('click', function(){
      this.classList.remove('.invisible2');
    });
  });

  document.querySelectorAll('.invisible3').forEach(function(span){
    span.addEventListener('click', function(){
      this.classList.remove('.invisible3');
    });
  });