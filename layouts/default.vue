<template>
  <Html lang="pt_BR" class="scroll-smooth font-poppins antialiased">

  <div class="flex flex-col min-h-dvh mx-auto bg-slate-200">

    <header>
      <div class="flex justify-center p-5 bg-red-100">
        Header
      </div>
    </header>

    <div class="flex flex-1 flex-col">
      <main class="flex flex-col w-full max-w-[60%] mx-auto bg-white h-full rounded-xl my-20 p-5">
        <slot />
      </main>
    </div>

    <footer class="bg-yellow-100">
      <div class="flex justify-center p-5">
        Footer
      </div>
    </footer>
  </div>

  </Html>
</template>