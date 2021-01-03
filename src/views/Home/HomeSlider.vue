<template>
  <v-container>
    <v-row class='row'>
      <div class='slider__div'>
        <carousel 
          :per-page='1' 
          :mouse-drag='true' 
          :navigationEnabled='true'
          :paginationEnabled='false'
          :loop='true'
          :centerMode='true'
        >
          <slide v-for='(slide,index) in slides' :key='index'>
            <img class='slider__img' :src="require(`../../assets/slider/${slide.img}`)"> 
            <p class='slider__text'>{{slide.text}}</p>
          </slide>
      </carousel>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
    return {
      slides: [],
 
    };
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
  components: {
    Slide,
    Carousel
  }
};
</script>