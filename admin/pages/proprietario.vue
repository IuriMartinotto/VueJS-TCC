<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <h2 style="text-align: center">Adicionar novo propeitario</h2>

          <form>
            <div class="a-spacing-top-medium">
              <label>Nome</label>
              <input class="a-input-text" style="width: 100%" v-model="nome" />
            </div>

            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Sobre</label>
              <textarea
                placeholder="Informe o sobre"
                style="width: 100%"
                v-model="sobre"
              ></textarea>
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
                  <span class="a-button-text" @click="onAddProprietario"
                    >Adicionar proprietario</span
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

          <hr />
          <br />
          <ul class="list-group-item">
            <li v-for="prop in proprietarios" :key="prop._id">
              {{ prop.nome }}
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
      let response = await $axios.$get(
        "http://localhost:3000/api/proprietarios"
      );
      return {
        proprietarios: response.proprietarios
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      nome: "",
      sobre: "",
      arquivoSelecionado: null,
      arquivoNome: ""
    };
  },

  methods: {
    onFileSelected(event) {
      this.arquivoSelecionado = event.target.files[0];
      console.log(this.arquivoSelecionado);
      this.arquivoNome = event.target.files[0].nome;
    },
    async onAddProprietario() {
      let data = new FormData();
      data.append("nome", this.nome);
      data.append("sobre", this.sobre);
      data.append(
        "foto",
        this.arquivoSelecionado,
        this.arquivoSelecionado.nome
      );

      let resultado = await this.$axios.$post(
        "http://localhost:3000/api/proprietarios",
        data
      );
    },

    onAddVoltar() {
      this.$router.push("/");
    }
  }
};
</script>
