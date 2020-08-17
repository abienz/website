<template>
  <div class="container mx-auto">
    <h2 class="text-center text-6xl">Features</h2>
    <p class="max-w-2xl mt-6 mx-auto text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
      tempor incididunt ut labore et dolore magnaaliqua.
    </p>
    <div class="flex flex-wrap -mx-10">
      <div
        :key="index"
        v-for="({ icon, title, description }, index) in features"
        class="w-1/3 mt-10 px-10"
      >
        <div class="flex flex-col items-center text-center">
          <img :src="icon" alt="Linux icon" />
          <h3 class="text-lg font-sans-condensed font-semibold">
            {{ title }}
          </h3>
          <p class="mt-6 px-10">{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-14">
      <a
        href="/features"
        class="inline-block py-3 px-8 rounded font-bold text-lg text-white"
        style="background: linear-gradient(#ffa154, #f37329);"
      >
        Learn more
      </a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    features() {
      const features = []
      features.push({
        icon: require('~/assets/img/icon-linux.png'),
        title: 'Native for linux',
        description:
          'Akira is built in Vala and GTK, no electron shenanigans here, and specially crafted to run on Linux.'
      })
      features.push({
        icon: require('~/assets/img/icon-svg.png'),
        title: 'SVG-Based Canvas',
        description:
          'Akira is powered by GooCanvas, a native SVG-based canvas Library maintained by GNOME.'
      })
      features.push({
        icon: require('~/assets/img/icon-shapes.png'),
        title: 'Non-Destructive Editing',
        description:
          'All the native shapes and elements are vector, giving you the ability to use boolean operations without ever loosing the original shape.'
      })
      features.push({
        icon: require('~/assets/img/icon-guides.png'),
        title: 'Pixel Precision',
        description:
          'An always crip and grid-hinted design thanks to the built-in pixel grid, rulers, and guidelines. Becuase you know, sub-pixels are not a thing.'
      })
      features.push({
        icon: require('~/assets/img/icon-branches.png'),
        title: 'Built-in Version Control',
        description:
          'Never lose your work again with the Akira file format and its built-in local Git repository'
      })
      features.push({
        icon: require('~/assets/img/icon-wireframe.png'),
        title: 'Intuitive interface',
        description:
          'No need to get lost in hundreds of menus or dropdowns, watch the interface follow your actions and boost your productivity.'
      })
      return features
    }
  }
}
</script>
