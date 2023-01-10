<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { ref, watch } from 'vue'

const { x, y } = useMouse({ touch: false })
const elem1 = ref<HTMLElement>()
const props = defineProps<{
	position: number
	image: string
}>()

function handleMouseMove() {
	const x1 = (window.innerWidth - x.value * props.position) / 700
	const y1 = (window.innerWidth - y.value * props.position) / 700

	if (!elem1.value) return
	elem1.value.style.transform = `translate(${x1}px, ${y1}px)`
}

watch(x, () => {
	handleMouseMove()
})
</script>

<template>
	<div class="w-28 h-28" ref="elem1">
		<img :src="'/' + props.image" alt="Vlad Gafarov" />
	</div>
</template>
