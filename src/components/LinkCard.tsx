import "./LinkCard.css";

const LinkCard = ({ action }: any) => {
  return (
    <div className="card text-center shadow-2xl compact justify-between">
      <div className="flex justify-between flex-col p-4 h-full w-full">
        <div className="flex items-center flex-col gap-2">
          <figure className="pt-6 w-full h-full">{action.icon}</figure>
          <h2 className="text-sm lg:text-lg font-medium">{action.name}</h2>
          <p className="opacity-70 text-xs lg:text-sm">{action.description}</p>
        </div>
        <div className="justify-center mt-3 lg:mt-6 gap-2 flex">
          <button
            className="btn btn-outline btn-circle btn-sm"
            onClick={(e) => {
              e.preventDefault();

              window.open(action.url, "_blank");
            }}
            title="Open shortcut"
          >
            <svg
              stroke="currentColor"
              className="text-lg"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="40"
                d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
