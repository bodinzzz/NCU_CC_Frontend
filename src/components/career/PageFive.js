import { useState } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageFive.scss";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import WorldMap from "../../constant/map/WorldMap.json";
import TaiwanMap from "../../constant/map/TaiwanMap.json";
import TaiwanAreaData from "../../constant/TaiwanAreaData.json";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";
import ScrollPageNav from "../elements/ScrollPageNav";
import ScrollableBarChart from "../graduated/ScrollableBarChart";

function PageFive() {
  const [selectedCareer, setSelectedCareer] = useState("建築營造類");
  const [selectedArea, setSelectedArea] = useState("境外");

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  // CHART DATA
  const [continentData, setContinentData] = useState({
    China: {
      name: "亞洲（香港、澳門、大陸地區）",
      percentage: 40,
      fillColor: "#1BD1E9",
      isHover: false,
    },
    "Asia(Taiwan)": {
      name: "臺灣",
      percentage: 0,
      fillColor: "#D8EFF2",
      isHover: false,
    },
    Asia: {
      name: "亞洲（香港、澳門、大陸地區以外國家）",
      percentage: 30,
      fillColor: "#6DE3F2",
      isHover: false,
    },
    Africa: {
      name: "非洲",
      percentage: 10,
      fillColor: "#ADEFF7",
      isHover: false,
    },
    Australia: {
      name: "大洋洲",
      percentage: 3,
      fillColor: "#ADEFF7",
      isHover: false,
    },
    Europe: {
      name: "歐洲",
      percentage: 2,
      fillColor: "#ADEFF7",
      isHover: false,
    },
    "North America": {
      name: "北美洲",
      percentage: 2,
      fillColor: "#ADEFF7",
      isHover: false,
    },
    "Central America": {
      name: "中美洲",
      percentage: 1,
      fillColor: "#ADEFF7",
      isHover: false,
    },
    "South America": {
      name: "南美洲",
      percentage: 2,
      fillColor: "#ADEFF7",
      isHover: false,
    },
  });
  const [taiwanAreaData, setTaiwanAreaData] = useState(TaiwanAreaData);

  const continentData2 = [
    { name: "亞洲（香港、澳門、大陸地區）", percentage: 95, fillColor: "blue", isHover: false },
    { name: "臺灣", percentage: 0, fillColor: "black", isHover: false },
  ];

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

  function hoverArea(currentArea, setAreaData, areaData) {
    setAreaData((prev) => {
      prev[currentArea].isHover = true;
      return { ...prev };
    });
    setChartTooltipContent(`${areaData[currentArea].name} : ${areaData[currentArea].percentage}%`);
    setShowTooltip(true);
  }

  function unHoverArea(currentArea, setAreaData, areaData) {
    setAreaData((prev) => {
      prev[currentArea].isHover = false;
      return { ...prev };
    });
    setChartTooltipContent("");
    setShowTooltip(false);
  }

  // Styles related to chartTooltip
  const tooltipStyle = {
    position: "fixed",
    top: mousePos.y + "px",
    left: mousePos.x + "px",
  };

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
        <span>建築營造類 國內 工作地區分布</span>
      </div>
      {/* MAP CHART */}
      <div className="career-page-5__chart-container">
        {/* WORLD MAP CHART */}
        <div className="career-page-5__chart-container--world-map">
          <ComposableMap onMouseMove={handleMouseMove}>
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
                          hoverArea(currentContinent, setContinentData, continentData);
                        }}
                        onMouseLeave={() => {
                          unHoverArea(currentContinent, setContinentData, continentData);
                        }}
                        className={continentData[currentContinent].isHover ? "geographies-style-hover" : "geographies-style"}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
        {/* TAIWAN MAP CHART */}
        <div className="career-page-5__chart-container--taiwan-map">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 6000,
            }}
            onMouseMove={handleMouseMove}
          >
            <ZoomableGroup zoom={1} center={[120.7, 24]}>
              <Geographies geography={TaiwanMap}>
                {({ geographies }) =>
                  geographies.map((geo, index) => {
                    const currentTaiwanArea = geo.properties.area;
                    // console.log(geo.properties);
                    return (
                      <Geography
                        id={index}
                        fill={taiwanAreaData[currentTaiwanArea].fillColor}
                        // fill={geo.properties.fillColor}
                        stroke="#FFF"
                        strokeWidth="1"
                        key={geo.rsmKey}
                        geography={geo}
                        // MOUSE EVENTS
                        onMouseEnter={() => {
                          hoverArea(currentTaiwanArea, setTaiwanAreaData, taiwanAreaData);
                        }}
                        onMouseLeave={() => {
                          unHoverArea(currentTaiwanArea, setTaiwanAreaData, taiwanAreaData);
                        }}
                        className={taiwanAreaData[currentTaiwanArea].isHover ? "geographies-style-hover" : "geographies-style"}
                      />
                    );
                  })
                }
              </Geographies>
              <Marker coordinates={[119.196, 23.843]}>
                <rect
                  style={{
                    width: 80,
                    height: 80,
                    stroke: taiwanAreaData["Penghu County"].fillColor,
                    strokeWidth: 5,
                    fill: "rgba(248, 248, 248, 0.01)",
                  }}
                  onMouseEnter={() => {
                    hoverArea("Penghu County", setTaiwanAreaData, taiwanAreaData);
                  }}
                  onMouseLeave={() => {
                    unHoverArea("Penghu County", setTaiwanAreaData, taiwanAreaData);
                  }}
                />
              </Marker>
              <Marker coordinates={[118.155, 24.67]}>
                <rect
                  style={{
                    width: 50,
                    height: 50,
                    stroke: taiwanAreaData["Kinmen County"].fillColor,
                    strokeWidth: 5,
                    fill: "rgba(248, 248, 248, 0.01)",
                  }}
                  onMouseEnter={() => {
                    hoverArea("Kinmen County", setTaiwanAreaData, taiwanAreaData);
                  }}
                  onMouseLeave={() => {
                    unHoverArea("Kinmen County", setTaiwanAreaData, taiwanAreaData);
                  }}
                />
              </Marker>
              <Marker coordinates={[119.74, 26.45]}>
                <rect
                  style={{
                    width: 100,
                    height: 70,
                    stroke: taiwanAreaData["Lienchiang County"].fillColor,
                    strokeWidth: 5,
                    fill: "rgba(248, 248, 248, 0.01)",
                  }}
                  onMouseEnter={() => {
                    hoverArea("Lienchiang County", setTaiwanAreaData, taiwanAreaData);
                  }}
                  onMouseLeave={() => {
                    unHoverArea("Lienchiang County", setTaiwanAreaData, taiwanAreaData);
                  }}
                />
              </Marker>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
      <ScrollToTopBtn theme={"3"} themeName={"career"} />
    </div>
  );
}

export default PageFive;