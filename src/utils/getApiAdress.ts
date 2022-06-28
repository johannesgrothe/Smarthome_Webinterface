export const getAPIAddress = (path: string) => {
  const API_IP: string = window.location.host.split(':')[0]

  // return `http://localhost:3000/${path}`
  return `http://${API_IP}:3000/${path}`
}