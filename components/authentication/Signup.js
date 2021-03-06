import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../store/actions/authActions";

import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "../../styles";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    // console.log("Signup", user);
    await dispatch(signup(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="#fff"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="#fff"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#fff"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="#fff"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Alredy a user? Tap here to signin!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
