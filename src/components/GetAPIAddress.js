export const getAPIAddress = (path) => {
    const API_IP = window.location.host.split(':')[0]
    // return `http://localhost:3000/${path}`
    return `http://${API_IP}:4990/${path}`
}
