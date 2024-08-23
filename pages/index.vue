<template>
  <div class="flex flex-col items-center">

    <pre><code> {{ data || 'vazio' }}</code></pre>

  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/teste')


</script>