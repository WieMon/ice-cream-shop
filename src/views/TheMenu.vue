<template>
  <v-container >
    <v-row class='menu'>
      <md-card class='menu__card' v-for='(item,index) in items' :key='index'>
        <md-card-media class='menu__media' >
          <img class='menu__img' :src="require(`../assets/menu/${item.img}`)" />
        </md-card-media>
        <md-card-header class='menu__header'>
          <h3 class='menu__title'>{{ item.title }}</h3>
        </md-card-header>
        <md-card-content class='menu__text'>
          <span>Price: {{ item.price1 }} zł</span>
          <br>
          <span>If you decide to take it away: {{ item.price2 }} zł</span>
        </md-card-content>
      </md-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
       items: [],
    };
  },
  created() {
    this.$http.get('items.json')
    .then(response => response.json())
    .then ( data => {
      let list = [];

      for(let key in data) {
        list.push({
          ...data[key],
          id: key
        });
      }
      this.items = list;
    });
  }
};
</script>
