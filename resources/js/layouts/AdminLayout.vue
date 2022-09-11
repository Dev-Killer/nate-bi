<template>
    <v-app ref="app" style="height: 100%">
        <!-- Navigation Drawer -->
        <v-navigation-drawer
            permanent
            app
            mobile-breakpoint="md"
            :mini-variant.sync="minimize"
            :color="$vuetify.theme.dark ? '#1a202e' : '#ffffff'"
            class="elevation-4"
        >
            <v-list>
                <v-list-item v-show="!minimize">
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 font-weight-black text-center"
                            >UCAD - DIPLOME</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="minimize" class="px-2">
                    <v-list-item-avatar class="mx-auto">
                        <v-img src="/img/logo ucad02.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
                <v-list-item v-else class="px-2 w-100">
                    <v-list-item-content>
                        <v-img src="/img/logo-ucad-blue.png" v-if="$vuetify.theme.dark"></v-img>
                        <v-img src="/img/logo-ucad-black-transp.png" v-else></v-img>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link v-show="!minimize">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6"> Sandra Adams </v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <!-- <v-list-item link to="/dashboard">
                    <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Tableau de bord</v-list-item-title>
                </v-list-item> -->
                <v-list-item-group color="#5668f3">
                    <v-list-item link to="/demande">
                        <v-list-item-icon>
                            <v-icon>mdi-application-import</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Demande</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/print">
                        <v-list-item-icon>
                            <v-icon>mdi-printer</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Impression</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/verification-conformite">
                        <v-list-item-icon>
                            <v-icon>mdi-check-decagram</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Vérification Conformité</v-list-item-title>
                    </v-list-item>
                    <v-list-group prepend-icon="" no-action color="#5668f3">
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>mdi-checkbox-marked</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Verification DAJ</v-list-item-title>
                        </template>
                        <v-list-item link to="/verification-pre-sign">
                            <v-list-item-icon>
                                <v-icon>mdi-shield-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Pré-signature</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/verification-post-sign">
                            <v-list-item-icon>
                                <v-icon>mdi-check-decagram</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Post-signature</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item link to="/signature">
                        <v-list-item-icon>
                            <v-icon>mdi-draw-pen</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Signature</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/reception">
                        <v-list-item-icon>
                            <v-icon>mdi-check-underline-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Réception</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/users">
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Utilisateurs</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- App Bar -->
        <v-app-bar app elevation="4" :color="$vuetify.theme.dark ? '#1a202e' : '#ffffff'">
            <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>

            <v-toolbar-title
                ><span v-show="minimize">DIPLOME UCAD &nbsp;&nbsp;-&nbsp;&nbsp;</span>
                {{ currentPage }}</v-toolbar-title
            >

            <v-spacer></v-spacer>

            <theme-switcher></theme-switcher>

            <div class="mx-6"></div>

            <user-dropdown-vue></user-dropdown-vue>
        </v-app-bar>

        <!-- Content -->
        <v-main style="background-color: whitesmoke">
            <v-card flat height="100%" :color="$vuetify.theme.dark ? '#232B3E' : '#ecf0f4'" class="pt-4" rounded="0">
                <router-view @currentPage="pageTitle"></router-view>
            </v-card>
        </v-main>

        <!-- Footer -->
        <!-- <v-footer padless dark color="#363636">
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }}
          <strong>DISI — UCAD</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
    </v-app>
</template>

<script>
import Vue from 'vue';
import ThemeSwitcher from '../components/shared/ThemeSwitcher';
import UserDropdownVue from '../components/shared/UserDropdown.vue';

export default Vue.extend({
    name: 'AdminLayout',

    components: { ThemeSwitcher, UserDropdownVue },
    data: () => ({
        minimize: false,
        selectedMenu: 0,
        selectedVerifMenu: 0,
        menuItems: [
            { text: 'Tableau de bord', icon: 'mdi-view-dashboard-outline' },
            { text: 'Demande', icon: 'mdi-account-multiple' },
            { text: 'Impression', icon: 'mdi-star' },
            { text: 'Vérification Comformité', icon: 'mdi-star' },
            {
                text: 'Verification DAJ',
                icon: 'mdi-star',
                children: [
                    { text: 'Pré signature', icon: 'mdi-star' },
                    { text: 'Post Signature', icon: 'mdi-star' }
                ]
            },
            { text: 'Signature', icon: 'mdi-star' },
            { text: 'Réception', icon: 'mdi-star' }
        ],
        user: {
            id: null,
            prenom: '',
            nom: '',
            matricule: '',
            etablissement: '',
            profile: '',
            email: ''
        },
        currentPage: ''
    }),
    methods: {
        toggleSidebar() {
            this.minimize = !this.minimize;
        },
        fetchUser() {
            axios
                .get('user')
                .then((response) => {
                    this.user = response;
                    this.$store.commit('auth/SET_LOGGED', { user: response, isLoggedIn: true });
                })
                .catch((error) => {
                    this.$swal({
                        icon: 'error',
                        title: 'Erreur',
                        text: error.message
                    });
                });
        },
        pageTitle(title) {
            this.currentPage = title;
        }
    },

    created() {
        this.fetchUser();
    },
    watch: {
        '$vuetify.theme.isDark'() {
            this.$nextTick(() => {
                const rootStyles = window.getComputedStyle(this.$refs.app.$el);
                document.body.style.backgroundColor = '#1a202e'; /* rootStyles.backgroundColor */
            });
        }
    }
});
</script>
<style>
.theme--dark.v-data-table {
    background-color: #1a202e !important;
}
.theme--dark.v-card {
    background-color: #1a202e !important;
}
.theme--light.v-tabs-items {
    background-color: inherit !important;
}
.theme--dark.v-tabs-items {
    background-color: inherit !important;
}
</style>
