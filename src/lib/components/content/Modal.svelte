<script>
	import { onMount } from 'svelte';

	let modalActive = false;

	// Function to open the modal
	function openModal() {
		modalActive = true;
		// When the modal is active, we should trap the focus within the modal for accessibility
		// This is a simplified example and might require a more robust focus management solution
		setTimeout(() => {
			document.getElementById('modal-close-button').focus();
		}, 0);
	}

	// Function to close the modal
	function closeModal() {
		modalActive = false;
	}

	// Function to handle keydown events for accessibility
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	// Add event listener for keydown when the component mounts
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<!-- Trigger button for the modal -->
<button
	class="px-4 py-2 bg-blue-500 text-white rounded"
	on:click={openModal}
>
	Open Modal
</button>

<!-- Modal structure -->
{#if modalActive}
	<div
		class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4"
	>
		<div
			class="bg-white rounded-lg shadow-lg p-6 relative"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<h2 id="modal-title" class="text-lg font-bold mb-4">
				Modal Title
			</h2>
			<p>Modal content goes here...</p>
			<slot />
			<!-- Close button with ARIA role and tabindex for accessibility -->
			<div
				role="button"
				tabindex="0"
				class="absolute top-2 right-2 cursor-pointer"
				on:click={closeModal}
				on:keydown={handleKeydown}
				id="modal-close-button"
			>
				&#10005; <!-- This is a unicode 'X' character -->
			</div>
		</div>
	</div>
{/if}

<style>
	/* Add any additional styles here */
	.cursor-pointer {
		cursor: pointer;
	}
</style>
