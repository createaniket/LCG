import { useEffect, useState } from "react";

export default function GridItem({ title, image, size }) {
  const [padding, setPadding] = useState("70%");

  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const ratio = (img.height / img.width) * 100;
      setPadding(`${ratio}%`);
    };
  }, [image]);

  return (
    <div className={`grid-item ${size}`}>
      
      <div
        className="grid-bg"
        style={{
          backgroundImage: `url(${image})`,
          paddingTop: padding,
        }}
      />

      <div className="grid-overlay" />

      <div className="grid-content">
        <h2>{title}</h2>
      </div>

    </div>
  );
}