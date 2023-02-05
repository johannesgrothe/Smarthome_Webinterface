export const getAPIAddress = () => {
  const API_IP: string = window.location.host.split(":")[0];
  return `http://${API_IP}:${process.env.REACT_APP_API_PORT}/`;
};
