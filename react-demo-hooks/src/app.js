import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import NavigationBar from './navigation-bar';
import Home from './home/home';
import PersonContainer from './person/person-container';
import ErrorPage from './commons/errorhandling/error-page';
import Login from './register/login/login'
import SignUp from './register/signup/signup'
//others
import styles from './commons/styles/project-style.css';

/*
    Namings: https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components
    Should I use hooks?: https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both
*/
function App() {

    const showNavBar = window.location.href.includes('login') || window.location.href.includes('signup');
  
    return (
        <div className={styles.back}>
            <Router>
                <div>
                   {!showNavBar && <NavigationBar />}

                    <Switch>

                        <Route
                            exact
                            path='/login'
                            render = {()=> <Login/>}
                        />

                        <Route
                            exact
                            path='/signup'
                            render = {()=> <SignUp/>}
                        />
                        <Route
                            exact
                            path='/'
                            render={() => <Home />}
                        />

                        <Route
                            exact
                            path='/person'
                            render={() => <PersonContainer />}
                        />

                        {/*Error*/}
                        <Route
                            exact
                            path='/error'
                            render={() => <ErrorPage />}
                        />

                        <Route render={() => <ErrorPage />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
