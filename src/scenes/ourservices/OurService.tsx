import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const OurService = ({ title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-6 text-center"
    >
      <div className="mb-4 flex justify-center"></div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3 px-3 lg:px-6">{description}</p>
      <AnchorLink
        className="text-primary-500 hover:text-secondary-400 text-sm font-bold underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Make a Request</p>
      </AnchorLink>
    </motion.div>
  );
};

export default OurService;
