import React from "react";
import Markdown from "react-markdown";
import Button from "./Button";

interface PageProps {
  onClick: () => void;
}

const content = `

# 賽事觀眾是觀賞者又是導播—探討不同視角觀賞運動賽事之愉悅感

親愛的研究參與者，您好：

感謝您參與本次學術研究計畫。

本研究計畫由國立體育大學陳成業教授擔任計畫主持人，研究主題為「賽事觀眾是觀賞者又是導播—探討透過社群媒體觀賞運動賽事之愉悅感」，目的旨在探討觀眾自行播觀賞運動賽事對觀賞愉悅感之影響，並且探討涉入程度、知覺有用性、知覺易用性與消費價值類型(享樂/實用)等變數在觀眾自行播觀賞運動賽事對觀賞愉悅感關係上之調節效果。

研究採用實驗設計方法，以第二屆全國籃球大學主客場邀請賽國立臺灣大學與輔仁大學男子籃球隊對戰賽事作為研究標的與情境。本研究網路問卷（含賽事觀賞），完成總時間約5-10分鐘。影片主題為「國立臺灣大學男子籃球隊與輔仁大學男子籃球隊之對戰賽事片段」。

預計招募400位年齡滿18歲之國立臺灣大學學生與輔仁大學學生進行問卷填答。

研究團隊將於有效填答之問卷當中，抽出十位可獲得500元超商禮券。 

本研究僅供學術研究之用，蒐集資料將保存於主持人的個人電腦中，且電腦與Excel檔案皆有密碼保護，保存3年後即刪除檔案，不留備份。資料僅供學術用途使用，並遵循保密原則，絕不會外流，請您放心依照您的個人感受填答問卷即可，您提供的資訊並無對錯之分。

研究參與者可自由決定參加研究與否，研究過程及最後亦可隨時撤銷同意或退出研究參與。若您於填答問卷的過程中欲撤銷同意或退出研究參與，僅須停止填答並關閉問卷頁面即可，在您未點選「送出」按鈕前，您原先填寫之內容將不會進入到問卷後台。若您於送出問卷後，欲撤銷同意或退出研究參與，歡迎您隨時聯繫研究者，我們將不會採納您的填答內容，並將您已填答部分之數據移除，避免於後續誤用。研究者保證，您退出研究不會引起任何不愉快，或影響日後研究計畫主持人對研究參與者之評價，更不會損及研究參與者任何權利。

若您於研究過程中有任何疑問或認為權利受到影響、傷害，可直接與國立體育大學人體研究倫理委員會聯絡，電話：(03)328-3201轉1269，或聯絡本研究團隊。

---
國立體育大學

計畫主持人：陳成業 教授 

聯絡電話：03-328-3201 #8609

E-mail: chenchenyueh@ntsu.edu.tw

&nbsp;

國立臺灣大學運動設施與健康管理碩士學位學程

計畫研究人員：張湘苡 同學

聯絡信箱：hsiangyi829@gmail.com

---
`;

const Page1: React.FC<PageProps> = ({ onClick }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-stretch">
      <div className="prose max-w-full">
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-[#486996]">{children}</h1>
            ),
          }}
        >
          {content}
        </Markdown>
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-2"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              id="check-2"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-slate-600 text-sm"
            htmlFor="check-2"
          >
            我已充分了解上述內容，並同意參與此研究。
          </label>
        </div>
        <p>請點選下方「開始」以繼續填答，謝謝您的配合。</p>
      </div>
      <Button disabled={!checked} onClick={onClick}>
        開始
      </Button>
    </div>
  );
};

export default Page1;
