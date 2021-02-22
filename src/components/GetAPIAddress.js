export const getAPIAddress = (path) => {
    const API_IP = window.location.host.split(':')[0]
    return `http://${API_IP}:4999/${path}`
}
