import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TitleText from '../../atoms/LoginPopup/Title';
import DeleteButton from '../../atoms/SignUpPage/DeleteButton';

const empty_profile = "server_url + request_url";

const ProfileImage = (props) => {
  const setInfo = props.setInfo;
  const [image, setimage] = useState();
  const [fileUrl, setFileUrl] = useState(null);

  // 이미지 상대경로 저장
  const onSaveImage = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimage(imageFile);
    setFileUrl(imageUrl);

    const formData = new FormData();
    formData.append('attachments', imageFile);

    /* 이미지 업로드 코드 -> 백엔드에서 주는 데이터 형식보고 코드 수정 필요
    let response = await Api.getReadFile(formData);
    if (response.sucess) {
      let image_path = response.files[0].file_path.replace('file\\', '');
      let image = server_path + image_path;
      setInfo({
        ...prev,
        Image: image,
      });
    } else {
      console.log('이미지 업로드 실패');
    }
    */
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = async () => {
    setFileUrl(empty_profile);
    setInfo((prev) => ({
      ...prev,
      Image: empty_profile,
    }));
  };

  return (
    <>
      <Box>
        <Box sx={{ float: 'left', width: "20%", height: "100px", paddingTop: "40px" }}>
          <TitleText title="프로필" fontWeight="bold" ></TitleText>
        </Box>
        <Box sx={{ float: 'left', width: "50%", height: "100px" }}>
          {(fileUrl === null) ?
            <AccountCircleIcon sx={{ width: "100px", height: "100px" }} /> :
            <img src={fileUrl} alt="profile" width="100px" height="100px" style={{ objectFit: "cover", borderRadius: "70%" }} />
          }
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ paddingLeft: 11 }}>
              <label htmlFor="input-file" onChange={onSaveImage} style={{ backgroundColor: "#BADBF3", borderRadius: "4px", cursor: "pointer", padding: "6px 15px", fontSize: "12px" }} >
                이미지 첨부 
                <input type="file" id="input-file" accept="image/*" style={{ display:"none" }}/>
              </label>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {/* <DeleteButton
              value="이미지 삭제"
              handleDeleteImage={handleDeleteImage}
            ></DeleteButton> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileImage;
