import { useEffect, useRef, useState } from "react";
import "./styles.css";
/* eslint-disable */

const VirtualList = ({ items, itemHeight, renderRow }) => {
  const containerRef = useRef();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const updateStartIndex = () => {
    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    setStartIndex(Math.max(0, Math.floor(scrollPosition / itemHeight)));
  };

  useEffect(() => {
    const container = containerRef.current;
    setVisibleCount(Math.ceil(container.clientHeight / itemHeight) + 2); // 2 extra for buffer
    container.addEventListener("scroll", updateStartIndex);
    return () => container.removeEventListener("scroll", updateStartIndex);
  }, [itemHeight]);

  const visibleItems = [];
  for (
    let i = startIndex;
    i < startIndex + visibleCount && i < items.length;
    i++
  ) {
    visibleItems.push(
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${i * itemHeight}px`,
          height: `${itemHeight}px`,
        }}
      >
        {renderRow(items[i], i)}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ height: "300px", overflowY: "auto", position: "relative" }}
    >
      <div
        style={{
          height: `${items.length * itemHeight}px`,
          width: "80px",
          position: "relative",
        }}
      >
        {visibleItems}
      </div>
    </div>
  );
};

export default VirtualList;

const renderItem = (item, index) => (
  <div key={index} style={{ height: "30px" }}>
    {item}
  </div>
);

export function DemoVirtualList() {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  return <VirtualList items={items} itemHeight={30} renderRow={renderItem} />;
}

/* Approach 
  1. Create a container with a fixed height and overflow-y: auto
  2. Create a child container with a height equal to the total height of all the items
  3. Render all the items in the child container
  4. Position the child container absolutely
  5. Add a scroll event listener to the container
  6. Calculate the scroll position and divide it by the height of each item to get the index of the first visible item
  7. Render only the visible items
  8. Add a buffer of 2 items to the top and bottom of the visible items
  9. Update the visible items when the scroll position changes
*/
