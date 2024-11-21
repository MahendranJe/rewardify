import React from 'react'

function Storesidepannel() {
  return (
    <div className="step-panel">
    <ul className="step-list">
      {/* Step 1 */}
      <li className="active">
        <div className="step-circle active-circle"></div>
        <div className="step-content">
          <h5>Step 1</h5>
          <h4>Store Information</h4>
          <p>Owner name, Store location, Store address</p>
        </div>
      </li>
      
      {/* Step 2 */}
      <li>
        <div className="step-circle"></div>
        <div className="step-content">
          <h5>Step 2</h5>
          <h4>Store Document</h4>
          <p>GSTIN Number, PAN Number, Bank details</p>
        </div>
      </li>
      
      {/* Step 3 */}
      <li>
        <div className="step-circle"></div>
        <div className="step-content">
          <h5>Step 3</h5>
          <h4>Agreement</h4>
          <p>REWARDIFY partner Agreement</p>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Storesidepannel