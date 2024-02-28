import SaleDetails from "@/components/dashboard-components/sale-details";
import classes from "@/utils/pages-styles/dash-page.module.scss";

export default function Home() {
  return (
    <main className={classes.dash}>
      <section className={classes.dash__contents}>
        <SaleDetails />
      </section>
      <section className={classes.dash__charts}>2</section>
    </main>
  );
}
