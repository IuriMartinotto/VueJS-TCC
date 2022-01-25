<template>
  <body>
    <!--SHIPPING ADDRESS-->
    <div class="container-fluid">
      <div class="shipping-address">
        <div class="a-row">
          <div class="a-size-large a-text-bold a-spacing-mini">
            Revise seu pedido
          </div>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
            <div class="a-row a-spacing-large"></div>
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Endereço de entrega
                          <small>
                            <a href="#">Mudar</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <div class="displayAddressDiv">
                          <!-- User's address -->
                              <!--{{$auth.$state.user.endereco.nomeCompleto}}-->
                            Rua dos TCC, 823. Caxias do Sul - Brazil
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Metodo de pagamento
                          <small>
                            <a href="#">Mudar</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <ul class="no-bullet-list">
                          <li class="a-spacing-micro">
                            <span class="a-list-item">
                              <span>
                                <img src="img/visa.gif" class="img-fluid" />
                              </span>
                              terminado em
                              <span>6397</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <!-- Estimated delivery -->
                  <div
                    class="
                      a-row
                      a-color-state
                      a-text-bold
                      a-size-medium
                      a-spacing-small
                    "
                  >
                    Entrega estimada: 3 de Dezembro de 2021
                  </div>
                  <div class="row">
                    <!-- Cart -->
                    <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                      <div class="a-row a-spacing-base" v-for="produto in getCarrinho" :key="produto._id">
                        <div class="row">
                          <!-- Product's photo -->
                          <div class="col-sm-3 col-3">
                            <img :src="produto.imagem" style="width: 100px" />
                          </div>
                          <!-- Product's Title -->
                          <div class="col-sm-9 col-9">
                            <div class="a-row">
                              <strong>{{produto.titulo}}</strong>
                            </div>
                            <!-- Product's owner name -->
                            <div class="a-row a-size-small">
                              by {{produto.proprietario.nome}}
                            </div>
                            <div class="a-row">
                              <!-- Product's price -->
                              <span class="a-color-price a-spacing-micro">
                                <strong dir="ltr">R$ {{produto.preco * produto.quantidade}}</strong>
                              </span>
                            </div>
                            <div class="a-row">
                              <span class="availability a-color-success"
                                >Em estoque.</span
                              >
                            </div>
                            <div class="a-row">
                              <!-- Product's quantity -->
                              <strong>Quantidade: {{produto.quantidade}}</strong>
                            </div>
                            <div class="a-row a-color-secondary a-size-small">
                              Vendido por:&nbsp;Tcc Iuri, Inc
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-micro">
                    <nuxt-link to="/payment">
                      <span class="a-button-place-order"
                        >Finalizar pedido</span
                      >
                    </nuxt-link>
                  </div>
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    Finalizando seu pedido, você aceita a
                    <a href="#">política de privacidade</a>
                    e
                    <a href="#">condições de uso</a>.
                  </div>
                  <div class="a-row">
                    
                    <h3 class="a-spacing-micro a-size-base">Resumo do pedido</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Cart's total price -->
                        <div class="col-sm-6">Items:</div>
                        <div class="col-sm-6 text-right">R$ {{getCarrinhoPrecoTotal}}</div>
                      </div>
                      <div class="row">
                        <!-- Shipping cost -->
                        <div class="col-sm-6">Frete:</div>
                        <div class="col-sm-6 text-right">R$ 25</div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6 text-right">
                        </div>
                      </div>
                      
                      <hr />
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Total do pedido:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Total Price with Shipping -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            R$ {{getCarrinhoPrecoTotal + 25}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="a-row a-spacing-small a-spacing-top-small">
          <p class="a-color-secondary a-size-mini">
            Do you need help? Explore our
            <a href="#">Help pages</a> or
            <a href="#">contact us</a>
          </p>
          <p class="a-color-secondary a-size-mini">
            For an item sold by Amazon.com: When you click the "Place your
            order" button, we'll send you an email message acknowledging receipt
            of your order. Your contract to purchase an item will not be
            complete until we send you an email notifying you that the item has
            been shipped.
          </p>
          <p id="state-sales-tax-info" class="a-color-secondary a-size-mini">
            Colorado, Oklahoma, South Dakota and Vermont Purchasers:
            <a href="#"
              >Important information regarding sales tax you may owe in your
              State</a
            >
          </p>
          <div class="a-color-secondary a-size-mini">
            <p class="a-color-secondary a-size-mini">
              Within 30 days of delivery, you may return new, unopened
              merchandise in its original condition. Exceptions and restrictions
              apply. See Amazon.com's
              <a href="#">Returns Policy</a>
              <br />
              <br />Go to the <a href="#">Amazon.com homepage</a> without
              completing your order.
            </p>
          </div>
        </div>
        <hr />
        <p class="a-size-small a-text-center a-color-secondary" data-testid>
          <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> ©
          1996-2019, Amazon.com, Inc.
        </p>
      </div>
    </div>
    <!--/SHIPPING ADDRESS-->
  </body>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCarrinho", "getCarrinhoPrecoTotal"]),
  },
};
</script>
