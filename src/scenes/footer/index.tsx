import LOGOB from '@/assets/LOGOB.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={LOGOB} className="max-w-[150px]" />
          <p className="my-5">The best way to do laundry.</p>
          <p>©2021 CLEANIFY All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Off Samuel Gagun Close, Lekki Phase 1, Lekki-Lagos
          </p>
          <p>+2348123456789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
