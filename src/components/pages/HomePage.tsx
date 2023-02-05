import { StyleSheet } from "../navigation/Navigation";
import { FC } from "react";
import Card from "@mui/material/Card/Card";
import { Title } from "react-admin";
import { CardContent } from "@mui/material";

export const HomePage: FC = () => {
  return (
    <Card>
      <CardContent>Fill with something useful</CardContent>
    </Card>
  );
}

const styles: StyleSheet = {
  col: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
};
