// Write your code here
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    elaboratedFaqsList: [],
  }

  btnHandler = id => {
    this.setState(prevState => {
      const {elaboratedFaqsList} = prevState
      if (elaboratedFaqsList.includes(id)) {
        const newElaboratedList = elaboratedFaqsList.filter(
          eachId => eachId !== id,
        )
        return {elaboratedFaqsList: newElaboratedList}
      }
      const newElaboratedList = [...prevState.elaboratedFaqsList, id]
      return {elaboratedFaqsList: newElaboratedList}
    })
  }

  render() {
    const {elaboratedFaqsList} = this.state
    const {faqsList} = this.props
    return (
      <div className="page">
        <div className="card-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(each => (
              <FaqItem
                elaboratedFaqsList={elaboratedFaqsList}
                eachFaq={each}
                key={each.id}
                btnHandler={this.btnHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
