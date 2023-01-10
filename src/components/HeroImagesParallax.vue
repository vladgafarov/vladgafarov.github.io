<script setup lang="ts">
import HeroImageItem from './HeroImageItem.vue'
</script>

<template>
	<div
		class="absolute top-1/2 h-1/2 -translate-y-1/2 transform inset-x-0 flex justify-between"
	>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="-15" image="infinity.png" />
			<HeroImageItem :position="30" image="cube.png" />
		</div>
		<div class="flex flex-col justify-between">
			<HeroImageItem :position="-5" image="react-logo.png" />
			<HeroImageItem :position="10" image="vue-logo.png" />
		</div>
	</div>
</template>
