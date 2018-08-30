<template>
  <div class="card-container">
    <a :href="link ? link : namespace + '/'">
    <sui-card>
      <sui-card-content>
        <span>
          <sui-image
          :src="avatarsrc"
          shape="circular"
          size="mini"
          />
          <span class="author">{{ name }}</span>
        </span>
      </sui-card-content>
      <div class="logo-container">
        <sui-image :src="logosrc" />
      </div>
      <sui-card-content class='btn-small'>
        {{ description }}
        <div>
        <a :href="link ? link : namespace + '/'"><sui-button class="ride-btn">{{ cta ? cta : "Ride Along" }}</sui-button></a>
        </div>
      </sui-card-content>
    </sui-card>
    </a>
    </div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

export default {
  name: 'RideCard',
  props: ['name', 'logosrc', 'avatarsrc', 'description', 'cta', 'link', 'namespace']
};
</script>

<style scoped>
.card-container a {
  color: #222;
  cursor: default;
}
.author {
  margin-left: 1rem;
}
.btn-small {
  margin-top: 0;
  padding-top: 0;
}
.ride-btn {
  cursor: pointer;
}
.logo-container {
  width: 100;
  overflow: hidden;
  margin: 0;
}
.logo-container img {
  width: 100%;
  margin: -21.875% 0;
  display: block;
}
</style>
