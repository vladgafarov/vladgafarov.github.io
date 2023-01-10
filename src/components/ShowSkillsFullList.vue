<script setup lang="ts">
import { useConfirmDialog } from '@vueuse/core'

const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } =
	useConfirmDialog()
</script>

<template>
	<button @click="reveal" class="text-dark dark:text-white underline">
		Show me full list
	</button>

	<teleport to="body">
		<div v-if="isRevealed" class="modal-bg">
			<div class="modal">
				<h2>Confirm?</h2>
				<button @click="confirm">Yes</button>
				<button @click="cancel">Cancel</button>
			</div>
		</div>
	</teleport>
</template>
