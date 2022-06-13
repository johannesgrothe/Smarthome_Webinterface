import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";

export default function ClientInfoContainer(info: any) {
  let client_info: Array<any> = info.data

  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        api_version: {client_info.api_version} <br/>
        boot_mode: {client_info.boot_mode} <br/>
        created: {client_info.created} <br/>
        is_active: {client_info.is_active} <br/>
        last_connected: {client_info.last_connected} <br/>
        name: {client_info.name} <br/>
        runtime_id: {client_info.runtime_id} <br/>
        sw_branch: {client_info.sw_branch} <br/>
        sw_commit: {client_info.sw_commit} <br/>
        sw_upload: {client_info.sw_upload} <br/>
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
    lineHeight:20,
    textAlign: "left"
  }

})