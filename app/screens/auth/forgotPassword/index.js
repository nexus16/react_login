import React, {useState,useRef, useEffect} from 'react';
import { connect } from "react-redux";
import { StyleSheet } from "react-native";

import {
  FORGOT_PASSWORD_REQUEST
} from "./actions";
import { withNativeBaseContainer } from "../../../hoc/withNativeBaseContainer";
import { StyledButton } from "../../../components/StyledButton";
import { StyledFormInput } from "../../../components/StyledFormInput";
import { StyledText } from "../../../components/StyledText";
import { StyledForm } from "../../../components/StyledForm";

const ForgotPasswordComponent = ({
  onRequestForgotPassword,
  error,
  success,
  navigation
}) => {
  const [email, setEmail] = useState();
  const canRequestForgotPassword = () => email.trim().length > 0;
  return (
    <React.Fragment>
      <StyledForm style={styles.forgotPasswordForm}>
        <StyledFormInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          clearButtonMode="while-editing"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </StyledForm>
      <StyledButton
        block
        disabled={!canRequestForgotPassword}
        onPress={() => onRequestForgotPassword(email)}
        style={styles.forgotPasswordButton}
      >
        <StyledText>Send recovery link</StyledText>
      </StyledButton>

      {!error ? <React.Fragment /> : <StyledText>{error}</StyledText>}

      {!success ? <React.Fragment /> : <StyledText>{success}</StyledText>}

      <StyledText onPress={e => navigation.navigate("Login")}>
        Nevermind, I can Log in
      </StyledText>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  forgotPasswordForm: {
    marginBottom: 20
  },
  forgotPasswordButton: {
    marginBottom: 40
  }
});

const mapStateToProps = state => {
  return {
    error: state.forgotPassword.error,
    success: state.forgotPassword.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestForgotPassword: email =>
      dispatch({ type: FORGOT_PASSWORD_REQUEST, payload: { email } })
  };
};

export default ForgotPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(withNativeBaseContainer(ForgotPasswordComponent));
