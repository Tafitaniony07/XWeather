<template>
  <header class=" w-[800px] flex justify-between gap-4 p-8 items-center bg-cyan-500/10 rounded-lg text-white">
    <h1 class="text-xl font-bold">XWeather 🌞</h1>
    <div class="flex items-center space-x-4">
      <button class="bg-cyan-500/10 hover:bg-cyan-500/20 duration-200 transition-colors px-4 py-2 rounded-full "
        @click="getCurrentLocation">Localisation</button>

      <input v-model="city" @keyup.enter="searchWeather" type="text" placeholder="Rechercher la localisation..."
        class="px-3 py-2 rounded-full placeholder:text-white/75 focus:bg-transparent focus:border-gray-300/10 focus:outline-none border w-[280px] border-cyan-500/10 text-white bg-cyan-500/5" />
      <button class="bg-amber-300/50 px-4 py-2 rounded-full hover:bg-cyan-500/20 duration-200 transition-colors  "
        @click="searchWeather">
        Rechercher</button>
    </div>
  </header>
</template>

<script>

export default {
  props: ['onSearch', 'onLocation'],

  data() {
    return {
      city: '',
    }
  },
  methods: {
    searchWeather() {
      this.onSearch(this.city)
    },
    getCurrentLocation() {
      this.onLocation()
    },
  },
}
</script>
