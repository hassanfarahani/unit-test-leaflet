<template>
  <div class="map">
    <l-map ref="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'WellMap',
  data() {
      return {
      zoom:13,
      center: [49.5028240000004, -108.6315335],
      url:'http://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      latLngs: [
        [49.509877, -108.643427],
        [49.509907, -108.641507],
        [49.504882, -108.641171],
        [49.50009, -108.641218],
        [49.495815, -108.641056]
      ],
      lMap: {},
      wellPolyline: null
    }
  },
  components: {
    LMap,
    LTileLayer,
    // LMarker,
  },
  mounted() {
    this.lMap = this.$refs.map.mapObject
    this.wellPolyline = L.polyline(this.latLngs, { color: 'red' }).addTo(this.lMap)
    // this.wellPolyline.setText('well name', {
    //   repeat: false,
    //   below: true,
    //   center: true,
    //   offset: 15,
    //   oreintation: 'auto',
    //   attributes: {
    //     fill: 'red',
    //     'font-size': '13',
    //     x: 0
    //   }
    // })
    // L.control.scale({ position: 'topleft' }).addTo(this.lMap)
  }

}
</script>

<style>

.map {
  height: 95vh;
}

</style>