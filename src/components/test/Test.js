import React, { useEffect, useState } from "react";

const Test = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {}, [image]);

  const url = "https://picsum.photos/v2/list";

  const loadImage = () => {
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((newRes) => {
        const newList = newRes.map((item) => item.download_url);
        setImage(newList);
      });
  };

  return (
    <div>
      <button onClick={loadImage}>Click Me!</button>
      {image.map((item) => {
        return (
          <div key={item}>
            <img width="500px" src={item} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Test;
