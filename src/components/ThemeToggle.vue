<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline/index.js";
import { useDark, useToggle } from "@vueuse/core";
import { onBeforeMount, onBeforeUnmount } from "vue";

const isDark = useDark({
   storageKey: "darkMode",
});
const toggleDark = useToggle(isDark);

function updateTheme() {
   localStorage.darkMode === "auto"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.add("light");
}

onBeforeMount(() => {
   document.addEventListener("astro:after-swap", updateTheme);
});

onBeforeUnmount(() => {
   document.removeEventListener("astro:after-swap", updateTheme);
});
</script>

<template>
   <div class="fixed bottom-3 right-3">
      <button @click="toggleDark()" aria-label="Toggle Dark Mode">
         <span class="text-primary-darker dark:text-primary">
            <span v-if="isDark">
               <SunIcon class="h-6 w-6" />
            </span>
            <span v-else>
               <MoonIcon class="h-6 w-6" />
            </span>
         </span>
      </button>
   </div>
</template>
