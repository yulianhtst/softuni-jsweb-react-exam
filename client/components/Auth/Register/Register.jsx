import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { register } from "../../../services/auth-service.js"

export default function Register({ open, handleClose }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repass, setRepass] = useState('')


    const [isEmailWrong, setIsEmailWrong] = useState(false)
    const [isPasswordWrong, setIsPasswordWrong] = useState(false)
    const [isRepassWrong, setIsRepassWrong] = useState(false)

    const checkEmail = function () {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
            setIsEmailWrong(true);
        } else {
            setIsEmailWrong(false);
        }
    };

    const checkPassword = function () {
        if (password.length < 6) {
            setIsPasswordWrong(true);
        } else {
            setIsPasswordWrong(false);
        }
    };
    const checkRepass = function () {
        if (repass !== password || repass.length < 6) {
            setIsRepassWrong(true);
        } else {
            setIsRepassWrong(false);
        }
    };


    const handleSend = async function () {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordValid = password.length >= 6;
        const repassValid = password === repass && repass.length >= 6;

        setIsEmailWrong(!emailValid);
        setIsPasswordWrong(!passwordValid);
        setIsRepassWrong(!repassValid);

        if (!emailValid || !passwordValid || !repassValid) return;


        handleClose();


    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box>
                <Box sx={style}>
                    <Button onClick={handleClose}>
                        <Typography sx={{ ml: "auto" }}>X</Typography>
                    </Button>

                    <TextField
                        sx={{ mt: 2 }}
                        error={isEmailWrong}
                        onBlur={checkEmail}
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={isEmailWrong ? "Enter a valid email" : ""}
                        fullWidth
                    />

                    <TextField
                        sx={{ mt: 2 }}
                        error={isPasswordWrong}
                        onBlur={checkPassword}
                        label="password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={isPasswordWrong ? "Password must be at least 6 characters" : ""}
                        type="password"
                        fullWidth
                    />

                    <TextField
                        sx={{ mt: 2 }}
                        error={isRepassWrong}
                        onBlur={checkRepass}
                        label="Re-Password"
                        variant="outlined"
                        onChange={(e) => setRepass(e.target.value)}
                        helperText={isRepassWrong ? "Passwords do not match or are too short" : ""}
                        type="password"
                        fullWidth
                    />

                    <Button sx={{ mt: 2 }} onClick={handleSend}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};