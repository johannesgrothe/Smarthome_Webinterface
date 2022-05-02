import { StyleSheet } from 'react-native'

import { RootTabScreenProps } from "../types";
import { View } from "../components/Themed";
import BridgeInfoContainer from "../components/containers/BridgeInfoContainer";

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {

    return (
        <View style={styles.container}>
            <BridgeInfoContainer />
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