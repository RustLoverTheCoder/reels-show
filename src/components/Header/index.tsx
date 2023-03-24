const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="px-4 prose pt-5">
      <h2>{title}</h2>
      <nav className="space-x-2">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="https://twitter.com/astrodotbuild" target="_blank">
          Twitter
        </a>
        <a href="https://github.com/withastro/astro" target="_blank">
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Header;
