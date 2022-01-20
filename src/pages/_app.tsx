import '@Styles/App.css';
import { Route, Switch } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import LoginPage from '@Pages/login';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Home from '@Components/Home';
import { MainPaths } from '@Enums/paths/main-paths.enum';

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
          <Footer />
        </section>
      </div>
    </HelmetProvider>
  );
}

export default App;
