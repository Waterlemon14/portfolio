<script lang="ts">
  import { projects, papers } from "@/projectDetails";
  // import { Button } from "$lib/components/ui/button/index.js";
	import TechHover from "@/components/ui/TechHover.svelte";
</script>

<h1 class="">Eisenhower Aldemita II</h1>

<div class="pl-20 pr-20 pt-5 pb-5">
  <div class="grid grid-cols-3 pl-30 pr-30 pt-5 pb-5">
    <div class="grid grid-rows-2 text-center pl-30 pr-30 pt-5 pb-5">
      <h1>Programming Languages</h1>
      <div class="flex">
        <TechHover text={"Python"} />
        <TechHover text={"Go"} />
        <TechHover text={"JavaScript"} />
        <TechHover text={"TypeScript"} />
        <TechHover text={"PureScript"} />
        <TechHover text={"C"} />
        <TechHover text={"Visual Basic Script"} />
      </div>
    </div>
    
    <div class="grid grid-rows-2 text-center pl-30 pr-30 pt-5 pb-5">
      <h1>Libraries and Frameworks</h1>
      <div class="flex">
        <TechHover text={"Pandas"} />
        <TechHover text={"Scikit Learn"} />
        <TechHover text={"Plotly"} />
        <TechHover text={"Seaborn"} />
        <TechHover text={"Svelte"} />
        <!-- <TechHover text={"SvelteKit"} /> -->
        <TechHover text={"React"} />
        <TechHover text={"TailwindCSS"} />
      </div>
    </div>
    <div class="grid grid-rows-2 text-center pl-30 pr-30 pt-5 pb-5">
      <h1>Technologies</h1>
      <div class="flex">
        <TechHover text={"Git"} />
        <TechHover text={"PostgreSQL"} />
        <TechHover text={"MySQL"} />
      </div>
    </div>
  </div>

  <h1 class="flex justify-center">Projects</h1>
  <div class="text-center">
    {#each projects as proj}
      <div class="grid grid-cols-2 pl-30 pt-5 pb-5">
        <div class="w-1/3">
          <a class="" href={proj.link == null ? "" : proj.link} target="_blank">
            {proj.title}
          </a>
          <div class="flex justify-center">
            {#each proj.technologies as tech}
              <TechHover text={tech} />
            {/each}
          </div>
        </div>
        
        <div class="w-2/3">
          {proj.description}

          {#each proj.images as img}
            <p>
              {img}
            </p>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <h1 class="flex justify-center">Papers</h1>
  <div>
    {#each papers as pap}
      <div class="grid grid-cols-2 pl-30 pt-5 pb-5">
        <div class="w-1/3">
          <a href={pap.link == null ? "" : pap.link} target="_blank">
            {pap.title}
          </a>
        
          <div class="flex justify-center">
            {#each pap.technologies as tech}
              <TechHover text={tech} />
            {/each}
          </div>
        </div>
      

        <div class="w-2/3">
          {pap.description}

          {#each pap.images as img}
            <p>
              {img}
            </p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>