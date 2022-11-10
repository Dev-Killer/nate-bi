<template>
    <v-card flat>
        <v-simple-table fixed-header>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Prenom</th>
                        <th class="text-left">Nom</th>
                        <th class="text-left">Téléphone</th>
                        <th class="text-left">Localité</th>
                        <th class="text-left">Cotisation</th>
                        <th class="text-left">Date Cotisation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "ContribTable",
    props: {
        items: { type: Array, required: true },
    },
});
</script>

<style></style>
