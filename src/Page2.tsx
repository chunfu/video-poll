import { useEffect, useState } from "react";
import Markdown from "react-markdown";
// import video1 from "./assets/1.mp4";
// import video2 from "./assets/2.mp4";
import cam1 from "./assets/cam1.png";
import cam2 from "./assets/cam2.png";
import cam3 from "./assets/cam3.png";
import cam4 from "./assets/cam4.png";
import cam5 from "./assets/cam5.png";
import Button from "./Button";

const videos = [
  { id: 1, description: "視角 1", src: cam1 },
  { id: 2, description: "視角 2", src: cam2 },
  { id: 3, description: "視角 3", src: cam3 },
  { id: 4, description: "視角 4", src: cam4 },
  { id: 5, description: "視角 5", src: cam5 },
];

const content = `
請先觀賞下方的一分鐘影片。 

您可以如同導播般，自行點選不同畫面，當您選取後，它將會呈現在最上方的大畫面中，
`;

interface PageProps {
  onClick: () => void;
}

const Page2: React.FC<PageProps> = ({ onClick }) => {
  const [focusedVideoSrc, setFocusedVideoSrc] = useState<string>("");

  const handleVideoClick = (index: number) => {
    setFocusedVideoSrc(videos[index].src);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
      // }, 60000); // 60 seconds
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-stretch">
      <div className="prose">
        <Markdown>{content}</Markdown>
      </div>
      <img
        className="w-full h-1/3 my-5 object-contain object-center rounded"
        src={focusedVideoSrc}
        // autoPlay
        // playsInline
      />
      <div className="flex flex-wrap w-full justify-center items-end">
        {videos.map((video, index) => (
          <img
            key={video.id}
            className="w-1/2 mb-1 object-contain object-center rounded"
            src={video.src}
            // autoPlay
            // muted
            // playsInline
            onClick={() => handleVideoClick(index)}
          />
        ))}
      </div>
      <Button onClick={onClick} disabled={isButtonDisabled}>
        繼續填答
      </Button>
    </div>
  );
};

export default Page2;
