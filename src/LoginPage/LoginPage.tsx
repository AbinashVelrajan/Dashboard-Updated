import React, { FormEventHandler, useState } from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import "./LoginPagefront.css";

function LoginPageFront() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Check email and password
    if (
      (email === "abinash@gmail.com" && password === "secret") ||
      (email === "mark@gmail.com" && password === "facebook")
    ) {
      // Store email and password in localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      // Optionally, redirect to another page after successful login
      window.location.href = "/"; // Redirect to the dashboard page after login
      console.log("Succefull");
    }
  };

  return (
    <div className="login-page-container">
      <div className="background-color-login">
        {/* This div covers the entire screen */}
        <div className="login-page container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-3">
              <Sheet
                className="login-page-container rounded-4"
                sx={{
                  py: 3,
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: "sm",
                  boxShadow: "md",
                }}
                variant="outlined"
              >
                <div>
                  <Typography level="h4" component="h1" className="text-center">
                    <b>Welcome to EMS</b>
                  </Typography>
                  {/* <Typography level="body-sm">Sign in to continue.</Typography> */}
                </div>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>
                      <span>Email</span>
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="johndoe@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Button type="submit" sx={{ mt: 1 }}>
                    Log in
                  </Button>
                </form>
                <Typography
                  endDecorator={<Link href="/sign-up">Sign up</Link>}
                  fontSize="sm"
                  sx={{ alignSelf: "center" }}
                >
                  Don&apos;t have an account?
                </Typography>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageFront;
