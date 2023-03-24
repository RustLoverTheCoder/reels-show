const Footer: React.FC = () => {
  const today = new Date();
  return (
    <footer className="prose px-4">
      <p>&copy; {today.getFullYear()} YOUR NAME HERE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
