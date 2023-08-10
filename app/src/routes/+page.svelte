<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Input, Timepicker, initTE } = await import('tw-elements');
		initTE({ Input, Timepicker });
	});

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
		<div class="card bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">{day}</h2>
				<span class="countdown font-mono text-2xl">
					<span style="--value:{timeDiff['hours']};" />:
					<span style="--value:{timeDiff['minutes']};" />:
					<span style="--value:{timeDiff['seconds']};" />
				</span>
				<div class="card-actions justify-end">
					<button class="btn btn-accent">Set Time</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="relative" data-te-timepicker-init data-te-input-wrapper-init>
	<input
		type="text"
		class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
		id="form1"
	/>
	<label
		for="form1"
		class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
		>Select a time</label
	>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
