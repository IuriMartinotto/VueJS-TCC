<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <!--Add novos produtos -->
          <h1 class="a-size-large a-spacing-none a-text-normal">
            Todos os produtos
          </h1>
          <div class="a-spacing-large"></div>
          <nuxt-link to="/produtos" class="a-button-history margin-right-10"
            >Adicionar novo produto</nuxt-link
          >
          <nuxt-link to="/categoria" class="a-button-history margin-right-10"
            >Adicionar nova categoria</nuxt-link
          >
          <nuxt-link to="/proprietario" class="a-button-history margin-right-10"
            >Adicionar novo propeitario</nuxt-link
          >
          <!--Add novos produtos -->
        </div>
      </div>
    </div>

    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="(produto, index) in produtos"
          :key="produto._id"
          class="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb"
        >
          <div class="history-box">
            <!-- Inicio Imagem do produto -->
            <a href="#" class="a-link-normal">
              <img :src="produto.imagem" class="img-fluid" />
            </a>
            <!-- Fim Imagem do produto -->

            <!-- Inicio Titulo do produto -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p12n-sc-truncated">{{ produto.titulo }}</div>
              </span>
            </div>
            <!-- Fim Titulo do produto -->

            <!-- Inicio Avaliacao do produto -->
            <div class="a-row">
              <a href="#">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews"
                >(1732)</span
              >
            </div>
            <!-- Fim Avaliacao do produto -->

            <!-- Inicio Preco do produto -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13-sc-price">R$ {{ produto.preco }} </span>
              </span>
            </div>
            <!-- Fim Preco do produto -->

            <!-- Inicio Botoes atualizar e deletar produto -->
            <div class="a-row">
              <nuxt-link
                :to="`/produtos/${produto._id}`"
                class="a-button-history margin-right-10"
                >Atualizar</nuxt-link
              >
              <a
                href="#"
                class="a-button-history margin-right-10"
                @click="onDeleteProduto(produto._id, index)"
                >Deletar</a
              >
            </div>
            <!-- Fim Botoes atualizar e deletar produto -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //Função carrega os dados da API antes da pagina terminar de carregar no navegador
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/produtos");
      console.log(response);
      return {
        produtos: response.produtos
      };
    } catch (error) {}
  },

  methods: {
    async onDeleteProduto(id, index) {
      try {
        let response = await this.$axios.delete(
          `http://localhost:3000/api/produtos/${id}`
        );

        if (response.status) {
          this.produtos.splice(index, 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
