<script>
    import { Profile } from '$lib';
    // import { Button } from "$lib/components/ui/button/index.js";
</script>

<header class="sticky top-0 z-10 w-full shadow-md">
    <nav class="grid grid-cols-2">
        <div class="flex justify-start">
            <a class="block px-4 py-2 transition-colors hover:bg-hover" href="/">
                <img
                    src={Profile}
                    width="500"
                    height="500"
                    alt="dancing duck"
                    class="block size-10 rounded-full shadow-xl"
                />
            </a>
        </div>
        <ul class="flex justify-end pr-4">
            <li>
                <a class="block p-4 hover:underline" href="/projects">Projects</a>
                <!-- <Button  href="/projects">Projects</Button> -->
            </li>
            <li>
                <a class="block p-4 hover:underline" href="/research">Research</a>
            </li>
            <li>
                <a class="block p-4 hover:underline" href="/me">Me</a>
            </li>
        </ul>
    </nav>
</header>