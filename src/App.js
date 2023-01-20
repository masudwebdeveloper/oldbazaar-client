import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ScrollToTop
        width="28"
        height="28"
        color="#e25822"
        viewBox="0 0 14 24"
        className='motion-safe:animate-bounce'
        svgPath='M4.5 15.75l7.5-7.5 7.5 7.5'
        smooth></ScrollToTop>
      <Toaster />
    </div>
  );
}

export default App;
