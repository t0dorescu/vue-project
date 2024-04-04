<script setup>
defineProps(["movies"]);
</script>

<template>
  <div class="divide-y divide-slate-100">
    <MoviesNav>
      <MoviesNavItem
        href="/new"
        isActive
      >
        New Releases
      </MoviesNavItem>
      <MoviesNavItem href="/top">Top Rated</MoviesNavItem>
      <MoviesNavItem href="/picks">Vincent’s Picks</MoviesNavItem>
    </MoviesNav>
    <MoviesList>
      <MoviesListItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </MoviesList>
  </div>
</template>
