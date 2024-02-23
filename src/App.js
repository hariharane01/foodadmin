import "./App.css";
import NavigationBar from "./Components/Navigation/NavigationBar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Components/SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import routes from "./route";

function App() {
  return (
    <div>
      <NavigationBar />
      <Grid
        h="calc(100vh - 60px)"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <Sidebar />

        <GridItem colSpan={4} bg="grey.500" >

        <Routes>
          {routes.length > 0
            ? routes.map((r, i) => (
                <Route key={i} path={r.path} element={<r.component />} />
              ))
            : null}
        </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
