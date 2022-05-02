import { StyleSheet } from 'react-native'

import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import ClientInfoContainer from "../components/containers/ClientInfoContainer";
import { useGetDataQuery } from "../services/getDataSlice";

export default function ClientScreen({navigation}: RootTabScreenProps<'Client'>) {

  const {data: client_info, isLoading, isSuccess, isError, error} = useGetDataQuery('/info/clients')

  let content

  if (isLoading) {
    content = [<Text>Loading...</Text>]
  } else if (isSuccess) {
    content = client_info.clients.map(( client_data ) => <ClientInfoContainer data={client_data} key={client_data.name}/>)
  } else if (isError) {
    content = [<Text>{error.toString()}</Text>]
  }
  return (
    <View style={styles.container}>
      { content }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
