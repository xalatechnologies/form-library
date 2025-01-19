export * from './material-ui';
export * from './shadcn';

import type { BaseControl } from '@xalatechnologies/form-core';
import type { Theme } from '@xalatechnologies/form-themes';

export interface RenderOptions {
  library: 'material-ui' | 'shadcn';
  theme?: Theme;
}

export interface ControlRenderer {
  render: (control: BaseControl, options?: RenderOptions) => JSX.Element;
}