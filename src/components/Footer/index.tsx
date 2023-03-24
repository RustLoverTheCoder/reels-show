import dayjs from "dayjs";

const Footer: React.FC = () => {
  const today = dayjs().format("YYYY");
  return (
    <footer className="prose px-4 mx-auto">
      <p>&copy; {today} YOUR NAME HERE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
