import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import video1 from "./assets/cam1+.mov";
import video2 from "./assets/cam2+.mov";
import video3 from "./assets/cam3+.mov";
import video4 from "./assets/cam4+.mov";
import video5 from "./assets/Live+.mov";
import Button from "./Button";

const videos = [
  { id: 1, description: "視角 1", src: video1 },
  { id: 2, description: "視角 2", src: video2 },
  { id: 3, description: "視角 3", src: video3 },
  { id: 4, description: "視角 4", src: video4 },
  { id: 5, description: "視角 5", src: video5 },
];

const content = `
請先觀賞下方的一分鐘影片。 

您可以如同導播般，自行點選不同畫面，當您選取後，它將會呈現在最上方的大畫面中，
`;

interface PageProps {
  onClick: () => void;
}

const Page2: React.FC<PageProps> = ({ onClick }) => {
  const [focusedVideoIndex, setFocusedVideoIndex] = useState<number>(-1);

  const handleVideoClick = (index: number) => {
    if (focusedVideoIndex > -1) {
      const previousVideo = document.getElementById(
        `${focusedVideoIndex}-large`
      ) as HTMLVideoElement;
      previousVideo.pause();
    }

    const clickedVideo = document.getElementById(
      `${index}-small`
    ) as HTMLVideoElement;
    const targetVideo = document.getElementById(
      `${index}-large`
    ) as HTMLVideoElement;
    targetVideo.currentTime = clickedVideo.currentTime;
    targetVideo.play();

    // setFocusedVideoSrc(`${videos[index].src}#t=${clickedVideo.currentTime}`);
    setFocusedVideoIndex(index);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-stretch">
      <div className="prose">
        <Markdown>{content}</Markdown>
      </div>
      <div className="w-full h-1/3 my-5 object-contain object-center rounded flex flex-col">
        {videos.map((video, index) => (
          <video
            key={`${video.id}${index}`}
            id={`${index}-large`}
            className={`${focusedVideoIndex !== index ? "hidden" : ""}`}
            src={video.src}
            playsInline
          />
        ))}
      </div>
      {/* <video
        ref={focusedVideoRef}
        className="w-full h-1/3 my-5 object-contain object-center rounded"
        src={focusedVideoSrc}
        autoPlay
        playsInline
      /> */}
      <div className="flex flex-wrap w-full justify-center items-end">
        {videos.map((video, index) => (
          <video
            key={video.id}
            id={`${index}-small`}
            className="w-1/2 mb-1 object-contain object-center rounded"
            src={video.src}
            autoPlay
            muted
            playsInline
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
