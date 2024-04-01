<template>
  <h1 class="text-lg">
    {{ $translate("greetings.hello") }}
  </h1>
  <p class="my-4">
    <strong>Current route path:</strong>
    {{ $route.fullPath }}
  </p>
  <nav class="flex gap-x-5 my-5">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/users/tudor">Go to Users Tudor</RouterLink>
    <RouterLink to="/users/cristina">Go to Users Cristina</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
