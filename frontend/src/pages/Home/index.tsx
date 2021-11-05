import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">
            Analise o desempenho das vendas por diferentes perspectivas
          </p>
          <hr />
          <p>
            Esta aplicação exibe um Dashboard baseado nas informações de vendas
            obtidas via back end em Spring Boot.
          </p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
              Acessar Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
