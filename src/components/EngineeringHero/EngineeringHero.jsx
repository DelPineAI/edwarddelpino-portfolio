import { Link } from 'react-router-dom';
import { Parallax } from '../Parallax/Parallax';
import { TiltZone, TiltCard } from '../TiltCard/TiltCard';
import styles from './EngineeringHero.module.css';

export const EngineeringHero = ({ data }) => (
  <TiltZone className={styles.section}>
    <Parallax rate={0.16} className={styles.grid}>
      <div className={styles.gridPlane} />
    </Parallax>

    <div className={styles.inner}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span className={styles.eyebrowText}>{data.eyebrow}</span>
        </div>

        <h1 className={styles.title}>
          {data.firstName}
          <br />
          {data.lastName}
        </h1>

        <p className={styles.tagline}>{data.tagline}</p>

        <div className={styles.chips}>
          {data.chips.map((chip) => (
            <span key={chip} className={styles.chip}>{chip}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href={data.primaryAction.href}>
            {data.primaryAction.label}
          </a>
          <Link className={styles.secondary} to={data.secondaryAction.to}>
            {data.secondaryAction.label}
          </Link>
        </div>
      </div>

      <div className={styles.cardWrap}>
        <TiltCard base={[-7, 3]} className={styles.card}>
          <div className={styles.sweepMask}>
            <div className={styles.sweep} />
          </div>

          <div className={styles.cardHead}>
            <span className={styles.cardStatus}>{data.card.status}</span>
            <span className={styles.cardDot} />
          </div>

          <div className={styles.cardTitle}>{data.card.title}</div>
          <p className={styles.cardBody}>{data.card.body}</p>

          <div className={styles.cardStats}>
            {data.card.stats.map((stat) => (
              <div key={stat.label} className={styles.cardStat}>
                <div className={styles.cardStatValue}>{stat.value}</div>
                <div className={styles.cardStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </TiltCard>
      </div>
    </div>

    <div className={styles.cue}>
      <span className={styles.cueText}>{data.scrollCue}</span>
      <span className={styles.cueLine} />
    </div>
  </TiltZone>
);
