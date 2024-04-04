<template>
  <div class="mt-10 flex rounded-md border border-gray-200 font-serif shadow-md">
    <div class="relative w-52 flex-none">
      <img
        src="https://tailwindcss.com/_next/static/media/fancy-suit-jacket.edfeb695.jpg"
        alt=""
        class="absolute inset-0 h-full w-full rounded-lg object-cover"
        loading="lazy"
      />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap items-baseline">
        <h1 class="mb-3 w-full flex-none text-2xl leading-none text-slate-900">
          DogTooth Style Jacket
        </h1>
        <div class="flex-auto text-lg font-medium text-slate-500">$350.00</div>
        <div class="text-xs font-medium uppercase leading-6 text-slate-500">In stock</div>
      </div>
      <div class="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
        <div class="flex space-x-1 text-sm font-medium">
          <label>
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            <div
              class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900"
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
              class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900"
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
              class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900"
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
              class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900"
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
              class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900"
            >
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="mb-5 flex space-x-4 text-sm font-medium">
        <div class="flex flex-auto space-x-4 pr-4">
          <button
            class="h-12 w-1/2 flex-none bg-slate-900 font-medium uppercase tracking-wider text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="h-12 w-1/2 flex-none border border-slate-200 font-medium uppercase tracking-wider text-slate-900"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          class="flex h-12 w-12 flex-none items-center justify-center border border-slate-200 text-slate-300"
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
      <p class="text-sm text-slate-500">Free shipping on all continental US orders.</p>
    </form>
  </div>
</template>
