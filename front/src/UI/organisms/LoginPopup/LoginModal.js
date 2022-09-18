import { useState } from 'react';
import { Box, Modal } from '@mui/material'
import ModalContent from '../../molecules/LoginPopup/ModalContent';
import ModalButton from '../../atoms/LoginPopup/ModalButton'

const styleXs = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
};

const LoginModal = (props) => {
    // 모달 관련 변수, 함수 정의
    const [open, setOpen] = useState(false);
    async function handleOpen() {
        setOpen(true);
    }
    const handleClose = async () => setOpen(false);

    return (
        <>
            <ModalButton value="Login" handleOpen={handleOpen}></ModalButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={styleXs} style={{ fontFamily: "SUIT-Regular" }}>
                    <ModalContent handleClose={handleClose}></ModalContent>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal