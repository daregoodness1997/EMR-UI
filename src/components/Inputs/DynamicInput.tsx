import DatePicker from '@mui/lab/DatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { DateFormats } from '../../pages/app/Constants';
import { InputType } from '../../pages/app/schema/utils';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

interface DynamicInputProps {
  inputType: any;
  label: string;
  name: string;
  data?: any;
  options: any[];
  errors?: any;
  readonly?: boolean;
  defaultValue?: any;
}

const DynamicInput = (props: DynamicInputProps) => {
  const {
    inputType,
    label,
    name,
    data = {},
    options,
    errors = {},
    readonly,
    defaultValue,
  } = props;
  if (inputType === InputType.HIDDEN && data[name]) {
    return <input type='hidden' defaultValue={defaultValue} />;
  } else if (inputType === InputType.HIDDEN) {
    return <></>;
  }

  if (inputType === InputType.TEXT) {
    return (
      <Input
        label={label}
        disabled={readonly}
        errorText={errors[name]?.message}
        defaultValue={data[name] || ''}
      />
    );
  }

  if (inputType === InputType.NUMBER) {
    return (
      <Input
        label={label}
        disabled={readonly}
        errorText={errors[name]?.message}
        type='number'
        defaultValue={data[name]}
      />
    );
  }

  if (inputType === InputType.EMAIL) {
    return (
      <Input
        label={label}
        disabled={readonly}
        errorText={errors[name]?.message}
        type='email'
        defaultValue={data[name]}
      />
    );
  }

  if (inputType === InputType.TEXT_AREA) {
    return (
      <Textarea
        label={label}
        disabled={readonly}
        errorText={errors[name]?.message}
        defaultValue={data[name]}
      />
    );
  }

  if (inputType === InputType.SELECT_RADIO) {
    return (
      <Radio
        name={label}
        title={label}
        disabled={readonly}
        options={options}
        defaultValue={data[name]}
      />
    );
  }

  if (inputType === InputType.SELECT_CHECKBOX) {
    return (
      <Checkbox
        label={label}
        disabled={readonly}
        defaultValue={data[name]}
        options={options}
        errorText={errors[name]?.message}
      />
    );
  }

  if (inputType === InputType.BOOLEAN_CHECK) {
    return (
      <Checkbox
        label={label}
        options={options}
        name={label}
        onChange={() => null}
        disabled={readonly}
      />
    );
  }

  if (inputType === InputType.SELECT_LIST) {
    return (
      <Select
        label={label}
        options={options}
        errorText={errors[name]?.message}
        defaultValue={
          defaultValue !== undefined ? defaultValue : data[name] || ''
        }
        disabled={readonly}
      />
    );
  }

  if (inputType === InputType.DATETIME) {
    return (
      <FormControl disabled={readonly} style={{ width: '100%' }}>
        <DateTimePicker
          label={label}
          //   onChange={(value: any) =>
          //     field.onChange({ target: { value: toAPIDate(value) } })
          //   }
          inputFormat={DateFormats.CONTROL_DATE_TIME}
          renderInput={(params: any) => (
            <TextField
              {...params}
              disabled={readonly}
              error={errors[name]?.message}
            />
          )}
        />
        {errors[name] && (
          <FormHelperText error>{errors[name].message}</FormHelperText>
        )}
      </FormControl>
    );
  }

  if (inputType === InputType.DATE) {
    return (
      <>
        <DatePicker
          label={label}
          //   onChange={(value: any) =>
          //     field.onChange({ target: { value: toAPIDate(value) } })
          //   }
          inputFormat={DateFormats.CONTROL_DATE}
          renderInput={(params: any) => (
            <TextField
              {...params}
              disabled={readonly}
              error={!!errors[name]?.message}
            />
          )}
        />
        {errors[name]?.message && (
          <FormHelperText error>{errors[name]?.message}</FormHelperText>
        )}
      </>
    );
  }

  return null;
};
export default DynamicInput;