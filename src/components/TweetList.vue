<template>
  <div class="container">
    <h1 class="text-center mb-4">Tweet List</h1>
    <p v-if="tweets.length === 0">No tweets</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.userName }}</p>
      <p class="tweet__text">{{ tweet.tweet }}</p>
      <span>{{ formatDate(tweet.createdAt) }}</span>
      <Close @click="deleteTweet(tweet.id)"/>
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import { Close } from '../icons/index';
import { deleteTweetApi } from '../api/tweet'

export default {
  props: {
    tweets: Array,
    refreshTweets: Function,
  },
  components: {
    Close,
  },
  setup(props) {
    console.log(props.tweets);
    const formatDate = (dateToFormat) => {
      //return moment(dateToFormat).fromNow();
      return moment(dateToFormat).format('YYYY-MM-DD h:mm:ss a');
    }

    const deleteTweet = (idTweet) => {
      deleteTweetApi(idTweet);
      props.refreshTweets();
    }

    return {
      formatDate,
      deleteTweet,
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-content: centered;

  .p {
    margin: 0;
  }

  &__title {
    position: absolute;
    top: -12px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
  }

  &__text {
    color: grey;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: white;
    padding: 0 20px;
    border: 1px solid #ccc;
  }
}

</style>
