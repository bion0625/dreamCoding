export default class TweetService {
  tweets = [];

  async getTweets(username) {
    const tweets = await (await fetch('http://localhost:8080/tweets')).json();
    this.tweets = tweets;
    return username
      ? tweets.filter((tweet) => tweet.username === username)
      : tweets;
  }

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Ellie',
      username: 'ellie',
      text,
    };
    await fetch('http://localhost:8080/tweets', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tweet}),
    });
    this.tweets.unshift(tweet);
    return tweet;
  }

  async deleteTweet(tweetId) {
    await fetch(`http://localhost:8080/tweets/${tweetId}`, {method:'DELETE'});
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('tweet not found!');
    }
    tweet.text = text;
    await fetch(`http://localhost:8080/tweets/${tweetId}`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text}),
    });
    return tweet;
  }
}
