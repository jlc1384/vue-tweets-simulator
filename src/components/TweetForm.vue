<template>
  <div class="tweet-form container">
    <form>
      <input class="form-control" placeholder="Your Name" />
      <textarea class="form-control" rows="3" placeholder="Tweet content"></textarea>
      <button type="button" class="btn btn-primary">Send Tweet</button>
    </form>
  </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss" scoped>
  .tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }

</style>
