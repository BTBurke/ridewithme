<template>
<div class="container">
    <div id="rides" class="ride-header">
        <h1>Rides in Progress</h1>
    </div>
    <sui-grid :columns="4" stackable class="grid">
        <sui-grid-row v-for="(row, i) in rows" :key="i">
            <sui-grid-column v-for="(col, j) in cols(i)" :key="j">
                <RideCard
                    v-bind:name="rides[i*4+j].author.name"
                    v-bind:avatarsrc="rides[i*4+j].author.avatarsrc"
                    v-bind:logosrc="rides[i*4+j].project.logosrc"
                    v-bind:namespace="rides[i*4+j].namespace"
                    v-bind:description="rides[i*4+j].card.description"
                    v-bind:cta="rides[i*4+j].card.cta"
                    v-bind:link="rides[i*4+j].card.link"
                ></RideCard>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
</div>
</template>

<script>
import RideCard from './RideCard.vue';
import { values } from 'ramda';
import data from '../data.js';

export default {
    data() {
        console.log("data", data);
        return {
            rides: values(data)
        }
    },
    computed: {
        rows() {
            return this.rides ? this.rides.length % 4 - 1 : 0;
        },
    },
    methods: {
        cols(row) {
            return this.rides ? Math.min(4, this.rides.length - row*4) : 0;
        },
    },
    components: {
        RideCard
    }
}
</script>

<style scoped>
.grid {
    align-items: stretch;
}
.container {
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.ride-header {
    border-bottom: 3px solid #3eaf7c;
    margin-bottom: 2rem;
    color: #222;
}
</style>
