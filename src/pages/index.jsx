import Image from "next/image";
import Page from "@/ui/page";

export default function Homepage() {
  return (
    <Page>
      <div className="mx-16">
        <h1>Welcome to the Lemonade Game</h1>
      </div>

      <div className="md:flex my-16">
        <div className="md:w-2/3 text-center">
          <Image
            width={400}
            height={400}
            src="/images/logo.png"
            alt="lemonade game logo"
          />
        </div>
        <div>
          <p>
            <strong>Lemonade</strong> is played by buying and staking{" "}
            <strong>Lemonade stands (NFTs)</strong> to locations around a
            fantasy town. The game is run on the Avalanche network and has fast
            responses and low fees.
          </p>

          <p>
            When <strong>staked</strong>, these stands produce{" "}
            <strong>$Lemonade</strong>, which can be{" "}
            <strong>bought and swapped</strong> on TraderJoe,{" "}
            <strong>just like and Ethereum and Doge</strong>!
          </p>
        </div>
      </div>

      <div className="md:flex">
        <div>
          <p>
            <strong>Lemonade</strong> stands stats are "rolled" at the time of
            minting and can be{" "}
            <span className="text-common font-bold">Common</span>,{" "}
            <span className="text-uncommon font-bold">Unommon</span>,{" "}
            <span className="text-epic font-bold">Epic</span>, or{" "}
            <span className="text-legendary font-bold">Legendary</span>! The{" "}
            <strong>rarity</strong> of the stands determine how much{" "}
            <strong>$Lemonade</strong> are produced, along with other factors
            like town location, upgrades, and worker fatigue.
          </p>
        </div>

        <div>
          <p>
            Each location will have an impact in $Lemonade production. Each will
            come with it's own artwork and become part of the NFT. Some
            locations we plan to launch with are{" "}
            <span className="text-common font-bold">Junkyard</span>,{" "}
            <span className="text-uncommon font-bold">Contruction site</span>,
            <span className="text-epic font-bold">School</span>,{" "}
            <span className="text-legendary font-bold">Uptown Park</span>,{" "}
            <span className="text-legendary font-bold">Downtown</span>
            park.
          </p>
        </div>
      </div>

      <div className="md:flex items-center my-16 justify-around">
        {[1].map((name, i) => (
          <Image
            key={name}
            src={`/images/stands/${i + 1}.png`}
            width={300}
            height={300}
            alt={`${name} stand`}
          />
        ))}
      </div>

      <div className="">
        <h3>Lemonade Stand Artwork</h3>
        <p>
          Note, the final artwork will be high quality pixel art, we are
          currently <strong>seeking a pixel artist to join the team</strong>! If
          that is you jump in our{" "}
          <a
            className="text-xl border-b border-white hover:border-blue-500 hover:text-blue-500"
            target="_blank"
            href="https://discord.gg/yUMmHZtvCe">
            Discord
          </a>{" "}
          and let's talk turkey!
        </p>
      </div>
    </Page>
  );
}
