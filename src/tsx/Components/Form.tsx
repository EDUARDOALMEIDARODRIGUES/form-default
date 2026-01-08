
import fomt from"../../docs/texto.json";
import "../../css/index.css";

const camp_1 = fomt.camp_1;
const comp_2 = fomt.camp_2;

export default function Forms() {
  return (
    <>
      <form className="Login font-monospace">
          <legend>Login</legend>
          <div className="mb-3 bg-blue-100 p-3 rounded-1 grid grid-cols-1 gap-1">
            <label className="form-label">{camp_1}</label>
            <input
              type="text"
              name="nome"
              id="IdNome"
              className=" imp"
            />
          </div>
          <div className="mb-3 bg-blue-100 p-3 rounded-1 grid grid-cols-1 gap-1">
            <label className="form-label">{comp_2}</label>
            <input
              type="text"
              name="nome"
              id="IdNome"
              className=" imp"
            />
          </div>
          <button type="submit" className=" butt btn-secondary btn" onClick={"/front-end/src/pages/home.html"}>enviar</button>
      </form>
    </>
  );
}
