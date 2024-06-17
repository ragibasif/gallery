import { useState } from "react";
const images = [
  {
    id: "f0e5098d-960f-410a-ab74-cef9ba059af8",
    filename: "images/IMG_0663.jpg",
  },
  {
    id: "0c794ac3-0175-4d64-b2df-28d232f02ae0",
    filename: "images/IMG_0686.jpg",
  },
  {
    id: "261f9f55-18a5-4eb5-bf73-21a605ff01d1",
    filename: "images/IMG_0684.jpg",
  },
  {
    id: "0625f481-e561-49f4-944c-8c50928c5240",
    filename: "images/IMG_0687.jpg",
  },
  {
    id: "564e8838-4a2b-4a52-938e-6b07f438bcf5",
    filename: "images/IMG_0689.jpg",
  },
  {
    id: "52acddee-02f8-44da-82b1-ae4b9a490ea1",
    filename: "images/IMG_0680.jpg",
  },
  {
    id: "5526da0b-f053-4c18-80a2-c6e66fdfdbd6",
    filename: "images/IMG_0706.jpg",
  },
  {
    id: "289b01c7-2ccd-4fba-9199-a026b018ab18",
    filename: "images/IMG_0702.jpg",
  },
  {
    id: "061e67c9-a056-4383-9662-b00a6bcc881c",
    filename: "images/IMG_0630.jpg",
  },
  {
    id: "4d2fc236-f29a-46ab-9edc-6a140cf92063",
    filename: "images/IMG_0302.jpg",
  },
  {
    id: "2602ac26-70e4-46d9-823e-b3b7cbdfa8c9",
    filename: "images/IMG_0629.jpg",
  },
  {
    id: "df308672-cd5b-412d-8cac-1568c429c9c4",
    filename: "images/IMG_0628.jpg",
  },
  {
    id: "c3f02bfe-b757-444d-a6ca-0cc551b6b1b3",
    filename: "images/IMG_0685.jpg",
  },
  {
    id: "d7e507b1-15ff-4885-9643-19877f2d75bd",
    filename: "images/IMG_0694.jpg",
  },
  {
    id: "100e8a42-0ac5-4c51-b6d8-73725845e31c",
    filename: "images/IMG_0695.jpg",
  },
  {
    id: "7418f41d-10b8-4bd4-9c65-74d09fefa48d",
    filename: "images/IMG_0683.jpg",
  },
  {
    id: "1322c426-9ea4-4be6-95e2-946dc8aaf00d",
    filename: "images/IMG_0698.jpg",
  },
  {
    id: "55c03f55-7d8b-4555-9b96-7f4f93aaefea",
    filename: "images/IMG_0461.jpg",
  },
  {
    id: "7667f9ac-4ff1-4e78-bf2a-d970c9c48b42",
    filename: "images/IMG_0301.jpg",
  },
  {
    id: "8743e304-7a51-4c84-b43b-0a04a547878c",
    filename: "images/IMG_0699.jpg",
  },
  {
    id: "2df2bb62-bda8-4a2c-b116-e2a04e5f6e06",
    filename: "images/IMG_0690.jpg",
  },
  {
    id: "bacb455c-595a-4f81-b3e1-d7732a783bec",
    filename: "images/IMG_0506.jpg",
  },
  {
    id: "ad424282-47a5-4847-8434-00454ed3427c",
    filename: "images/IMG_0696.jpg",
  },
  {
    id: "cbd42380-179b-497a-b6f6-c2c6e0dabfbb",
    filename: "images/IMG_0303.jpg",
  },
  {
    id: "15eeff83-ca91-4f39-9eaf-6febf297d7da",
    filename: "images/IMG_0688.jpg",
  },
  {
    id: "d4629e8f-5412-43e8-8389-bb3e16711d6d",
    filename: "images/IMG_0633.jpg",
  },
  {
    id: "423c717b-3786-448c-bdbd-83f4e54d52e5",
    filename: "images/IMG_0300.jpg",
  },
  {
    id: "d49e6bec-5f60-46ae-8e99-9d4e60cb3571",
    filename: "images/IMG_0277.jpg",
  },
  {
    id: "e7bea28e-4d41-49c4-b431-e51e60ed657b",
    filename: "images/IMG_0664.jpg",
  },
  {
    id: "bebee179-fecc-4672-b800-a36b77b659fa",
    filename: "images/IMG_0463.jpg",
  },
  {
    id: "25a425dd-945a-4e37-b5d4-5b4e1b1b8e0e",
    filename: "images/IMG_0627.jpg",
  },
  {
    id: "7b2c4c21-4eb6-4e6e-93bd-1eefd3340ce2",
    filename: "images/IMG_0299.jpg",
  },
  {
    id: "5175e6bb-6556-4ca6-be6a-2e5b72baa58c",
    filename: "images/IMG_0691.jpg",
  },
];

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <p>
        Mouse coordinates: {position.x}, {position.y}
      </p>
    </div>
  );
};

const Gallery = () => {
  const [globalIndex, setGlobalIndex] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";
    image.setAttribute("draggable", "false");

    // last = { x, y };
    setLastX(x);
    setLastY(y);
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - lastX, y - lastY);
  };
  const handleOnMove = (event) => {
    if (
      distanceFromLast(event.clientX, event.clientY) >
      window.innerWidth / 20
    ) {
      const lead = images[globalIndex % images.length],
        tail = images[(globalIndex - 5) % images.length];

      activate(lead, event.clientX, event.clientY);

      if (tail) tail.dataset.status = "inactive";

      const tempGlobalIndex = globalIndex;
      setGlobalIndex(tempGlobalIndex + 1);
    }
  };
  return (
    <>
      <h1>Hello</h1>
      <MouseTracker />
    </>
  );
};

export default Gallery;
