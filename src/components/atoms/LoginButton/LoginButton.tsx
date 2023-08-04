import GoogleIcon from "@mui/icons-material/Google"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

import LoginButtonProps from "../../../types/LoginButtonProps"

import styles from "./LoginButton.module.css"

const LoginButton = (props: LoginButtonProps) => {
    const { handleClick, disabled } = props
    return (
        <Button
            variant="outlined"
            onClick={handleClick}
            color="primary"
            className={styles.LoginButtonProps}
            disabled={disabled}
        >
            <GoogleIcon fontSize="medium" />
            <Typography variant="body1" noWrap>
                Sign in with Google
            </Typography>
        </Button>
    )
}

export default LoginButton
