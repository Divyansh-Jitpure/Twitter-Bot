require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
  try {
    await fetch("https://programming-quotesapi.vercel.app/api/random")
      .then((res) => res.json())
      .then((quote) =>
        twitterClient.v2.tweet("This is a test tweet generated by Programming Quotes API and posted via Twitter API and nodeJS\n\n"+quote.quote + "\n" + "- " + quote.author)
      );
    // twitterClient.v2.tweet("Testing twitter API");
  } catch (e) {
    console.log(e);
  }
};

// const cronTweet = new CronJob("0 7 * * *", async () => {
tweet();
//   });

//   cronTweet.start();
