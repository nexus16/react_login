import React, {useState,useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { connect } from "react-redux";
import { Text, View, Container, Content } from "native-base";

import {
  SIGN_UP_REQUEST,
} from "./actions";
import { withNativeBaseContainer } from "../../../hoc/withNativeBaseContainer";
import { StyledButton } from "../../../components/StyledButton";
import { StyledFormInput } from "../../../components/StyledFormInput";
import { StyledText } from "../../../components/StyledText";
import { StyledForm } from "../../../components/StyledForm";

const RegisterComponent = ({
  error,
  onRequestSignUp,
  navigation
}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const canRequestSignUp = ()=>{
    return email.trim().length > 0 &&
            password.trim().length > 0 &&
            password === confirmPassword
  }
  return (
    <Container>
      <Content padder>
        <StyledForm style={styles.signUpForm}>
          <StyledFormInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            clearButtonMode="while-editing"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <StyledFormInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            clearButtonMode="while-editing"
          />

          <StyledFormInput
            label="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            clearButtonMode="while-editing"
          />
        </StyledForm>
        <StyledButton
          block
          disabled={!canRequestSignUp}
          onPress={() => onRequestSignUp(email, password)}
          style={styles.signUpButton}
        >
          <StyledText>Sign Up</StyledText>
        </StyledButton>

        {!error ? <React.Fragment /> : <StyledText>{error}</StyledText>}

        <StyledText
          style={styles.alreadyHaveAnAccount}
          onPress={e => navigation.navigate("Login")}
        >
          I already have an account
        </StyledText>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  animation: {
    width: "90%",
    marginBottom: 40
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#232323",
    marginBottom: 10
  },
  headerDescription: {
    fontSize: 20,
    color: "#bcbcbc",
    textAlign: "center"
  },
  signUpForm: {
    marginBottom: 20
  },
  signUpButton: {
    marginBottom: 40
  },
  alreadyHaveAnAccount: {
    textAlign: "center",
    color: "#00B2E2"
  }
});

const mapStateToProps = state => {
  return {
    error: state.register.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestSignUp: (email, password) =>
      dispatch({ type: SIGN_UP_REQUEST, payload: { email, password } }),
  };
};

export default Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(withNativeBaseContainer(RegisterComponent));
