<template>
  <div>
    <HeaderComponent />
    
    <main>
      <h1>Bem-vindo à ByteStore!</h1>
      <p>Essa é a página inicial.</p>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'Home',
  components: {
    HeaderComponent
  }
}
</script>
