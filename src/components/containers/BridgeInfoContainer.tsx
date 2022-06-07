import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import { useGetDataQuery } from "../../services/getDataSlice";
import { store } from "../../store/store";

export default function BridgeInfoContainer() {

  const headerString: string = 'Basic ' + Buffer.from(store.getState().auth.username + ':' + store.getState().auth.password, 'utf-8').toString('base64')

  const queryArgs = {
    path: '/info/bridge',
    headers: {
      Authorization: headerString
    },
  }

  const {data: bridge_info, isLoading, isSuccess, isError, error} = useGetDataQuery(queryArgs)

  let content

  if (isLoading) {
    content = <Text>Loading...</Text>
  } else if (isSuccess) {
    content = bridge_info
  } else if (isError) {
    content = <Text>{error.toString()}</Text>
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        bridge name: {content.bridge_name}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        git_version: {content.git_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        pipenv_version: {content.pipenv_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        platformio_version: {content.platformio_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        python_version: {content.python_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        running_since: {content.running_since}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        software_branch: {content.software_branch}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        software_commit: {content.software_commit}
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "left"
  }

})
