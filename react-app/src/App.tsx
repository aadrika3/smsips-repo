import ListGroup from './components/ListGroup';

function App() {
  let items = ['HomePage', 'AboutUs', 'Admissions', 'Programs', 'ContactUs'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Shri Maa Sharda International Public School"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

/* import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert ="Hello World" />
    </div>
  );
} */

// export default App;
