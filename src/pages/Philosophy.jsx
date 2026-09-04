import styles from './Page.module.css';

export const Philosophy = () => {
  return (
    <section className={styles.container} id="philosophy">
      <h2 className={styles.title}>Philosophy</h2>

      <div className={styles.lead}>
        <p>
          Some of my earliest memories of thinking seriously are memories of
          asking questions I could not answer.
        </p>
      </div>

      <div className={styles.blocks}>
        <article className={styles.block}>
          <h3>Where it started</h3>
          <p>
            I was around six when I first struggled with the idea of death. I
            could not understand how consciousness could simply stop, and that
            question opened into others. What is God. Why does anything exist.
            How could the universe have begun. Why do the people around me hold
            completely different beliefs about questions that seem this
            fundamental.
          </p>
          <p>
            Even then I was uncomfortable accepting an explanation just because
            someone else believed it. I wanted to understand why something might
            be true before I let myself accept it.
          </p>
        </article>

        <article className={styles.block}>
          <h3>What I took from science</h3>
          <p>
            That instinct pulled me toward physics and mathematics. What drew me
            in was not that science claimed to have every answer. It was closer
            to the opposite. I respected its willingness to separate what we
            know from what the evidence suggests from what remains unexplained.
          </p>
          <p>
            Over time that became the idea underneath most of what I do:
            memorizing an answer is not the same as understanding it.
          </p>
        </article>

        <article className={styles.block}>
          <h3>What I am working on</h3>
          <p>
            I still think about consciousness, physics, and the nature of
            reality, and I have been developing a framework I call
            self-assimilation. I write about it privately for now, and I am
            preparing some of it for public discussion.
          </p>
          <p>
            One of my longer ambitions is to fund an interdisciplinary research
            lab where questions like these get examined seriously by
            physicists, mathematicians, and philosophers together. I do not want
            people to agree with my ideas. I want them challenged as rigorously
            as possible.
          </p>
        </article>

        <article className={styles.block}>
          <h3>Why it matters to the work</h3>
          <p>
            This is not separate from the engineering. Wanting to know why a
            formula was derived instead of when to apply it is the same instinct
            that makes me interview a business owner before writing code, or
            build the same circuit three different ways to find out which
            failures belong to the logic and which belong to the implementation.
          </p>
        </article>
      </div>
    </section>
  );
};
