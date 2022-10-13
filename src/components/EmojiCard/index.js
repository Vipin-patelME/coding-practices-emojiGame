// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, playGame} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onPlayGame = () => {
    playGame(id, emojiName)
  }

  return (
    <li>
      <button className="emoji-cont" type="button" onClick={onPlayGame}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
