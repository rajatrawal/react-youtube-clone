import './App.css';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/indexPage/MainContainer';
import WatchPage from './components/watchPage/WatchPage';
import DemoComponent from './components/DemoComponent';
import Demo2 from './components/Demo2';
import SearchResult from './components/searchPage/SearchResult';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'demo',
        element: <>
          <DemoComponent />
          <Demo2 />
        </>
      },
      {
        path: 'search',
        element: <SearchResult />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>

      <div >
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );

}

export default App;

