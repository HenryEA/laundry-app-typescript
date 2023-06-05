import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';
import { SelectedPage } from '../../shared/types';
import NameAndTagline from '../../assets/NameAndTagline.png';
import DryCleaner from '../../assets/DryCleaner.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="gap-16 bg-blue-50 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER  */}
      <motion.div
        className="md: mx-auto h-5/6 w-5/6 items-center justify-center md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="md:before:content-cleanifytext before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                <img
                  alt="home-page-text"
                  src={NameAndTagline}
                  className="max-w-xs"
                />
              </div>
            </div>
            <p className="mt-8 text-sm sm:w-3/5 sm:text-start">
              Laundry as it's finest. Experience the new level of cleaning by
              trusting us. Attend to your personal work and give your laundry to
              us now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us Now
            </ActionButton>
            <AnchorLink
              className="text-primary-500 hover:text-secondary-400 text-sm font-bold underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="mx-auto flex max-w-xs basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:max-w-sm md:justify-items-end ">
          <img alt="homepageGraphic" src={DryCleaner} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
