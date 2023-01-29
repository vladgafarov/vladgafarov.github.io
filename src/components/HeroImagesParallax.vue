<script setup lang="ts">
import HeroImageItem from './HeroImageItem.vue'
</script>

<template>
	<div
		class="hidden absolute top-1/2 h-[50%] 2xl:h-[45%] -translate-y-1/2 transform inset-x-[10%] lg:flex justify-between pointer-events-none"
	>
		<div class="flex flex-col justify-between">
			<HeroImageItem
				:width="68"
				:height="68"
				:position="-3"
				image="infinity.png"
				:rotate="-70"
			/>
			<HeroImageItem
				:width="63"
				:height="63"
				:position="3"
				image="cube.png"
				:rotate="15"
			/>
		</div>
		<div class="flex flex-col justify-between">
			<HeroImageItem
				:width="123"
				:height="123"
				:position="5"
				image="react-logo.png"
				:rotate="-10"
			/>
			<HeroImageItem
				:width="120"
				:height="120"
				:position="-5"
				image="vue-logo.png"
				:rotate="-14"
			/>
		</div>
	</div>
</template>
