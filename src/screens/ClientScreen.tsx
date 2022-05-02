import { StyleSheet } from 'react-native'

import {RootTabScreenProps} from "../types";
import { View } from "../components/Themed";
import ClientInfoContainer from "../components/containers/ClientInfoContainer";
import ApiRequests, {getAPIAddress} from "../hooks/ApiRequests";
import {useEffect, useState} from "react";

function extractData(data: object) {
    console.log(data)
    let clients_arr: Array<any> = []
    data.clients.map((c_data, index) => {
        clients_arr[index] = c_data
    })
    return clients_arr
}

export default function ClientScreen({navigation}: RootTabScreenProps<'Client'>) {
    const [client_data, setData] = useState<object>([])
    let url: string = getAPIAddress('info/clients')
    let req = new ApiRequests()
    useEffect(() =>{
        req.getInfo(url).then(r => {
            console.log(r)
            setData(extractData(r))
        })
    }, [])
    console.log("client_data: ", client_data)

    return (
        <View style={styles.container}>
            {
                client_data.map((data, index) => {
                    return(<ClientInfoContainer data={data} key={index}/>)})
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