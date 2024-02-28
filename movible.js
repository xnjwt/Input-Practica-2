
let input= document.getElementById("movible");
input.value=1;
let touchStart=0;
let anterior=0;
let lastTouch=0;
let noPrimera=false;
    input.addEventListener("touchstart", function(event) {
        // Al inicio del toque, almacenamos el valor actual del campo de entrada
        touchStart=parseInt(event.touches[0].clientY/20);
        
        anterior=0;
        lastTouch=0;
    });

    input.addEventListener("touchmove", function(event) {
        // Prevenir el comportamiento predeterminado del desplazamiento
        event.preventDefault();

        // Obtener la posición del cursor en el eje Y 
        let CurrentTouch = parseInt(event.touches[0].clientY/20);
        
        if (CurrentTouch===lastTouch&&noPrimera) return;//Ignorar si no se desplaza mucho
        // Obtener la diferencia de posición entre el inicio y la posición actual del dedo
        let actual = CurrentTouch- touchStart;
        console.log("TouchStart: ", touchStart);
        console.log("CurrentTouch: ",CurrentTouch);
        console.log("lastTouch: ",lastTouch);
        console.log("Actual: ",actual);
        console.log("Anterior: ", anterior);
        console.log("\n");
        
        if (Math.abs(anterior)>Math.abs(actual)) {
            touchStart= lastTouch;
        }
        
        console.log("Al fin");
        // Aumentar el valor del campo de entrada basado en la diferencia de posición
        // Si el desplazamiento es hacia abajo, aumentar el valor
        let valorInput= parseInt(this.value)
        if(CurrentTouch > touchStart){
            this.value = valorInput +1;
        } else {
            this.value=valorInput-1;
        }
        anterior= parseInt(actual);
        lastTouch=parseInt(CurrentTouch);
        noPrimera=true;
        
        
        
    });