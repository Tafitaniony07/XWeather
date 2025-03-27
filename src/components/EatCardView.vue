<template>
    <div class="w-[800px]">
        <h1 class="text-2xl text-amber-300 text-start pt-5 ">Bien être</h1>
        <p class="text-white/85 font-light text-[15px]">

            Voici des recommandations adaptées à chaque type de météo pour combiner plaisir et bien-être :
        </p>
        <div v-for="data in filteredData" :key="data.nourritureName">
            <div
                class="bg-cyan-500/10 p-4 rounded-lg border border-white/10 text-white flex justify-between items-stretch gap-4 my-5">
                <div class="w-[250px]">
                    <h1 class="text-amber-300/85">Nourriture</h1>
                    <p class=" font-light">{{ data.nourritureName }}</p>
                </div>
                <div class="w-[250px]">
                    <h1 class="text-amber-300/85">Description</h1>
                    <p class="font-light">{{ data.description }}</p>
                </div>
                <div class="w-[250px]">
                    <h1 class="text-amber-300/85">Conseils</h1>
                    <p class="font-light">{{ data.conseil }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Data } from '@/data/data';

export default {
    props: ['weather'],
    data() {
        return {
            datas: Data,

        }
    },
    computed: {
        filteredData() {
            console.log(this.weather.main.humidity)

            switch (true) {
                case (this.weather.main.humidity > 0 && this.weather.main.humidity <= 15):

                    return this.datas.filter(data => data.humidity > 0 && data.humidity < 15);

                case (this.weather.main.humidity > 15 && this.weather.main.humidity <= 30):

                    return this.datas.filter(data => data.humidity > 15 && data.humidity <= 30);

                case (this.weather.main.humidity > 30 && this.weather.main.humidity <= 45):

                    return this.datas.filter(data => data.humidity > 30 && data.humidity <= 45);

                case (this.weather.main.humidity > 45 && this.weather.main.humidity <= 60):

                    return this.datas.filter(data => data.humidity > 45 && data.humidity <= 60);

                case (this.weather.main.humidity > 60 && this.weather.main.humidity <= 75):

                    return this.datas.filter(data => data.humidity > 60 && data.humidity <= 75);

                case (this.weather.main.humidity > 75 && this.weather.main.humidity <= 90):

                    return this.datas.filter(data => data.humidity > 75 && data.humidity <= 90);

                case (this.weather.main.humidity > 90 && this.weather.main.humidity <= 100):

                    return this.datas.filter(data => data.humidity > 90 && data.humidity <= 100);
            }


        }
    }

}
</script>
