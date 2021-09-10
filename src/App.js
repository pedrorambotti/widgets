import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "Donde te gusta surfear?",
    content: "En las playas del sur de mi ciudad",
  },
  {
    title: "Que tipo de  tablas usas",
    content: " Dependiendo del swell , desde 5 11 a 6 2",
  },
  {
    title: "Preferis invierno o verano?",
    content: "En invierno hay muy buenas olas , pero sin duda el verano ",
  },
];
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
