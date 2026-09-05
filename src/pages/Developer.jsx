import { EngineeringHero } from '../components/EngineeringHero/EngineeringHero';
import { StatBand } from '../components/StatBand/StatBand';
import { CaseStudy } from '../components/CaseStudy/CaseStudy';
import { SevenSegment } from '../components/SevenSegment/SevenSegment';
import { ShorterAnswers } from '../components/ShorterAnswers/ShorterAnswers';
import { Dimensions } from '../components/Dimensions/Dimensions';
import { AletheiaTeaser } from '../components/AletheiaTeaser/AletheiaTeaser';
import { Footer } from '../components/Footer/Footer';
import engineering from '../data/engineering.json';

export const Developer = () => (
  <>
    <EngineeringHero data={engineering.hero} />
    <StatBand stats={engineering.stats} />
    <CaseStudy data={engineering.caseStudy} />
    <SevenSegment data={engineering.sevenSegment} />
    <ShorterAnswers data={engineering.shorterAnswers} />
    <Dimensions items={engineering.dimensions} />
    <AletheiaTeaser data={engineering.teaser} />
    <Footer variant="engineering" />
  </>
);
