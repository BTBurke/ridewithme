<template>
<div class="container">
    <div id="rides" class="ride-header">
        <h1>Rides in Progress</h1>
    </div>
    <sui-grid :columns="4" stackable>
        <sui-grid-row v-for="(row, i) in rows" :key="i">
            <sui-grid-column v-for="(col, j) in cols" :key="j">
                <RideCard
                    v-bind:name="rides[i*3+j].name"
                    v-bind:avatarsrc="rides[i*3+j].avatarsrc"
                    v-bind:logosrc="rides[i*3+j].logosrc"
                    v-bind:description="rides[i*3+j].description"
                    v-bind:cta="rides[i*3+j].cta"
                    v-bind:link="rides[i*3+j].link"
                ></RideCard>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
</div>
</template>

<script>
import RideCard from './RideCard.vue';

export default {
    data() {
        return {
            rides: [
                {
                    name: 'Bryan Burke', 
                    avatarsrc: 'btburke.jpg', 
                    logosrc: 'secretbox.png',
                    description: 'Ride along as Bryan builds secretbox.io to help developers securely manage their secrets.',
                    cta: 'Ride Along',
                    link: 'secretbox/'
                },
                {
                    name: 'You', 
                    avatarsrc: 'https://placeimg.com/320/320/people', 
                    logosrc: 'https://placeimg.com/900/600/tech',
                    description: 'Are you building something cool?  Share your story with others to document your journey.',
                    cta: 'Add Your Story',
                    link: 'contributing.html'
                }
            ],
            rows: 1,
            cols: 2

        }
    },
    components: {
        RideCard
    }
}
</script>

<style scoped>
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