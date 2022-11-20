import React, { useState, useEffect } from 'react';
import { Button, Box, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TitleText from '../../atoms/LoginPopup/Title';
import DeleteButton from '../../atoms/SignUpPage/DeleteButton';
import Api from '../../../api/Api';

const domain = 'http://210.91.148.88:8080/';

const ProfileImage = (props) => {
    const setInfo = props.setInfo;
    const imageId = props.imageId;
    let base_image = (props.image === null) ? null : props.image;
    const [fileUrl, setFileUrl] = useState(base_image); // 이미지 URL
    const [FileInfo, setFileInfo] = useState({ // 이미지 업로드 reponse 보관용 Info
        id: imageId,
        name: null,
        url: base_image
    });

    // 이미지 상대경로 저장
    const onSaveImage = async (event) => {
        const imageFile = event.target.files[0];

        if (!imageFile) {
            return;
        }

        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl);
        base_image = imageUrl;

        const formData = new FormData();
        formData.append('file', imageFile);

        let response = await Api.getImagePost(formData);
        console.log(response)

        if (response.data.success) {
            setFileInfo({
                id: response.data.data[0].id,
                name: response.data.data[0].name,
                url: response.data.data[0].url
            });

            setInfo((prev) => ({
                ...prev,
                image: response.data.data[0].url,
            }));

            console.log('이미지 업로드 완료');

        } else {
            console.log('이미지 업로드 실패');
        }

    };

    // 이미지 삭제
    const handleDeleteImage = async () => {

        if (FileInfo.id != undefined) {
            setFileUrl(null);

            setInfo((prev) => ({
                ...prev,
                image: null,
            }));
            console.log("기본 프로필 이미지");
            
            return;
        }

        if (base_image === null) {
            return;
        }

        let urlList = base_image.split(domain);
        let url = urlList[1];

        let response = await Api.getImageRemovePost(url);
        console.log(response);

        if (response.data.success) {
            setFileUrl(null);

            setFileInfo({
                id: null,
                name: null,
                url: null
            });

            setInfo((prev) => ({
                ...prev,
                image: null,
            }));

            console.log('이미지 삭제 완료');

        } else {
            console.log('이미지 삭제 실패');
        }


    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box>
                        <Box sx={{ float: 'left', width: "30%", height: "100px", paddingTop: "40px" }}>
                            <TitleText title="프로필" fontWeight="bold" ></TitleText>
                        </Box>
                        <Box sx={{ float: 'left', width: "50%", height: "100px" }}>
                            {(imageId === null) ?
                                (<AccountCircleIcon sx={{ width: "100px", height: "100px" }} />) :
                                (<img src={base_image} alt="profile" width="100px" height="100px" style={{ objectFit: "cover", borderRadius: "70%" }} />)
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ paddingLeft: 1, paddingTop: 2 }}>
                                    <label htmlFor="input-file" onChange={onSaveImage} style={{ backgroundColor: "#BADBF3", borderRadius: "4px", cursor: "pointer", padding: "8px 11px", fontSize: "12px" }} >
                                        이미지 첨부
                                        <input type="file" id="input-file" accept="image/*" style={{ display: "none" }} />
                                    </label>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ paddingLeft: 1 }}>
                                    <DeleteButton
                                        value="이미지 삭제"
                                        handleDeleteImage={handleDeleteImage}
                                        fontSize="12px"
                                        cursor="pointer"
                                    >
                                    </DeleteButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfileImage;
