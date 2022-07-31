import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import AllQuestions from './components/questions/AllQuestions';
import AskQuestion from './components/questions/AskQuestion';
import Signup from './components/user/Signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/user/Signin';
import NoMatch from './components/error/NoMatch';
import { browserRoutes } from './routes/browserRoutes';
import AuthRoutes from './components/authProtectedRoutes/AuthRoutes';
function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path={browserRoutes.HOME} element={<AllQuestions />} />
          <Route
            path={browserRoutes.ASK_QUESTIONS}
            element={
              <AuthRoutes redirectLink={browserRoutes.SIGNIN}>
                <AskQuestion />
              </AuthRoutes>
            }
          />
          <Route path={browserRoutes.SIGNUP} element={<Signup />} />
          <Route path={browserRoutes.SIGNIN} element={<Signin />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
