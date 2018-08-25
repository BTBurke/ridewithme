<template lang="html">
<div class="container-hero">
    <div class="photo">
    </div>
    <div class="callout">
        <div class="callout-text">
            <h1>Ride along with indie hackers as they build the next big thing</h1>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

export default {
  name: 'Hero',
};
</script>
<style scoped>
.container-hero {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: center;
}
.photo {
    background: no-repeat center/200% url("/hero.jpg");
    min-height: 400px;
    width: 50%;
    order: 1;
}
.callout {
    background: #14507A;
    font-size: 1.2rem;
    color: #fff;
    min-height: 400px;
    order: 2;
    width: 50%;
    font-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    padding-left: 1.2rem;
    
}
.callout-text {
    width: 80%;
}
@media only screen and (max-width: 600px) {
    .container-hero {
        flex-direction: column;
    }    
    .photo {
        min-height: 200px;
        width: 100%;
    }
    .callout {
        min-height: 200px;
        width: 100%;
    }
}
</style>