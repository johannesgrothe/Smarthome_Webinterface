import { StyleSheet } from 'react-native'

import {RootTabScreenProps} from "../types";
import { View } from "../components/Themed";
import ApiRequests, {getAPIAddress} from "../hooks/ApiRequests";
import {useEffect, useState} from "react";
import GadgetInfoContainer from "../components/containers/GadgetInfoContainer";

function extractData(data: object) {
  console.log("spongo: ", data)
  let clients_arr: Array<any> = []
  data.gadgets.map((c_data, index) => {
    console.log("Client_data: ", c_data)
    clients_arr[index] = c_data
  })
  return clients_arr
}

export default function GadgetScreen({navigation}: RootTabScreenProps<'Gadget'>) {
  const [gadget_data, setData] = useState<object>([])
  let url: string = getAPIAddress('info/gadgets')
  let req = new ApiRequests()
  useEffect(() =>{
    req.getInfo(url).then(r => {
      console.log(r)
      setData(extractData(r))
    })
  }, [])
  console.log("client_data: ", gadget_data)

  return (
    <View style={styles.container}>
      {
        gadget_data.map((data, index) => {
          return(<GadgetInfoContainer data={data} key={index}/>)})
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