import TodoApp from "./components/HookForm/TodoApp";
import BMICalculator from "./components/HookV2/Bmi";
import RegistrationForm from "./components/HookV2/RegistrationForm";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
        <RegistrationForm />
        <BMICalculator />
        <TodoApp />
      </Layout>
    </>
  );
}

export default App;
