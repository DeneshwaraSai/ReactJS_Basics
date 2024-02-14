import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Deneshwara", "Sai", "Ila"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  const nameList = names.map((name) => <h2> {name} </h2>);
  const personList = persons.map((person) => (
    <Person person={person}> Loading ... </Person>
  ));
  //   return <div> {personList} </div>;
  return (
    <div>
      <div>{nameList}</div>
      <div>{personList}</div>
    </div>
  );
}

export default NameList;
