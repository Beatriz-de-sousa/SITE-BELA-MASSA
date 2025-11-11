//Aguarda o carregamento compleot do conteudo HTML.//
window.onload = function() {
    const params = new URLSearchParams(window.location.search); 
}

    let carrinho= [];
    let total= 0;

    /*Adiciona item ao carrinho*/
    function adicionarCarrinho(nome,preco) {
    carrinho.push({nome, preco})
    total += preco;
    atualizarCarrinho()
     }

    function atualizarCarrinho () {
        const lista= document.getElementById('carrinholista')
        lista.innerHTML = '';

        carrinho.forEach((item,index)=> {
            const li = document.createElement ('li');
            li.innerHTML = `
             ${item.nome} - R$${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})" style="margin-left: 10px; background:red;color: white; border:none; padding: 4px 8px; border-radius: 4px; cursor:pointer">
             🗑️

                </button>
                `;
                lista.appendChild(li);

        
        });
        document.getElementById("total").textContent = total.toFixed (2);
        document.getElementById('contadorcarrinho'). textContent = carrinho.length;
    }
     

    function removerItem (index) {
        total -= carrinho[index].preco;
        carrinho.splice(index, 1);
        atualizarCarrinho()
    }

 
    function openModal (id) {
        document.getElementById(id).style.display = 'block';
    }
    function closeModal(id) {
        document.getElementById(id).style.display = 'none'
}
function toggleaarrinho() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === ''){
        modal.style.display == 'none';
    } else {
        modal.style.display = 'block';
        atualizarcarrinho()
    }
}

