<template>
  <div class="px-2 py-3">
    <div class="mb-2">
      <span
        v-for="word in getArticleKeyWords(article.head.meta)"
        class="mr-2 text-green-400 text-xs"
        >{{ word }}</span
      >
    </div>
    <div class="grid grid-cols-5 gap-1">
      <div class="col-span-3">
        <NuxtLink :to="article._path" external
          ><h2 class="text-xs font-bold mb-2">
            {{ article.title }}
          </h2></NuxtLink
        >

        <div class="flex flex-col justify-start">
          <span class="text-xs italic underline">{{
            article.auther.name
          }}</span>
          <span class="text-xs text-zinc-500">{{ article.published }}</span>
        </div>
      </div>
      <div class="col-span-2">
        <img
          :src="article.image.src"
          :alt="article.image.alt"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  article: { type: Object, required: true },
});

const getArticleKeyWords = (meta) => {
  const content = meta[0].content;
  const keywords = content.split(",").map((word) => word.trim());
  return keywords;
};
</script>

<style scoped></style>
