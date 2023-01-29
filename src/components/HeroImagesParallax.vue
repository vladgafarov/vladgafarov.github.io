<script setup lang="ts">
import HeroImageItem from './HeroImageItem.vue'
</script>

<template>
	<div
		class="hidden absolute top-1/2 h-[50%] 2xl:h-[45%] -translate-y-1/2 transform inset-x-[10%] lg:flex justify-between pointer-events-none"
	>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="-3" image="infinity.png" :rotate="-70" />
			<HeroImageItem :position="3" image="cube.png" :rotate="15" />
		</div>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="1" image="react-logo.png" :rotate="-10" />
			<HeroImageItem :position="-8" image="vue-logo.png" :rotate="-14" />
		</div>
	</div>
</template>
