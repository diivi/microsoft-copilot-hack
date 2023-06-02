import Tasks from "../Components/Tasks";
import PersonalFin from "../Components/PersonalFin";
import Weather from "../Components/Weather";
import Url from "../Components/Url";

const Page1 = () => {
  return (
    <div className="bg-mainGray min-h-screen h-full text-black flex">
      <div className="w-3/5 flex flex-col">
        <Tasks />
        <PersonalFin />
      </div>
      <div className="w-2/5 flex flex-col">
        <Weather />
        <Url />
      </div>
    </div>
  );
};

export default Page1;
