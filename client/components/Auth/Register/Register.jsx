import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Register({ open, handleClose }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repass, setRepass] = useState('')


    const [isEmailWrong, setIsEmailWrong] = useState(false)
    const [isPasswordWrong, setIsPasswordWrong] = useState(false)
    const [isRepassWrong, setIsRepassWrong] = useState(false)

    const handleSend = function () {

    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box>
                <Box sx={style}>
                    <Button onClick={() => handleClose()} ><Typography sx={{ ml: 'auto' }}>X</Typography></Button>
                    <TextField sx={{ mt: 2 }} label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    <TextField sx={{ mt: 2 }} label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                    <TextField sx={{ mt: 2 }} label="Re-Password" variant="outlined" onChange={(e) => setRepass(e.target.value)} />
                    <Button sx={{ mt: 2 }} onClick={handleSend}>Submit</Button>

                </Box>
            </Box>
        </Modal>
    )
}
const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: "column",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
