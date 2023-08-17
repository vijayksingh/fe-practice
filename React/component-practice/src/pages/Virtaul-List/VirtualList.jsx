// remove PropType warning eslint
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./styles.css";

function VirtualListItem({ item }) {
  return <div className="list-item">{item.title}</div>;
}

function VirtualList({ list, rowHeight }) {
  const VIEWPORT_HEIGHT = 400;
  const BUFFER = 10;

  const visibleItemsCount = Math.ceil(VIEWPORT_HEIGHT / rowHeight) + 2 * BUFFER;
  console.log(visibleItemsCount);

  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollTop;
    console.log({ scrollPosition });
    const newStart = Math.max(
      0,
      Math.floor(scrollPosition / rowHeight) - BUFFER
    );
    setStartIndex(Math.max(0, newStart));
  };

  // Scroll event listener
  useEffect(() => {
    const conatainer = containerRef.current;
    if (!conatainer) return;

    conatainer.addEventListener("scroll", handleScroll);
    return () => {
      conatainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the visible window
  const end = Math.min(startIndex + visibleItemsCount, list.length);
  console.log({ startIndex, end, list: list.length });
  const visibleItems = list.slice(startIndex, end);

  return (
    <div className="virtual-list-container" ref={containerRef}>
      <div
        style={{ height: `${list.length * rowHeight}px`, position: "relative" }}
      >
        {visibleItems.map((item, index) => (
          <VirtualListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export function DemoVirtualList() {
  const list = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    title: `Item ${i}`,
  }));

  return <VirtualList list={list} rowHeight={30} />;
}
