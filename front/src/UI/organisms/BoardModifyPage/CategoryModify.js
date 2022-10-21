import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import React, { useEffect } from 'react';
import Api from "../../../api/Api";
function CategoryModify(props) {
  console.log(props)
  const datas = [];
  const [age, setAge] = React.useState(1 || props.category.id);
  const data = props.category;
  {
      data.map((item) => {
          if(item.child.length != 0){
              datas.push(item);
              item.child.map((items) => {
                  datas.push(items);
                  if(item.child.length != 0) {
                      items.child.map((itemss) => {
                          datas.push(itemss);
                      })
                  }
              })
          }
          else {
              datas.push(item);
          }
      })
  }

  const handleChange = (event) => {
    setAge(event.target.value);
    props.propFunction(event.target.value);
  };

  return (
    <Box sx={{ float: 'right', minWidth: 120, marginRight: '5%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
          {datas.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategoryModify;