import Image from "next/image";
import Page from "@/ui/page";

export default function Homepage() {
  return (
    <Page>
      <h1>Welcome to the Lemonade Game</h1>

      <div className="md:flex items-center my-16">
        <div>
          <Image
            width={400}
            height={400}
            src="/images/logo.png"
            alt="lemonade game logo"
          />
        </div>
        <div>
          <p>
            Lemonade is played by buying and staking Lemonade stands to
            locations around a fantasy town. The stands are represented on the
            Avalanche blockchain by NFTs.
          </p>

          <p>
            When staked, these stands produce $Lemonade, which can be bought and
            swapped on TraderJoe, just like and Ethereum and Doge, because they
            are real magic internet money (MiM) and they hold a value based on
            the same economics the govern your country's currency.
          </p>

          <p>
            Lemonade stands stats are "rolled" at the time of minting and can be{" "}
            <span className="text-common">Common</span>,{" "}
            <span className="text-epic">Epic</span>, or{" "}
            <span className="text-legendary">Legendary</span>! The rarity of the
            stands determine how much $Lemonade are produced, along with other
            factors like town location, upgrades, and worker fatigue.
          </p>
        </div>
      </div>

      <div className="md:flex items-center my-16 items-center justify-center">
        {["common", "epic", "legendary"].map((name, i) => (
          <Image
            src={`/images/stand-${i + 1}.png`}
            width={300}
            height={300}
            alt={`${name} stand`}
          />
        ))}
      </div>
    </Page>
  );
}
