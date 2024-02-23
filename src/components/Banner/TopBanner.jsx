import Image from 'next/image';
import './styles.css';
import img1 from '../../../public/landing-R.png';
import img2 from '../../../public/landing-O.png';
import img3 from '../../../public/landing-A.png';
import img4 from '../../../public/landing-M.png';
import img5 from '../../../public/landing-slider-img-1.png';
import img6 from '../../../public/landing-slider-img-3.png';

const TopBanner = () => {
  return (
    <div>
      <div className=" lg:max-w-[600px] md:max-w-[600px] max-w-[400px] mx-auto justify-center flex">
        <div className="relative pt-20 pb-96">
          <div className="flex justify-center">
            <div>
              <Image className=" roll-in-left" src={img1} alt=""></Image>
            </div>
            <div>
              <Image className=" roll-in-right" src={img2} alt=""></Image>
            </div>
          </div>
          <div className="flex justify-center pr-8">
            <div>
              <Image className=" roll-in-left" src={img3} alt=""></Image>
            </div>
            <div>
              <Image className=" roll-in-right" src={img4} alt=""></Image>
            </div>
          </div>

          <div className="absolute lg:top-22 lg:left-[-100px] md:top-24 md:left-[-98px] top-[110px] left-[-76px]">
            <div className="lg:w-[900px] lg:h-[800px] md:w-[900px] md:h-[800px] w-[500px] h-[500px]">
              <Image className="scale-in-center" src={img5} alt=""></Image>
            </div>
          </div>

           <div className="absolute lg:top-[600px] lg:left-[-52px] md:top-[600px] md:left-[-80px] top-[110px] left-[31px]">
            <div className="lg:w-[700px] lg:h-[800px] md:w-[700px] md:h-[700px] w-[300px] h-[300px]">
              <Image className="scale-in-center" src={img6} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
