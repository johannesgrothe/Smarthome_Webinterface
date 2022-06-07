import { StyleSheet } from 'react-native'

import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import GadgetInfoContainer from "../components/containers/GadgetInfoContainer";
import { useGetDataQuery } from "../services/getDataSlice";
// import { userManager } from "../../App";


export default function GadgetScreen({navigation}: RootTabScreenProps<'Gadget'>) {

  const query_args = {
    path: '/info/gadgets',
    headers: {
      // Authorization: 'Basic ' + Buffer.from(userManager.getMainUser().username + ':' + userManager.getMainUser().password, 'utf-8').toString('base64')
    }
  }

  const {data: gadget_info, isLoading, isSuccess, isError, error} = useGetDataQuery('/info/gadgets')

  let content

  if (isLoading) {
    content = [ <Text>Loading...</Text> ]
  } else if (isSuccess) {
    content = gadget_info.gadgets.map((gadget_data: { id: any; }) => <GadgetInfoContainer data={gadget_data} key={gadget_data.id}/>);
  } else if (isError) {
    content = [ <Text>{error.toString()}</Text> ]
  }

  return (
    <View style={styles.container}>
      {content}
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