import { StyleSheet } from "react-native";

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import { connect, ConnectedProps } from 'react-redux'

// interface StateProps {
//   isOn: boolean
// }
//
// type DispatchProps = typeof mapDispatch
//
// interface OwnProps {
//   backgroundColor: string
// }
//
// type Props = StateProps & DispatchProps & OwnProps
//
// const mapState = (state: RootState) => ({
//   isOn: state.isOn,
// })
//
// const mapDispatch = {
//   toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
// }


interface RootState {
  isOn: boolean
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  backgroundColor: string
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

export default connector(SomeContainer)


export function SomeContainer({ path }: { path: string }) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
            >
                some random container
            </Text>
          <View>
            <MyComponent isOn={false} toggleOn={mapDispatch.toggleOn} backgroundColor={'blue'}/>
          </View>
        </View>
    )
}


// export default connect<StateProps, DispatchProps, OwnProps>(
//   mapState,
//   mapDispatch
// )(SomeContainer)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },
    title: {
      fontSize: 28,
    },
})