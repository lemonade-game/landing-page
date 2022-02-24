import Image from "next/image";
import Page from "@/ui/page";
import Link from "@/ui/link";

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

      <div className="my-16">
        <h3>Lemonade Stand Artwork</h3>
        <p>
          Note, the final artwork will be high quality pixel art, we are
          currently <strong>seeking a pixel artist to join the team</strong>! If
          that is you jump in our{" "}
          <Link
            newWindow
            className="text-xl border-b border-white hover:border-blue-500 hover:text-blue-500"
            href="https://discord.gg/yUMmHZtvCe">
            Discord
          </Link>{" "}
          and let's talk turkey!
        </p>
      </div>

      <div className="my-16">
        <h3>The Freezer</h3>

        <p>
          When $Lemonade is produced, it can be claimed, in which case it
          automagically, stakes to the Freezer to compound further.
        </p>

        <p>
          You can withdraw your frozen $Lemonade whenever you wish, but there is
          a deflationary mechanism built it, where a portion of your thaw will
          be spoiled and lost based on how fast you defrost it.
        </p>

        <p>
          That spoiled lemonade will be burnt to put addional buy pressure on
          the token. Deflationary mechanics are important to affect the price of
          $Lemonade. In it's simplest form, $Lemonade is an inflationary token.
          So, we balance that inflation with deflationary mechanics.
        </p>
      </div>

      <div className="my-16">
        <h3>Initial Game Offering</h3>

        <p>
          People who get into something good before the masses come rollling in
          tend to do the best in any type of market. To reward our early
          adopters, the first minting will be available via whitelist, and will
          get to play test the game early.
        </p>

        <p>
          During the IGA, you will be able to mint lemonade stands for{" "}
          {process.env.NEXT_PUBLIC_GEN_0_MINT_PRICE} AVAX and each stand will be
          randomly rolled using a process called "provable fairness". Those
          rolls will determine the rarity, location, and worker for your newly
          minted stand!
        </p>

        <p>
          Those stands in turn will affect the amount of $Lemonade produced per
          miniute. This will ultimately support a healthy secondary market since
          each stand is highly variable and thus unique. Get enough good rolls
          on a stand and it's value will soar on the market!
        </p>
      </div>
    </Page>
  );
}
