<template>
  <main>
    <div
      class="mb-12 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl lg:mx-0 mx-4"
    >
      <div class="grid grid-cols-12 gap-3" v-if="articles">
        <div class="lg:col-span-3 col-span-12">
          <div class="grid grid-cols-1">
            <ArticleCard :article="articles[1]"></ArticleCard>
            <Divider />
            <ArticleCard :article="articles[2]"></ArticleCard>
          </div>
        </div>
        <!-- <Divider layout="vertical" /> -->
        <div
          class="lg:col-span-6 col-span-12 lg:border-l lg:border-r lg:border-t-0 lg:border-b-0 border-t border-b dark:border-zinc-700"
        >
          <ArticleCard :article="articles[4]" :basic="true"></ArticleCard>
        </div>
        <!-- <Divider layout="vertical" /> -->
        <div class="lg:col-span-3 col-span-12">
          <div class="grid grid-cols-1">
            <ArticleCardList :article="articles[0]"></ArticleCardList>
            <Divider />
            <ArticleCardList :article="articles[3]"></ArticleCardList>
            <Divider />
            <ArticleCardList :article="articles[2]"></ArticleCardList>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);

useSeoMeta({
  title: "Acceuil | Gontara",
  description: "Gontara private blog",
});
</script>

<style scoped></style>
