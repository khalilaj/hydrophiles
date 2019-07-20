import React, { Fragment } from "react";

import SystemForm from "./SystemForm";
import SystemCrop from "./SystemCrop";

export default function SystemCropDashboard() {
  return (
    <Fragment>
      <SystemForm />
      <SystemCrop />
    </Fragment>
  );
}
