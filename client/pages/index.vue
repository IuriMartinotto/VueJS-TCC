<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <!-- Barra do lado -->
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4"></div>
        <!-- Conteúdo principal -->
        <div class="col-xl-10 col-9 md-8 col-sm-8">
          <!--ProdutosApresentados></ProdutosApresentados-->
          <div class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                v-for="produto in produtos"
                :key="produto._id"
              >
                <div class="s-item-container">
                  <!-- Mais vendidos -->
                  <!--
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Mais vendidos</a>
                    </div>
                  </div>-->

                  <div class="row">
                    <!-- Imagem -->
                    <div class="col-sm-3 text-center">
                      <a href="#">
                        <img
                          :src="produto.imagem"
                          style="width: 200px"
                          class="img-fluid"
                        />
                      </a>
                    </div>

                    <div class="col-sm-9">
                      <div class="a-row a-spacing-small">
                        <!-- Titulo e data -->
                        <nuxt-link :to="`/produtos/${produto._id}`" class="a-link-normal">
                          <h2 class="a-size-medium">
                            {{ produto.titulo }}
                            <span class="a-letter-space"></span>
                            <span class="a-letter-space"></span>
                            <span class="a-size-small a-color-secondary"
                              >Setembro 2, 2021</span
                            >
                          </h2>
                        </nuxt-link>
                      </div>

                      <!-- Nome do autor -->
                      <div class="a-row a-spacing-small">
                        <span class="a-size-small a-color-secondary">por</span>
                        <span class="a-size-small a-color-secondary">
                          <a class="a-link-normal a-text-normal" href="#">{{
                            produto.proprietario.nome
                          }}</a>
                        </span>
                      </div>

                      <!-- Entrega -->
                      <div class="a-row">
                        <span class="a-size-small">Entrega no Brasil</span>
                      </div>

                      <div class="row">
                        <div class="col-sm-7">
                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal"
                              >Sei lá</a
                            >
                          </div>
                          <!-- Preço -->
                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal">
                              <span class="a-offscreen"
                                >R$ {{ produto.preco }}</span
                              >
                              <span class="a-color-base sx-zero-spacing">
                                <span class="sx-price sx-price-large">
                                  <sup class="sx-price-currency">R$</sup>
                                  <span class="sx-price-whole">{{
                                    produto.preco
                                  }}</span>
                                  <sup class="sx-price-fractional">00</sup>
                                </span>
                              </span>
                            </a>
                            <span class="a-letter-space"></span>
                            <span
                              class="
                                a-size-base-plus a-color-secondary a-text-strike
                              "
                              >R$ 28.00</span
                            >
                          </div>
                          <!-- Não sei oq é -->
                          <div class="a-row a-spacing-none">
                            <span class="a-size-small a-color-secondary"
                              >Sem taxas</span
                            >
                          </div>
                          <hr />

                          <!-- Outros formatos -->
                          <span class="a-size-small a-color-secondary">
                            Outros formatos:
                            <span class="a-letter-space"></span>
                            <a
                              href="#"
                              class="a-size-small a-link-normal a-text-normal"
                              >Sem midia</a
                            >
                          </span>
                        </div>

                        <!-- Avaliações -->
                        <div class="col-sm-5">
                          <div class="a-row a-spacing-mini"></div>
                          <a href="#">
                            <i
                              class="fas fa-star"
                              v-for="i in produto.avaliacao"
                              :key="i"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProdutosApresentados from "~/components/ProdutosApresentados";
export default {
  components: {
    ProdutosApresentados
  },

  async asyncData({ $axios }) {
    try {
      let response = await $axios.get("/api/produtos");
      console.log(response.data.produtos);
      return {
        produtos: response.data.produtos
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
