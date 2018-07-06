import React from 'react';
import Scrollspy from 'react-scrollspy'

function Done(props) {
  return (
    <section id="done" className="done">
      <div id="catcher" className="container-fluid">
        <div className="container">
          <h1 className="heading-1">"Done"</h1>
          <h2 className="body-2"><em>"A clear and concise <strong className="red">list of requirements</strong> that software must adhere to for the team to call it complete."</em></h2>
        </div>
      </div>
      <div id="goal" className="container-fluid">
        <div className="container">
          <h3 className="heading-2">Why?</h3>
          <p className="body-2">Incomplete work has a nasty habit of mounting up, and without visibility of how much effort truly remains, the deficit can quickly get out of hand.</p>
        </div>
      </div>
      <div id="brainstorming" className="container-fluid">
        <div className="container">
          <h3 className="heading-2">Brainstorming</h3>
          <p className="body-2">When do you consider a User Story as "Done"?</p>
          <img className="lightbulb" src="/agile-guide/assets/lightbulb-white.svg" width="100px" />
          {/* <img className="lightbulb" src="/assets/lightbulb-white.svg" width="100px" /> */}
        </div>
      </div>
      <Scrollspy items={['catcher', 'rules', 'goal']} className="scrollspy" currentClassName="is-current">
        <li className="item"><a href="#catcher"></a></li>
        <li className="item"><a href="#rules"></a></li>
        <li className="item"><a href="#goal"></a></li>
      </Scrollspy>
    </section>
  )
}

export default Done;