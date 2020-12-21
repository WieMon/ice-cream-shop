<template>
  <div>
    <HomeSlider />
    <HomeContent />
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