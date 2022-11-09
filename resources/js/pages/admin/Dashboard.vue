<template>
    <p>Dashboard</p>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  name: 'Dashboard',

  created() {
    this.$emit('currentPage', 'Tableau de bord')
  }
})
</script>

<style></style>
