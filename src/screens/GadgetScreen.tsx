import { StyleSheet } from 'react-native'

import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import GadgetInfoContainer from "../components/containers/GadgetInfoContainer";
import { useGetDataQuery } from "../services/getDataSlice";


export default function GadgetScreen({navigation}: RootTabScreenProps<'Gadget'>) {

  const {data: gadget_info, isLoading, isSuccess, isError, error} = useGetDataQuery('/info/gadgets')

  let content

  if (isLoading) {
    content = [ <Text>Loading...</Text> ]
  } else if (isSuccess) {
    content = gadget_info.gadgets.map((gadget_data) => <GadgetInfoContainer data={gadget_data} key={gadget_data.id}/>)
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