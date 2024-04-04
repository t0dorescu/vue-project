<template>
  <section>
    <header class="space-y-4 bg-white p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-slate-900">Projects</h2>
        <a
          href="/new"
          class="group flex items-center rounded-md bg-blue-500 py-2 pl-2 pr-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="mr-2"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New
        </a>
      </div>
      <form class="group relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-400 group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects..."
        />
      </form>
    </header>
    <ul
      class="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2 sm:px-8 sm:pb-8 sm:pt-6 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pb-8 xl:pt-6"
    >
      <li x-for="project in projects">
        <a
          href="#project.url"
          class="group rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500"
        >
          <dl class="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="font-semibold text-slate-900 group-hover:text-white">Api Integration</dd>
            </div>
            <div>
              <dt class="sr-only">Category</dt>
              <dd class="group-hover:text-blue-200">Engineering</dd>
            </div>
            <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
              <dt class="sr-only">Users</dt>
              <dd
                x-for="user in project.users"
                class="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                  alt=""
                  class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white"
                  loading="lazy"
                />
              </dd>
            </div>
          </dl>
        </a>
      </li>
      <li class="flex">
        <a
          href="/new"
          class="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <svg
            class="mb-1 text-slate-400 group-hover:text-blue-500"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New project
        </a>
      </li>
    </ul>
  </section>
</template>
