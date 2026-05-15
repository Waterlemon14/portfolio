<script lang="ts">
  import { Profile, GitHubURL, LinkedInURL } from '$lib';
  import { experiences, awards, skills } from '@/projectDetails';
  import TechHover from '@/components/ui/TechHover.svelte';
  import Icon from '@iconify/svelte';
</script>

<section class="mx-auto max-w-5xl px-6 py-12">
  <!-- About -->
  <div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start mb-12">
    <img
      src={Profile}
      width="500"
      height="500"
      alt="Eisenhower Aldemita II"
      class="size-24 rounded-full shadow-lg shrink-0"
    />
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Eisenhower Aldemita II</h1>
      <p class="mt-1 text-muted-foreground italic">Making today count through secure, efficient, and effective software.</p>
      <p class="mt-3 text-sm text-foreground/80 leading-relaxed max-w-2xl">
        Computer Science graduate from the University of the Philippines Diliman with experience spanning AI/ML engineering,
        full-stack development, cybersecurity, and embedded systems. Passionate about building software that is secure,
        efficient, and makes a real impact.
      </p>
      <div class="mt-4 flex gap-3">
        <a href={GitHubURL} target="_blank" class="text-muted-foreground hover:text-foreground">
          <Icon icon="skill-icons:github-dark" width="24" height="24" />
        </a>
        <a href={LinkedInURL} target="_blank" class="text-muted-foreground hover:text-foreground">
          <Icon icon="skill-icons:linkedin" width="24" height="24" />
        </a>
        <a href="mailto:aeisenhowerii@gmail.com" class="text-muted-foreground hover:text-foreground">
          <Icon icon="skill-icons:gmail-dark" width="24" height="24" />
        </a>
      </div>
    </div>
  </div>

  <!-- Education -->
  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Education</h2>
    <div class="rounded-lg border border-border bg-card p-5">
      <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 class="font-medium text-foreground">B.S. Computer Science - Summa Cum Laude</h3>
          <p class="text-sm text-muted-foreground">University of the Philippines Diliman</p>
        </div>
        <span class="text-sm text-muted-foreground">Sep 2021 - Jul 2026</span>
      </div>
    </div>
  </div>

  <!-- Experience -->
  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Experience</h2>
    <div class="grid gap-4">
      {#each experiences as exp}
        <div class="rounded-lg border border-border bg-card p-5">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="font-medium text-foreground">{exp.title}</h3>
              <p class="text-sm text-muted-foreground">{exp.company}</p>
            </div>
            <span class="text-sm text-muted-foreground">{exp.period}</span>
          </div>
          <p class="mt-2 text-sm text-foreground/80">{exp.description}</p>
          <ul class="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
            {#each exp.highlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
          <div class="mt-3 flex flex-wrap gap-1.5">
            {#each exp.technologies as tech}
              <TechHover text={tech} size={20} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Skills -->
  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Skills</h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each skills as group}
        <div class="rounded-lg border border-border bg-card p-5">
          <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{group.category}</h3>
          <div class="flex flex-wrap gap-2">
            {#each group.items as item}
              <TechHover text={item} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Awards -->
  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Awards & Certifications</h2>
    <div class="grid gap-3">
      {#each awards as award}
        <div class="flex items-start justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4">
          <div>
            <p class="font-medium text-foreground">{award.title}</p>
            {#if award.detail}
              <p class="text-sm text-muted-foreground">{award.detail}</p>
            {/if}
          </div>
          <span class="shrink-0 text-sm text-muted-foreground">{award.year}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
