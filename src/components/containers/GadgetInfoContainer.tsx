import {useEffect, useState} from "react";
import ApiRequests, {getAPIAddress} from "../../hooks/ApiRequests";
import {Text, View} from "../Themed";
import {Button, Pressable, StyleSheet} from "react-native";
import {OnOffButtons} from "../Buttons/common/CommonsButtons";

function handleOnOff() {

}

function expandClientContainer() {

}

export default function GadgetInfoContainer(info: any) {
  let gadget_info: Array<any> = info.data


  return(
    <Pressable
      onPress={() => {

      }}
      style={({ pressed }) => [{
        backgroundColor: pressed
        ? 'rgb(210, 230, 255)'
          : 'white'
      },
      styles.wrapperCustom
      ]}>
      <View style={styles.container}>
        <Text>
          id: {gadget_info.id}<br/>
          type: {gadget_info.type}<br/>
        </Text>
        <Text>
          to see characteristics press the icon or smth
        </Text>
        <Button title="OffSwitch" onPress={handleOnOff}/>
      </View>
    </Pressable>
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
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
})