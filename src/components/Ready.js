import React from 'react';
import Scrollspy from 'react-scrollspy'

function Ready(props) {
  return (
    <section id="ready" className="ready">
      <div id="catcher" className="container-fluid">
        <div className="container">
          <h1 className="heading-1">"Ready"</h1>
          <h2 className="body-2"><em>"A story is <strong className="red">Ready</strong> when the team can agree that they can get it <strong className="red">Done</strong>".</em></h2>
        </div>
      </div>
      <div id="rules" className="container-fluid">
        <div className="container">
          <h3 className="heading-2">A good User Story is:</h3>
          <ul className="rules-list">
            <li className="rules-item"><strong className="red">I</strong> (Independent). The PBI should be self-contained and it should be possible to bring it into progress without a dependency upon another PBI or an external resource.</li>
            <li className="rules-item"><strong className="red">N</strong> (Negotiable). A good PBI should leave room for discussion regarding its optimal implementation.</li>
            <li className="rules-item"><strong className="red">V</strong> (Valuable). The value a PBI delivers to stakeholders should be clear.</li>
            <li className="rules-item"><strong className="red">E</strong> (Estimable). A PBI must have a size relative to other PBIs.</li>
            <li className="rules-item"><strong className="red">S</strong> (Small). PBIs should be small enough to estimate with reasonable accuracy and to plan into a time-box such as a Sprint.</li>
            <li className="rules-item"><strong className="red">T</strong> (Testable). Each PBI should have clear acceptance criteria which allow its satisfaction to be tested.</li>
          </ul>
          <p className="terms">* PBI: Product Backlog Item</p>
        </div>
      </div>
      <div id="goal" className="container-fluid">
        <div className="container">
          <h3 className="heading-2">Why?</h3>
          <p className="body-2">By observing a Definition of Ready, the chances are reduced of a Sprint starting where Development Team members immediately shake their heads at Product Backlog items they do not sufficiently understand.</p>
        </div>
      </div>
      <div id="brainstorming" className="container-fluid">
        <div className="container">
          <h3 className="heading-2">Brainstorming</h3>
          <p className="body-2">What else do you need to know about a User Story to be able to get it "Done"?</p>
          <img className="lightbulb" src="/assets/lightbulb-white.svg" width="100px" />
        </div>
      </div>
      <Scrollspy items={['catcher', 'rules', 'goal', 'brainstorming']} className="scrollspy" currentClassName="is-current">
        <li className="item"><a href="#catcher"></a></li>
        <li className="item"><a href="#rules"></a></li>
        <li className="item"><a href="#goal"></a></li>
        <li className="item"><a href="#brainstorming"></a></li>
      </Scrollspy>
    </section>
  )
}

export default Ready;