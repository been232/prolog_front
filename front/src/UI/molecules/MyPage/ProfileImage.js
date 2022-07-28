import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import ContainedButton from '../../atoms/Commons/ContainedButton';

const ProfileImage = (props) => {
    const base_image = props.Image;
    const [fileUrl, setFileUrl] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setFileUrl(base_image);
        }
        getData();
    }, []);

    return (
        <>
            <Box>
                <Box sx={{ float: "right" }}>
                    {(base_image === null) ? (
                        <Box>
                            <AccountCircleIcon sx={{ width: "100px", height: "100px" }} />
                            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                                <Link to="/memberInfo">
                                    <ContainedButton content="내 상세정보" fontSize="11px"></ContainedButton>
                                </Link>
                            </Box>
                        </Box>
                    ) : (
                        <Box>
                            <img src={base_image} alt="profile" width="100px" height="100px" style={{ objectFit: "cover", borderRadius: "70%" }} />
                            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                                <Link to="/memberInfo">
                                    <ContainedButton content="내 상세정보" fontSize="11px"></ContainedButton>
                                </Link>
                            </Box>
                        </Box>
                    )}

                </Box>

            </Box>
        </>
    );
};

export default ProfileImage;
