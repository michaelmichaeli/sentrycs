import starsBg from '../../assets/starts_bg.svg';
import shootingStar from '../../assets/shooting_star.svg';
import tvRadio from '../../assets/tv_radio.png';

const BackgroundDecorations = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {/* Stars background */}
      <div className="absolute inset-0 w-full h-full mix-blend-multiply">
        <img
          src={starsBg}
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Shooting stars */}
      <img
        src={shootingStar}
        alt=""
        className="absolute top-20 right-[10%] rotate-180"
      />
      <img
        src={shootingStar}
        alt=""
        className="absolute top-[40%] left-[5%]"
      />
      
      {/* TV Radio decoration */}
      <img
        src={tvRadio}
        alt=""
        className="absolute bottom-[10%] right-[5%] rotate-12"
      />
    </div>
  );
};

export default BackgroundDecorations; 