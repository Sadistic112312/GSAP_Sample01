import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80, //素在 y 軸上移動 -80%
    duration: 5, // // 動畫持續 5 秒
    ease: "power3.inOut",  // 使用 power3.inOut 緩動效果
  });

  return tl;
};

export const collapseWords = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)", // 使用 clip-path 屬性創建收縮效果
    duration: 3, // 動畫持續 3 秒
    ease: "expo.inOut", // 使用 expo.inOut 緩動效果
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,  // x 軸縮放到 1（即原始大小）
    duration: 5, // 動畫持續 5 秒
    ease: "power3.inOut", // 使用 power3.inOut 緩動效果
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw", // 將元素沿 x 軸移動到視窗寬度的 100%
        duration: 5, // 動畫持續 5 秒
        ease: "power3.inOut", // 使用 power3.inOut 緩動效果
      },
      "<" // 動畫與前一個動畫同時開始
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100", // 將文字內容更改為 "100"
        duration: 5,  // 動畫持續 5 秒
        roundProps: "textContent", // 文字內容的數值將四捨五入
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24, // 將元素在 y 軸上移動 24 單位
      autoAlpha: 0,  // 將元素透明度設為 0 並隱藏
    });

  return tl;
};
