
document.querySelector('.check').addEventListener('click', ()=> {
  const modelo = document.querySelector('.modelo').value;
  const preco = Number(document.querySelector('.preco').value);

  if(!modelo) {
    alert('É necessário passar o modelo do carro!');
  } 
  else if (!preco) {
    alert('É necessário passar o valor do carro!');
  }
  else {
    let valorEntrada = preco * 0.5;
    let valorParcelas = (preco - valorEntrada) / 60; 
    let juros = valorParcelas * 0.7;

    let valorTotal = valorParcelas + juros;

    
    document.querySelector('.message').textContent =  modelo;
    
    document.querySelector('.entrada').textContent = valorEntrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    document.querySelector('.parcela').textContent = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}); 

    // limpando campos
    document.querySelector('.modelo').value = "";
    document.querySelector('.preco').value = "";
  }

});