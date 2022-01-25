<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <a href="#">
              <h1>e-Commerce</h1>
              <!--<img src="/img/logo-black.png" />-->
            </a>
          </div>
          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Criar conta</h1>
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Nome</label
                  >
                  <input
                    type="text"
                    id="ap_customer_name"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="nome"
                  />
                </div>

                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >E-mail</label
                  >
                  <input
                    type="email"
                    id="ap_customer_name"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="email"
                  />
                </div>

                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Senha</label
                  >
                  <input
                    type="password"
                    id="ap_customer_name"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="senha"
                  />
                  <div class="a-alert-container">
                    <div class="a-alert-content">
                      Senha deve ter ao menos 6 caracteres
                    </div>
                  </div>
                </div>

                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignoup"
                        >Criar sua conta</span
                      >
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>Criando uma conta, você concorda com os termos</b>
                  </div>
                </div>
                <hr />
                <div class="a-row">
                  <b
                    >Já possui conta?
                    <nuxt-link to="/login" class="a-link-emphasis"
                      >Logar</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",

  auth: "guest",

  layout: "none",

  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },

  methods: {
    async onSignoup() {
      try {
        let data = {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        };

        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log("aqui");
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              senha: this.senha,
            },
          });

          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>