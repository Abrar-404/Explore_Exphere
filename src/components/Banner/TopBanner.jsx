import Image from 'next/image';
import img1 from '../../../public/landing-R.png';
import img2 from '../../../public/landing-O.png';
import img3 from '../../../public/landing-A.png';
import img4 from '../../../public/landing-M.png';
import img5 from '../../../public/landing-slider-img-1.png';

const TopBanner = () => {
  return (
    <div>
      <div className="relative pt-20 pb-96">
        <div className="flex justify-center">
          <div>
            <Image src={img1} alt=""></Image>
          </div>
          <div>
            <Image src={img2} alt=""></Image>
          </div>
        </div>
        <div className="flex justify-center pr-8">
          <div>
            <Image src={img3} alt=""></Image>
          </div>
          <div>
            <Image src={img4} alt=""></Image>
          </div>
        </div>

        <div className="absolute top-24 left-64">
          <div>
            <Image src={img5} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
