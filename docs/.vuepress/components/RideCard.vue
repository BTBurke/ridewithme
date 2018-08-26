<template>
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
      <sui-image :src="logosrc" />
      <sui-card-content class='btn-small'>
        {{ description }}
        <div>
        <a :href="link ? link : namespace + '/'"><sui-button>{{ cta ? cta : "Ride Along" }}</sui-button></a>
        </div>
      </sui-card-content>
    </sui-card>
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
.author {
  margin-left: 1rem;
}
.btn-small {
  margin-top: 0;
  padding-top: 0;
}
</style>
