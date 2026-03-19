<script>
    import { Profile } from '$lib';
</script>

<header class="sticky top-0 z-10 w-full shadow-md">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
        <a class="flex items-center gap-2 transition-colors hover:opacity-80" href="/">
            <img
                src={Profile}
                width="500"
                height="500"
                alt="dancing duck"
                class="block size-9 rounded-full shadow-xl"
            />
            <span class="hidden text-sm font-semibold sm:inline">Eisenhower II</span>
        </a>
        <ul class="flex items-center gap-1">
            <li>
                <a class="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground" href="/projects">Projects</a>
            </li>
            <li>
                <a class="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground" href="/research">Research</a>
            </li>
            <li>
                <a class="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground" href="/me">Me</a>
            </li>
        </ul>
    </nav>
</header>
