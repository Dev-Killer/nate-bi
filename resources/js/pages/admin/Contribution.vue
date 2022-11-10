<template>
    <v-container>
        <div class="text-end my-4 mb-15">
            <v-btn
                rounded
                block
                large
                dark
                color="#E5A060"
                @click="dialog = true"
                >Ajout cotisation &nbsp;
                <v-icon>mdi-account-plus-outline</v-icon>
            </v-btn>
        </div>

        <p class="pt-3 text-h5 font-weight-medium">Liste des cotisations:</p>

        <!-- TABS -->
        <v-tabs
            class="my-2"
            background-color="transparent"
            v-model="tab"
            :color="$vuetify.theme.dark ? '#FF8373' : '#6F5CFF'"
            :dark="$vuetify.theme.dark"
            :slider-color="$vuetify.theme.dark ? '#FF8373' : '#6F5CFF'"
        >
            <v-tab href="#sn" ripple dark>&nbsp; Sénégal &nbsp;</v-tab>
            <v-tab href="#euro" ripple>&nbsp; Europe &nbsp;</v-tab>
        </v-tabs>

        <!-- Tabs Items -->
        <v-tabs-items v-model="tab" class="transparent" touchless>
            <!-- Tab 2 -->
            <v-tab-item id="sn">
                <contrib-table :items="desserts"></contrib-table>
            </v-tab-item>
            <!-- Tab 1 -->
            <v-tab-item id="euro">
                <contrib-table :items="dess"></contrib-table>
            </v-tab-item>
        </v-tabs-items>

        <create-contrib-dialog
            :dialog="dialog"
            @cancel="dialog = false"
        ></create-contrib-dialog>
    </v-container>
</template>

<script lang="js">
import Vue from 'vue';
import CreateContribDialog from '../../components/Contribrutions/CreateContribDialog.vue';
import ContribTable from '../../components/Contribrutions/ContribTable.vue';
export default Vue.extend({
  name: 'Contribution',
  components: { CreateContribDialog, ContribTable },

  data: () => ({
    tab: null,
    dialog: false,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      },
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      }],

      dess: [
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      }],
  }),

  created() {
    this.$emit('currentPage', 'Cotisation')
  }
})
</script>

<style></style>
