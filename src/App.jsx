import Layout from "./components/layout";
import Card from "./components/Props/Card";
import CardImg from "./components/Props/CardImg";
import Greeting from "./components/Props/Greeting";
import UserCard from "./components/Props/UserCard";

function App() {
  const user = { name: "Дмитрий", age: 30 };

  return (
    <>
      <Layout>
        <Greeting name="Алиса" />
        <Greeting name="Боб" />
        <Greeting name="Чарли" />

        <UserCard user={user} />

        <Card bgColor="#3498db">Карточка с синим фоном</Card>
        <Card bgColor="#e74c3c">Карточка с красным фоном</Card>
        <Card bgColor="#2ecc71">Карточка с зеленым фоном</Card>

        <CardImg
          imageUrl="https://via.placeholder.com/300x200?text=Image+1"
          title="Карточка 1"
          description="Это описание для карточки 1."
        />
        <CardImg
          imageUrl="https://via.placeholder.com/300x200?text=Image+1"
          title="Карточка 1"
          description="Это описание для карточки 1."
        />
        <CardImg
          imageUrl="https://via.placeholder.com/300x200?text=Image+1"
          title="Карточка 1"
          description="Это описание для карточки 1."
        />
      </Layout>
    </>
  );
}

export default App;
