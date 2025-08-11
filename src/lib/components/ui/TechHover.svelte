<script lang="ts">
  let { text, size = 32 }: { text: string, size?: number } = $props();
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";
	import { TechMappings } from "@/utils";
	import Icon from "@iconify/svelte";
</script>

{#if TechMappings[text] !== ""}
<HoverCard.Root>
  <HoverCard.Trigger><Icon icon={TechMappings[text]} width={size} height={size}/></HoverCard.Trigger>
  <HoverCard.Content>
    {text}
  </HoverCard.Content>
</HoverCard.Root>
{:else}
  {text}
{/if}