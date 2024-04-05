<template>
  <div class="box">
    <fieldset>
      <legend>Published status</legend>
      <input
        id="draft"
        class="peer/draft"
        type="radio"
        name="status"
        checked
      />
      <label
        for="draft"
        class="peer-checked/draft:text-sky-500"
      >
        Draft
      </label>
      <input
        id="published"
        class="peer/published"
        type="radio"
        name="status"
      />
      <label
        for="published"
        class="peer-checked/published:text-sky-500"
      >
        Published
      </label>
      <div class="hidden peer-checked/draft:block">
        <span>Drafts are only visible to administrators.</span>
      </div>
      <div class="hidden peer-checked/published:block">
        <span>Your post will be publicly visible on your site.</span>
      </div>
    </fieldset>
  </div>

  <div class="box">
    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <input
          type="email"
          class="peer border invalid:border-pink-600"
        />
        <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
          Please provide a valid email address.
        </p>
      </label>
    </form>
  </div>

  <div class="box">
    <form>
      <label for="email2">Email:</label>
      <input
        id="email2"
        name="email2"
        type="email2"
        class="is-dirty peer"
        required
      />
      <div class="hidden peer-[.is-dirty]:peer-required:block">This field is required.</div>
    </form>
  </div>

  <div class="box">
    <h2>Categories</h2>
    <ul
      class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10"
    >
      <li>Sales</li>
      <li>Marketing</li>
      <li>SEO</li>
    </ul>
  </div>

  <div class="box">
    <label
      class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200"
    >
      <svg fill="currentColor"></svg>
      Google Pay
      <input
        type="radio"
        class="checked:border-indigo-500"
      />
    </label>
  </div>

  <div class="box">
    <div class="group">
      <img src="" />
      <h4>Spencer Sharp</h4>
      <svg class="hidden group-has-[a]:block"></svg>
      <p>
        Product Designer at
        <a href="">planeteria.tech</a>
      </p>
    </div>
  </div>

  <div class="box">
    <label class="block">
      <span
        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
      >
        Email
      </span>
      <input
        type="email"
        name="email"
        class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="you@example.com"
      />
    </label>
  </div>

  <div class="box">
    <blockquote class="text-center text-2xl font-semibold italic text-slate-900">
      When you look
      <span
        class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
      >
        <span class="relative text-white">annoyed</span>
      </span>
      all the time, people think that you're busy.
    </blockquote>
  </div>

  <div class="box">
    <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          class="h-5 w-5 fill-slate-300"
          viewBox="0 0 20 20"
        ></svg>
      </span>
      <input
        class="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="Search for anything"
        type="text"
        name="search"
      />
    </label>
  </div>

  <div class="box">
    <form class="flex items-center space-x-6">
      <div class="shrink-0">
        <img
          class="h-16 w-16 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
          alt="Current profile photo"
        />
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </form>
  </div>

  <div class="box">
    <ul
      role="list"
      class="list-disc space-y-3 pl-5 text-slate-500 marker:text-pink-400"
    >
      <li>5 cups chopped Porcini mushrooms</li>
      <li>1/2 cup of olive oil</li>
      <li>3lb of celery</li>
    </ul>
  </div>

  <div class="box">
    <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <p>
        So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed
        on, and as I made my way past the breakers a strange calm came over me. I don't know if it
        was divine intervention or the kinship of all living things but I tell you Jerry at that
        moment, I
        <em>was</em>
        a marine biologist.
      </p>
    </div>
  </div>

  <div class="box">
    <p
      class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-line:uppercase first-line:tracking-widest"
    >
      Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New
      York Public Library"? Well that may not mean anything to you, but that means a lot to me. One
      whole hell of a lot.
    </p>
  </div>

  <div class="box">
    <dialog class="backdrop:bg-gray-50">
      <form method="dialog">* this is a backdrop</form>
    </dialog>
  </div>

  <div class="box">
    <div class="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-900">
      <div>
        <span
          class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          ></svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Writes Upside-Down
      </h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
  </div>

  <div class="box">
    <!-- Using `motion-reduce` can mean lots of "undoing" styles -->
    <button
      class="... transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      Save changes
    </button>

    <!-- Using `motion-safe` is less code in these situations -->
    <button class="... motion-safe:transition motion-safe:hover:-translate-x-0.5">
      Save changes
    </button>
  </div>

  <div class="box">
    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Social Security Number</span>
        <input
          class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
        />
        <p class="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100">
          We need this to steal your identity.
        </p>
      </label>
    </form>
  </div>

  <div class="box">
    <form>
      <legend>Choose a theme:</legend>
      <label>
        <input
          type="radio"
          class="appearance-none forced-colors:appearance-auto"
        />
        <p class="hidden forced-colors:block">Cyan</p>
        <div class="... h-6 w-6 rounded-full bg-cyan-200 forced-colors:hidden"></div>
        <div class="... h-6 w-6 rounded-full bg-cyan-500 forced-colors:hidden"></div>
      </label>
      <!-- ... -->
    </form>
  </div>

  <div class="box">
    <div>
      <div class="portrait:hidden">
        <p>How it looks on landscape!</p>
      </div>
      <div class="landscape:hidden">
        <p>
          How it looks o portrait.
          <br />
          <br />
          This experience is designed to be viewed in landscape. Please rotate your device to view
          the site.
        </p>
      </div>
    </div>
  </div>

  <div class="box">
    <div>
      <article class="print:hidden">
        <h1>My Secret Pizza Recipe</h1>
        <p>This recipe is a secret, and must not be shared with anyone</p>
        <!-- ... -->
      </article>
      <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
    </div>
  </div>

  <div class="box">
    <div class="mx-auto max-w-lg p-8">
      <details
        class="rounded-lg p-6 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10"
        open
      >
        <summary class="select-none text-sm font-semibold leading-6 text-slate-900 dark:text-white">
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </div>
  </div>

  <div class="box">
    <div class="[&_p]:mt-4">
      <p>Lorem ipsum...</p>
      <ul>
        <li>
          <p>Lorem ipsum...</p>
        </li>
        <!-- ... -->
      </ul>
    </div>
    <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </div>

  <div class="box">
    <div class="... focus-within:shadow-lg">
      <input type="text" />
      <input class="... enabled:hover:border-gray-400 disabled:opacity-75" />
      <input
        type="checkbox"
        class="... appearance-none checked:bg-blue-500"
      />
      <input
        type="checkbox"
        class="... appearance-none indeterminate:bg-gray-300"
      />
      <input
        type="email"
        class="valid:border-green-500 invalid:border-pink-500"
      />
    </div>
  </div>

  <div class="box">
    <table>
      <thead>
        <tr>
          <th>Breakpoint prefix</th>
          <th>Minimum width</th>
          <th>CSS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sm</code></td>
          <td>640px</td>
          <td><code>@media (min-width: 640px) { ... }</code></td>
        </tr>
        <tr>
          <td><code>md</code></td>
          <td>768px</td>
          <td><code>@media (min-width: 768px) { ... }</code></td>
        </tr>
        <tr>
          <td><code>lg</code></td>
          <td>1024px</td>
          <td><code>@media (min-width: 1024px) { ... }</code></td>
        </tr>
        <tr>
          <td><code>xl</code></td>
          <td>1280px</td>
          <td><code>@media (min-width: 1280px) { ... }</code></td>
        </tr>
        <tr>
          <td><code>2xl</code></td>
          <td>1536px</td>
          <td><code>@media (min-width: 1536px) { ... }</code></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="box"></div>

  <div class="box"></div>

  <div class="box"></div>

  <div class="box"></div>

  <div class="box"></div>

  <div class="box"></div>

  <div class="box"></div>
</template>

<style scoped>
.box {
  @apply my-16 rounded-lg border bg-white px-10 py-16 shadow-md shadow-sky-100;
}
button,
input {
  @apply m-1 rounded-md border p-2;
}
input[type="radio"] {
  @apply mx-0 my-2;
}
label,
li {
  @apply my-2 rounded px-1 py-2;
}
</style>
