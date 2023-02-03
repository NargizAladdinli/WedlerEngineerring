
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    burger.addEventListener('click', function() {
        if(burger.classList.contains('link')){
            burger.remove('link');
        }
        else{
            burger.add('link')
        }
    })

