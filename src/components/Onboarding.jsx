import React from 'react'

function Onboarding(){

  return (
    <div>
      <h1>How do you plan to use GOALIE?</h1>
      <form className='onboarding'>
        <legend>What industry are you most interested in?</legend>
          <h4>Check all that apply.</h4>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckFintech" />
            <label class="form-check-label" for="flexCheckFintech">
              Fintech
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckHealthCare" />
            <label class="form-check-label" for="flexCheckHealthCare">
              Healthcare
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckAI" />
            <label class="form-check-label" for="flexCheckAI">
              AI
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckWeb3" />
            <label class="form-check-label" for="flexCheckWeb3">
              Web3
            </label>
          
        <legend>What describes your goals?</legend>
          <h4>Check all that apply.</h4>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckWeb3" />
            <label class="form-check-label" for="flexCheckWeb3">
              Landing a job
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckWeb3" />
            <label class="form-check-label" for="flexCheckWeb3">
              Career-Development
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckWeb3" />
            <label class="form-check-label" for="flexCheckWeb3">
              Building Portfolio
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckWeb3" />
            <label class="form-check-label" for="flexCheckWeb3">
              Other
            </label>

        <legend>What best describes your skill set level?</legend>
          <h4>Check the best that applies to you.</h4>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckJunior" />
            <label class="form-check-label" for="flexCheckJunior">
              Junior
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckMid-level" />
            <label class="form-check-label" for="flexCheckMid-level">
              Mid-level
            </label>            
            <input class="form-check-input" type="checkbox" value="" id="flexCheckSenior" />
            <label class="form-check-label" for="flexCheckSenior">
              Senior
            </label>            
            <input class="form-check-input" type="checkbox" value="" id="flexCheckPrincipal" />
            <label class="form-check-label" for="flexCheckPrincipal">
              Principal
            </label>

        <legend>What skill set are you looking for with your matched buddy?</legend>
          <h4>Check all that applies to you.</h4>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckJunior" />
            <label class="form-check-label" for="flexCheckJunior">
              Junior
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckMid-level" />
            <label class="form-check-label" for="flexCheckMid-level">
              Mid-level
            </label>            
            <input class="form-check-input" type="checkbox" value="" id="flexCheckSenior" />
            <label class="form-check-label" for="flexCheckSenior">
              Senior
            </label>            
            <input class="form-check-input" type="checkbox" value="" id="flexCheckPrincipal" />
            <label class="form-check-label" for="flexCheckPrincipal">
              Principal
            </label>
          <br/>
          <button type="submit">Skip For Now</button>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Onboarding