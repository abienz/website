<template>
  <clipped-section inner-class="bg-gray-100">
    <div class="bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-center text-6xl">Team</h2>
        <p class="max-w-2xl mx-auto mt-7 text-center">
          Akira exists thanks to the contribution of hundreds of developers and
          designers, but the four guys that started all of this need a bit of a
          shout out.
        </p>
        <div class="flex flex-wrap -mx-2 mt-20">
          <div
            :key="index"
            v-for="({ avatar, name }, index) in team"
            class="w-1/4 px-2"
          >
            <div class="flex flex-col items-center">
              <img
                :src="avatar"
                :alt="`${name}'s photo`"
                class="w-48 h-48 rounded-full shadow"
              />
              <p
                class="mt-7 font-semibold font-sans-condensed text-lg text-center"
              >
                {{ name }}
              </p>
            </div>
          </div>
        </div>
        <div class="text-center mt-16">
          <a
            href="https://github.com/akiraux/Akira/graphs/contributors"
            target="_blank"
            class="inline-block py-3 px-8 rounded font-bold text-lg text-white"
            style="background: linear-gradient(#ffa154, #f37329);"
          >
            Contributors
          </a>
        </div>
      </div>
    </div>
  </clipped-section>
</template>
<script>
import ClippedSection from '@/components/common/ClippedSection'
export default {
  components: { ClippedSection },
  computed: {
    team() {
      const team = []
      team.push({
        avatar: require('~/assets/img/avatar-albertoFanjul.png'),
        name: 'Alberto Funjul'
      })
      team.push({
        avatar: require('~/assets/img/avatar-alessandroCastellani.png'),
        name: 'Alessandro Castellani'
      })
      team.push({
        avatar: require('~/assets/img/avatar-bilalElmoussaoui.png'),
        name: 'Bilal Elmoussaoui'
      })
      team.push({
        avatar: require('~/assets/img/avatar-felipeEscoto.png'),
        name: 'Felipe Escoto'
      })
      return team
    }
  }
}
</script>
