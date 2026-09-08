import { TreatiseHero } from '../components/TreatiseHero/TreatiseHero';
import { Epigraph } from '../components/Epigraph/Epigraph';
import { FragmentIndex } from '../components/FragmentIndex/FragmentIndex';
import { Fragment, FragmentGap, FragmentAwaiting } from '../components/Fragment/Fragment';
import { Footer } from '../components/Footer/Footer';
import styles from './Treatise.module.css';
import treatise from '../data/treatise.json';

export const Treatise = () => (
  <>
    <TreatiseHero data={treatise.hero} />
    <Epigraph data={treatise.epigraph} />
    <FragmentIndex data={treatise.index} />

    <section className={styles.fragments}>
      <div className={styles.inner}>
        {treatise.fragments.map((item) =>
          item.gap ? (
            <FragmentGap key={item.label} label={item.label} note={item.note} />
          ) : (
            <Fragment key={item.page} data={item} />
          )
        )}
        {treatise.awaiting && <FragmentAwaiting data={treatise.awaiting} />}
      </div>
    </section>

    <Footer variant="treatise" />
  </>
);
