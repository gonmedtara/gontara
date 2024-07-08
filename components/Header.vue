<template>
  <header class="w-screen py-6">
    <div
      class="max-w-5xl mx-auto rounded-full shadow-sm p-4 flex justify-between item-center bg-white dark:bg-slate-800"
    >
      <div class="flex items-center">
        <NuxtLink to="/" externel>
          <div class="flex justify-start items-center">
            <span class="text-2xl font-bold italic">Gontara</span>
            <img src="/public/favicon.ico" alt="plume" class="h-6 ml-1" /></div
        ></NuxtLink>

        <Divider layout="vertical" />
        <ul class="flex">
          <li v-for="menu of menus" :key="menu.name" class="mr-4">
            <NuxtLink
              :to="menu.path"
              externel
              class="p-1 hover:font-bold"
              exactActiveClass="border-b  border-b-2 border-green-400 font-bold"
              >{{ menu.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <div class="mr-2 min-w-64 relative">
          <AutoComplete
            class="search-text-input"
            placeholder="Search articles"
            aria-placeholder="search-articales-placeholder"
            aria-label="search-articles"
            v-model="searchLabel"
            panelClass="dark:bg-slate-900"
            overlayClass="dark:bg-slate-900"
            scrollHeight="2Orem"
            :suggestions="docs"
            @complete="searchDocs"
          >
            <template #option="slotProps">
              <NuxtLink
                :to="slotProps.option.id"
                external
                class="flex flex-col items-start max-w-2xl mb-4"
                ><span class="text-md font-bold max-w-2xl">
                  {{ slotProps.option.titles[0] }}
                </span>
                <span class="text-sm font-bold">{{
                  slotProps.option.title
                }}</span>
                <p
                  class="text-sm max-w-2xl"
                  v-html="slotProps.option.highlightedPhrase"
                ></p>
              </NuxtLink>
            </template>
          </AutoComplete>
          <i class="pi pi-search absolute top-3.5 left-3.5"></i>
        </div>

        <Button
          :icon="getIconByMode()"
          rounded
          outlined
          @click="setColorMode()"
          aria-label="color-mode"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const searchLabel = ref("");
const docs = ref([]);
const menus = ref([
  { name: "Articles", path: "/articles" },
  { name: "About", path: "/about" },
]);

const getIconByMode = () => {
  return colorMode.value === "light" ? "pi pi-moon" : "pi pi-sun";
};

const setColorMode = () => {
  if (colorMode.value === "light") {
    colorMode.value = "dark";
    colorMode.preference = "dark";
  } else {
    colorMode.value = "light";
    colorMode.preference = "light";
  }
};

const searchDocs = async () => {
  const temResults = await searchContent(searchLabel);
  const regex = new RegExp(`(.{0,20})(${searchLabel.value})(.{0,20})`, "i");
  docs.value = temResults.value
    .map((doc) => {
      const match = doc.content.match(regex);
      let highlightedPhrase = null;
      if (match) {
        const phrase = match[0].trim();
        highlightedPhrase = `...${phrase.replace(
          new RegExp(searchLabel.value, "gi"),
          "<mark class='bg-green-400 p-1 rounded-md'>$&</mark>"
        )} ...`;
      }
      return {
        ...doc,
        highlightedPhrase,
      };
    })
    .filter((doc) => !!doc.highlightedPhrase);
  console.log(docs.value);
};
</script>
