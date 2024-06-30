import { Text, Box, Octicon, Link, Flash, IconButton, FormControl, TextInput, Button } from "@primer/react";
import { MarkGithubIcon, XIcon } from "@primer/octicons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@context/useAuth";

interface SetErrorMessageFunction {
  (message: string): void;
}

interface SetShowFlashFunction {
  (show: boolean): void;
}

interface FlashMessageProps {
  showFlash: boolean;
  message: string;
  setShowFlash: SetShowFlashFunction;
}

interface FormBoxProps {
  setErrorMessage: SetErrorMessageFunction;
  setShowFlash: SetShowFlashFunction;
}

const Header: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" pt={32} pb={24}>
    <Link href="#" muted>
      <Octicon icon={MarkGithubIcon} size={50} color="black" />
    </Link>
  </Box>
);

const Title: React.FC = () => (
  <Text as="h1" fontSize={4} fontWeight="light" textAlign="center" mt={0}>
    Sign in to GitHub
  </Text>
);

const FlashError: React.FC<FlashMessageProps> = ({ showFlash, message, setShowFlash }) => {
  const handleClose = () => {
    setShowFlash(false);
  };

  return (
    <Flash
      variant="danger"
      sx={{
        display: showFlash ? "flex" : "none",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box fontSize={1}>{message}</Box>
      <IconButton variant="invisible" size="small" icon={XIcon} aria-label="Dismiss" onClick={handleClose} />
    </Flash>
  );
};

const FormBox: React.FC<FormBoxProps> = ({ setErrorMessage, setShowFlash }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const dummyValidate = (username: string, password: string) => {
    if (username === "test" && password === "test") {
      setErrorMessage("");
      setShowFlash(false);
      login();
      navigate("/");
      return true;
    }
    throw new Error("Incorrect username or password. ");
  };

  const handleSubmit = async () => {
    try {
      dummyValidate(username, password);
    } catch (error: unknown) {
      setErrorMessage((error as Error).message);
      setShowFlash(true);
    }
  };

  return (
    <Box
      sx={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "border.default",
        borderRadius: 2,
        backgroundColor: "canvas.subtle",
        p: 3,
        mt: 16,
        width: "288px",
      }}
    >
      <FormControl>
        <FormControl.Label sx={{ fontWeight: "normal", mb: 1 }}>Username or email address</FormControl.Label>
        <TextInput block type="text" value={username} onChange={handleUsernameChange} />
      </FormControl>
      <FormControl sx={{ margin: "16px 0" }}>
        <FormControl.Label sx={{ fontWeight: "normal", mb: 1 }}>Password</FormControl.Label>
        <TextInput block type="password" value={password} onChange={handlePasswordChange} />
      </FormControl>
      <Button variant="primary" type="submit" block onClick={handleSubmit}>
        Sign in
      </Button>
    </Box>
  );
};

const Callout: React.FC = () => (
  <Box
    sx={{
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "border.default",
      borderRadius: 2,
      backgroundColor: "canvas.white",
      p: 3,
      textAlign: "center",
      mt: 3,
    }}
  >
    <Text as="p" fontSize={1} m={0} pb={1}>
      <Link href="/">Sign in with a passkey</Link>
    </Text>
    <Text as="p" fontSize={1} m={0} p={0}>
      New to GitHub? <Link href="/">Create an account</Link>
    </Text>
  </Box>
);

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showFlash, setShowFlash] = useState(false);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box width="288px">
          <Title />
          <FlashError showFlash={showFlash} message={errorMessage} setShowFlash={setShowFlash} />
          <FormBox setErrorMessage={setErrorMessage} setShowFlash={setShowFlash} />
          <Callout />
        </Box>
      </Box>
    </>
  );
};

export default Login;
