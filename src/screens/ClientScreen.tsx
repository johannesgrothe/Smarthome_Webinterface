import {StyleSheet} from 'react-native'

import {RootTabScreenProps} from "../types";
import {Text, View} from "../components/Themed";
import ClientInfoContainer from "../components/containers/ClientInfoContainer";
import {useGetDataQuery} from "../services/getDataSlice";

function extractData(data: object) {
  let clients_arr: Array<any> = []
  data.clients.map((c_data, index) => {
    clients_arr[index] = c_data
  })
  return clients_arr
}

export default function ClientScreen({navigation}: RootTabScreenProps<'Client'>) {

  const {data: client_info, isLoading, isSuccess, isError, error} = useGetDataQuery('/info/clients')

  let content

  if (isLoading) {
    content = [<Text>Loading...</Text>]
  } else if (isSuccess) {
    content = extractData(client_info)
  } else if (isError) {
    content = [<Text>{error.toString()}</Text>]
  }
  return (
    <View style={styles.container}>
      {
        content.map((data, index) => {
          return (<ClientInfoContainer data={data} key={index}/>)
        })
      }
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