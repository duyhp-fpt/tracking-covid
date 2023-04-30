import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@mui/material";
// import { makeStyles } from '@mui/material/styles';
import { styled } from '@mui/material';

const useStyles = styled((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
    minWidth: 120,
  },
}));

CountrySelector.defaultProps = {
  countries: [],
};

function CountrySelector({ countries, value, handleOnChange }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="country-selector">
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map(({ Country, ISO2 }) => (
          <option key={ISO2} value={ISO2.toLowerCase()}>
            {Country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
