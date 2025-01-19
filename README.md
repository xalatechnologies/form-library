# @xalatechnologies/form-library

UI library adapters for the Fylleut form system.

## Installation

```bash
npm install @xalatechnologies/form-library
```

## Features

- Material UI adapter
- shadcn/ui adapter
- Theme integration
- TypeScript support

## Usage

```typescript
import { MaterialUIRenderer, ShadcnRenderer } from '@xalatechnologies/form-library';
import type { BaseControl } from '@xalatechnologies/form-core';

// Create a text input control
const textControl: BaseControl = {
  id: 'name',
  type: 'text',
  label: 'Full Name',
  required: true
};

// Render with Material UI
const MaterialUIInput = MaterialUIRenderer.render(textControl, {
  library: 'material-ui'
});

// Render with shadcn/ui
const ShadcnInput = ShadcnRenderer.render(textControl, {
  library: 'shadcn'
});
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.fylleut.com/packages/form-library).

## License

MIT
