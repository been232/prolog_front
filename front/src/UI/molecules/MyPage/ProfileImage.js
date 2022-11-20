import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import LinkButton from '../../atoms/Commons/LinkButton';

const ProfileImage = (props) => {

    const getImage = props.Image;
    const imageId = props.imageId;
    const base_image = (getImage === null) ? null : getImage;

    return (
        <>
            <Box>
                <Box sx={{ float: "right" }}>
                    {(imageId === null) ? (
                        <Box>
                            <AccountCircleIcon sx={{ width: "100px", height: "100px" }} />
                            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                                <Link to="/memberInfo">
                                    <LinkButton content="내 상세정보" fontSize="11px"></LinkButton>
                                </Link>
                            </Box>
                        </Box>
                    ) : (
                        <Box>
                            <img src={base_image} alt="profile" width="100px" height="100px" style={{ objectFit: "cover", borderRadius: "70%" }} />
                            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                                <Link to="/memberInfo">
                                    <LinkButton content="내 상세정보" fontSize="11px"></LinkButton>
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
