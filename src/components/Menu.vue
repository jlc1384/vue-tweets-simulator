<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Tweets Simulator</span>
      <button
          class="btn pl-4 pr-4"
          @click="openCloseForm"
          :class="{ 'btn-success': !showForm, 'btn-danger': showForm}">
            {{ !showForm ? 'New Tweet' : 'Close Tweet'
        }}</button>
    </div>
  </nav>
</template>

<script>
    export default {
      props: {
        showForm: Boolean,
        openCloseForm: Function,
      }
    };
</script>

<style>

</style>
