import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Downshift from 'downshift';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
// import Api from 'src/Api/Api';
import MenuItem from '@mui/material/MenuItem';

export default function ChipInput(props) {
  const { placeholder, other } = props;
  const [inputValue, setInputValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState(props.tag);
  const [members, setMembers] = useState(['gggg']);
  const [state, setstate] = useState(false);
  const temp = '';

  useEffect(() => {
    props.propfunction(selectedItem);
  }, [selectedItem]);

  function handleKeyDown(event) {
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === 'Backspace'
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }
  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  }

  const getMembers = async (value) => {
    //통신후 입력마다 값 불러와야함
    const member_list = ['gggg', 'zzz'];
    setMembers(member_list);
  };

  const handleDelete = (item) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
    if (event.target.value) {
      getMembers(event.target.value);
    }
    if (!event.target.value) {
      setstate(false);
    } else {
      setstate(true);
    }
  }

  function makeChip(s) {
    const newSelectedItem = [...selectedItem];
    const duplicatedValues = newSelectedItem.indexOf(s.trim());

    if (duplicatedValues !== -1) {
      setInputValue('');
      return;
    }
    if (!s.replace(/\s/g, '').length) return;

    newSelectedItem.push(s.trim());
    setSelectedItem(newSelectedItem);
    setInputValue('');
  }

  return (
    <React.Fragment>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
          });
          return (
            <div>
              <TextField
                fullWidth
                sx={{
                  flex: '1',
                  flexDirection: 'row',
                  boxShadow: 2,
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  backgroundColor: 'primary.smoothgreen',
                }}
                inputProps={{ style: { fontFamily: 'KOTRAHOPE' } }}
                style={{ width: '90%', marginLeft: '5%', marginTop: 20 }}
                placeholder="팀원의 아이디를 입력해주세요"
                InputProps={{
                  startAdornment: selectedItem.map((item) => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      onDelete={handleDelete(item)}
                      style={{ fontFamily: 'KOTRAHOPE' }}
                    />
                  )),
                  onBlur,
                  onChange: (event) => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus,
                }}
                {...other}
                {...inputProps}
              />
              {state ? (
                <Paper
                  style={{ width: '90%', marginLeft: '5%' }}
                  sx={{ boxShadow: 5 }}
                >
                  <MenuList>
                    {members?.map((s) => {
                      return (
                        <MenuItem
                          style={{ fontFamily: 'KOTRAHOPE' }}
                          onClick={() => {
                            makeChip(s);
                            setMembers([]);
                          }}
                          key={s}
                          value={s}
                        >
                          {s ?? s}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Paper>
              ) : (
                temp
              )}
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
}
