<template>
  <div class="mt-10 flex rounded-md border border-gray-200 p-6 font-mono shadow-md">
    <div
      class="relative z-10 mb-10 w-48 flex-none before:absolute before:left-1 before:top-1 before:h-full before:w-full before:bg-teal-400"
    >
      <img
        src="https://tailwindcss.com/_next/static/media/retro-shoe.24e25785.jpg"
        alt=""
        class="absolute inset-0 z-10 h-full w-full rounded-lg object-cover"
        loading="lazy"
      />
    </div>
    <form class="flex-auto pl-6">
      <div
        class="relative flex flex-wrap items-baseline pb-6 before:absolute before:-left-60 before:-right-6 before:-top-6 before:bottom-0 before:bg-black"
      >
        <h1 class="relative mb-2 w-full flex-none text-2xl font-semibold text-white">Retro Shoe</h1>
        <div class="relative text-lg text-white">$89.00</div>
        <div class="relative ml-3 uppercase text-teal-400">In stock</div>
      </div>
      <div class="my-6 flex items-baseline">
        <div class="flex space-x-3 text-sm font-medium">
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            <div
              class="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:left-0.5 before:top-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400"
            >
              XS
            </div>
          </label>
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="s"
            />
            <div
              class="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:left-0.5 before:top-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400"
            >
              S
            </div>
          </label>
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="m"
            />
            <div
              class="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:left-0.5 before:top-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400"
            >
              M
            </div>
          </label>
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="l"
            />
            <div
              class="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:left-0.5 before:top-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400"
            >
              L
            </div>
          </label>
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="xl"
            />
            <div
              class="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:left-0.5 before:top-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400"
            >
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="mb-4 flex space-x-2 text-sm font-medium">
        <div class="flex space-x-4">
          <button
            class="h-12 border-2 border-black bg-teal-400 px-6 font-semibold uppercase tracking-wider text-black"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="h-12 border border-slate-200 px-6 font-semibold uppercase tracking-wider text-slate-900"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          class="flex h-12 w-12 flex-none items-center justify-center text-black"
          type="button"
          aria-label="Like"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <p class="text-xs leading-6 text-slate-500">Free shipping on all continental US orders.</p>
    </form>
  </div>
</template>
