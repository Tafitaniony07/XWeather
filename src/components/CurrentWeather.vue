<template>
  <div class="w-[800px] flex justify-between gap-4 p-8 items-center bg-cyan-500/10 rounded-lg text-white">
    <div class="text-start flex flex-col gap-3">
      <p class="text-lg text-center bg-amber-300/10 font-light rounded-full py-1 px-3 capitalize text-[16px]">
        {{ weather.weather[0].description }}
      </p>

      <div>
        <h2 class="text-2xl font-bold">{{ weather.name }}</h2>
        <p class="text-4xl font-bold text-amber-300">{{ weather.main.temp }}°C</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 p-4 rounded-md">
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Visibilité</p>
        <p class="font-[600] text-amber-300/65">{{ weather.visibility / 1000 }} km</p>
      </div>
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Humidité</p>
        <p class="font-[600] text-amber-300/65">{{ weather.main.humidity }}%</p>
      </div>
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Vitesse du vent</p>
        <p class="font-[600] text-amber-300/65">{{ weather.wind.speed }} km/h</p>
      </div>
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Pression d'air</p>
        <p class="font-[600] text-amber-300/65">{{ weather.main.pressure }} hPa</p>
      </div>
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Lever du soleil</p>
        <p class="font-[600] text-amber-300/65">{{ formatTime(weather.sys.sunrise) }}</p>
      </div>
      <div class="text-center bg-cyan-500/5 px-3 py-2 rounded-md border border-white/5">
        <p class="font-[500]">Couché de soleil</p>
        <p class="font-[600] text-amber-300/65">{{ formatTime(weather.sys.sunset) }}</p>
      </div>
    </div>
  </div>
  <EatCardView v-if="weather" :weather="weather" />
</template>

<script>
import EatCardView from './EatCardView.vue';

export default {
  props: ['weather'],
  components: { EatCardView },

  methods: {
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    },

  },
}
</script>
