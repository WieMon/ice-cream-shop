<template>
  <v-container>
    <v-row class='row'>
      <md-button class='button'
        v-for='(button,index) in buttons'
        :key='index'
        @click='changeMenu(button.name)'
      >
        {{ button.name }}
      </md-button>
    </v-row>
    <v-row class='row'>
      <md-card 
        class='menu__card' 
        v-for='(item,index) in items' 
        :key='index'  
        v-show='item.type === activeProduct'
      >
        <md-card-media>
          <img class='menu__img' :src="require(`../assets/menu/${item.img}`)" />
        </md-card-media>
        <md-card-header class='menu__header'>
          <h3 class='menu__title'>{{ item.title }}</h3>
        </md-card-header>
        <md-card-content class='menu__text'>
          <span >Price: {{ item.price1 }} zł</span>
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
      buttons: [
        {name: 'ice cream', active: true},
        {name: 'dessert', active: false},
        {name: 'drink', active: false}
      ],
      items: [],
      activeProduct: 'ice cream'
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons.forEach(button => {
        if(button.name == value) {
          button.active = true;
          this.activeProduct = value;
        } else {
          button.active = false;
        }
      });
    }
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
