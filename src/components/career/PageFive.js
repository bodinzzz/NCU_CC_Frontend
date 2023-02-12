import { useState } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageFive.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import WorldMap from "../../constant/map/WorldMap.json";
import TaiwanMap from "../../constant/map/TaiwanMap.json";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";
import ScrollPageNav from "../elements/ScrollPageNav";
import ScrollableBarChart from "../graduated/ScrollableBarChart";

function PageFive({ data, topRef }) {
  const [continentData, setContinentData] = useState(data.continentData);
  const [taiwanAreaData, setTaiwanAreaData] = useState(data.taiwanAreaData);
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  /* CHART TOOLTIP */

  // States related to chartTooltip
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [chartTooltipContent, setChartTooltipContent] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  // Functions related to chartTooltip
  const handleMouseMove = (event) => {
    setMousePos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const hoverArea = (currentArea, setAreaData, areaData) => {
    setAreaData((prev) => {
      prev[currentArea].isHover = true;
      return { ...prev };
    });
    setChartTooltipContent(
      `${areaData[currentArea].name} : ${areaData[currentArea].percentage}%`
    );
    setShowTooltip(true);
  };

  const unHoverArea = (currentArea, setAreaData, areaData) => {
    setAreaData((prev) => {
      prev[currentArea].isHover = false;
      return { ...prev };
    });
    setChartTooltipContent("");
    setShowTooltip(false);
  };

  // Styles related to chartTooltip
  const tooltipStyle = {
    position: "fixed",
    top: mousePos.y + "px",
    left: mousePos.x + "px",
  };

  /* OUTLYING ISLAND MARKER */

  const islandMarkerData = [
    { name: "Penghu County", coordinates: [119.196, 23.843], size: [80, 80] },
    { name: "Kinmen County", coordinates: [118.155, 24.67], size: [50, 50] },
    {
      name: "Lienchiang County",
      coordinates: [119.74, 26.45],
      size: [70, 100],
    },
  ];

  // IslandMarker (NOT WORK I DON'T KNOW WHY)
  /*
  Parameters:
    name: string  // name of the island
    coordinates: object
    size: object // [height, width] of the rect
  */
  // function IslandMarker({ name, coordinates, size }) {
  //   return (
  //     <Marker
  //       coordinates={coordinates}
  //       onMouseEnter={() => {
  //         hoverArea(name, setTaiwanAreaData, taiwanAreaData);
  //       }}
  //       onMouseLeave={() => {
  //         unHoverArea(name, setTaiwanAreaData, taiwanAreaData);
  //       }}
  //     >
  //       <rect
  //         style={{
  //           height: size[0],
  //           width: size[1],
  //           stroke: taiwanAreaData[name].fillColor,
  //           strokeWidth: 5,
  //           fill: "rgba(248, 248, 248, 0.01)",
  //         }}
  //       />
  //     </Marker>
  //   );
  // }

  return (
    <div className="career-page-5">
      {/* TOOLTIP */}
      {showTooltip && (
        <div className="career-page-5__chart-tooltip" style={tooltipStyle}>
          {chartTooltipContent}
        </div>
      )}
      {/* <ScrollPageNav nowPage={5} /> */}
      {/* TITLE */}
      <div className="career-page-5__title">
        <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
        <span>建築營造類 工作地區分布</span>
      </div>
      {/* MAP CHART */}
      <div className="career-page-5__chart-container">
        {/* WORLD MAP CHART */}
        <ComposableMap
          onMouseMove={handleMouseMove}
          className="composable-map-style"
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={WorldMap}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const currentContinent = geo.properties.continent;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={continentData[currentContinent].fillColor}
                      stroke="#FFF"
                      strokeWidth="0.5"
                      // MOUSE EVENTS
                      onMouseEnter={() => {
                        hoverArea(
                          currentContinent,
                          setContinentData,
                          continentData
                        );
                      }}
                      onMouseLeave={() => {
                        unHoverArea(
                          currentContinent,
                          setContinentData,
                          continentData
                        );
                      }}
                      className={
                        continentData[currentContinent].isHover
                          ? "geographies-style--hover"
                          : "geographies-style--default"
                      }
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        {/* TAIWAN MAP CHART */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 6000,
          }}
          onMouseMove={handleMouseMove}
          className="composable-map-style"
        >
          <ZoomableGroup zoom={1} center={[120.7, 24]}>
            <Geographies geography={TaiwanMap}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  const currentTaiwanArea = geo.properties.area;

                  return (
                    <Geography
                      id={currentTaiwanArea}
                      key={geo.rsmKey}
                      geography={geo}
                      fill={taiwanAreaData[currentTaiwanArea].fillColor}
                      className={
                        taiwanAreaData[currentTaiwanArea].isHover
                          ? "geographies-style--hover"
                          : "geographies-style--default"
                      }
                      /* MOUSE EVENTS */
                      onMouseEnter={() => {
                        hoverArea(
                          currentTaiwanArea,
                          setTaiwanAreaData,
                          taiwanAreaData
                        );
                      }}
                      onMouseLeave={() => {
                        unHoverArea(
                          currentTaiwanArea,
                          setTaiwanAreaData,
                          taiwanAreaData
                        );
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {/* ISLAND MARKER */}
            {/* {islandMarkerData.map((data, index) => (
                <IslandMarker name={data.name} coordinates={data.coordinates} size={data.size} key={index} />
              ))} */}
            {islandMarkerData.map((data, index) => (
              <Marker
                key={"Marker-" + index.toString()}
                coordinates={data.coordinates}
                onMouseEnter={() => {
                  hoverArea(data.name, setTaiwanAreaData, taiwanAreaData);
                }}
                onMouseLeave={() => {
                  unHoverArea(data.name, setTaiwanAreaData, taiwanAreaData);
                }}
              >
                <rect
                  style={{
                    height: data.size[0],
                    width: data.size[1],
                    stroke: taiwanAreaData[data.name].fillColor,
                    strokeWidth: 5,
                    fill: "rgba(248, 248, 248, 0.01)",
                  }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <ScrollToTopBtn theme={"3"} topRef={topRef} />
    </div>
  );
}

export default PageFive;
