<template>
  <div class="rounded-lg bg-white px-3 py-5">
    <div class="flex items-center space-x-2 text-base">
      <h4 class="font-semibold text-slate-900">Contributors</h4>
      <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
        204
      </span>
    </div>
    <div class="mt-3 flex -space-x-2 overflow-hidden">
      <img
        v-for="src of [
          'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        ]"
        class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        :src="src"
        alt=""
      />
    </div>
    <div class="mt-3 max-w-[10rem] rounded-lg bg-[--gray-small] p-2 text-center text-sm">
      <a
        href="#"
        class="text-blue-800"
      >
        + 198 others
      </a>
    </div>
  </div>
</template>
