<script setup>
const count = ref(0);
const msg = ref("this is a message");

const title = ref("title...");
const content = ref("content...");
</script>

<template>
  <h1>Count is: {{ count }}</h1>
  <DefineModelChild v-model="count" />
  <br />
  <h1>Msg is: {{ msg }}</h1>
  <DefineModelInput v-model="msg" />
  <br />
  <h1 class="text-lg">Title / Content is: {{ title }} - {{ content }}</h1>
  <DefineModelMultiple
    v-model:title.capitalize="title"
    v-model:content="content"
  />
</template>
