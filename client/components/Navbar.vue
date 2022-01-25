<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid desktop-nav">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-2">
            <div class="logo-area">
              <nuxt-link to="/">
                <h4>e-Commerce</h4>
              </nuxt-link>
            </div>
          </div>
          <!-- Barra de procura -->
          <div class="col-sm-6 pt-0"><Search />></div>
          <!-- Nada -->
          <div class="col-sm-4 pt-0"></div>
        </div>

        <div class="row">
          <!-- Entregar para (não necessário no TCC) -->
          <div class="col-xs-2 col-lg-2 col-md-2 col-sm-2 pt-2">
            <div class="nav-global-location">
              <nuxt-link to="/endereco" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1"
                    >Entregar para</span
                  >
                  <span class="nav-line-2" id="glow-ingress-line2"
                    >Ana Rech</span
                  >
                </div>
              </nuxt-link>
            </div>
          </div>

          <!-- Compras (não necessário no TCC) -->
          <div class="col-xs-6 col-lg-5 col-md-4 col-sm-6 pt-0">
            <div class="nav-fill">
              <div class="nav-shop">
                <nuxt-link
                  to="/historico"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2"
                    >Historico
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </nuxt-link>
              </div>
              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a href="#" class="nav-a">Ofertas</a>
                  <a href="#" class="nav-a">Seu e-commerce</a>
                  <a href="#" class="nav-a">Cartões de presente</a>
                  <a href="#" class="nav-a">Registrar</a>
                  <a href="#" class="nav-a">Vender</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contra e carrinho -->
          <div class="col-xs-4 col-lg-5 col-md-6 col-sm-4 pt-0">
            <div class="nav-tools">
              <a
                href="#"
                id="icp-nav-bar-flyout"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="icp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-language">BR</span>
                  </span>

                  <span class="nav-line-2">
                    &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                  to="/profile"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Bem vindo, </span>
                  <span class="nav-line-2"> {{ $auth.$state.user.nome }}</span>
                </nuxt-link>
              </template>

              <template v-else>
                <nuxt-link
                  to="/login"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Bem vindo, logar</span>
                  <span class="nav-line-2"
                    >Conta &amp; Listas
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </nuxt-link>
              </template>

              <nuxt-link
                to="/pedidos"
                class="nav-a nav-a-2 nav-single-row-link"
              >
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Pedidos</span>
              </nuxt-link>

              <nuxt-link to="/carrinho" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Carrinho</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >{{getCarrinhoLength}}</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "~/components/Search";
export default {
  components: {
    Search,
  },

  computed: {
    ...mapGetters(["getCarrinhoLength"]),
  },
};
</script>