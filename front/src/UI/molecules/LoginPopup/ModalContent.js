import * as React from 'react';
import { Container, Box, Divider } from '@mui/material'
import LoginTextField from '../../atoms/LoginPopup/TextField';
import ModalButton from '../../atoms/LoginPopup/ModalButton';
import TitleText from '../../atoms/LoginPopup/Title';

const ModalContent = (props) => {
    const handleClose = props.handleClose;

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 2,
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TitleText title="로그인"></TitleText>
                <LoginTextField label="아이디"></LoginTextField>
                <LoginTextField label="비밀번호"></LoginTextField>
                <Divider />
                <Box>
                    소셜로그인
                </Box>
                <ModalButton value="Login" onClick={(event) => handleClose()}>Login</ModalButton>
            </Box>
        </Container>
    )
}

export default ModalContent