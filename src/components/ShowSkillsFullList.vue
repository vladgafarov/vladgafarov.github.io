<script setup lang="ts">
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const isOpen = ref(false)

function closeModal() {
	isOpen.value = false
}
function openModal() {
	isOpen.value = true
}
</script>

<template>
	<button @click="openModal" class="text-dark dark:text-white underline">
		Show me full list
	</button>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-50" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle class="text-xl flex justify-between">
								<h3>Full list of tech skills</h3>
								<XMarkIcon
									@click="closeModal"
									class="w-5 h-5 text-black cursor-pointer"
								/>
							</DialogTitle>
							<div class="mt-2">
								<ul class="list-disc list-inside">
									<li>HTML, CSS (sass/scss), JS (TypeScript)</li>
									<li>React.js, Next.js, Remix, Redux</li>
									<li>Vue, Nuxt.js</li>
									<li>Jest, cypress</li>
									<li>REST API, GraphQL, WebSocket (socket.io)</li>
									<li>Git, Docker</li>
									<li>Node.js, Nest.js, Prisma</li>
									<li>PostgreSQL, SQLite, mongoDB</li>
									<li>Python, C#</li>
									<li>Pandas, numpy</li>
								</ul>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
