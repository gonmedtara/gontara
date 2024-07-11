<template>
  <div class="px-2 py-3">
    <nuxt-img
      :src="article.image.src"
      class="rounded-md mx-auto mb-2"
      :class="{ 'h-20': !basic }"
      :placeholder="article.image.alt"
      format="webp"
    />

    <div class="mb-2" :class="{ 'flex justify-center': basic }">
      <span
        v-for="word in getArticleKeyWords(article.head.meta)"
        class="mr-2 text-green-400 text-xs"
        >{{ word }}</span
      >
    </div>
    <NuxtLink :to="article._path" external
      ><h2 class="text-md font-bold" :class="{ 'text-center': basic }">
        {{ article.title }}
      </h2></NuxtLink
    >
    <p v-if="basic" class="text-center my-3">{{ article.description }}</p>
    <div
      class="flex flex-col"
      :class="basic ? 'items-center' : 'justify-start'"
    >
      <span class="italic underline">{{ article.auther.name }}</span>
      <span class="text-xs text-zinc-500"
        >Published {{ article.published }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  article: { type: Object, required: true },
  basic: { type: Boolean },
});

const getArticleKeyWords = (meta) => {
  const content = meta[0].content;
  const keywords = content.split(",").map((word) => word.trim());
  return keywords;
};
</script>

<style scoped></style>
