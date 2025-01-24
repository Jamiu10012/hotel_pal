import CardCol from "../components/CardCol";
import "../assets/css/property.css";
import PropertyFilter from "../components/PropertyFilter";
import { useEffect, useState } from "react";
import { getAllProperties, getAllPropertiesInter } from "../../Apis/ListProp";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import CardColInter from "../components/CardColInter";
import CardColRow from "../components/CardColRow";
import propHero from "../assets/images/properties.jpg";
import propHero2 from "../assets/images/blog_header2.jpeg";
import TopDetail from "../components/TopDetail";

const Properties = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [propertyInterData, setPropertyInterData] = useState(null);
  const [searchParams] = useSearchParams();
  const location = searchParams.get("l");
  const checkIn = searchParams.get("n");
  const checkOut = searchParams.get("o");
  const guest = searchParams.get("g");

  const [locationText, setLocationText] = useState(location);
  const [checkInText, setCheckInText] = useState(checkIn);
  const [checkOutText, setCheckOutText] = useState(checkOut);
  const [guestText, setGuestText] = useState(guest);
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedBed, setSelectedBed] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [priceFrom, setpriceFrom] = useState("");
  const [priceTo, setpriceTo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProperties();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPropertiesInter();
        setPropertyInterData(data.properties);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(propertyInterData);
  let filteredProperties = propertyData;

  if (locationText) {
    const locationLower = locationText.toLowerCase();
    filteredProperties = filteredProperties?.filter(
      (property) =>
        property.country.toLowerCase().includes(locationLower) ||
        property.state.toLowerCase().includes(locationLower) ||
        property.city.toLowerCase().includes(locationLower) ||
        property.county.toLowerCase().includes(locationLower) ||
        property.area.toLowerCase().includes(locationLower)
    );
  }

  if (guestText) {
    const guestNumber = parseInt(guestText, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.guest_no >= guestNumber
    );
  }
  if (selectedBath) {
    const bathNumber = parseInt(selectedBath, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.bathrooms >= bathNumber
    );
  }
  if (selectedBed) {
    const bedNumber = parseInt(selectedBed, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.bedrooms >= bedNumber
    );
  }
  if (selectedType) {
    const sCate = selectedType?.toLowerCase();
    filteredProperties = filteredProperties?.filter((property) =>
      property.category.toLowerCase().includes(sCate)
    );
  }
  if (selectedSize) {
    const sType = selectedSize?.toLowerCase();
    filteredProperties = filteredProperties?.filter((property) =>
      property.room_type.toLowerCase().includes(sType)
    );
  }

  if (priceFrom && priceTo) {
    const priceFromValue = parseFloat(priceFrom);
    const priceToValue = parseFloat(priceTo);
    filteredProperties = filteredProperties?.filter(
      (property) =>
        Number(property.price_per_night) >= priceFromValue &&
        Number(property.price_per_night) <= priceToValue
    );
  }
  // if (guestText) {
  //   const guestNumber = parseInt(guestText, 10);
  //   filteredProperties = filteredProperties.filter(
  //     (property) => property.guest_no >= guestNumber
  //   );
  // }
  return (
    <div className="bg-[#F6F7EB]">
      {/* <div className="h-[300px] md:h-[400px] relative flex justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: `url(${propHero}) center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 h-full w-full bg-[#fff] opacity-40"></div>
        </div>
        <h1 className="relative z-20 text-4xl font-bold">PROPERTIES</h1>
      </div> */}
      <TopDetail
        combinedImages={[propHero, propHero2]}
        children={
          <div className="h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <h1 className="relative z-20 text-4xl font-bold text-white">PROPERTIES</h1>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto px-4 lg:px-0 pb-16 mt-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="">
            <PropertyFilter
              locationText={locationText}
              setLocationText={setLocationText}
              checkInText={checkInText}
              setCheckInText={setCheckInText}
              checkOutText={checkOutText}
              setCheckOutText={setCheckOutText}
              guestText={guestText}
              setGuestText={setGuestText}
              setSelectedBath={setSelectedBath}
              selectedBath={selectedBath}
              selectedBed={selectedBed}
              setSelectedBed={setSelectedBed}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              priceFrom={priceFrom}
              setpriceFrom={setpriceFrom}
              priceTo={priceTo}
              setpriceTo={setpriceTo}
            />
          </div>

          <div className="md:col-span-3 grid md:grid-cols-2 gap-8">
            {propertyInterData?.map((property) => (
              <CardColInter key={property._id} property={property} />
            ))}
            {filteredProperties?.length > 0
              ? filteredProperties?.map((property) => (
                  <CardCol key={property._id} property={property} />
                ))
              : [1, 2, 3, 4, 5, 6].map((_, id) => <Skeleton key={id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
