import React, {useState,useRef, useEffect} from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED
} from "./actions";
import { connect } from "react-redux";
import { withNativeBaseContainer } from "../../../hoc/withNativeBaseContainer";
import { StyledButton } from "../../../components/StyledButton";
import { StyledFormInput } from "../../../components/StyledFormInput";
import { StyledText } from "../../../components/StyledText";
import { StyledForm } from "../../../components/StyledForm";
import { Text, View, Container, Content } from "native-base";
import LottieView from "lottie-react-native";

const LogInComponent = ({
  onRequestSignIn,
  navigation
}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let getToken = async () => {
    let token = await AsyncStorage.getItem('TOKEN_KEY');
    if (token) {
      console.log(token)
      navigation.navigate('Main');
    }
  } 
  getToken();
  const canRequestSignIn = () => {
    return email.trim().length > 0 && password.trim().length > 0
  };
  return (
    <Container>
      <Content padder>
        <StyledForm style={styles.signInForm}>
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
        </StyledForm>
        <StyledText
          style={styles.forgotPassword}
          onPress={e => navigation.navigate("ForgotPassword")}
        >
          Forgot password?
        </StyledText>
        <StyledButton
          block
          disabled={!canRequestSignIn}
          onPress={() => onRequestSignIn(email, password)}
          style={styles.signInButton}
        >
          <StyledText>Log In</StyledText>
        </StyledButton>
        <StyledText
          style={styles.dontHaveAccount}
          onPress={e => navigation.navigate("Register")}
        >
          I don't have an account
        </StyledText>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestSignIn: (email, password) => {
      dispatch({type: SIGN_IN_REQUEST, payload: { email, password }})
    }
  }
}

export default Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(withNativeBaseContainer(LogInComponent));
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
  signInForm: {
    marginBottom: 20
  },
  forgotPassword: {
    textAlign: "right",
    color: "#b7b7b7",
    fontSize: 16,
    marginBottom: 10
  },
  signInButton: {
    marginBottom: 40
  },
  dontHaveAccount: {
    textAlign: "center",
    color: "#00B2E2"
  }
});
