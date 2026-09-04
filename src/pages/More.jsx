import styles from './Page.module.css';

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
  {
    title: 'Tutoring',
    note: 'Three years teaching Multivariable Calculus at FIU. Switching explanations until one lands is a skill that transfers everywhere.',
  },
];

export const More = () => {
  return (
    <section className={styles.container} id="more">
      <h2 className={styles.title}>And More</h2>

      <div className={styles.lead}>
        <p>The smaller things that do not fit anywhere else.</p>
      </div>

      <div className={styles.cards} style={{ marginTop: '40px' }}>
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
