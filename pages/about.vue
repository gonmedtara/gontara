<template>
  <main>
    <div class="mb-12 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl">
      <div class="grid grid-cols-12 gap-3">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQESEnkdPICnpg/profile-displayphoto-shrink_200_200/0/1609265435712?e=1725494400&v=beta&t=Dy4SOwF2HQSe9h9fW5YayhnXbi9QISqc9nw8fFSHeoI"
          alt="about-image"
          class="col-span-3 rounded-md"
        />
        <div class="col-span-9">
          <h1 class="text-xl font-bold">Mohamed GONTARA</h1>
          <span class="text-zinc-500"
            >Front end developer
            <NuxtLink to="https://www.linkedin.com/company/sfeir/" external>
              <span class="text-zinc-500 underline text-xs pointer"
                >@SFEIR</span
              >
            </NuxtLink></span
          >
          <p class="mb-5">
            Développeur Frontend passionné par la création d'interfaces web. Ma
            boîte à outils : JavaScript, TypeScript, Angular, Vue, Nuxt.
          </p>
          <div class="flex justify-start items-center">
            <SocialLink
              v-for="(link, index) in links"
              :link="link"
              class="flex justify-center border-r px-6"
              :class="{
                'border-none': index === links.length - 1,
                'pl-0': index === 0,
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "About | Gontara",
  description: "Gontara short presentation",
});

const links = ref([
  {
    name: "Linkedin",
    icon: "pi-linkedin",
    path: "https://www.linkedin.com/in/mohamed-gontara/",
  },
  {
    name: "Github",
    icon: "pi-github",
    path: "https://github.com/gonmedtara",
  },
  {
    name: "X",
    icon: "pi-twitter",
    path: "https://x.com/gonmedtara",
  },
  {
    name: "Facebook",
    icon: "pi-facebook",
    path: "https://www.facebook.com/mohamed.gontara.1",
  },
]);
</script>

<style scoped></style>
