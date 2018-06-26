import React from 'react';

function SprintReview(props) {
  return (
    <section id="sprint-review" className="sprint-review">
      <div className="container-fluid">
        <div className="container">
          <h1 className="heading-1">Spint Review</h1>
          <h2 className="body-2"><em>"A Sprint Review is held at the end of the Sprint to <strong className="red">inspect</strong> the Increment and <strong className="red">adapt</strong> the Product Backlog if needed"</em></h2>
          <h3 className="heading-2">The Rules</h3>
          <ul className="rules-list">
            <li className="rules-item">The Product Owner explains what Product Backlog items have been “Done” and what has not been “Done”.</li>
            <li className="rules-item">The Development Team discusses what went well during the Sprint, what problems it ran into, and how those problems were solved.</li>
            <li className="rules-item">The Development Team demonstrates the work that it has “Done” and answers questions about the Increment.</li>
            <li className="rules-item"><strong className="red">Proposal!</strong> The Product Owner discusses the Product Backlog as it stands and check whether it needs to be adapted to new business requirements that might have arised.</li>
            <li className="rules-item">The entire group collaborates on what to do next, so that the Sprint Review provides valuable input to subsequent Sprint Planning.</li>
          </ul>
          <h3 className="heading-2">The Goal</h3>
          <p className="body-2">The result of the Sprint Review is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint. The Product Backlog may also be adjusted overall to meet new opportunities.</p>
        </div>
      </div>
    </section>
  )
}

export default SprintReview;