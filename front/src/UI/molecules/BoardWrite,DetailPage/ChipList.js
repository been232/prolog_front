import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1.5),
}));

export default function ChipList(props) {
  const [chipData, setChipData] = React.useState(props.tag);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: '90%',
        marginLeft: '5%',
      }}
      component="ul"
    >
      <p>태그 : </p>
      {chipData.map((data) => {
        return (
          <ListItem key={data}>
            <Chip label={data} />
          </ListItem>
        );
      })}
    </Paper>
  );
}
