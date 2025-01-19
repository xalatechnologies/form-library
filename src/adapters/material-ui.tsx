import React from 'react';
import type { BaseControl } from '@xalatechnologies/form-core';
import type { ControlRenderer, RenderOptions } from './index';
import { TextField, Checkbox, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const MaterialUIRenderer: ControlRenderer = {
  render: (control: BaseControl, options?: RenderOptions): JSX.Element => {
    switch (control.type) {
      case 'text':
      case 'number':
        return (
          <TextField
            id={control.id}
            label={control.label}
            type={control.type}
            required={control.required}
            disabled={control.disabled}
            defaultValue={control.defaultValue}
            placeholder={control.placeholder}
            fullWidth
          />
        );

      case 'checkbox':
        return (
          <FormControlLabel
            control={
              <Checkbox
                id={control.id}
                defaultChecked={control.defaultValue}
                disabled={control.disabled}
              />
            }
            label={control.label}
          />
        );

      case 'radio':
        return (
          <RadioGroup
            id={control.id}
            defaultValue={control.defaultValue}
          >
            {/* Assuming options are passed via defaultValue as array */}
            {(control.defaultValue as string[])?.map(option => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio disabled={control.disabled} />}
                label={option}
              />
            ))}
          </RadioGroup>
        );

      default:
        return <div>Unsupported control type: {control.type}</div>;
    }
  }
};