<script lang="ts">
	import '$ss-root/app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	import Header from '$lib/header/Header.svelte';
	import '$ss-root/app.css';
	import { contract, provider } from '$ss-stores/contract.store';
	import { onMount } from 'svelte';

	let showSuccess = false;
	let message = '';

	function navigate(route: string) {
		goto(route);
	}

	// onMount(async () => {
	// 	$contract?.on('FlashCardCreated', (event) => {
	// 		if (event && !showSuccess) {
	// 			message = 'Flash card created';
	// 			showSuccess = true;
	// 			setTimeout(() => {
	// 				showSuccess = false;
	// 			}, 5000);
	// 		}
	// 	});
	// });
</script>

<svelte:head>
	<title>Stop Snoozin!</title>
</svelte:head>

<Header />

<div class="container mx-auto p-4">
	<slot />
</div>

{#if showSuccess}
	<div class="absolute bottom-24 flex justify-center w-full">
		<div class="alert alert-success shadow-lg w-8/12 max-w-full" transition:slide>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{message}</span>
			</div>
		</div>
	</div>
{/if}
