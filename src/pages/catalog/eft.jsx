import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import GameLayout from "@/components/Catalog/GameLayout";
import AllGames from "@/components/AllGames/AllGames";
import Status from "@/components/Status";
import useStatusStore from "@/lib/store";

const catalog_game = "/images/catalog__tarkov.png";
const catalog_tarkov_image = "/images/catalog/tarkov_bg.png";
const tarkov_viking = "/images/products/products__tarkov_viking.svg";
const tarkov_logo = "/images/products__tarkov_logo.svg";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Tarkov() {
  const status = useStatusStore((state) => state.status);

  const game = {
    backgroundImage: catalog_tarkov_image,
    logo: catalog_game,
    amount: 1,
    link: "/catalog/eft",
    title: "Escape From Tarkov",
  };
  return (
    <GameLayout game={game}>
      <AllGames
        link="/eft/slick"
        image={tarkov_viking}
        title="SLICK EXTERNAL"
        logo={tarkov_logo}
        subtitle="EFT"
        status={<Status status={status.eft_slick} />}
      />
    </GameLayout>
  );
}

export default withHead(Tarkov);
