export default function Page({ children }) {
  return (
    <>
      <header></header>
      <main className="mx-auto mt-16 container md:px-16">{children}</main>
      <footer className="mx-auto mt-16 container md:px-16">
        <hr />
        <div className="flex items-center justify-around">
          <div>
            <h3 className="mt-8">Join us</h3>
            <ul>
              <li>
                <a className="text-xl" href="https://whitepaper.lemonade.game">
                  Whitepaper
                </a>
              </li>
              <li>
                <a className="text-xl" href="https://discord.gg/yUMmHZtvCe">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mt-8">We are hiring</h3>
            <ul>
              <li className="text-xl prose prose-invert">Pixel Artist</li>
              <li className="text-xl prose prose-invert">Community Manager</li>
              <li className="text-xl prose prose-invert">Apply via Discord!</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
