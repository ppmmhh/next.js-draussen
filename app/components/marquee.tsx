import React, { useEffect } from 'react';
import styles from './marquee.module.scss'; // Import your SCSS file

const Marquee: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.' + styles.marqueecontainer);
    const content = document.querySelector('.' + styles.marqueeContent);

    if (container && content) {
      const cloneContent = content.cloneNode(true) as HTMLElement;
      container.appendChild(cloneContent);
      cloneContent.classList.add(styles.cloned); // Add the correct class name
    }

    // Clean up function to remove the cloned content when component unmounts
    return () => {
      if (container && content) {
        const clonedContent = document.querySelector('.' + styles.cloned);
        if (clonedContent) {
          container.removeChild(clonedContent);
        }
      }
    };
  }, []);

  return (
    <div className={styles.marqueecontainer}>
      <div className={styles.marqueeContent}>
        <span>
          {' '}
          <img
            src="/logo.png"
            width={155}
            height={65}
            alt="draussen Logo"
          />{' '}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
