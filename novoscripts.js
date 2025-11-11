//Aguarda o carregamento compleot do conteudo HTML.//
window.onload = function() {
    const params = new URLSearchParams(window.location.search); 
}
/*Função para mostrar os produtos na página*/
function displayProducts () {
    const productsContainer = document.getElementById('products')
        productsContainer.innerHTML = ''; /*Limpa o conteúdo inicial do Container*/

        /*Itera sobre a lista de produtos para criar elementos HTML*/
        products.forEach(product => {
            const productElement = document.createElement('div'); //Cria um elemento div para o produto*/

            productElement.className = 'product-card'; /*Define uma classe Css para estilização*/
            productElement.innerHTML = `
            <img src="${product.image}" alt=" ${product.name}"> <!--IMAGEM DO PRODUTO-->
            <h3>${product.name}</h3> <!--NOME DO PRODUTO-->
            <p>${product.descripition}</p> <!--DESCRIÇÃO DO PRODUTO-->
            <div class="price">R$ ${product.price.toFixed(2)}</div> <!--PREÇO FORMATADO-->
            <button class="add-to-cart" onclick="addToCart(${product.id})" <!--Adcionar ao carrinho-->

            </button> <!--Botão para adcionar o produto ao carrinho -->


          `;  
          productsContainer.appendChild(productElement); /*Adciona o elemento do produto ao container*/
        });  
}

/*Função para adcionar produto ao carrinho*/ 
function addToCart (productId) {
    const product = products.find (p => p.id === productId); /*Encontra o produto pelo ID*/
     if (product) {
        const cartItem = cart.find(item.id ===productId) /*Verifica se o produto já está no carrinho*/
        if (cartItem) {
            cartItem.quantity++; /*Incrementa a quantidade se já existir no carrinho*/
        } else {
            cart.push({...product, quantity: 1 }); /*Adiciona o produto com inicial de 1*/
        }
        updateCart(); /*Atualiza a exibição do carrinho*/
}
}

/*Função para remover produto do carrinho*/
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !==productId) /*Remove o produto com base no ID*/
    updateCart(); /*Atualiza a exibição do carrinho*/
}
/*Função para atualizar a exibição do carrinho*/
        function updateCart () {
            const cartItems = document.getElementById('cart-items'); /*Seleciona o container dos item do carrinho*/
            const cartcount = document.getElementById('cart-count'); /*Seleciona o elemento para a contagem de intems*/
            const cartTotal = document.getElementById('cart-total'); /*Seleciona o elemento para o valor total*/
        }

        /*Calcula o numero total de itens no carrinho*/
        constTotal = cart.reduce ((Sum,item) =>sum+ (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2); /*Exibe o total formatado*/

        /*Limpa o container dos itens do carrinho*/
        cartItems.innerHTML = '';
        cart.forEach(element => {
            const itemElement = document.createElement ('div') /*Cria um elemento <div> para o item do carrinho*/
            itemElement.className = 'cart-item'; /*Define a class CSS para estilizar*/

            itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}"></img>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>R$ ${item.price.toFixed (2)}</p> <!--Preço e quantidade-->
            </div>
            <div class="remove-item" onclick="removeFromCart(${item.id})"> 🗑️</div>
        `;
        cartItems.appendChild(itemElement); //Adciona o item ao container
            
        });
        /*Calcula o total do carrinho*/
        const total = cart.reduce((sum,item) =>sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2); /*Exibe o total formatado*/ 

        /*FUNÇÃO PARA MOSTRAR/ESCONDER O CARRINHO*/
        function toggleCart() {
            constCart = document.getElementById('cart');/*Seleciona o elemento do carrinho*/
            cart.classList.toggle('active'); /*Altera a classe 'active' para mostrar/esconder*/
        }


    


