<template>
    <p>Cotisation</p>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contribution',

  created() {
    this.$emit('currentPage', 'Cotisation')
  }
})
</script>

<style></style>
