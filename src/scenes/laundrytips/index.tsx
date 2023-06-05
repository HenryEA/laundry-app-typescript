import HText from '../../shared/HText';
import { SelectedPage, LaundryTipsType } from '../../shared/types';
import { motion } from 'framer-motion';
import LaundryTip from './LaundryTip';

const laundrytips: Array<LaundryTipsType> = [
  {
    number: '1',
    tip: 'Occasionally use a fan to circulate air through your closet; it will keep your clothes from becoming dusty.',
  },
  {
    number: '2',
    tip: 'Always let your clothes air dry when possible because hot temperatures from artificial dryers can make your clothes wear faster and are thought to increase shedding of microfibres.',
  },
  {
    number: '3',
    tip: 'Always turn clothes inside out before washing, especially if they have graphics and logos printed on them. Turning them inside out will help to prevent them from fading.',
  },
  {
    number: '4',
    tip: 'As an alternative to bleaching, you can brighten whites by adding 1 cup of white vinegar oxygen booster lemon juice to the wash. ',
  },
  {
    number: '5',
    tip: ' Wash new clothes before wearing them to remove the pre-treated anti mold/antibacterial chemicals that were added during manufacturing.',
  },
  {
    number: '6',
    tip: 'Freeze jeans once a month to kill odor causing bacteria. You can also use Baking Soda or Scent Boosters to Deodorize Smelly Clothes.',
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

const LaundryTips = ({ setSelectedPage }: Props) => {
  return (
    <section id="laundrytips" className="bg-primary-100 w-full py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.LaundryTips)}
      >
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>LAUNDRY TIPS</HText>
        </motion.div>

        {/* TIPS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" mt-5 items-center justify-between gap-8 md:grid md:grid-cols-2"
        >
          {laundrytips.map((laundrytip: LaundryTipsType) => (
            <LaundryTip
              key={laundrytip.number}
              number={laundrytip.number}
              tip={laundrytip.tip}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LaundryTips;
