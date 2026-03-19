<script lang="ts">
  import { Profile, GitHubURL, LinkedInURL } from '$lib';
  import { projects, experiences } from '@/projectDetails';
  import TechHover from '@/components/ui/TechHover.svelte';
  import Icon from '@iconify/svelte';
</script>

<!-- Hero Section -->
<section class="flex flex-col items-center px-6 py-16 md:py-24">
  <img
    src={Profile}
    width="500"
    height="500"
    alt="Eisenhower Aldemita II"
    class="size-28 rounded-full shadow-xl mb-6"
  />
  <h1 class="text-4xl font-bold tracking-tight md:text-5xl">Eisenhower Aldemita II</h1>
  <p class="mt-3 max-w-xl text-center text-lg text-muted-foreground">
    Making today count through secure, efficient, and effective software.
  </p>
  <p class="mt-2 text-sm text-muted-foreground">
    B.S. Computer Science &mdash; University of the Philippines Diliman
  </p>
  <div class="mt-5 flex gap-4">
    <a href={GitHubURL} target="_blank" title="GitHub" class="text-muted-foreground transition-colors hover:text-foreground">
      <Icon icon="skill-icons:github-dark" width="28" height="28" />
    </a>
    <a href={LinkedInURL} target="_blank" title="LinkedIn" class="text-muted-foreground transition-colors hover:text-foreground">
      <Icon icon="skill-icons:linkedin" width="28" height="28" />
    </a>
    <a href="mailto:aeisenhowerii@gmail.com" title="Email" class="text-muted-foreground transition-colors hover:text-foreground">
      <Icon icon="skill-icons:gmail-dark" width="28" height="28" />
    </a>
  </div>
</section>

<!-- Experience Preview -->
<section class="mx-auto max-w-5xl px-6 pb-12">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-semibold">Experience</h2>
    <a href="/me" class="text-sm text-muted-foreground hover:text-foreground hover:underline">View all &rarr;</a>
  </div>
  <div class="grid gap-4">
    {#each experiences as exp}
      <div class="rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent/50">
        <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="font-medium text-foreground">{exp.title}</h3>
            <p class="text-sm text-muted-foreground">{exp.company}</p>
          </div>
          <span class="text-sm text-muted-foreground">{exp.period}</span>
        </div>
        <p class="mt-2 text-sm text-muted-foreground">{exp.description}</p>
        <div class="mt-3 flex flex-wrap gap-1">
          {#each exp.technologies as tech}
            <TechHover text={tech} size={20} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Featured Projects -->
<section class="mx-auto max-w-5xl px-6 pb-12">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-semibold">Featured Projects</h2>
    <a href="/projects" class="text-sm text-muted-foreground hover:text-foreground hover:underline">View all &rarr;</a>
  </div>
  <div class="grid gap-4 md:grid-cols-2">
    {#each projects.slice(0, 4) as proj}
      <div class="rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent/50">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="font-medium text-foreground">{proj.title}</h3>
            {#if proj.role}
              <p class="text-xs text-muted-foreground">{proj.role}</p>
            {/if}
          </div>
          <div class="flex gap-2">
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
        </div>
        <p class="mt-2 text-sm text-muted-foreground line-clamp-2">{proj.description}</p>
        <div class="mt-3 flex flex-wrap gap-1">
          {#each proj.technologies as tech}
            <TechHover text={tech} size={20} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Skills Overview -->
<section class="mx-auto max-w-5xl px-6 pb-16">
  <h2 class="text-2xl font-semibold mb-6">Skills</h2>
  <div class="grid gap-6 md:grid-cols-3">
    <div class="rounded-lg border border-border bg-card p-5">
      <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Languages</h3>
      <div class="flex flex-wrap gap-2">
        <TechHover text="Python" />
        <TechHover text="Go" />
        <TechHover text="JavaScript" />
        <TechHover text="TypeScript" />
        <TechHover text="C" />
        <TechHover text="PureScript" />
        <TechHover text="Visual Basic Script" />
      </div>
    </div>
    <div class="rounded-lg border border-border bg-card p-5">
      <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Frameworks & Libraries</h3>
      <div class="flex flex-wrap gap-2">
        <TechHover text="FastAPI" />
        <TechHover text="LangChain" />
        <TechHover text="PyTorch" />
        <TechHover text="Streamlit" />
        <TechHover text="Scikit Learn" />
        <TechHover text="Pandas" />
        <TechHover text="Seaborn" />
        <TechHover text="Plotly" />
        <TechHover text="Svelte" />
        <TechHover text="TailwindCSS" />
      </div>
    </div>
    <div class="rounded-lg border border-border bg-card p-5">
      <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies</h3>
      <div class="flex flex-wrap gap-2">
        <TechHover text="Git" />
        <TechHover text="AWS" />
        <TechHover text="PostgreSQL" />
        <TechHover text="MySQL" />
      </div>
    </div>
  </div>
</section>
