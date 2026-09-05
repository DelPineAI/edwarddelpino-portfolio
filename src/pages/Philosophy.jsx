import { TreatiseHero } from '../components/TreatiseHero/TreatiseHero';
import { ArchiveGrid } from '../components/ArchiveGrid/ArchiveGrid';
import { Footer } from '../components/Footer/Footer';
import archive from '../data/archive.json';

export const Philosophy = () => (
  <>
    <TreatiseHero data={archive.hero} compact />
    <ArchiveGrid data={archive} />
    <Footer variant="treatise" />
  </>
);
