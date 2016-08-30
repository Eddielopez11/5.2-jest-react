import React from 'react'
import Tweet from './Tweet'

export default React.createClass({
  getInitialState(){
    return {
      tweets: [
        {
          id: 23897923,
          text: "Today we took a deep dive into React with Jest and State",
          time: "Today 10:15am"
        },
        {
          id: 23983,
          text: "This is another tweet and should show up",
          time: "Yesterday somehow"
        }
      ]
    }
  },
  onDeleteClick(e){
    // some code to make the state updated (removing whichever one was clicked)
    var itemID = e.target.dataset.id;
    var modifiedArray = this.state.tweets.indexOf(this.state.tweets.filter((tweet)=>{
      return tweet.id == itemID;
    }));
    console.log(modifiedArray);
  },
  onClickSubmit(e){
    e.preventDefault();

    var tweetTextValue = this.refs.tweetText.value;

    var prevTweets = this.state.tweets;
    prevTweets.push({
      id: prevTweets.length + 1,
      text: tweetTextValue,
      time: Date.now()
    });

    this.setState(prevTweets);
  },
  render() {
    return (
      <main>
        <form>
          <textarea ref="tweetText"></textarea>
          <input type="submit"
                 value="tweet"
                 onClick={this.onClickSubmit}/>
        </form>
       {
         this.state.tweets.map((tweet) => {
           return <Tweet key={tweet.id} id={tweet.id} text={tweet.text} time={tweet.time} onDeleteClick={this.onDeleteClick}/>;
         })
       }
      </main>
    )
  }
})
