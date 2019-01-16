function validate(username, password, dUser, dPass) {
  // Dev note: enhanced security measures!
  // The users password in our database is always prefixed with "pass_" for security
  if (username === dUser && password === "pass_" + dPass) {
    handleLogin(username, password);
  } else {
    failure();
  }
}

