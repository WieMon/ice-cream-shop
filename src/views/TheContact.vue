<template>
  <v-container>
    <v-row>
      <md-card
        class='contact__card'
        v-for='(contact,index) in contacts'
        :key='index'
        >
        <md-card-content class='contact__content'>
          <h2 class='contact__title'>Opening hours</h2>
          <span class='contact__span'>
            {{ contact.openingdays }}
          </span>
          <br>
          <span class='contact__span'>
            {{ contact.openinghours }}
          </span>
        </md-card-content>
        <md-card-media class='contact__media'>
          <font-awesome-icon class='contact__icon' icon='thumbtack' />
          <img class='contact__img' :src="require(`../assets/${contact.img}`)" >
        </md-card-media>
        <md-card-content class='contact__content'>
          <span class='contact__span'>
            {{ contact.address1 }}, {{ contact.address2 }}
          </span>
          <br>
          <span class='contact__span'>
            {{ contact.phone }}
          </span>
          <br>
          <span class='contact__span'>
            {{ contact.email }}
          </span>
        </md-card-content>
      </md-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.$http.get('contacts.json')
    .then(response => response.json())
    .then ( data => {
      let list = [];

      for(let key in data) {
        list.push({
          ...data[key],
          id: key
        });
      }
      this.contacts = list;
    });
  }
};
</script>