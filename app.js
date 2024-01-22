(function() {
    /* variables from index.html */
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); /* Calling ALL buttons at once */
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    /* Checking all buttons to see which one was pressed */
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){ /* (e) function/buttons will only work if the event is active, if a click happens */
            /* If button is clicked, take the value of the number that was pressed, which are defined in index.html data-num dataset */
            let value = e.target.dataset.num;
            /* Push the value to the calculator screen */
            screen.value += value;
        })
    })

    /* Equal button */
    equal.addEventListener('click', function(e){
        /* Check if the screen has a stored value and remove it, then store the new value */

        /* If the screen value is empty and the equal button is pressed, leave it empty */
        if(screen.value === '') {
            screen.value = "";
            /* If the screen is empty and you want to generate a new value */
        }else{
            let answer = eval(screen.value); /* line 14, push pressed number buttons to the screen */
            screen.value = answer; /* Store the value from above after evaluating (adding, subtracting etc,) into the answer variable */
        }
    })

    /* Clear button */
    clear.addEventListener('click', function(e){ /* (e) the button/function will only work if it is clicked */
        screen.value = ""; /* Clearing the screen */
    })


})();