import "bootstrap/dist/css/bootstrap.min.css";

export default function Cabecalho() {
  return (
    <nav className="navbar bg-info">
      <div className="container">
        <h2 className="navbar-brand">
          <img src="globo.png" alt="Bootstrap" width="40" height="40" />
          &nbsp;My Trip Planner
        </h2>
      </div>
    </nav>
  );
}
