import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
function PostBoxMiddleMolecule({ title, id, link }) {
  return (
    /* padding min-height 재설정 필요함. */
    <Box sx={{ minHeight: 125, padding: 1.5 }}>
      <Link to={`/${link}/${id}`}>
=======
function PostBoxMiddleMolecule({ title, id }) {
  return (
    /* padding min-height 재설정 필요함. */
    <Box sx={{ minHeight: 125, padding: 1.5 }}>
      <Link to={`/boardDetail/${id}`}>
>>>>>>> 7f932afecdb4374aad4399d6bd43cb0155a5965c
        <p>{title}</p>
      </Link>
    </Box>
  );
}

export default PostBoxMiddleMolecule;
