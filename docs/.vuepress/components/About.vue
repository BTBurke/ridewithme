<template lang="html">
    <sui-grid :columns="2" divided stackable>
    <sui-grid-row>
      <sui-grid-column>
            <div class="header">
                About the Author
            </div>
            <div class="about-container">
                <div class="avatar">
                    <sui-image
                    :src="'/' + data.author.avatarsrc"
                    shape="circular"
                    size="tiny"
                    wrapped
                    />
                </div>
                <div class="bio">
                    {{ data.author.bio }}
                </div>
            </div>
      </sui-grid-column>
      <sui-grid-column>
          <div class="header">
              About the Project
          </div>
          <div class="about-container">
              <div class="avatar">
                  <sui-image
                    :src="'/' + data.project.logosrc"
                    size="tiny"
                    wrapped
                    />
              </div>
              <div class="bio">
                 {{ data.project.description }}
              </div>
          </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import { prop } from 'ramda';
import 'semantic-ui-css/semantic.min.css';
import data from '../data.js';

Vue.use(SuiVue);

export default {
    name: 'About',
    props: ['project'],
    data() {
        return {
            data: prop(this.project, data)
        }
    }
}
</script>

<style scoped>
.header {
    margin-bottom: .7rem;
    text-transform: uppercase;
    color: #3eaf7c;
    font-weight: bold;
}
.about-container {
    display: flex;
    flex-direction: row;
}
.about-container .avatar {
    margin-right: 0.5rem;
}
</style>
