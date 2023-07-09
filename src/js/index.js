//console.log(document)
const itens = document.querySelectorAll('.item');
itens.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        
        const itemSelecionado = document.querySelector('.selecionado');
        itemSelecionado.classList.remove('selecionado');

        item.classList.add('selecionado');

        const imagemItemGrande = document.querySelector('.item-grande');

        const idItem = item.attributes.id.value;
        imagemItemGrande.src = `./src/imagens/${idItem}.jpg`;

        const nomeItem = document.getElementById('nome-item');
        nomeItem.innerText = item.getAttribute('data-name');

        const descricaoItem = document.getElementById('descricao-item');
        descricaoItem.innerText = item.getAttribute('data-description')
    })
})