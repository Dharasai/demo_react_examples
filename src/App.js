import './App.css';
// import Users from './FireBase/Users';
// import Quiz from './QuizApp/Quiz';
import SearchFilter from './SearchFilter/SearchFilter';
// import TimerApp from './TimerApp/Timer';
// import Register from './REACTHOOKS/Register';
// import Patchmethod from './HTTPSAPIREQUESTS/Patchmethod';
// import Deletemethod from './HTTPSAPIREQUESTS/Deletemethod';
// import Putmethod from './HTTPSAPIREQUESTS/Putmethod';
// import Postmethod from './HTTPSAPIREQUESTS/Postmethod';
import Getmethod from './HTTPSAPIREQUESTS/Getmethod';
// import Sample from './sample';
// import VerifyOtp from './Otpcomp/VerifyOtp';

// import TodoList from './TodoList';

// import LoginPage from './LOGINPAGE/LoginPage';
// import Signin from './REACTHOOKS/Signin';


function App(props) {
  return (
    <div className="App">
      <center>
        <h1>project</h1>
        {/* <TodoList  {...props} /> */}
        {/* <VerifyOtp /> */}
        {/* <Sample /> */}

        {/* <LoginPage /> */}

        <Getmethod />
        {/* <Postmethod /> */}

        {/* <Putmethod /> */}
        {/* <Deletemethod /> */}

        {/* <Patchmethod /> */}

        {/* <Signin />
          <Register /> */}

        {/* <TimerApp /> */}
        {/* <Quiz /> */}

        {/*  FIREBASE CRUD OPERATIONS  */}
        {/* <Users /> */}
           {/*  FIREBASE CRUD OPERATIONS  */}

           <SearchFilter />
      </center>

    </div>
  );
}

export default App;
