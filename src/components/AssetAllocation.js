import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getEmployee, getAsset, setAllocation } from '../actions';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const AssetAllocation = () => {
  const dispatch = useDispatch();

  const { employeeData } = useSelector((state) => state.employee);
  const { assetData } = useSelector((state) => state.asset);

  const [assetName, setAssetName] = useState([]);
  const [employeeName, setEmployeeName] = useState('');

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

  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAssetName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getAsset());
  }, []);
  const employeeList = employeeData.map((data, index) => {
    return <option key={index}>{data.ename}</option>;
  });

  const onFromSubmit = (e) => {
    e.preventDefault();
    console.log('emp', employeeName);
    console.log('ast', assetName);
    dispatch(
      setAllocation({
        employee: employeeName,
        allocatedAssets: assetName,
      })
    );
  };

  return (
    <div className="container m-5">
      <h1>AssetAllocation</h1>
      <Link className="btn btn-secondary" to="/dashboard">
        back
      </Link>
      <form onSubmit={onFromSubmit} className="mt-3">
        <div>
          <label htmlFor="employee">Choose an Employee:</label>
          <select
            name="employee"
            id="employee"
            className="custom-select"
            onChange={(e) => setEmployeeName(e.target.value)}
          >
            <option>select</option>
            {employeeList}
          </select>
          <br />
        </div>
        <div>
          <label htmlFor="asset">Choose an Asset:</label>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Assets</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={assetName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {assetData.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.name}
                  style={getStyles(name, assetName, theme)}
                >
                  {name.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AssetAllocation;
