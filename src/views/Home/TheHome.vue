<template>
  <div>
    <v-content>
      <v-row>
        <v-col>
          <HomeSlider />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <HomeContent />
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
import HomeSlider from './HomeSlider.vue';
import HomeContent from './HomeContent.vue';

export default {
  name: 'TheHome',
  components: {
    HomeSlider,
    HomeContent
  }
};
</script>
