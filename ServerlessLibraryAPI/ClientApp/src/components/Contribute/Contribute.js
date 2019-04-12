import React, { Component } from "react";
import AddContributionForm from "./AddContributionForm";
import ContributionsList from "./ContributionsList";
import PageHeaderWithBackButton from "../shared/PageHeaderWithBackButton";

import "./Contribute.scss";

class Contribute extends Component {
  render() {
    return (
      <div className="contribute-page-container">
        <PageHeaderWithBackButton title="Contributions">
          <p className="contribute-page-description">
            This is where you can see all your existing contributions. You can
            also add a new contribution by clicking on the add new contribution
            link.
          </p>
        </PageHeaderWithBackButton>
        <AddContributionForm />
        <ContributionsList />
      </div>
    );
  }
}

export default Contribute;
