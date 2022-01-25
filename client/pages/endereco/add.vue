<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Sua contra</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <a href="#">
                      <span>Seu endereço</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Novo endereço</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Add novo endereço</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>
                  Or pick up your packages at your convenience from our
                  self-service locations. To add an Amazon Pickup Point or
                  Locker, click
                  <a href="#">here</a>.
                </b>
              </div>
              <!-- Error Message -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <!-- Country / Region -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Pais</label>
                    <select class="a-select-option" v-model="pais">
                      <option
                        v-for="pais in paises"
                        :key="pais.alpha2Code"
                        :value="pais.name"
                      >
                        {{ pais.name }}
                      </option>
                    </select>
                  </div>
                  <!-- Full name -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Nome completo</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="nomeCompleto"
                    />
                  </div>
                  <!-- Street Address -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Rua</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      placeholder="Rua do TCC, n10"
                      v-model="rua"
                    />
                  </div>
                  <!-- City -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Cidade</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="cidade"
                    />
                  </div>
                  <!-- State -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Estado</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="estado"
                    />
                  </div>
                  <!-- Zip Code -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">CEP</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="cep"
                    />
                  </div>

                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Dias de entrega</label>
                    <a href="#">
                      <i class="fas fa-angle-down"></i> Quais dias pode ser entregue?
                    </a>
                  </div>
                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Tenha certeza que o endereço está correto</b>
                    </span>
                  </div>
                  <div>
                    <span
                      >Se o endereço não estiver correto sua encomenda poderá não chegar.</span
                    >
                  </div>
                  <div class="a-spacing-top-small">
                    <span>
                      <a href="#">Dicas</a>
                    </span>
                    <span>|</span>
                    <span>
                      <a href="#">APO/FPO endereço dicas</a>
                    </span>
                  </div>
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" @click="onAddEndereco">Adicionar</span>
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>


<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/paises");

      return {
        paises: response,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      pais: "Brazil",
      nomeCompleto: "",
      rua: "",
      cidade: "",
      estado: "",
      cep: "",
      pais: "",
    };
  },

  methods: {
    async onAddEndereco() {
      try {
        let data = {
          pais: this.pais,
          nomeCompleto: this.nomeCompleto,
          rua: this.rua,
          cidade: this.cidade,
          estado: this.estado,
          cep: this.cep,
          pais: this.pais,
        };

        let response = await this.$axios.$post("/api/endereco", data);

        if (response.success) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>