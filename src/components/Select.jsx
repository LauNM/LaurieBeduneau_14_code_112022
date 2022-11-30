import PropTypes from "prop-types";
import React from 'react';
import { MenuItem, TextField } from '@mui/material';

const FormSelect = React.forwardRef(({ list, name }, ref) => {
  const [value, setValue] = React.useState(list[0].value);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <TextField id={name} label={name} value={value}  ref={ref} onChange={handleChange} select >
      { list.map((el, i) => <MenuItem key={ i } value={ el.value }> { el.label } </MenuItem>) }
    </TextField>
  )
});

FormSelect.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired
  })),
  name: PropTypes.string
}
export default FormSelect;