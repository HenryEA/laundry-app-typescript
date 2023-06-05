import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  number: string;
  tip: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const LaundryTip = ({ number, tip, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mx-2 mt-5 flex items-center justify-around rounded-md px-5 py-6 text-center"
    >
      <div>
        <div className=" border-primary-500 bg-primary-300 ml-2 rounded-full border-4 border-solid px-6 py-4 font-bold text-white">
          {number}
        </div>
      </div>
      <div>
        <div className="border-primary-500  my-3 rounded-[50px] border-2 px-3 lg:px-6">
          <p className="py-2">{tip}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LaundryTip;
