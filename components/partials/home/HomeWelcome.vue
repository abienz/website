<template>
  <div class="relative pt-28 text-white bg-no-repeat bg-center overflow-hidden">
    <div class="container mx-auto">
      <div class="flex -mx-2">
        <div class="w-1/2 px-2">
          <h1 class="mt-20 text-6xl uppercase leading-none">Akira</h1>
          <p class="text-lg leading-none">The Linux design tool</p>
          <p class="mt-7">
            Akira is a native Linux design application built in Vala and GTK.
            Akira focusses on offering a modern and fast approach to UI and UX
            design, mainly targetting web designers and graphic designers. The
            main goal is to offer a valid and professional solution for
            designers who want to use Linux as their main OS.
          </p>
          <div class="flex mt-8">
            <a
              href="https://appcenter.elementary.io/com.github.akiraux.akira/"
              target="_blank"
            >
              <img
                src="~/assets/img/downloads-app.png"
                alt="Get it on appcenter"
              />
            </a>
            <a
              class="ml-3"
              href="https://github.com/akiraux/Akira#flathub-beta"
              target="_blank"
            >
              <img
                src="~/assets/img/downloads-flat.png"
                alt="Download on flathub"
              />
            </a>
            <a class="ml-3" href="https://snapcraft.io/akira" target="_blank">
              <img
                src="~/assets/img/downloads-snap.png"
                alt="Download on snapcraft"
              />
            </a>
          </div>
        </div>
        <div class="w-1/2 px-2">
          <img
            class="absolute -mt-20"
            src="~/assets/img/akira-teen.png"
            alt="Akira Teen mascot"
          />
        </div>
      </div>
    </div>
    <div class="h-48" />
    <div
      class="absolute top-0 w-full h-full -mt-24"
      style="background-image: linear-gradient(-45deg, #4f4f44, #353535); z-index: -1; transform: skewY(-5deg);"
    />
    <div
      :style="`background-image: url('${headerBg}'); z-index: -1;`"
      class="absolute top-0 w-full h-full bg-center"
    />
  </div>
</template>
<script>
import HeaderBg from '~/assets/img/header-bg.svg'
export default {
  computed: {
    headerBg: () => HeaderBg
  }
}
</script>
