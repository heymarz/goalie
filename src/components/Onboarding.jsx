import React, {useState} from 'react'

function Onboarding(){
  const[industry, setIndustry] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [ownSkillLevel, setOwnSkillLevel] = useState("");
  const [buddySkillLevel, setBuddySkillLevel] = useState("");

  function onChange(e){
    // const updatedCheckedState = industry.map((item,index)=>
    // index === e ? !item : item);
    console.log(e.target.value)
    industry.push(e.target.value)
  }
  console.log(industry)

  return (
    <div>
      <h1>How do you plan to use GOALIE?</h1>
      <form className='onboarding'>
        <legend>What industry are you most interested in?</legend>
          <h4>Check all that apply.</h4>
            <input class="form-check-input" type="checkbox" value="Fintech" id="flexCheckFintech" onClick={onChange}/>
            <label class="form-check-label" for="flexCheckFintech">
              Fintech
            </label>
            <input class="form-check-input" type="checkbox" value="Healthcare" id="flexCheckHealthCare" onClick={onChange}/>
            <label class="form-check-label" for="flexCheckHealthCare">
              Healthcare
            </label>
            <input class="form-check-input" type="checkbox" value="AI" id="flexCheckAI" onClick={onChange}/>
            <label class="form-check-label" for="flexCheckAI">
              AI
            </label>
            <input class="form-check-input" type="checkbox" value="Web3" id="flexCheckWeb3" onClick={onChange}/>
            <label class="form-check-label" for="flexCheckWeb3">
              Web3
            </label>
          
        <legend>What describes your goals?</legend>
          <h4>Check all that apply.</h4>
            <input class="form-check-input" type="checkbox" value="Landing a job" id="flex-landing-a-job" />
            <label class="form-check-label" for="flex-landing-a-job">
              Landing a job
            </label>
            <input class="form-check-input" type="checkbox" value="Career-Development" id="flex-career-development" />
            <label class="form-check-label" for="flex-career-development">
              Career-Development
            </label>
            <input class="form-check-input" type="checkbox" value="Building Portfolio" id="flex-building-portfolio" />
            <label class="form-check-label" for="flex-building-portfolio">
              Building Portfolio
            </label>
            <input class="form-check-input" type="checkbox" value="other" id="flex-other" />
            <label class="form-check-label" for="flex-other">
              Other
            </label>

        <legend>What best describes your skill set level?</legend>
          <h4>Check the best that applies to you.</h4>
            <input class="form-check-input" type="checkbox" value="Junior" id="flexCheckJunior" />
            <label class="form-check-label" for="flexCheckJunior">
              Junior
            </label>
            <input class="form-check-input" type="checkbox" value="Mid-level" id="flexCheckMid-level" />
            <label class="form-check-label" for="flexCheckMid-level">
              Mid-level
            </label>            
            <input class="form-check-input" type="checkbox" value="Senior" id="flexCheckSenior" />
            <label class="form-check-label" for="flexCheckSenior">
              Senior
            </label>            
            <input class="form-check-input" type="checkbox" value="Principal" id="flexCheckPrincipal" />
            <label class="form-check-label" for="flexCheckPrincipal">
              Principal
            </label>

        <legend>What skill set are you looking for with your matched buddy?</legend>
          <h4>Check all that applies to you.</h4>
            <input class="form-check-input" type="checkbox" value="Junior" id="flexCheckJunior" />
            <label class="form-check-label" for="flexCheckJunior">
              Junior
            </label>
            <input class="form-check-input" type="checkbox" value="Mid-level" id="flexCheckMid-level" />
            <label class="form-check-label" for="flexCheckMid-level">
              Mid-level
            </label>            
            <input class="form-check-input" type="checkbox" value="Senior" id="flexCheckSenior" />
            <label class="form-check-label" for="flexCheckSenior">
              Senior
            </label>            
            <input class="form-check-input" type="checkbox" value="Principal" id="flexCheckPrincipal" />
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