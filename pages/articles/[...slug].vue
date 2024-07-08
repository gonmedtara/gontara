<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg mb-12 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1 class="text-2xl font-bold mb-4">{{ doc.title }}</h1>
          <p class="mb-4">{{ doc.description }}</p>
          <img class="my-8 mx-auto" :src="doc.image.src" :alt="doc.image.alt" />
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const { data: page } = await useAsyncData(`${slug}`, queryContent("/").findOne);

useContentHead(page);
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
