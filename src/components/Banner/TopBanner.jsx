import Image from 'next/image';
import './styles.css';
import img1 from '../../../public/landing-R.png';
import img2 from '../../../public/landing-O.png';
import img3 from '../../../public/landing-A.png';
import img4 from '../../../public/landing-M.png';
import img5 from '../../../public/landing-slider-img-1.png';

const TopBanner = () => {
  return (
    <div>
      <div className="border-2 border-red-600 max-w-[600px] mx-auto justify-center flex">
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

          <div className="absolute lg:top-24 lg:left-64 md:top-24 md:left-0">
            <div className="w-[600px] h-[800px]">
              <Image className="scale-in-center" src={img5} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
