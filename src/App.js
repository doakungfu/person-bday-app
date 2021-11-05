import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArr = [
  {
    firstName: "David",
    lastName: "Allen",
    age: 36,
    hairColor: "brown",
  },
  {
    firstName: "Tania",
    lastName: "Leon",
    age: 36,
    hairColor: "brown",
  },
  {
    firstName: "Kate",
    lastName: "Wotring",
    age: 40,
    hairColor: "auburn",
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 70,
    hairColor: "grey",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;