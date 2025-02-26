import logo from "../../assets/Logo_UFMG .svg";
import { Link, NavLink } from "react-router";

function Header() {
  const menuOptions = ["Página Inicial", "Calcular", "Sobre"];
  const redirectText = ["/", "/calculo", "/sobre"];

  return (
    <div className="flex flex-row justify-between items-center h-[60px] border border-black">
      <nav>
        <ul className="flex justify-between gap-16">
          {menuOptions.map((option, i) => {
            return (
              <NavLink
                to={redirectText[i]}
                className={({ isActive }) => {
                  const isActiveClass = isActive
                    ? "after:absolute after:w-full after:h-1 after:bg-[#C8102E]"
                    : "";

                  return `relative hover:cursor-pointer ${isActiveClass}`;
                }}
                end
              >
                <li>{option}</li>
              </NavLink>
            );
          })}
        </ul>
      </nav>

      <Link className="hover:cursor-pointer w-[83.9px]" to="/">
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Header;
