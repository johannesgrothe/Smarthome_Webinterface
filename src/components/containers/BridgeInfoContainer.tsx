import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../constants/Colors';
import {MonoText} from '../StyledText';
import {Text, View} from '../Themed';
import {getAPIAddress, useAppDispatch} from "../../hooks/ApiRequests";
import ApiRequests from "../../hooks/ApiRequests";
import {useEffect, useState} from "react";
import {fetchBridgeData} from "../../services/InfoReducer";
import { useGetInfoQuery } from "../../services/infoSlice";

export default function BridgeInfoContainer() {
  const dispatch = useAppDispatch()
  const [info, setInfo] = useState<any>([])
  let url: string = getAPIAddress('info/bridge')
  let req = new ApiRequests()
  useEffect(() => {
    req.getInfo(url).then(r => {
      setInfo(r)
    })
  }, [])
  const { data: bridge_info, isLoading, isSuccess, isError, error } = useGetInfoQuery("bridge")
  let res = dispatch(fetchBridgeData())
  console.log(`res: ${res}`)
  console.log("data: ", info)

  let content

  if (isLoading) {
    content = <Text>Loading...</Text>
  } else if (isSuccess) {
    console.log("bridge_info: ", bridge_info)
  } else if (isError) {
    content = <Text>{error.toString()}</Text>
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>
          {content}
        </Text>
      </View>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        bridge name: {info.bridge_name}
      </Text>
      {/*<Text*/}
      {/*    style={styles.text}*/}
      {/*    lightColor="rgba(0,0,0,0.8)"*/}
      {/*    darkColor="rgba(255,255,255,0.8)"*/}
      {/*>*/}
      {/*    client count: {info.client_count}*/}
      {/*</Text>*/}
      {/*<Text*/}
      {/*    style={styles.text}*/}
      {/*    lightColor="rgba(0,0,0,0.8)"*/}
      {/*    darkColor="rgba(255,255,255,0.8)"*/}
      {/*>*/}
      {/*    connector_count: {info.connector_count}*/}
      {/*</Text>*/}
      {/*<Text*/}
      {/*    style={styles.text}*/}
      {/*    lightColor="rgba(0,0,0,0.8)"*/}
      {/*    darkColor="rgba(255,255,255,0.8)"*/}
      {/*>*/}
      {/*    gadget_count: {info.gadget_count}*/}
      {/*</Text>*/}
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        git_version: {info.git_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        pipenv_version: {info.pipenv_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        platformio_version: {info.platformio_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        python_version: {info.python_version}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        running_since: {info.running_since}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        software_branch: {info.software_branch}
      </Text>
      <Text
        style={styles.text}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        software_commit: {info.software_commit}
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
