<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" :refreshTweets="refreshTweets" :openCloseForm="openCloseForm"/>
  <TweetList :tweets="tweets" :refreshTweets="refreshTweets"/>
</template>

<script>

import { ref } from 'vue';
import Menu from './components/Menu';
import TweetForm from './components/TweetForm';
import useFormTweet from './hooks/useFormTweet.js';
import TweetList from './components/TweetList';
import { getTweetsApi } from './api/tweet';

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse());

    const refreshTweets = () => {
      tweets.value = getTweetsApi().reverse();
    }

    return {
      ...useFormTweet(),
      tweets,
      refreshTweets,
    }
  }
}
</script>

<style lang="scss">

</style>
