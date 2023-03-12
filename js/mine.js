let header = document.getElementById('navb')

document.addEventListener('scroll', function(){
    
    let scrolltop = document.documentElement.scrollTop;

    if (scrolltop > 50) {
        
        header.classList.add('scroll')

    }else{
        header.classList.remove('scroll')
    }

    console.log(scrolltop);

})

