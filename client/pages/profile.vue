<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Alteração de perfil</h2>
          <a href="#" @click="onLogout">Logout</a>
          <form>
            <div class="a-spacing-top-medium">
              <label>Nome</label>
              <input
                class="a-input-text"
                style="width: 100%"
                v-model="nome"
                :placeholder="$auth.$state.user.nome"
              />
            </div>

            <div class="a-spacing-top-medium">
              <label>E-mail</label>
              <input
                type="email"
                class="a-input-text"
                style="width: 100%"
                v-model="email"
                :placeholder="$auth.$state.user.email"
              />
            </div>

            <div class="a-spacing-top-medium">
              <label>Senha</label>
              <input class="a-input-text" style="width: 100%" v-model="senha" />
            </div>

            <hr />

            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile"
                    >Alterar perfil</span
                  >
                </span>
              </span>

              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddVoltar">Voltar</span>
                </span>
              </span>
            </div>
          </form>
          <br />
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: ""
    };
  },

  methods: {
    async onUpdateProfile() {
      let data = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };
      try {
        let response = await this.$axios.$put("/api/auth/user", data);

        if (response.success) {
          this.nome = "";
          this.email = "";
          this.senha = "";

          await this.$auth.fetchUser();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async onLogout() {
      await this.$auth.logout();
    },

    onAddVoltar() {
      this.$router.push("/");
    }
  }
};
</script>
