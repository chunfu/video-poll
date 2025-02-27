import React from "react";

const Page1: React.FC = () => {
  return (
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
        src="https://www.surveycake.com/s/M6PWl"
        allowTransparency={true}
        className="w-full h-[100vh] border border-[#ddd]"
      >
        載入中…
      </iframe>
  );
};

export default Page1;