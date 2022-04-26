import { StyleSheet } from 'react-native'

import { RootTabScreenProps } from "../types";
import { View } from "../components/Themed";
import BridgeInfoContainer from "../components/containers/BridgeInfoContainer";
import SomeContainer from "../components/containers/SomeContainer";

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {

    // const { data, error, isLoading } = useGetInfoQuery('info/bridge')
    // console.log("data. ", data)

    return (
        <View style={styles.container}>
            <BridgeInfoContainer />
            {/*<SomeContainer path="/screens/SomeScreen.tsx"/>*/}
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