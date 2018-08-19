<template lang="html">
<div class="container">
  <sui-grid :columns="3" stackable>
    <sui-grid-row>
      <sui-grid-column>
        <div class="feature-header">
            <h2>Watch a business being built step by step</h2>
        </div>
        <div class="feature-text">
            Ride along as an indie hacker validates, builds, and scales an idea
        </div>
      </sui-grid-column>
      <sui-grid-column>
        <div class="feature-header">
            <h2>Completely transparent data and results</h2>
        </div>
        <div class="feature-text">
            See all the results - both the successes and failures
        </div>
      </sui-grid-column>
      <sui-grid-column>
        <div class="feature-header">
            <h2>Learn what works (and what doesn't)</h2>
        </div>
        <div class="feature-text">
            We document everything we do, in gory detail, so you don't make the same mistakes
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

export default {
  name: 'Features',
};
</script>

<style scoped>
.container {
    margin-top: 6rem;
}
.feature-header {
    padding-bottom: 1rem;
}
.feature-text {
    padding-bottom: 3rem;
    font-size: 1.2rem;
    color: #6a8bad;

}
</style>