<template>
    <v-dialog v-model="dialog" persistent>
        <v-card style="background-color: #fff5f3">
            <v-card-title>
                <span class="headline">Nouvelle Cotisation</span>
            </v-card-title>
            <v-card-text>
                <v-alert prominent dense text type="info"
                    >Champ obligatoire (*)</v-alert
                >
                <v-container>
                    <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field
                                outlined
                                label="Prénom *"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field outlined label="Nom *"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field
                                outlined
                                label="Numéro téléphone"
                                :rules="[rules.phone]"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                outlined
                                label="Localité *"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                outlined
                                label="Cotisation *"
                                type="number"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        outlined
                                        v-model="date"
                                        label="Date Cotisation"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" scrollable>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-select
                                label="Zone"
                                outlined
                                :items="items"
                                item-value="title"
                                item-text="text"
                                required
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="cancelDialog"
                    >Annuler</v-btn
                >
                <v-btn color="blue darken-1" text @click="cancelDialog"
                    >Enregister</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "CreateContribDialog",
    props: {
        dialog: { type: Boolean, default: false },
    },

    data: () => ({
        rules: {
            phone: (v) => (v && v.length == 9) || "Taille incorrect",
        },
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),
        menu: false,
        items: [
            {
                title: "sn",
                text: "Sénégal",
            },
            {
                title: "int",
                text: "International",
            },
        ],
    }),

    methods: {
        cancelDialog() {
            this.$emit("cancel");
        },
    },
});
</script>

<style></style>
