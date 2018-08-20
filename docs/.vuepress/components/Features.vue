<template lang="html">
<div class="container">
    <sui-grid :columns="1">
        <sui-grid-row>
            <sui-grid-column>
                <div class="explain-header">
                    <h1>What is a ride along?</h1>
                </div>
                <div class="explain-text">
                    Follow the progress of indie hackers as they take you through their exact process of building a business step-by-step as they do it.
                </div>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
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
    padding-bottom: 2rem;
    width: 80%;
    text-align: center;
    color: #3eaf7c;
    margin: auto;
}
.feature-text {
    padding-bottom: 3rem;
    font-size: 1.5rem;
    color: #222;
    width: 90%;
    text-align: center;
    line-height: 1.7rem;
    margin: auto;
}
.explain-header {
    color: #3eaf7c;
    width: 50%;
    margin: auto;
    text-align: center;
    font-size: 2rem;
    line-height: 2.2rem;
}
.explain-text {
    color: #222;
    font-size: 1.5rem;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 2rem;
    line-height: 1.7rem;
    margin-bottom: 2rem;
}
</style>