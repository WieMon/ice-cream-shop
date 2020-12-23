<template>
  <v-container>
    <v-row class='row'>
      <md-card 
        class='content__card content__card--rev'
        v-for='(review,index) in reviews'
        :key='index'
      >
        <md-card-content>
          <p>
            "{{ review.text }}"
          </p>
          <span class='content__span'>
          {{ review.author }}
          </span>
        </md-card-content>
      </md-card>
    </v-row>
    <v-row class='row'>
      <md-card 
        class='content__card content__card--hist'
        v-for='(history,index) in histories'
        :key='index'
      >
        <md-card-content>
          <h2 class='content__title'>
          {{ history.title }}  
          </h2>
          <p>
            {{ history.text1 }}
          </p>
         <p>
           {{ history.text2 }}
         </p>
        </md-card-content> 
        <md-card-media >
          <img class='contact__img' :src="require(`../../assets/history/${history.img}`)">
        </md-card-media>
      </md-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      histories: []
   };
  },
  created() {
    this.$http.get('reviews.json')
    .then(response => response.json())
    .then ( data => {
      let list = [];

      for(let key in data) {
        list.push({
          ...data[key],
          id: key
        });
      }
      this.reviews = list;
    });

     this.$http.get('histories.json')
    .then(response => response.json())
    .then ( data => {
      let description = [];

      for(let key in data) {
        description.push({
          ...data[key],
          id: key
        });
      }
      this.histories = description;
    });
  }
};
</script>