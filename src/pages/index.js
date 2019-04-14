import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article/";
import Page from "../components/Page";
import Hero from "../components/Hero";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  render() {
    const {
      data: {
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    const {
      data: { page }
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />
        {/* <ThemeContext.Consumer>
          {theme => (
            <Article theme={theme}>
              <Page page={page} theme={theme} />
            </Article>
          )}
        </ThemeContext.Consumer> */}
        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

// export const pageQuery = graphql`
//   query PageByPath($slug: String!) {
//     page: markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

//eslint-disable-next-line no-undef
export const query = graphql`
  query indexQuery {
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;
