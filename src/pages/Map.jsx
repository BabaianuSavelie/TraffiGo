export default function Game() {
    return (
    <div className="sketchfab-embed-wrapper overflow-hidden"> 
        <iframe 
        className=" overflow-hidden"
        width={screen.width}
        height={screen.height}
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          src="https://sketchfab.com/models/e87fa1e143f84348a915b7fe1376d957/embed"> 
        </iframe> 
        
        </div>

    );
  }
  