export const state = () => ({
  //State
  carrinho: [],
  carrinhoLength: 0
});

export const actions = {
  addProdutoToCarrinho({ state, commit }, produto) {
    const produtoCarrinho = state.carrinho.find(
      prod => prod._id === produto._id
    );

    if (!produtoCarrinho) {
      commit("pushProdutoToCarrinho", produto);
    } else {
      commit("incrementProdutoQtd", produtoCarrinho);
    }

    commit("incrementCarrinhoLength");
  }
};

export const mutations = {
  pushProdutoToCarrinho(state, produto) {
    produto.quantidade = 1;
    state.carrinho.push(produto);
  },

  incrementProdutoQtd(state, produto) {
    produto.quantidade++;
    let indexProduto = state.carrinho.indexOf(produto);
    state.carrinho.splice(indexProduto, 1, produto);
  },

  incrementCarrinhoLength(state) {
    state.carrinhoLength = 0;
    if (state.carrinho.length > 0) {
      state.carrinho.map(produto => {
        state.carrinhoLength += produto.quantidade;
      });
    }
  },

  mudancaQuantidade(state, { produto, qtd }) {
    let produtoCarrinho = state.carrinho.find(prod => prod._id === produto._id);
    produtoCarrinho.quantidade = qtd;
    console.log("prod");
    console.log(produtoCarrinho);
    state.carrinhoLength = 0;
    if (state.carrinho.length > 0) {
      state.carrinho.map(produto => {
        state.carrinhoLength += produto.quantidade;
      });
    }

    let index = state.carrinho.indexOf(produtoCarrinho);

    state.carrinho.splice(index, 1, produtoCarrinho);
  },

  removerProduto(state, produto) {
    state.carrinhoLength -= produto.quantidade;
    let index = state.carrinho.indexOf(produto);

    state.carrinho.splice(index, 1);
  }
};

export const getters = {
  getCarrinhoLength(state) {
    return state.carrinhoLength;
  },
  getCarrinho(state) {
    return state.carrinho;
  },
  getCarrinhoPrecoTotal(state) {
    let total = 0;
    state.carrinho.map(produto => {
      total += produto.preco * produto.quantidade;
    });

    return total;
  }
};
