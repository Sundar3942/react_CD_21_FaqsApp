// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, btnHandler, elaboratedFaqsList} = props
  const {id, questionText, answerText} = eachFaq

  const idIncludes = elaboratedFaqsList.includes(id)
  const plusOrMinus = idIncludes
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = idIncludes ? 'minus' : 'plus'

  const renderAnswer = () => (
    <>
      <hr />
      <p className="answer">{answerText}</p>
    </>
  )

  const onClickBtn = () => {
    btnHandler(id)
  }

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={onClickBtn}>
          <img src={plusOrMinus} alt={altText} />
        </button>
      </div>
      {idIncludes && renderAnswer()}
    </li>
  )
}

export default FaqItem
