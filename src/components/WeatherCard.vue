<template>
  <div class="w-[800px] flex justify-between gap-4 p-8 items-center bg-cyan-500/10 rounded-lg text-white">
    <p class="text-lg font-semibold">{{ formatDate(day.dt) }}</p>
    <p>{{ day.weather[0].description }}</p>
    <p class="text-2xl font-bold">{{ day.temp.day }}°C</p>
  </div>
</template>

<script>
export default {
  props: ['day'],
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
    },
  },
}
</script>
