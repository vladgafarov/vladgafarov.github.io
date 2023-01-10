<script setup lang="ts">
import HeroImageItem from './HeroImageItem.vue'
</script>

<template>
	<div
		class="hidden absolute top-1/2 h-[45%] -translate-y-1/2 transform inset-x-[10%] lg:flex justify-between pointer-events-none"
	>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="-15" image="infinity.png" :rotate="-70" />
			<HeroImageItem :position="30" image="cube.png" :rotate="15" />
		</div>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="-5" image="react-logo.png" :rotate="-10" />
			<HeroImageItem :position="10" image="vue-logo.png" :rotate="-14" />
		</div>
	</div>
</template>
