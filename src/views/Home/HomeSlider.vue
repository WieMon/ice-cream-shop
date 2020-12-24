<template>
  <v-container>
    <v-row class='row'>
      <a @click="prevImage" href='#'><font-awesome-icon class='slider__icon' icon='chevron-left' /></a>
      <transition-group name='fade' tag='div'>
        <div class='slider__div' v-for="number in [currentNumber]" :key='number'>
          <img  
            class='slider__img' 
            :src='currentImage' 
          />
          <p
            :src='currentDescription'>
              {{currentDescription}}
          </p>
        </div>
      </transition-group>
      <a @click="nextImage" href='#'><font-awesome-icon class='slider__icon' icon='chevron-right' /></a>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      currentNumber: 0,
    };
  },
  mounted: function() {
    this.startSlider();
  },
  methods: {
    startSlider: function() {
       setTimeout(this.nextImage, 1000);
     },
    nextImage: function() {
      this.currentNumber += 1;
    },
    prevImage: function() {
      this.currentNumber -= 1;
    }
  },
  created() {
    this.$http.get('slides.json')
    .then(response => response.json())
    .then(data => {
      let list =[];

      for(let key in data) {
        list.push({
          ...data[key],
          id: key
        });
      }
      this.slides = list;
    });
  },
  computed: {
    currentImage: function() {
      return require(`../../assets/slider/${this.slides[Math.abs(this.currentNumber) % this.slides.length].img}`);
    },
    currentDescription: function() {
      return this.slides[Math.abs(this.currentNumber) % this.slides.length].text;
    }
  },
};
</script>