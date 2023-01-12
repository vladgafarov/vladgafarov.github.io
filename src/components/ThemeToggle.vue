<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline/index.js'

const isDark = useDark({
	storageKey: 'darkMode',
})
const toggleDark = useToggle(isDark)
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
