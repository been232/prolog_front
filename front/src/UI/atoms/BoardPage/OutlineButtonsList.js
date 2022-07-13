import * as React from 'react';
import Button from '@mui/material/Button';
import {
  Link
} from 'react-router-dom';

export default function OutlinedButtonsList() {
  return (
    <Link to ={{
      pathname:`/`,
    }}>
      <Button variant="outlined" sx={{ marginLeft: 2 }}>목록으로</Button>
    </ Link>
  );
}