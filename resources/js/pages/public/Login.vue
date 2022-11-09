<template>
    <v-card flat>
        <div class="text-center">
            <v-img src="img/login_rafiki.png"></v-img>
        </div>
        <p
            style="font-family: 'Caveat', cursive !important"
            class="mb-4 text-center text-h3 text-md-h1 font-weight-bold title-font"
        >
            CONNEXION
        </p>
        <v-container class="">
            <v-form>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-text-field
                            v-model="fields.username"
                            :error-messages="errors.username"
                            :rules="[rules.emailMatch]"
                            outlined
                            rounded
                            label="Nom utilisateur"
                            placeholder="Ex: Yakhad"
                            autocomplete="off"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10">
                        <v-text-field
                            v-model="fields.password"
                            :error-messages="errors.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Mot de passe"
                            hint="Au moins 8 caractères"
                            outlined
                            rounded
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <div class="my-3 text-center">
                    <v-btn
                        :loading="isLoading"
                        rounded
                        large
                        color="#FF725E"
                        style="color: whitesmoke"
                        @submit.prevent="redirect"
                        to="/admin/dashboard"
                        >Se connecter</v-btn
                    >
                </div>
            </v-form>
        </v-container>
        <v-overlay :value="isLoading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-card>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  name: "Login",

  data: () => ({
    isLoading: false,
    fields: {
      username: '',
      password: ''
    },
    errors: {
      username: '',
      password: null
    },
    show1: false,
    rules: {
          required: value => !!value || 'Obligatoire.',
          min: v => v.length >= 8 || 'Au moins 8 caratères',
          emailMatch: (val) => new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$').test(val) || `L'email est incorrect`,
        },
  }),

  methods: {
    redirect() {
      this.$route.push({name: 'Dashboard'})
    },
    login() {
      axios.post('/login', fields)
        .then(
          res => {
            console.log(res);
          }
        )
        .catch(
          err => {
            console.log(err);
          }
        )
        .finally(
          () => { this.isLoading = false }
        )
    },

    initLogin() {
      this.isLoading = true
      axios.get('/sanctum/csrf-cookie')
        .then(
          res => {
            console.log(res);
            this.login()
          }
         )
         .catch(
          err => {
            console.log(err);
          }
         )
    }
  }
})
</script>
