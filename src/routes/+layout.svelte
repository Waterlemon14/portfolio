<script lang="ts">
	import Header from './Header.svelte'
  import Footer from './Footer.svelte'

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="space-y-8 "> <!-- bg-teal-100 -->		
    {@render children()}
</main>

<Footer />
