<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-medium"></div>
            <h2 style="text-align: center">Atualizar {{ produto.titulo }}</h2>
            <form>
              <div class="a-spacing-top-medium">
                <label>Categoria</label>
                <select class="a-select-option" v-model="categoriaID">
                  <option
                    v-for="cat in categorias"
                    :value="cat._id"
                    :key="cat._id"
                    >{{ cat.tipo }}</option
                  >
                </select>
              </div>

              <div class="a-spacing-top-medium">
                <label>Proprietario</label>
                <select class="a-select-option" v-model="proprietarioID">
                  <option
                    v-for="pro in proprietarios"
                    :value="pro._id"
                    :key="pro._id"
                    >{{ pro.nome }}</option
                  >
                </select>
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Titulo</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="titulo"
                  :placeholder="produto.titulo"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Preço</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="preco"
                  :placeholder="produto.preco"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Quantidade em estoque</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="quantidadeStock"
                  :placeholder="produto.quantidadeStock"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Descrição</label>
                <textarea
                  style="width: 100%"
                  v-model="descricao"
                  :placeholder="produto.descricao"
                ></textarea>
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Avaliacao</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="avaliacao"
                  :placeholder="produto.avaliacao"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Imagem</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ arquivoNome }}</p>
                  </label>
                </div>
              </div>

              <hr />

              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProduto"
                      >Atualizar produto</span
                    >
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let categorias = $axios.$get("http://localhost:3000/api/categorias");
      let proprietarios = $axios.$get(
        "http://localhost:3000/api/proprietarios"
      );
      let produto = $axios.$get(
        `http://localhost:3000/api/produtos/${params.id}`
      );

      const [catResponse, proRespose, produtoResponse] = await Promise.all([
        categorias,
        proprietarios,
        produto
      ]);

      console.log(produto);

      return {
        categorias: catResponse.categorias,
        proprietarios: proRespose.proprietarios,
        produto: produtoResponse.produto
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      titulo: "",
      descricao: "",
      arquivoSelecionado: null,
      arquivoNome: "",
      quantidadeStock: "",
      preco: "",
      categoriaID: null,
      proprietarioID: null,
      avaliacao: ""
    };
  },

  methods: {
    onFileSelected(event) {
      this.arquivoSelecionado = event.target.files[0];
      console.log(this.arquivoSelecionado);
      this.arquivoNome = event.target.files[0].nome;
    },
    async onUpdateProduto() {
      let data = new FormData();
      data.append("titulo", this.titulo);
      data.append("descricao", this.descricao);
      data.append(
        "imagem",
        this.arquivoSelecionado,
        this.arquivoSelecionado.nome
      );
      data.append("quantidadeStock", this.quantidadeStock);
      data.append("preco", this.preco);
      data.append("categoriaID", this.categoriaID);
      data.append("proprietarioID", this.proprietarioID);
      data.append("avaliacao", this.avaliacao);

      let resultado = await this.$axios.$put(
        `http://localhost:3000/api/produtos/${this.$route.params.id}`,
        data
      );

      this.$router.push("/");
    }
  }
};
</script>
