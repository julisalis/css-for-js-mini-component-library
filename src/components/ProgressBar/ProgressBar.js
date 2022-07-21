/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    radius: 4,
  },
  medium: {
    height: 12,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const Container = styled.span`
  max-width: 370px;
  width: 100%;

  display: inline-block;
  border-radius: var(--radius, 0px);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding, 0px);

  /* Trim off corners */
  overflow: hidden;
`;

const Filled = styled.span`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  display: block;
  width: var(--width, 0%);
  height: var(--height, 8px);
`;

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error("Unknown size passed to ProgressBar");
  }

  return (
    <Container
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--padding": `${styles.padding || 0}px`,
        "--radius": `${styles.radius}px`,
      }}
    >
      <Filled
        style={{
          "--width": `${value}%`,
          "--height": `${styles.height}px`,
        }}
      />
    </Container>
  );
};

export default ProgressBar;
