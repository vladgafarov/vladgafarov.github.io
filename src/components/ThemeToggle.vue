<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
	storageKey: 'darkMode',
})
const toggleDark = useToggle(isDark)
</script>

<template>
	<button @click="toggleDark()">
		<span class="ml-2 text-primary-darker dark:text-primary">{{
			isDark ? 'Dark' : 'Light'
		}}</span>
	</button>
</template>
