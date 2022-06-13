import { Button, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import { TextInput } from "react-native";
import { useState } from "react";
import { useLogInQuery } from "../services/getDataSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../services/authSlice";
import { BuildQueryArgs } from "../utils/buildQueryArgs";

export default function LogInScreen(props: any): JSX.Element {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ show, setShow ] = useState(false)
  const [ skip, setSkip ] = useState(true)

  const {isSuccess, isError, error} = useLogInQuery(BuildQueryArgs('info/bridge'), {skip});

  const handleClick = () => {
    let isAuthorized: boolean = false;
    if (!(username == '' || username == null) && !(password == '' || password == null)) {
      dispatch(setCredentials({username, password, isAuthorized}))
      setSkip(!skip)
      setTimeout(() =>{
        console.log(skip)
        if (isSuccess) {
          console.log("credentials are valid");
          isAuthorized = isSuccess;
          dispatch(setCredentials({username, password, isAuthorized}));
          props.setIsAuthorized(isAuthorized);
        }
        if (isError) {
          console.log("error ocurred: ", error);
        }
      }, 1000);
    } else {
      alert("please provide credentials")
    }
  }

  const handleShow = () => setShow(!show)

  return (
    <SafeAreaProvider>
      <View style={styles.container_col}>
        <View style={styles.container_row}>
          <View style={styles.container_col}>
            <TextInput
              style={styles.input}
              placeholder={'username'}
              onChangeText={setUsername}
            />
            <View style={styles.container_row}>
              <TextInput
                style={styles.input}
                placeholder={'password'}
                onChangeText={setPassword}
                secureTextEntry={!show}
              />
              <Button title={'show'} onPress={handleShow}/>
            </View>
            <Button title={skip ? 'log In' : 'logging in...'} onPress={handleClick}/>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FFFFFF',
  },
  container_col: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  container_row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleButton: {
    height: 40,
    width: 20,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    color: '#173d12'
  }
});