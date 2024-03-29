import Link from "next/link";
import { useTranslation } from "next-i18next";

import AllGames from "../AllGames/AllGames";
import Status from "../Status";
import useStatusStore from "@/lib/store";

const bloodhunt_image = "/images/products/products__bloodhunt_image.svg";
const bloodhunt_logo = "/images/logos/bloodhunt_gray.svg";
const tarkov_logo = "/images/products__tarkov_logo.svg";
const tarkov_viking = "/images/products/products__tarkov_viking.svg";
const apex_slick = "/images/products/products__apex_slick.jpg";
const apex_logo = "/images/logos/apex_gray.svg";
const wot_image = "/images/products/products__wot_demo.jpg";
const wot_logo = "/images/logos/wot_gray.svg";

import styles from "../Games/Games.module.css";

function Products() {
  const { t } = useTranslation();
  const status = useStatusStore((state) => state.status);

  return (
    <section className={styles.games}>
      <div className={styles.games__container}>
        <div className={styles.games__wrap_title}>
          <h2 className={styles.games__title}>{t("about.popularCheats")}</h2>
          <Link className={styles.games__link} href={`/catalog`}>
            <button className={styles.games__button_title}>
              {t("about.viewCatalog")}
            </button>
          </Link>
        </div>

        <div className={styles.games__wrap_grid}>
          <AllGames
            link="/apex/slick"
            image={apex_slick}
            title="SLICK"
            logo={apex_logo}
            subtitle="Apex"
            status={<Status status={status.apex_slick} />}
          />
          <AllGames
            link="/eft/slick"
            image={tarkov_viking}
            title="SLICK"
            logo={tarkov_logo}
            subtitle="EFT"
            status={<Status status={status.eft_slick} />}
          />
          <AllGames
            link="/bloodhunt/slick"
            image={bloodhunt_image}
            title="SLICK"
            logo={bloodhunt_logo}
            subtitle="Bloodhunt"
            status={<Status status={status.bloodhunt_slick} />}
          />
          <AllGames
            link="/catalog/wot"
            image={wot_image}
            title="Cheat"
            logo={wot_logo}
            subtitle="World of Tanks Blitz"
            status={<Status status={status.blitz_slick} />}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
