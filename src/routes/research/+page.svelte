<script lang="ts">
  import { papers } from '@/projectDetails';
  import TechHover from '@/components/ui/TechHover.svelte';
</script>

<section class="mx-auto max-w-5xl px-6 py-12">
  <h1 class="text-3xl font-bold tracking-tight mb-2">Research</h1>
  <p class="text-muted-foreground mb-8">Published and presented research work.</p>

  <div class="grid gap-5">
    {#each papers as paper}
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="text-lg font-semibold text-foreground leading-snug">{paper.title}</h2>

        <p class="mt-4 text-sm text-foreground/80 leading-relaxed">{paper.description}</p>

        {#if paper.subdescriptions.length > 0}
          <div class="mt-4 space-y-2">
            {#each paper.subdescriptions as sub}
              <div class="flex items-start gap-2 text-sm text-muted-foreground">
                <span class="mt-1 block size-1.5 shrink-0 rounded-full bg-muted-foreground"></span>
                <span>{sub}</span>
              </div>
            {/each}
          </div>
        {/if}

        <div class="mt-5 flex flex-wrap gap-1.5">
          {#each paper.technologies as tech}
            <TechHover text={tech} size={22} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
