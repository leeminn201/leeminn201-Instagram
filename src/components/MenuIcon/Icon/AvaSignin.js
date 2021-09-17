import "./AvaSignin.scss";
import LM from "../../../Media/LM.png";
import downbtn from "../../../Media/downbtn.png";
function AvaSignin() {
  return (
    <div className="avasignin">
      <img src={LM} alt="ava"></img>
      <div className="firstname">
        <button>
          <span>Minh</span>
          <div className="downbtn">
            <img src={downbtn} alt=""></img>
          </div>
          
        </button>
      </div>
    </div>
  );
}

export default AvaSignin;
