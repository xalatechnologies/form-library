import React from 'react';
import type { BaseControl } from '@xalatechnologies/form-core';
import type { ControlRenderer, RenderOptions } from './index';
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@radix-ui/react-checkbox";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

export const ShadcnRenderer: ControlRenderer = {
  render: (control: BaseControl, options?: RenderOptions): JSX.Element => {
    switch (control.type) {
      case 'text':
      case 'number':
        return (
          <div className="space-y-2">
            <Label htmlFor={control.id}>{control.label}</Label>
            <input
              id={control.id}
              type={control.type}
              required={control.required}
              disabled={control.disabled}
              defaultValue={control.defaultValue}
              placeholder={control.placeholder}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={control.id}
              defaultChecked={control.defaultValue}
              disabled={control.disabled}
            />
            <Label htmlFor={control.id}>{control.label}</Label>
          </div>
        );

      case 'radio':
        return (
          <RadioGroup defaultValue={control.defaultValue}>
            {(control.defaultValue as string[])?.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option}
                  id={`${control.id}-${option}`}
                  disabled={control.disabled}
                />
                <Label htmlFor={`${control.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );

      default:
        return <div>Unsupported control type: {control.type}</div>;
    }
  }
};