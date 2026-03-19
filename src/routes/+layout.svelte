<script lang="ts">
	import Header from './Header.svelte'
  import Footer from './Footer.svelte'

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Eisenhower Aldemita II</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="flex-1">
      {@render children()}
  </main>

  <Footer />
</div>
