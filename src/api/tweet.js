import { v4 as uuidv4 } from "uuid";
import { TWEETS } from '../utils/constants';
import { remove } from "lodash";

export function saveTweetApi(tweet, userName) {
    const tweets = getTweetsApi();
    console.log("TWEETS: " + JSON.stringify(tweets,null,2));

    const storeTweet = {
        id: uuidv4(),
        tweet,
        userName,
        createdAt: new Date(),
    }

    if(tweets.length === 0) {
        localStorage.setItem(TWEETS, JSON.stringify([storeTweet]));
    } else {
        tweets.push(storeTweet);
        localStorage.setItem(TWEETS, JSON.stringify(tweets));
    }
}

export function getTweetsApi() {
    const tweets = localStorage.getItem(TWEETS);
    if(tweets) {
        return JSON.parse(tweets);
    } else {
        return [];
    }
}

export function deleteTweetApi(tweetId) {
    const tweets = getTweetsApi();

    remove(tweets, function(tweet) {
        return tweet.id === tweetId;
    })

    localStorage.setItem(TWEETS, JSON.stringify(tweets));
}
