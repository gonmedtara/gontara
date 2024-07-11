<template>
  <main>
    <Panel
      toggleable
      v-for="(article, id) in articles"
      :key="id"
      class="mb-6 shadow-sm border-none rounded-xl dark:bg-slate-800 lg:mx-0 mx-4"
    >
      <template #header>
        <NuxtLink :to="article._path" external
          ><h2 class="text-xl font-bold">{{ article.title }}</h2></NuxtLink
        >
      </template>
      <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <Avatar
              :image="article.auther.image"
              size="normal"
              shape="circle"
            />
            <span class="">{{ article.auther.name }}</span>
          </div>
          <span class="text-surface-500 dark:text-surface-400"
            >Published {{ article.published }}</span
          >
        </div>
      </template>
      <div class="mb-2">
        <span
          v-for="word in getArticleKeyWords(article.head.meta)"
          class="mr-2 bg-green-400 text-xs p-1 rounded-full"
          >#{{ word }}</span
        >
      </div>
      <div class="mb-2">
        <img :src="article.image.src" :alt="article.image.alt" />
      </div>
      <p class="m-0">
        {{ article.description }}
      </p>
    </Panel>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Articles | Gontara",
  description: "Gontara article list",
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);

const getArticleKeyWords = (meta) => {
  const content = meta[0].content;
  const keywords = content.split(",").map((word) => word.trim());
  return keywords;
};
</script>
