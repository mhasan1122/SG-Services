import './FaqSection.css'

const FAQ_ITEMS = [
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'Actually beard single-origin coffee offal polaroid bitters swag fashion axe dreamcatcher craft beer banjo vice, scenester bitters selfies chia tote bag roof party banh mi.',
  },
  {
    question: 'Can I pay for a whole year?',
    answer:
      'Actually beard single-origin coffee offal polaroid bitters swag fashion axe dreamcatcher craft beer banjo vice, scenester bitters selfies chia tote bag roof party banh mi.',
  },
  {
    question: 'What if I need help?',
    answer:
      'Actually beard single-origin coffee offal polaroid bitters swag fashion axe dreamcatcher craft beer banjo vice, scenester bitters selfies chia tote bag roof party banh mi.',
  },
]

export function FaqSection() {
  return (
    <section className="faq-section">
      <div className="faq-section__container">
        <h2 className="faq-section__title">Common Questions</h2>

        <div className="faq-section__list">
          {FAQ_ITEMS.map((item) => (
            <article key={item.question} className="faq-section__item">
              <h3 className="faq-section__question">{item.question}</h3>
              <p className="faq-section__answer">{item.answer}</p>
            </article>
          ))}
        </div>

        <a href="#faq" className="faq-section__button">
          More Questions
        </a>
      </div>
    </section>
  )
}
