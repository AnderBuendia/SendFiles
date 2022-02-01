import { lazy, Suspense, FC } from 'react';
import '@Styles/App.css';
import { Route, Switch, useRoute } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Home from '@Components/Home';
import { MainPaths } from '@Enums/paths/main-paths.enum';
import { AuthStoreProvider } from '@Lib/context/auth-store.context';
import { AppStoreProvider } from '@Lib/context/app-store.context';

const LoginPage = lazy(() => import('@Pages/login'));
const DownloadPage = lazy(() => import('@Pages/download'));

const App: FC = () => {
  const [match] = useRoute(MainPaths.LOGIN);

  return (
    <HelmetProvider>
      <AuthStoreProvider>
        <div className="App">
          <Suspense fallback={<div />}>
            <section className="App-content">
              {match || <Header />}
              <AppStoreProvider>
                <main className="App-main">
                  <Switch>
                    <Route component={Home} path={MainPaths.INDEX} />
                    <Route path={MainPaths.LOGIN}>
                      <LoginPage />
                    </Route>
                    <Route component={DownloadPage} path={MainPaths.DOWNLOAD} />
                  </Switch>
                </main>
              </AppStoreProvider>
              {match || <Footer />}
            </section>
          </Suspense>
        </div>
      </AuthStoreProvider>
    </HelmetProvider>
  );
};

export default App;
