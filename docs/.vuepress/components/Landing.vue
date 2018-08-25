<template>
<div>
    <Hero2 />
    <div is="sui-container">
        <Features />
        <ActiveRides/>
    </div>
    <Email />
</div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

export default {
  name: 'Landing',
};
</script>