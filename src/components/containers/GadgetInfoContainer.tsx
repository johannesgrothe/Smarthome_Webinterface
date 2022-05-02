import { Text, View } from "../Themed";
import { Button, Pressable, StyleSheet } from "react-native";


function RenderChars(characteristics: object) {
  return (
    <View>
      <Text>
        max: {characteristics.data.max}<br/>
        min: {characteristics.data.min}<br/>
        step_value: {characteristics.data.step_value}<br/>
        steps: {characteristics.data.steps}<br/>
        type: {characteristics.data.type}<br/>
      </Text>
    </View>
  )
}

function RenderEventMap(event_map: object) {
  let event: string;
  let event_value: Array<any>;
  Object.keys(event_map.data).forEach(key => {
    event = key
    event_value = event_map.data[key]
  })

  return (
    <View>
      <Text>
        {event}: {event_value}
      </Text>
    </View>
  )
}


export default function GadgetInfoContainer(info: any) {

  let characteristic = info.data.characteristics.map((char, index) => <RenderChars data={char} key={index}/>)

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {

        }}
        style={({pressed}) => [ {
          backgroundColor: pressed
            ? 'rgb(210, 230, 255)'
            : 'white'
        },
          styles.wrapperCustom
        ]}>
        <View style={styles.container}>
          <Text>
            id: {info.data.id}<br/>
            type: {info.data.type}<br/><br/>
          </Text>
        </View>
        <View style={styles.container}>
          <Text>
            characteristics: <br/><br/>
            {characteristic} <br/><br/>
          </Text>
        </View>
        <View>
          <Text>
            event_map: <br/><br/>
            <RenderEventMap data={info.data.event_map}/>
          </Text>
        </View>
      </Pressable>
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
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
})