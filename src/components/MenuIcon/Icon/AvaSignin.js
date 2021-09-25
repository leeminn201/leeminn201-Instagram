import "./AvaSignin.scss";
import LM from "../../../Media/LM.png";
function AvaSignin() {
  return (
    <div className="avasignin">
      <ul>
        <li className="sig">
          <button>
            <img src={LM} alt="ava"></img>
            <span>Minh</span>
          </button>
          <ul className="submenu">
            <li>
              <button>Your profile</button>
            </li>
            <li>
              <button>Sign out</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AvaSignin;
