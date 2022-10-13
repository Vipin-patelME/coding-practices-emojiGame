import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {newClickedEmojiList: '', score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameRun = (id, emojiName) => {
    const clickedEmojis = {emojiNames: emojiName}
    const newEmojiList = this.shuffledEmojisList()
    console.log(clickedEmojis)
    const clickedEmoji = newEmojiList.filter(emoji => emoji.id === id)
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  render() {
    const {newClickedEmojiList, score, topScore} = this.state
    const newEmojiList = this.shuffledEmojisList()
    console.log(newClickedEmojiList)
    return (
      <div className="main-cont">
        <NavBar score={score} topScore={topScore} />
        <ul className="all-emojis">
          {newEmojiList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              key={eachEmoji.id}
              playGame={this.gameRun}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
