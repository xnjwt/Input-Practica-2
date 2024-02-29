let inputs = document.getElementsByClassName("movible");
let touchStart = 0;
let anterior = 0;
let lastTouch = 0;
let noPrimera = false;

for (let input of inputs) {
    input.value = 1;

    input.addEventListener("touchstart", function(event) {
        touchStart = parseInt(event.touches[0].clientY / 15);
        anterior = 0;
        lastTouch = 0;
    });

    input.addEventListener("touchmove", function(event) {
        event.preventDefault();

        let CurrentTouch = parseInt(event.touches[0].clientY / 15);
        
        if (CurrentTouch === lastTouch && noPrimera) return;
        
        let actual = CurrentTouch - touchStart;

        if (Math.abs(anterior) > Math.abs(actual)) {
            touchStart = lastTouch;
        }

        let valorInput = parseInt(this.value);

        if (CurrentTouch > touchStart) {
            this.value = valorInput + 1;
        } else {
            this.value = valorInput - 1;
        }

        anterior = parseInt(actual);
        lastTouch = parseInt(CurrentTouch);
        noPrimera = true;
    });
}
