import { useState, useMemo } from 'react';
import styles from './Philosophy.module.css';
import { VideoEmbed } from '../components/VideoEmbed/VideoEmbed';
import talks from '../data/talks.json';
import writing from '../data/writing.json';

const ideas = [
  {
    n: '01',
    title: 'Understanding over memorizing',
    body: 'Memorizing an answer is not the same as understanding it. I want to know why a formula was derived, what assumptions make it work, and where it breaks, before I trust it with anything.',
  },
  {
    n: '02',
    title: 'Questions before conclusions',
    body: 'I was six when I first struggled with the idea of death, and I have never been comfortable accepting an explanation just because someone else believed it. The question comes first.',
  },
  {
    n: '03',
    title: 'Self-assimilation',
    body: 'A framework I have been developing about consciousness and how a system comes to contain a model of itself. Still being written. I would rather have it challenged than agreed with.',
  },
  {
    n: '04',
    title: 'Adversarial by design',
    body: 'One of my longer ambitions is to fund an interdisciplinary lab where questions like these get examined seriously by physicists, mathematicians, and philosophers together — specifically to attack them.',
  },
];

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const PostItem = ({ post, isOpen, onToggle }) => (
  <article className={`${styles.post} ${isOpen ? styles.postOpen : ''}`}>
    <button
      className={styles.postHeader}
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.postHeaderText}>
        <time className={styles.postDate} dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <h3>{post.title}</h3>
        <p className={styles.postExcerpt}>{post.excerpt}</p>
      </div>
      <span className={styles.chevron} aria-hidden="true">
        {isOpen ? '\u2212' : '+'}
      </span>
    </button>

    <div className={styles.postBody} hidden={!isOpen}>
      {post.body.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <ul className={styles.tagRow}>
        {post.tags.map((t) => (
          <li key={t} className={styles.tag}>{t}</li>
        ))}
      </ul>
    </div>
  </article>
);

export const Philosophy = () => {
  const [openSlug, setOpenSlug] = useState(null);
  const [activeTag, setActiveTag] = useState('all');

  const allTags = useMemo(
    () => ['all', ...new Set(writing.flatMap((p) => p.tags))],
    []
  );

  const posts = useMemo(() => {
    const filtered =
      activeTag === 'all'
        ? writing
        : writing.filter((p) => p.tags.includes(activeTag));
    return [...filtered].sort((a, b) => b.date.localeCompare(a.date));
  }, [activeTag]);

  return (
    <div className={styles.page}>
      {/* ---------- lead ---------- */}
      <header className={styles.lead}>
        <span className={styles.kicker}>Philosophy</span>
        <h1 className={styles.leadTitle}>
          Some of my earliest memories of thinking seriously are memories of
          asking questions I could not answer.
        </h1>
        <p className={styles.leadSub}>
          Consciousness, physics, the nature of reality, and what technology
          does to people. This is where I write about the things I have not
          finished figuring out.
        </p>
      </header>

      {/* ---------- ideas ---------- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Where I stand</h2>
        <div className={styles.ideaGrid}>
          {ideas.map((idea) => (
            <div className={styles.idea} key={idea.n}>
              <span className={styles.ideaNum}>{idea.n}</span>
              <h3>{idea.title}</h3>
              <p>{idea.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- talks ---------- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Talks</h2>
        {talks.map((talk) => (
          <div className={styles.talk} key={talk.id}>
            <VideoEmbed id={talk.id} title={talk.title} />
            <div className={styles.talkMeta}>
              <span className={styles.talkDate}>
                {talk.venue} &middot; {talk.date}
              </span>
              <h3>{talk.title}</h3>
              <p>{talk.description}</p>
              <ul className={styles.tagRow}>
                {talk.tags.map((t) => (
                  <li key={t} className={styles.tag}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- writing ---------- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Writing</h2>

        <div className={styles.filters}>
          {allTags.map((t) => (
            <button
              key={t}
              className={`${styles.filter} ${
                activeTag === t ? styles.filterActive : ''
              }`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={styles.posts}>
          {posts.map((post) => (
            <PostItem
              key={post.slug}
              post={post}
              isOpen={openSlug === post.slug}
              onToggle={() =>
                setOpenSlug(openSlug === post.slug ? null : post.slug)
              }
            />
          ))}
          {posts.length === 0 && (
            <p className={styles.empty}>Nothing tagged “{activeTag}” yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};
