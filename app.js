const btns = document.querySelectorAll(".tab-btn");
const myBtns = document.querySelector('.mytabs');
const articales = document.querySelectorAll('.tab');

myBtns.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articales.forEach(function(artic){
            artic.classList.remove('active');
            
        });
        const elelment = document.getElementById(id);
        elelment.classList.add('active');
    }
});