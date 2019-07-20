import React, { Fragment } from "react";

import SystemForm from "./SystemForm";
import System from "./System";

export default function SystemDashboard() {
  return (
    <Fragment>
      <SystemForm />
      <System />
    </Fragment>
  );
}
