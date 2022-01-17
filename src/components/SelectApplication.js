import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'decorate'
];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function SelectApplication({props}) {
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState();

  // const handleChange = (event) => {
  //   // console.log(personName);
  //   props.getChange(event.target.value);
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value="decorate"
          onChange={props.getChange}
          input={<OutlinedInput size='small'/>}
          MenuProps={MenuProps}
        >
            <MenuItem
              value="decorate"
              // style={getStyles("decorate", personName, theme)}
            >
              decorate
            </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
