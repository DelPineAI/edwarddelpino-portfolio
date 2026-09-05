import { Reveal } from '../Reveal/Reveal';
import { Parallax } from '../Parallax/Parallax';
import { SlotNote } from '../SlotNote/SlotNote';
import { getImageUrl } from '../../utils';
import styles from './SevenSegment.module.css';

export const SevenSegment = ({ data }) => (
  <section className={styles.section}>
    <Parallax rate={0.07} className={styles.wash}>
      <div className={styles.washInner} />
    </Parallax>

    <div className={styles.inner}>
      <Reveal className={styles.head}>
        <span className={styles.eyebrow}>{data.eyebrow}</span>
        <h2 className={styles.title}>{data.title}</h2>
      </Reveal>

      <Reveal as="p" className={styles.lead}>{data.body}</Reveal>

      <div className={styles.figures}>
        <Reveal as="figure" className={styles.shot}>
          <img
            className={styles.shotImage}
            src={getImageUrl(data.image.imageSrc)}
            alt={data.image.alt}
          />
          <figcaption className={styles.shotCaption}>{data.image.caption}</figcaption>
        </Reveal>

        <Reveal index={1}>
          <SlotNote label={data.figure.label} note={data.figure.note} />
        </Reveal>
      </div>

      <div className={styles.figCaption}>
        <span className={styles.figTag}>{data.figure.tag}</span>
        <span className={styles.figText}>{data.figure.caption}</span>
      </div>

      <div className={styles.stages}>
        {data.stages.map((stage, i) => (
          <Reveal key={stage.label} index={i} className={styles.stage}>
            <div className={styles.stageLabel}>{stage.label}</div>
            <h3 className={styles.stageTitle}>{stage.title}</h3>
            <p className={styles.stageBody}>{stage.body}</p>

            {stage.slot && (
              <div className={styles.stageSlot}>
                <span className={styles.stageSlotText}>{stage.slot}</span>
              </div>
            )}

            {stage.image && (
              <div className={styles.stageImageWrap}>
                <img
                  className={styles.stageImage}
                  src={getImageUrl(stage.image.imageSrc)}
                  alt={stage.image.alt}
                />
              </div>
            )}

            {stage.chips && (
              <div className={styles.chips}>
                {stage.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.control}>
        <div className={styles.controlCopy}>
          <div className={styles.stageLabel}>{data.control.label}</div>
          <h3 className={styles.controlTitle}>{data.control.title}</h3>
          <p className={styles.stageBody}>{data.control.body}</p>
        </div>
        <div className={styles.controlSlot}>
          <span className={styles.stageSlotText}>{data.control.slot}</span>
        </div>
      </Reveal>
    </div>
  </section>
);
