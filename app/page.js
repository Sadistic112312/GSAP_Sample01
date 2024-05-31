"use client";

import { useLayoutEffect, useState } from "react"; // useLayoutEffect 確保在瀏覽器繪製前執行
import { gsap } from "gsap";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false); //跟蹤載入動畫是否完成
  const [timeline, setTimeline] = useState(null); //用來存儲 GSAP 的動畫時間軸

  useLayoutEffect(() => {
    const context = gsap.context(() => {  // context 讓動畫可以獨立運行，而不會相互影響
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true), 
      }); 
      setTimeline(tl); 
    });

    return () => context.revert(); // 清理動畫並還原初始狀態
  }, []); // 空依賴數組， useLayoutEffect 只會在元件首次渲染時執行

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
};

export default Home;
