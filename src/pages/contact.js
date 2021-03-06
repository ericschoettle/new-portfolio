import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";

const ContactPage = props => {

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Contact" theme={theme} />
            </header>
            <Contact theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

export default ContactPage;
