 const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button => {
    button.addEventListener('Click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.ClassList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})