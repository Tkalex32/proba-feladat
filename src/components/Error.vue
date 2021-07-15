<template>
  <article class="message is-danger">
    <div class="message-body is-size-6">
      {{ error }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
}
</script>
