<template>
  <v-container>
    <v-row class='row'>
      <image-slider>
        <div class='slider__div' v-for='(slide, number) in [slides]' :key='number'>
          <img  
            class='slider__img' 
            :src='currentImage' 
          />
          <div class='slider__icon-div'>
            <a @click="prevImage" href='#'><font-awesome-icon class='slider__icon' icon='chevron-left' /></a>
            <a @click="nextImage" href='#'><font-awesome-icon class='slider__icon' icon='chevron-right' /></a>
          </div>
          <p class='slider__text'
            :src='currentDescription'>
              {{currentDescription}}
          </p>
        </div>
      </image-slider>
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
      this.nextImage();
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