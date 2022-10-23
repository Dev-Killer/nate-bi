<template>
    <v-app style="height: 100%">
        <v-main>
            <div>
                <hello-world></hello-world>
            </div>
        </v-main>
    </v-app>
</template>

<script lang="js">
import Vue from 'vue';
import HelloWorld from '../pages/public/HelloWorld';
import ThemeSwitcherVue from '../components/shared/ThemeSwitcher.vue';

export default Vue.extend({
    name: 'PublicLayout',

    components: {
        HelloWorld,
        ThemeSwitcherVue
    }
});
</script>
