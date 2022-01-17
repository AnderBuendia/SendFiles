import '@Styles/App.css';
import { Route, Switch } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@Components/Header';
import Home from '@Components/Home';
import LoginPage from '@Pages/login';
import { MainPaths } from '@Enums/main-paths.enum';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <main className="App-main">
            <Switch>
              <Route component={Home} path={MainPaths.INDEX} />
              <Route component={LoginPage} path={MainPaths.LOGIN} />
            </Switch>
          </main>
        </section>
      </div>
    </HelmetProvider>
  );
}

export default App;
