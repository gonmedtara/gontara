<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator color="#14b8a6" />
  <NuxtLayout>
    <Header />
    <div class="w-screen">
      <div class="max-w-5xl mx-auto">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
