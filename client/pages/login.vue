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
                <h1 class="a-spacing-small">Logar</h1>

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
                </div>

                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onLogin">Logar</span>
                    </span>
                  </span>
                </div>
                <hr />
                <div class="a-row">
                  <b
                    >Ainda não tem uma conta?
                    <nuxt-link to="/signup" class="a-link-emphasis"
                      >Criar conta</nuxt-link
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
      email: "",
      senha: "",
    };
  },

  methods: {
    async onLogin() {
      try {
        this.$auth.loginWith("local", {
          data: {
            email: this.email,
            senha: this.senha,
          },
        });

        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>