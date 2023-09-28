import React, { useEffect } from 'react'
import MyNav from '../components/navigation/MyNav'
import Footer from '../components/footer/MyFooter'
import { useDispatch, useSelector } from 'react-redux';
import { handledarkMode } from '../reducers/actions/darkModeAction';

export default function MainLayout({children}) {

    // assigning useDispatch hook of redux to a variable
    const dispatch = useDispatch();

    // calling our state from the reduxer using useSelector hook of redux
    const mode = useSelector((state) => state.darkMode);
  
    // destructuring isdarkMode state from mode variable called using useSelector hook of redux
    const { isdarkMode } = mode;
  
    // function to be fired on onChange method to switch the mode
    const switchDarkMode = () => {
      isdarkMode
        ? dispatch(handledarkMode(false))
        : dispatch(handledarkMode(true));
    };
    useEffect(() => {
      // Set data-bs-theme attribute for Bootstrap
      document.body.setAttribute("data-bs-theme", isdarkMode ? "dark" : "light");
  
      // Set data-theme attribute for Bootstrap (optional)
      document.body.setAttribute("data-theme", isdarkMode ? "dark" : "light");
    }, [isdarkMode]);

  return (
    <>
      <div
        id="darkmode"
        // inline styling with darkmode:  comment out to use this for example //
        /* style={{ background: isdarkMode ? "white" : "yellow" }} */
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchDarkMode}
          // checking checked prop with dark mode state
          checked={isdarkMode}
        />
        <label htmlFor="checkbox" className="label">
          white
          yellow
          <div className="ball"></div>
        </label>
      </div>
        <MyNav/>
            {children}
        <Footer/>
    </>
  )
}
