import { useState } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageFour.scss";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import WorldMap from "../../constant/map/WorldMap.json";
import TaiwanMap from "../../constant/map/TaiwanMap.json";
import TaiwanAreaData from "../../constant/TaiwanAreaData.json";
import SourceTooltip from "../elements/SourceTooltip";

function PageFour() {
  const [selectedCareer, setSelectedCareer] = useState("建築營造類");
  const [selectedArea, setSelectedArea] = useState("境外");

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  // CHART DATA
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
  const [taiwanAreaData, setTaiwanAreaData] = useState(TaiwanAreaData);

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
        {false ? (
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
        ) : (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 5000,
            }}
            onMouseMove={handleMouseMove}
          >
            <ZoomableGroup zoom={1} center={[120.9876, 23.83876]}>
              <Geographies geography={TaiwanMap}>
                {({ geographies }) =>
                  geographies.map((geo, index) => {
                    const currentTaiwanArea = geo.properties.area;
                    console.log(geo.properties);
                    return (
                      <Geography
                        id={index}
                        fill={geo.properties.fillColor} //暫定
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
            </ZoomableGroup>
          </ComposableMap>
        )}
      </div>
    </div>
  );
}

export default PageFour;
