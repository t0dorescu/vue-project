<template>
  <div class="mt-10 flex rounded-md border border-gray-200 font-sans shadow-md">
    <div class="relative w-56 flex-none">
      <img
        src="https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg"
        alt=""
        class="absolute inset-0 h-full w-full rounded-lg object-cover"
        loading="lazy"
      />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
        <div class="order-1 mt-2 w-full flex-none text-3xl font-bold text-violet-600">$39.00</div>
        <div class="text-sm font-medium text-slate-400">In stock</div>
      </div>
      <div class="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
        <div class="flex space-x-2 text-sm font-bold">
          <label class="cursor-pointer">
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
            >
              XS
            </div>
          </label>
          <label class="cursor-pointer">
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="s"
            />
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
            >
              S
            </div>
          </label>
          <label class="cursor-pointer">
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="m"
            />
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
            >
              M
            </div>
          </label>
          <label class="cursor-pointer">
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="l"
            />
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
            >
              L
            </div>
          </label>
          <label class="cursor-pointer">
            <input
              class="peer sr-only"
              name="size"
              type="radio"
              value="xl"
            />
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
            >
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="mb-5 flex space-x-4 text-sm font-medium">
        <div class="flex flex-auto space-x-4">
          <button
            class="h-10 rounded-full bg-violet-600 px-6 font-semibold text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="h-10 rounded-full border border-slate-200 px-6 font-semibold text-slate-900"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          class="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-violet-50 text-violet-600"
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
