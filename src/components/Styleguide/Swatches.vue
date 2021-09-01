<template>
  <div class="styleguide-swatches">
    <p>Swatches</p>
    <Swatch v-for="color in colorList" :key="color.id" :colorName="color"/>
  </div>
</template>

<script>
import Swatch from '../../components/Styleguide/Swatch';

export default {
  props: {
    colors: {
      type: Array
    }
  },
  components: {
    Swatch
  },
  computed: {
    colorList() {
      if (this.colors)
        return this.colors;

      return [
        'color',
        'color-strong',
        'color-light'
      ]
    }
  }
}
</script>
