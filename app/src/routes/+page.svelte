<script lang="ts">
	import { onMount } from 'svelte';

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const now = new Date();
	let nineTomorrow = new Date().setHours(33);
	// split now into hours, minutes, seconds

	const getTimeUntil = (timestamp: number) => {
		const delta = timestamp - now.getTime();
		console.log(nineTomorrow);
		console.log(now.getTime());
		console.log(delta);
		const seconds = Math.floor((delta / 1000) % 60);
		const minutes = Math.floor((delta / 1000 / 60) % 60);
		const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
		const days = Math.floor(delta / (1000 * 60 * 60 * 24));
		return {
			days,
			hours,
			minutes,
			seconds
		};
	};
	const timeDiff = getTimeUntil(nineTomorrow);
</script>

<div class="grid grid-cols-7 gap-2">
	{#each days as day}
		<div class="card">
			<div class="card-body">
				<h2 class="card-title">{day}</h2>
				<span class="countdown font-mono text-2xl">
					<span style="--value:{timeDiff['hours']};" />:
					<span style="--value:{timeDiff['minutes']};" />:
					<span style="--value:{timeDiff['seconds']};" />
				</span>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Set Time</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
