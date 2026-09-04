import styles from './VideoEmbed.module.css';

export const VideoEmbed = ({ id, title }) => (
  <div className={styles.frame}>
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
