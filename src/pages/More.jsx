import styles from './Page.module.css';

const gaming = [
  {
    game: 'Rocket League',
    rank: 'Champion II',
    note: 'Mechanical consistency under pressure, and a lot of hours reading rotations.',
  },
  {
    game: 'Call of Duty: Mobile',
    rank: 'Legendary',
    note: 'Top competitive tier, reached across multiple seasons.',
  },
];

const misc = [
  {
    title: 'Minecraft Redstone',
    note: 'Rebuilt my FPGA 7-segment display as a working redstone circuit, purely to confirm the logic held without the toolchain.',
  },
  {
    title: '3D Printing',
    note: 'Designed and printed the enclosure for my Arduino puzzle box, including clearance for wiring and button height.',
  },
  {
    title: 'Bilingual',
    note: 'English and Spanish, both native. Most of my client work happens in both.',
  },
];

export const More = () => {
  return (
    <section className={styles.container} id="more">
      <h2 className={styles.title}>And More</h2>

      <div className={styles.lead}>
        <p>The smaller things. Some of them are still competitive.</p>
      </div>

      <h3 className={styles.subheading}>Gaming</h3>
      <div className={styles.cards}>
        {gaming.map((g) => (
          <div className={styles.card} key={g.game}>
            <span className={styles.badge}>{g.rank}</span>
            <h4>{g.game}</h4>
            <p>{g.note}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.subheading}>Everything Else</h3>
      <div className={styles.cards}>
        {misc.map((m) => (
          <div className={styles.card} key={m.title}>
            <h4>{m.title}</h4>
            <p>{m.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
