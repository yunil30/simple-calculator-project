let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerHTML = '';
                break;
            case 'Del':
                if(display.innerHTML){
                    display.innerHTML =  display.innerHTML.slice(e, -1);
                }
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
