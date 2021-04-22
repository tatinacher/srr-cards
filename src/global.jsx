import styled from "styled-components";

export const Global = styled.div`
  --palette-snow-1000: #000000;
  --palette-snow-500: #c0c0c0;
  --palette-snow-100: #f5f5f5;
  --palette-snow-0: #ffffff;
  --palette-lavender-500: #9381f1;

  /* should be rewritten to formulas */
  --woly-line-height: 24px;
  --woly-border-width: 1.5px;
  --woly-rounding: 4px;
  --woly-font-size: 15px;

  --woly-const-m: 6px;
  --woly-main-level: 3;

  --woly-neutral: var(--palette-snow-500);
  --woly-focus: #9381f1;
  --woly-background: #ffffff;

  [data-variant="default"] {
    --woly-shape-default: #b0a3f4;
    --woly-shape-disabled: #e5e5e5;
    --woly-shape-hover: #c9c0f8;
    --woly-shape-active: #b0a3f4;

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--palette-snow-500);
    --woly-canvas-active: var(--palette-snow-500);

    --woly-canvas-text-default: var(--palette-snow-1000);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--palette-snow-500);
    --woly-canvas-text-active: var(--palette-snow-500);
  }
`;

const Block = styled.div`
  --woly-font-size: 15px;
`;

const M = styled(Block)`
  --woly-component-level: 3;
`;

export const block = { M };
