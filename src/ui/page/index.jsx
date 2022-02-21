export default function Page({ children }) {
  return (
    <>
      <header></header>
      <main className="mx-auto mt-16 container md:px-16">{children}</main>
      <footer className="mx-auto mt-16 container md:px-16">
        <hr />
        <h3 className="mt-8">Join us</h3>
        <ul>
          <li>
            <a className="text-xl" href="https://whitepaper.lemonade.game">
              whitepaper
            </a>
          </li>
          <li>
            <a className="text-xl" href="https://discord.gg/yUMmHZtvCe">
              discord
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
