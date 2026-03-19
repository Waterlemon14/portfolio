<script>
    import Icon from '@iconify/svelte';
    import {
        Profile,
        GitHubURL,
        LinkedInURL,
        PortfolioGitHubURL,
    } from '$lib';
</script>

<footer class="mt-auto border-t border-border p-6">
    <div class="mx-auto max-w-5xl">
        <div class="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
                <a href="/" class="flex items-center gap-2">
                    <img src={Profile} alt="Dancing Duck" width="500" height="500" loading="lazy" class="size-7" />
                    <span class="text-lg font-semibold text-foreground">Eisenhower Aldemita II</span>
                </a>
                <p class="mt-2 max-w-xs text-sm text-muted-foreground">
                    Making today count through secure, efficient, and effective software.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                    <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Navigate</h2>
                    <ul class="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/" class="hover:text-foreground hover:underline">Home</a></li>
                        <li><a href="/projects" class="hover:text-foreground hover:underline">Projects</a></li>
                        <li><a href="/research" class="hover:text-foreground hover:underline">Research</a></li>
                        <li><a href="/me" class="hover:text-foreground hover:underline">Me</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Social</h2>
                    <ul class="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href={LinkedInURL} target="_blank" class="hover:text-foreground hover:underline">LinkedIn</a>
                        </li>
                        <li>
                            <a href={GitHubURL} target="_blank" class="hover:text-foreground hover:underline">GitHub</a>
                        </li>
                        <li>
                            <a href="mailto:aeisenhowerii@gmail.com" class="hover:text-foreground hover:underline">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Source</h2>
                    <ul class="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href={PortfolioGitHubURL} target="_blank" class="hover:text-foreground hover:underline">Portfolio Repo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-border" />
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span class="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Eisenhower Aldemita II
            </span>
            <div class="flex gap-4">
                <a href="mailto:aeisenhowerii@gmail.com" title="Email" target="_blank" class="text-muted-foreground hover:text-foreground">
                    <Icon icon="skill-icons:gmail-dark" width="20" height="20" />
                </a>
                <a href={LinkedInURL} title="LinkedIn" target="_blank" class="text-muted-foreground hover:text-foreground">
                    <Icon icon="skill-icons:linkedin" width="20" height="20" />
                </a>
                <a href={GitHubURL} title="GitHub" target="_blank" class="text-muted-foreground hover:text-foreground">
                    <Icon icon="skill-icons:github-dark" width="20" height="20" />
                </a>
            </div>
        </div>
    </div>
</footer>
