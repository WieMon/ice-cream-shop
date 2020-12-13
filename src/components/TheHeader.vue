<template>
  <header class='header'>
    <div class='header__title-div'>
      <h1 class='header__title-first'><font-awesome-icon class='header__icon' icon="ice-cream" /><span>Yummy</span></h1>
      <h2 class='header__title-second'>Ice Cream</h2>
      <h3 class='header__title-third'>Eat ice cream, be happy!</h3>
    </div>
    <div class='header__nav-div'>
  
      <nav class='header__nav'>
        <ul class='header__list'>
          <li class='header__item'>
            <router-link class='header__link' to="/">Log in</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Log out</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Sign up</router-link>
          </li>
          
        </ul>
      </nav>
      <nav>
        <ul class='header__list'>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Home</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to="/the-menu">Menu</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/the-contact'>Visit us</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Dashboard</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
 
};
</script>

<style>

</style>