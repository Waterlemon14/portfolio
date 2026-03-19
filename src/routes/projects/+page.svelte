<script lang="ts">
  import { projects } from '@/projectDetails';
  import TechHover from '@/components/ui/TechHover.svelte';
  import Icon from '@iconify/svelte';
</script>

<section class="mx-auto max-w-5xl px-6 py-12">
  <h1 class="text-3xl font-bold tracking-tight mb-2">Projects</h1>
  <p class="text-muted-foreground mb-8">A collection of academic, professional, and personal projects.</p>

  <div class="grid gap-5">
    {#each projects as proj}
      <div class="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent/50">
        <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-semibold text-foreground">{proj.title}</h2>
              {#if proj.link}
                <a href={proj.link} target="_blank" title="Live" class="text-muted-foreground hover:text-foreground">
                  <Icon icon="lucide:external-link" width="16" height="16" />
                </a>
              {/if}
              {#if proj.github}
                <a href={proj.github} target="_blank" title="Source" class="text-muted-foreground hover:text-foreground">
                  <Icon icon="lucide:github" width="16" height="16" />
                </a>
              {/if}
            </div>
            {#if proj.role}
              <p class="text-sm text-muted-foreground">{proj.role}</p>
            {/if}
          </div>
        </div>

        <p class="mt-3 text-sm text-foreground/80">{proj.description}</p>

        {#if proj.subdescriptions.length > 0}
          <ul class="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
            {#each proj.subdescriptions as sub}
              <li>{sub}</li>
            {/each}
          </ul>
        {/if}

        <div class="mt-4 flex flex-wrap gap-1.5">
          {#each proj.technologies as tech}
            <TechHover text={tech} size={22} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
