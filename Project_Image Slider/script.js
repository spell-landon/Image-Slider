// Immediately invoke function expression 


(function() {
    const pictures = [
        "colors_1",
        "colors_2",
        "colors_3",
        "colors_4",
        "colors_5",
        "colors_6",
        "colors_7",
        "colors_8",
    ];

    // Select both left and right buttons. Add event listeners

    const buttons = document.querySelectorAll('.btn');
    const imgDIV = document.querySelector('#img-container');
    let counter = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (button.classList.contains('move_left')) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
            }

            if (button.classList.contains('move_right')) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
            }
        })
    })
})();