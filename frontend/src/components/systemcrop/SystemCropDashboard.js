import React, { Fragment } from "react";

import SystemCropAddForm from "./SystemCropAddForm";
import SystemCrop from "./SystemCrop";

export default function SystemCropDashboard() {
  return (
    <Fragment>
      <SystemCropAddForm />
      <SystemCrop />
    </Fragment>
  );
}
