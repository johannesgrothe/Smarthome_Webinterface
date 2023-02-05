import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { Admin, Layout, Menu, Resource, Title, useResourceDefinitions } from "react-admin";
import { HomePage } from "./components/pages/HomePage";
import { BridgeInfoPage } from "./components/pages/BridgeInfoPage";
import LabelIcon from "@mui/icons-material/Label"
import { buildDataProvider } from "./utils/buildDataProvider";
import { getAPIAddress } from "./utils/getApiAdress";
import { Typography } from "@mui/material";

const AppBar = (props: any) => {
  return (
    <AppBar
      sx={{
        "& .RaAppBar-title": {
          flex: 1,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
      }}
      {...props}>
      <Typography
        variant="h6"
        color="inherit"
        id="react-admin-title"
      />
      <Title title="Liberty Home"/>
    </AppBar>
  )
}

const AppMenu = () => {
  const resources = useResourceDefinitions();
  return (
    <Menu >
      <Title title="Liberty Home" />
      {Object.keys(resources).map(name => <Menu.Item key={name} to={`/${name}`} primaryText={name} />)}
    </Menu>
  )
}

const AppLayout = (props: any) => {
  return (<Layout {...props} menu={AppMenu}/>);
}


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Admin dashboard={HomePage} layout={AppLayout} dataProvider={buildDataProvider(getAPIAddress())}>
      <Resource name="home" list={HomePage}/>
      <Resource name="bridge" list={BridgeInfoPage}/>
      {/*<Resource name="gadgets" />*/}
      {/*<Resource name="clients" />*/}
    </Admin>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
