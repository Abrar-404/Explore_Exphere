
import Image from 'next/image';
import img1 from '../../../public/landing-R.png'
import img2 from '../../../public/landing-O.png'
import img3 from '../../../public/landing-A.png'
import img4 from '../../../public/landing-M.png'

const TopBanner = () => {
  return (
    <div>
     <div>
       <div>
      <Image src={img1} alt=''></Image>
      </div>
      <div>
      <Image src={img2} alt=''></Image>
      </div>
     </div>
    </div>
  );
};

export default TopBanner;