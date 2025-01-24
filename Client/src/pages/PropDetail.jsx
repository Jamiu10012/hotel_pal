import { useEffect, useState } from "react";
import CardCol from "../components/CardCol";
import RealDetail from "../components/RealDetail";
import TopDetail from "../components/TopDetail";
import { getPropById, getPropertiesRelated } from "../../Apis/ListProp";
import { useSearchParams, useLocation } from "react-router-dom";
import SkeletonBig from "../components/SkeletonBig";
import Skeleton from "../components/Skeleton";
import CardColRow from "../components/CardColRow";

const PropDetail = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const propId = searchParams.get("id");
  const [getData, setGetData] = useState(null);
  const [propertyData, setPropertyData] = useState(null);
  const property = location.state;
  console.log({ property });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertiesRelated();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const data = await getPropById(propId);
        setGetData(data);
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

  const combinedImages = [getData.cover_image, ...getData.rest_images];

  return (
    <div className="detail-prop-container bg-[#F6F7EB]">
      <TopDetail combinedImages={property?.rest_images} />
      <RealDetail getData={property} />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-4xl font-semibold text-[#000] mb-6 text-center">
          Related Properties
        </div>
        {/* Add your related properties rendering logic here */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {propertyData !== null
            ? propertyData?.map((property) => (
                <CardCol key={property._id} property={property} />
              ))
            : [1, 2, 3].map((_, id) => <Skeleton key={id} />)}
        </div>
      </div>
    </div>
  );
};

export default PropDetail;
