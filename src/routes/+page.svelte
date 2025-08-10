<script lang="ts">
  import { projects, papers } from "@/projectDetails";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<h1 class="">Eisenhower Aldemita II</h1>

<h1 >Programming Languages</h1>
Python, Go, JavaScript/TypeScript, PureScript, C, Visual Basic Script

<h1>Libraries and Frameworks</h1>
Pandas, Scikit Learn, Plotly, Seaborn, Svelte, SvelteKit, React, TailwindCSS
<h1>Technologies</h1>
Git, PostgreSQL, MySQL

<h1>Projects</h1>

{#each projects as proj}
  <a href={proj.link == null ? "" : proj.link}>
    {proj.title}
  </a>
  {#each proj.technologies as tech}
    <p>
      {tech}
    </p>
  {/each}

  {proj.description}

  {#each proj.images as img}
    <p>
      {img}
    </p>
  {/each}
  
{/each}

<h1>Papers</h1>

{#each papers as pap}
  <a href={pap.link == null ? "" : pap.link}>
    {pap.title}
  </a>
  {#each pap.technologies as tech}
    <p>
      {tech}
    </p>
  {/each}

  {pap.description}

  {#each pap.images as img}
    <p>
      {img}
    </p>
  {/each}
  
{/each}