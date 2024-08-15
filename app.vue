<template>
  <div class="flex flex-col h-96 justify-center items-center">
    <div class="text-4xl  font-semibold">Hi with <span class="underline text-red-600">TailwindCSS</span></div>

    <pre class="mt-32"><code> {{ data || 'vazio' }}</code></pre>

  </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/teste')


</script>
