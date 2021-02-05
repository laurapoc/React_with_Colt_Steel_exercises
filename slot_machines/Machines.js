/*jshint esversion: 6 */
function getEmoji() {
  let emojiArray = ["🍓", "🍇", "🍒"];
  return [...emojiArray][Math.floor(Math.random() * emojiArray.length)];
}

class Machines extends React.Component {
  render() {
    let emoji = this.props.emoji;
    let pickedEmojiArray = [];
    let message;
    for (let i = 1; i <= emoji; i++) {
      pickedEmojiArray.push(getEmoji());
    }

    const allEqual = pickedEmojiArray.every((e) => {
      return e === pickedEmojiArray[0];
    });

    if (allEqual) {
      message = <p>You win!!!</p>;
    } else {
      message = <p>you Lose!</p>;
    }

    return (
      <div>
        {pickedEmojiArray}
        {message}
      </div>
    );
  }
}
