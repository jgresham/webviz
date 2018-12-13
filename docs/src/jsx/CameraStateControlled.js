//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import React from "react";
import Worldview, { Axes, Grid, DEFAULT_CAMERA_STATE } from "regl-worldview";

import CameraStateInfo from "./CameraStateInfo";

// #BEGIN EXAMPLE
class CameraStateControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraState: {
        ...DEFAULT_CAMERA_STATE,
        perspective: true,
      },
    };
    this.onCameraStateChange = this.onCameraStateChange.bind(this);
  }

  onCameraStateChange(cameraState) {
    this.setState((state) => ({
      cameraState,
    }));
  }

  render() {
    const { cameraState } = this.state;
    return (
      <div style={{ height: 500 }}>
        <CameraStateInfo cameraState={cameraState} />
        <Worldview cameraState={cameraState} onCameraStateChange={this.onCameraStateChange}>
          <Grid />
          <Axes />
        </Worldview>
      </div>
    );
  }
}
// #END EXAMPLE

export default CameraStateControlled;