<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Adicionar nova categoria</h2>
          <form>
            <div class="a-spacing-top-medium">
              <label>Tipo</label>
              <input class="a-input-text" style="width: 100%" v-model="tipo" />
            </div>

            <hr />

            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddCategoria"
                    >Adicionar categoria</span
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
          <ul class="list-group-item">
            <li v-for="cat in categorias" :key="cat._id">
              {{ cat.tipo }}
            </li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/categorias");
      return {
        categorias: response.categorias
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      tipo: ""
    };
  },

  methods: {
    async onAddCategoria() {
      try {
        let data = { tipo: this.tipo };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/categorias",
          data
        );

        this.categorias.push(data);
      } catch (error) {
        console.log(error);
      }
    },

    onAddVoltar() {
      this.$router.push("/");
    }
  }
};
</script>
