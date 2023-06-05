import { SelectedPage, OurServicesType } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import OurService from './OurService';

const ourservices: Array<OurServicesType> = [
  {
    title: 'Laundry and Dry Cleaning Service',
    description:
      'Thorough washing of all kinds of garments, apparels and clothes with modern techniques and customer oriented service. Other activities involed are crisp starching, clean drying, ironing, garment packaging',
  },
  {
    title: 'Home Cleaning and Fumigation Service',
    description:
      'Cleaning of house and fumigation to prevent and kill pests and other bugs',
  },
  {
    title: 'Laundromat',
    description:
      'There are available laundry devices at ou stations for our registered users who wish to do the laundry by themselves',
  },
  {
    title: 'Pickup and Delivery Service',
    description:
      'By using our pickup and delivery service, we pick up your laundry, and return it squeaky-clean',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="min -h-full mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>OUR SERVICES</HText>
          <p className="my-5 text-sm">
            We provide top notch laundry and home cleanup services to your
            desired satisfaction. Helping our members to focus on their personal
            work while we handle their laundries and cleaning tasks.
          </p>
        </motion.div>

        {/* OUR SERVICES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" mt-5 items-center justify-between gap-8 md:grid md:grid-cols-2"
        >
          {ourservices.map((ourservice: OurServicesType) => (
            <OurService
              key={ourservice.title}
              title={ourservice.title}
              description={ourservice.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurServices;
