import map from '../assets/map_sign.png';

export default function Map() {
  return (
    <div>
        <div
        className="absolute object-cover bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${map})` }}
        >
        </div>
        <button className="relative game-btn">Test Level</button>
    </div>
  );
}
