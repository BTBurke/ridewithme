<template lang="html">
<div class="container-hero">
    <div class="photo">
    </div>
    <div class="callout">
        <div class="callout-text">
            Ride along with indie hackers as they build the next big thing
        </div>
        <div class="cta">
            <a href="#rides" v-smooth-scroll="{offset: -50}"><sui-button primary content="See the stories" size="huge"/></a>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.use(SuiVue);

export default {
  name: 'Hero2',
};
</script>
<style scoped>
.container-hero {
    width: 100%;
    position: relative;
    display: inline-block;
}
.container-hero .photo {
    background: no-repeat center/200% url("/hero@1X.jpg");
    display: block;
    min-height: 400px;
    width: 100%;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
    .container-hero .photo {
        background: no-repeat center/200% url("/hero@2X.jpg");
    }
}
.container-hero .callout {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(20, 80, 122, 0.75);
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
}
.container-hero .callout .callout-text {
    display: block;
    margin: auto;
    font-size: 3rem;
    text-align: center;
    line-height: 3.2rem;
    font-family: 'ADAM.CG PRO';
}
@font-face {
    font-family: 'ADAM.CG PRO'; /*a name to be used later*/
    src: url('/adam.otf'); /*URL to font*/
}
.container-hero .callout .cta button {
    background-color: rgb(62, 175, 124);
}

</style>