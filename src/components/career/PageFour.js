import { useState, useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageFour.scss";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import WorldMap from "../../assets/map/WorldMap.json";

import SourceTooltip from "../elements/SourceTooltip";

// TO SORT DATA ADD GET FILL COLOR
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
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  // MAP JSON FILE
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const [continentData, setContinentData] = useState(
    [
      {
        name: "China", //亞洲（香港、澳門、大陸地區）
        percentage: 95,
        fillColor: "blue",
      },
      {
        name: "Asia", //亞洲（香港、澳門、大陸地區以外國家）
        percentage: 85,
        fillColor: "red",
      },
      {
        name: "Australia", //大洋洲
        percentage: 75,
        fillColor: "green",
      },
      {
        name: "Africa", //非洲
        percentage: 65,
        fillColor: "yellow",
      },
      {
        name: "Australia", //大洋洲
        percentage: 55,
        fillColor: "orange",
      },
      {
        name: "Europe", //歐洲
        percentage: 45,
        fillColor: "gray",
      },
      {
        name: "North America", //北美洲
        percentage: 35,
        fillColor: "purple",
      },
      {
        name: "Central America", //中美洲
        percentage: 25,
        fillColor: "red",
      },
      {
        name: "South America", //南美洲
        percentage: 0,
        fillColor: "pink",
      },
    ].map((data, index) => {
      return {
        ...data,
        isHover: false,
      };
    })
  );

  // GET FILL COLOR WITH SINGLE COUNTRY'S CONTINENT
  function getFill(continent) {
    var fillColor = "black";
    // console.log(typeof continent);
    // return sortedData[sortedData.findIndex((item) => item.name === "China")].fill;
    // return sortedData[sortedData.findIndex((item) => item.name === continent)].fill;
    if (continent === "China") {
      fillColor = continentData[0].fillColor;
    } else if (continent === "Asia") {
      fillColor = continentData[1].fillColor;
    } else if (continent === "Australia") {
      fillColor = continentData[2].fillColor;
    } else if (continent === "Africa") {
      fillColor = continentData[3].fillColor;
    } else if (continent === "Europe") {
      fillColor = continentData[4].fillColor;
    } else if (continent === "North America") {
      fillColor = continentData[5].fillColor;
    } else if (continent === "Central America") {
      fillColor = continentData[6].fillColor;
    } else if (continent === "South America") {
      fillColor = continentData[7].fillColor;
    }
    return fillColor;
  }

  // 移進去一個國家跟移出去一個國家都會改isHover=!isHover(這裡有成功)
  function updateContinentData(key) {
    const continentDataCopy = [...continentData];
    continentDataCopy[key].isHover = !continentDataCopy[key].isHover;
    setContinentData(continentDataCopy);
  }

  return (
    <div className="career-page-4">
      {/* TITLE */}
      <div className="career-page-4__title">
        <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
        <span>建築營造類 國內 工作地區分布</span>
      </div>
      {/* MAP CHART */}
      <div className="career-page-4__chart-container">
        <ComposableMap>
          {/* MAKE IT POSSIBLE TO ZOOM IN AND OUT */}
          <ZoomableGroup zoom={1}>
            <Geographies geography={WorldMap}>
              {({ geographies }) =>
                geographies.map((geo, index) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(WorldMap.features[index].properties.continent)}
                    stroke="#FFF"
                    strokeWidth="0.5"
                    // MOUSE EVENTS
                    onMouseEnter={() => {
                      continentData.map((data, key) => {
                        if (geo.properties.continent === data.name) {
                          updateContinentData(key);
                          console.log(geo.properties.continent);
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      continentData.map((data, key) => {
                        if (geo.properties.continent === data.name) {
                          updateContinentData(key);
                        }
                      });
                    }}
                    className={
                      continentData[continentData.findIndex((item) => WorldMap.features[40].properties.continent === item.name)].isHover
                        ? "geographies-style-hover"
                        : "geographies-style"
                    }
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default PageFour;
