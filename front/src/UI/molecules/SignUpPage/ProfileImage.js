import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';
import DeleteButton from '../../atoms/SignUpPage/DeleteButton';

const ProfileImage = (props) => {
  const [image, setimage] = useState();
  const [fileUrl, setFileUrl] = useState(null);

  // 이미지 상대경로 저장
  const onSaveFiles = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimage(imageFile);
    setFileUrl(imageUrl);
    const formData = new FormData();
    formData.append('attachments', imageFile);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = async () => {

  };

  return (
    <>
      <img src={fileUrl} alt="profile" width="150px" height="150px" />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label htmlFor="input-file" onChange={onSaveFiles}>
              <input type="file" id="input-file" accept="image/*" />
            </label>
          </Grid>
          <Grid item xs={12}>
            <DeleteButton value="이미지 삭제" handleDeleteImage={handleDeleteImage}></DeleteButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileImage