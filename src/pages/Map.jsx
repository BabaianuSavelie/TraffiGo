import map from "../assets/map_sign.png";
import { useNavigate } from 'react-router-dom';

export default function Map() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/game');
  };
  return (
    <div>
      <div
        className="absolute object-cover bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${map})` }}
      ></div>
      <button className="relative game-btn" onClick={handleClick}></button>
    </div>
  );
}