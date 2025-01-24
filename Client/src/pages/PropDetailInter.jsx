import { useEffect, useState } from "react";
import CardCol from "../components/CardCol";
import RealDetail from "../components/RealDetail";
import TopDetail from "../components/TopDetail";
import { getPropById, getPropByIdInter } from "../../Apis/ListProp";
import { useSearchParams } from "react-router-dom";
import SkeletonBig from "../components/SkeletonBig";

const PropDetailInter = () => {
  const [searchParams] = useSearchParams();
  const propId = searchParams.get("id");
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const data = await getPropByIdInter(propId);
        setGetData(data.output);
        console.log(data.output);
      } catch (error) {
        console.error(error);
      }
    };

    if (propId) {
      fetchPropData();
    }
  }, [propId]);

  if (!getData) {
    return <SkeletonBig />;
  }
  const returnPhotoUrls = getData?.photos.map((photo) => photo.url);
  const combinedImages = [getData.mainPhoto, ...returnPhotoUrls];
  return (
    <div className="detail-prop-container">
      <TopDetail combinedImages={combinedImages} />
      <RealDetail getData={getData} />

      <div className="card-box-all mt-10 p-10 px-20">
        <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
          Related Properties
        </div>
        {/* Add your related properties rendering logic here */}
      </div>
    </div>
  );
};

export default PropDetailInter;
