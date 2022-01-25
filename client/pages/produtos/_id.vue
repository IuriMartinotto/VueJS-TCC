<template>
  <main>
    <!-- Caminho do usuário -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color a-color-terteary">{{
                produto.categoria.tipo
              }}</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color a-color-terteary">{{
                produto.titulo
              }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Caminho do usuário pode ser excluido -->

    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!--Imagem, quanto esquerdo da tela-->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Imagem -->
              <div class="img-block">
                <div class="eBooksimg">
                  <img :src="produto.imagem" class="img-fluid" />
                </div>
              </div>
              <!-- Autor Não é necessario-->
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Seguir o autor</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img
                            :src="produto.proprietario.foto"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">{{ produto.proprietario.nome }}</a>
                      </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Seguir</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Descrição, meio da tela-->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">{{ produto.titulo }}</span>
                  <!--<span class="smallTitle">Midia fisica</span>-->
                </h1>
              </div>
              <!-- Autor, não precisa -->
              <div class="bylineinfo">
                por
                <a href="#" class="authorName"
                  >{{ produto.proprietario.nome }}
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important"
                  ></i>
                </a>
                (Proprietario)
              </div>
              <div class="reviewGrupo"></div>

              <a href="#">
                <i
                  class="fas fa-star"
                  v-for="i in produto.avaliacao"
                  :key="i"
                ></i>
              </a>

              <hr style="margin-top: 10px" />
              <!-- Nada daqui precisa 
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    <span class="tmmShowPrompt">Ver outras versões</span>
                  </a>
                  <ul>
                    <li class="swatchElement" style="width: 117px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative"
                                >Ler com nosso
                                <span class="a-text-bold">App gratis</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              -->
              <!-- Descricao -->
              <div class="bookDescription">
                <div
                  class="a-size-medium a-color-price offer-price a-text-normal"
                >
                  Preço: R$ {{ produto.preco }}
                </div>
              </div>

              <div class="bookDescription">
                <div class="bookDescriptionInner">{{ produto.descricao }}</div>
              </div>

              <!--<div class="aboutEbooksFeature">
                <hr />
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      Nucleos:
                      <span>
                        <a href="#">25 <i class="a-icon a-icon-popover"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>

          <!--Parte de comprar, quanto direito da tela-->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input
                          type="radio"
                          id="test1"
                          name="radio-group checked"
                        />
                        <label for="teste1">Comprar agora</label>
                      </form>
                    </div>

                    <div class="float-right">
                      <span
                        class="
                          a-size-medium a-color-price
                          offer-price
                          a-text-normal
                        "
                      >
                        R$ {{ produto.preco }}
                      </span>
                    </div>
                  </div>

                  <div class="a-section a-spacing-small a-spacing-top-micro">
                    <div class="row">
                      <span class="a-color-base buyboxShippingLabel"></span>
                    </div>
                  </div>
                  <div class="a-section a-spacing-small">
                    <div class="a-section a-spacing-none">
                      <span
                        v-if="produto.quantidadeStock > 0"
                        class="a-size-medium a-color-success"
                      >
                        Em estoque
                      </span>
                      <span v-else class="a-size-medium a-color-price">
                        Sem estoque
                      </span>
                    </div>
                  </div>

                  <div class="a-section a-spacing-none">
                    <div class="row">
                      <div class="col-sm-5 col-5">
                        Qtd:
                        <select>
                          <option
                            v-for="i in produto.quantidadeStock"
                            :value="i"
                            :key="i"
                          >
                            {{ i }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <template v-if="produto.quantidadeStock > 0">
                    <div class="a-section a-spacing-top-small">
                      <div
                        class="a-button-stack"
                        @click="addProdutoToCarrinho(produto)"
                      >
                        <span
                          class="a-spacing-small a-button-primary a-button-icon"
                        >
                          <span class="a-button-inner">
                            <i class="a-icon a-icon-cart"></i>
                            <input
                              type="submit"
                              name="submit.add-to-cart"
                              class="a-button-input"
                            />
                            <span class="a-button-text"
                              >Adicionar ao carrinho</span
                            >
                          </span>
                        </span>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  async asyncData({ $axios, params }) {
    try {
      let resonse = await $axios.$get(`/api/produtos/${params.id}`);
      console.log(resonse);

      return {
        produto: resonse.produto,
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(["addProdutoToCarrinho"]),
  },
};
</script>
