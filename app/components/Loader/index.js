import React, { useEffect, useRef } from "react";

import { words } from "./data";

import styles from "./Loader.module.scss";
import { introAnimation, collapseWords, progressAnimation } from "./animations";

const Loader = ({ timeline }) => {
  // 定義各種 Ref 用於引用 DOM 元素
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
        // 如果 timeline 存在，則添加動畫
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef)) // 添加引入animations.introAnimation
        .add(progressAnimation(progressRef, progressNumberRef), 0) // 添加引入animations.progressAnimation
        .add(collapseWords(loaderRef), "-=1");// 添加引入animations.collapseWords，提前一秒開始

  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div ref={wordGroupsRef} className={styles.loader__wordsGroup}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

// animation start here