import { useState } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageFour.scss";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import WorldMap from "../../constant/map/WorldMap.json";
import TaiwanMap from "../../constant/map/TaiwanMap.json";
import TaiwanAreaData from "../../constant/TaiwanAreaData.json";
import SourceTooltip from "../elements/SourceTooltip";

// (NOT USE) TO SORT DATA ADD GET FILL COLOR
// function sortData(data) {
//   data.sort((a, b) => (a.percentage < b.percentage ? 1 : -1));
//   // const fillColors = ["#0096C7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"];
//   const fillColors = ["#0096C7", "#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
//   var fillColor = "black";

//   const sortedData = data.map((data, index) => {
//     if (data.percentage >= 80) {
//       fillColor = fillColors[0];
//     } else if (data.percentage < 80 && data.percentage >= 60) {
//       fillColor = fillColors[1];
//     } else if (data.percentage < 60 && data.percentage >= 40) {
//       fillColor = fillColors[2];
//     } else if (data.percentage < 40 && data.percentage >= 20) {
//       fillColor = fillColors[3];
//     } else if (data.percentage < 20 && data.percentage >= 1) {
//       fillColor = fillColors[4];
//     } else if (data.percentage < 1 && data.percentage >= 0) {
//       fillColor = fillColors[5];
//     }
//     return {
//       name: data.name,
//       percentage: data.percentage,
//       isHover: data.isHover,
//       fill: fillColor,
//     };
//   });
//   return sortedData;
// }

function PageFour() {
  const [selectedCareer, setSelectedCareer] = useState("建築營造類");
  const [selectedArea, setSelectedArea] = useState("境外");

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  const [chartTooltipContent, setChartTooltipContent] = useState("");

  const [continentData, setContinentData] = useState({
    China: {
      name: "亞洲（香港、澳門、大陸地區）",
      percentage: 95,
      fillColor: "blue",
      isHover: false,
    },
    "Asia(Taiwan)": {
      name: "臺灣",
      percentage: 0,
      fillColor: "black",
      isHover: false,
    },
    Asia: {
      name: "亞洲（香港、澳門、大陸地區以外國家）",
      percentage: 85,
      fillColor: "red",
      isHover: false,
    },
    Africa: {
      name: "非洲",
      percentage: 65,
      fillColor: "yellow",
      isHover: false,
    },
    Australia: {
      name: "大洋洲",
      percentage: 55,
      fillColor: "orange",
      isHover: false,
    },
    Europe: {
      name: "歐洲",
      percentage: 45,
      fillColor: "gray",
      isHover: false,
    },
    "North America": {
      name: "北美洲",
      percentage: 35,
      fillColor: "purple",
      isHover: false,
    },
    "Central America": {
      name: "中美洲",
      percentage: 25,
      fillColor: "red",
      isHover: false,
    },
    "South America": {
      name: "南美洲",
      percentage: 0,
      fillColor: "pink",
      isHover: false,
    },
  });

  const [taiwanAreaData, setTaiwanAreaData] = useState({ TaiwanAreaData });

  // (NOT USE) GET FILL COLOR WITH SINGLE COUNTRY'S CONTINENT
  // function getFill(continent) {
  //   var fillColor = "black";
  //   return continentData[continent] ? continentData[continent].fillColor : "black";
  // }

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (event) => {
    setMousePos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // const [tooltipStyle, setTooltipStyle] = useState({
  //   position: "fixed",
  //   top: mousePos.y + "px",
  //   left: mousePos.x + "px",
  // });

  const tooltipStyle = {
    position: "fixed",
    top: mousePos.y + "px",
    left: mousePos.x + "px",
  };

  function hoverContinent(currentArea, setData, areaData) {
    setData((prev) => {
      prev[currentArea].isHover = true;
      return { ...prev };
    });
    setChartTooltipContent(areaData[currentArea].name + ":  " + areaData[currentArea].percentage + "%");
    setShowTooltip(true);
    // setContinentData((prev) => {
    //   prev[currentArea].isHover = true;
    //   return { ...prev };
    // });
    // setChartTooltipContent(continentData[currentArea].name + ":  " + continentData[currentArea].percentage + "%");
    // setShowTooltip(true);
  }

  function unHoverContinent(currentArea) {
    setContinentData((prev) => {
      prev[currentArea].isHover = false;
      return { ...prev };
    });
    setChartTooltipContent("");
    setShowTooltip(false);
  }

  return (
    <div className="career-page-4">
      {/* TOOLTIP */}
      {showTooltip && (
        <div className="career-page-4__chart-tooltip" style={tooltipStyle}>
          {chartTooltipContent}
        </div>
      )}
      {/* TITLE */}
      <div className="career-page-4__title">
        <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
        <span>建築營造類 國內 工作地區分布</span>
      </div>
      {/* MAP CHART */}
      <div className="career-page-4__chart-container">
        {/* <ComposableMap onMouseMove={handleMouseMove}>
          <ZoomableGroup zoom={1}>
            <Geographies geography={WorldMap}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const currentArea = selectedArea === "境內" ? geo.properties.area : geo.properties.continent;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={selectedArea === "境內" ? taiwanAreaData[currentArea].fillColor : continentData[currentArea].fillColor}
                      stroke="#FFF"
                      strokeWidth="0.5"
                      // MOUSE EVENTS
                      onMouseEnter={() => {
                        hoverContinent(currentArea, setContinentData, continentData);
                      }}
                      onMouseLeave={() => {
                        unHoverContinent(currentArea);
                      }}
                      className={continentData[currentArea].isHover ? "geographies-style-hover" : "geographies-style"}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap> */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 5000,
          }}
        >
          <ZoomableGroup zoom={1} center={[120.9876, 23.83876]}>
            <Geographies geography={TaiwanMap}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  return (
                    <Geography
                      id={index}
                      fill={geo.properties.fillColor}
                      stroke="#FFF"
                      strokeWidth="1"
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        console.log(geo.properties.area);
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default PageFour;
