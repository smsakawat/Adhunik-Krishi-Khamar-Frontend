import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Privay Policy" />
        <PrivacyDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default PrivacyPage;
