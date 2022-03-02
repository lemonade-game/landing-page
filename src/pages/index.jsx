import Image from "next/image";
import Page from "@/ui/page";
import Link from "@/ui/link";

export default function Homepage() {
  return (
    <Page>
      <div className="mx-16">
        <h1 className="text-9xl">Lemonade!</h1>
      </div>

      <div className="md:flex my-16">
        <div className="md:w-2/3  flex justify-center items-center">
          <Image
            width={300}
            height={300}
            src="/images/logo.png"
            alt="lemonade game logo"
          />
        </div>
        <div>
          <p>
            <strong>Lemonade!</strong> is played by buying and staking{" "}
            <strong>Lemonade stands (NFTs)</strong> to locations around a
            fantasy town. The game is run on the Avalanche network and has fast
            responses and low fees.
          </p>

          <p>
            When <span className="text-blue-600 font-medium">staked</span>,
            these stands produce{" "}
            <span className="text-yellow-500">$Lemonade</span>, compounded daily
            at <span className="font-medium">1% for 365 days</span>!
          </p>

          <p>
            You can also claim your{" "}
            <span className="font-medium">1% daily</span> in cash if you prefer,
            but compounding is the key to success in this game!
          </p>
        </div>
      </div>

      <div className="md:flex">
        <div>
          <p>
            <strong>Lemonade</strong> stands stats are "rolled" at the time of
            <span className="text-green-500">minting</span> and can be{" "}
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
            <span className="text-uncommon font-bold">Residential</span>,{" "}
            <span className="text-epic font-bold">Park</span>,{" "}
            <span className="text-legendary font-bold">Downtown</span>,{" "}
            <span className="text-legendary font-bold">Mall</span> park.
          </p>
        </div>
      </div>

      <div className="md:flex items-center my-16 justify-around">
        {[1, 2].map((name, i) => (
          <Image
            key={name}
            src={`/images/concept/${i + 1}.png`}
            width={300}
            height={300}
            alt={`${name} stand`}
          />
        ))}
      </div>

      <p>Note: Concept art will be polished and polished until it shines!</p>

      <div className="my-16">
        <h3>The Freezer</h3>
        <div className="flex">
          <div>
            <Image
              src="/images/concept/freezer-lg.png"
              width={300}
              height={300}
            />
          </div>
          <div>
            <p>
              The $Lemonade you are producing from your stands can be placed
              into a special smart contract we are calling the Freezer. All
              Lemonade deposited will be burned and removed out of circulation,
              but you can get 1% of it every day, and you can compound your 1%
              for a whole year! (Similar to{" "}
              <a className="text-green-500" href="https://drip.community">
                https://drip.community
              </a>
              )
            </p>

            <p>
              When you join the game, you will be supplying your buddy address
              to us. Your buddy will be getting a % of all taxes generated by
              the Freezer! So make sure to give your access code to your
              friends!
            </p>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h3>Pre Launch</h3>

        <p>
          People who get into something good before the masses come rollling in
          tend to do the best in any type of market. To reward our early
          adopters, the first <span className="text-green-500">minting</span>{" "}
          will be available via whitelist, and will get to play test the game
          early.
        </p>

        <p>
          Jump in our{" "}
          <a
            className="text-green-500"
            href={process.env.NEXT_PUBLIC_DISCORD_LINK}>
            Discord
          </a>{" "}
          and let's talk game mechanics, tokenomics, and artwork!
        </p>
      </div>

      <div className="my-16">
        <h3>Initial Game Offering</h3>

        <p>
          During the IGA, you will be able to{" "}
          <span className="text-green-500">mint</span>{" "}
          <span className="text-yellow-500">lemonade stands</span> for{" "}
          <span className="font-medium text-green-500">
            {process.env.NEXT_PUBLIC_GEN_0_MINT_PRICE} AVAX
          </span>{" "}
          and each stand will be randomly rolled using a process called
          "provable fairness". Those rolls will determine the{" "}
          <span className="text-blue-500">rarity</span> and{" "}
          <span className="text-yellow-500">location</span> for your newly{" "}
          <span className="text-green-500">minted</span> stand!
        </p>

        <p>
          Those stands in turn will affect the amount of $Lemonade produced per
          each stand is highly variable and thus unique. Get enough good rolls
          on a stand and it's value will soar on the market!
        </p>
      </div>
    </Page>
  );
}
