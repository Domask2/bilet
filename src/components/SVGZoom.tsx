// @ts-nocheck
import { useEffect, useState } from "react";
import { ReactSVGPanZoom, zoomOnViewerCenter } from "react-svg-pan-zoom";
import { useWindowDimensions } from "../hook/useWindowDimensions";
import { initValue, littleValue, middleValue } from "../service/value";
import CustomToolbar from "./CustomToolbar";

const SVGZoom = () => {
  const { width } = useWindowDimensions();
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    if (width < 1000 && width > 600) {
      setValue(middleValue)
    }

    if(width > 1000) {
      setValue(initValue)
    }

    if(width < 600) {
      setValue(littleValue)
    }
  }, [width])

  const [tool, setTool] = useState("auto");
  const handleTool = (tool: never) => setTool(tool);
  const handleValue = (nextValue: never) => setValue(nextValue);
  const handleZoomIn = () => setValue(zoomOnViewerCenter(value, 1.1));
  const handleZoomOut = () => setValue(zoomOnViewerCenter(value, 0.9));
  const handleReset = () => {
    if (width < 1000 && width > 600) {
      setValue(middleValue)
    }

    if(width > 1000) {
      setValue(initValue)
    }

    if(width < 600) {
      setValue(littleValue)
    }
  };

  return (
    <ReactSVGPanZoom
      customToolbar={() => (
        <CustomToolbar
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          handleReset={handleReset}
        />
      )}
      className='svgZoom'
      background={'white'}
      scaleFactorMax={4}
      scaleFactorMin={-2}
      disableDoubleClickZoomWithToolAuto={true}
      detectAutoPan={false}
      width={800}
      height={800}
      tool={tool}
      onChangeTool={handleTool}
      value={value}
      onChangeValue={handleValue}
    >
      <svg id="hall_scheme"
           viewBox="167 -152 2065 2263"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">

        <g className="overlays">

          <g transform="translate(1199, 108) rotate(0)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">ПАРТЕР</text>
          </g>
          <g transform="translate(1199, -60) rotate(0)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">ОРКЕСТРОВАЯ
              ЯМА
            </text>
          </g>
          <g transform="translate(1199, 972) rotate(0)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">АМФИТЕАТР
            </text>
          </g>
          <g transform="translate(412, 528) rotate(-90)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">БЕЛЬЭТАЖ ЛЕВАЯ
              СТОРОНА
            </text>
          </g>
          <g transform="translate(1976, 528) rotate(90)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">БЕЛЬЭТАЖ
              ПРАВАЯ СТОРОНА
            </text>
          </g>
          <g transform="translate(2164, 608) rotate(90)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">ПЕРВЫЙ ЯРУС
              ПРАВАЯ СТОРОНА
            </text>
          </g>
          <g transform="translate(236, 608) rotate(-90)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">ПЕРВЫЙ ЯРУС
              ЛЕВАЯ СТОРОНА
            </text>
          </g>
          <g transform="translate(1199, 1644) rotate(0)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">БЕЛЬЭТАЖ
              СЕРЕДИНА
            </text>
          </g>
          <g transform="translate(1196, 1988) rotate(0)">
            <text textAnchor="middle" alignmentBaseline="middle" x="0" y="0" fontSize="16">ПЕРВЫЙ ЯРУС
              СЕРЕДИНА
            </text>
          </g>

          <g id="stage" transform="translate(1199, -121) rotate(0)">
            <rect fill="#e2e6ea" fillRule="nonzero" x="-629" y="-31" width="1258" height="62"/>
            <text id="Сцена" fontSize="14" fontWeight="bold">
              <tspan x="0" y="0" textAnchor="middle">СЦЕНА</tspan>
            </text>
          </g>
        </g>

        <g className="sectors">
          <g id="parter" className="sector"></g>
          <g id="amfiteatr" className="sector"></g>
          <g id="beltaj_middle" className="sector"></g>
          <g id="beltaj_left" className="sector"></g>
          <g id="beltaj_right" className="sector"></g>
          <g id="first_level_middle" className="sector"></g>
          <g id="first_level_left" className="sector"></g>
          <g id="first_level_right" className="sector"></g>
          <g id="orchestry_bottom" className="sector"></g>
        </g>

        <g className="places" transform="translate(-8, -8)">
          <rect className="place" x="2066" y="169" width="16" height="16" rx="6"
                id="beltaj_right_3_6" sectorAlias="beltaj_right" row="3" seat="6"/>
          <rect className="place" x="2066" y="141" width="16" height="16" rx="6"
                id="beltaj_right_3_5" sectorAlias="beltaj_right" row="3" seat="5"/>
          <rect className="place" x="2066" y="225" width="16" height="16" rx="6"
                id="beltaj_right_3_8" sectorAlias="beltaj_right" row="3" seat="8"/>
          <rect className="place" x="2066" y="197" width="16" height="16" rx="6"
                id="beltaj_right_3_7" sectorAlias="beltaj_right" row="3" seat="7"/>
          <rect className="place" x="2066" y="58" width="16" height="16" rx="6"
                id="beltaj_right_3_2" sectorAlias="beltaj_right" row="3" seat="2"/>
          <rect className="place" x="2066" y="30" width="16" height="16" rx="6"
                id="beltaj_right_3_1" sectorAlias="beltaj_right" row="3" seat="1"/>
          <rect className="place" x="2066" y="113" width="16" height="16" rx="6"
                id="beltaj_right_3_4" sectorAlias="beltaj_right" row="3" seat="4"/>
          <rect className="place" x="2066" y="86" width="16" height="16" rx="6"
                id="beltaj_right_3_3" sectorAlias="beltaj_right" row="3" seat="3"/>
          <rect className="place" x="2066" y="252" width="16" height="16" rx="6"
                id="beltaj_right_3_9" sectorAlias="beltaj_right" row="3" seat="9"/>
          <rect className="place" x="2038" y="141" width="16" height="16" rx="6"
                id="beltaj_right_2_5" sectorAlias="beltaj_right" row="2" seat="5"/>
          <rect className="place" x="2038" y="113" width="16" height="16" rx="6"
                id="beltaj_right_2_4" sectorAlias="beltaj_right" row="2" seat="4"/>
          <rect className="place" x="2038" y="197" width="16" height="16" rx="6"
                id="beltaj_right_2_7" sectorAlias="beltaj_right" row="2" seat="7"/>
          <rect className="place" x="2038" y="169" width="16" height="16" rx="6"
                id="beltaj_right_2_6" sectorAlias="beltaj_right" row="2" seat="6"/>
          <rect className="place" x="2038" y="30" width="16" height="16" rx="6"
                id="beltaj_right_2_1" sectorAlias="beltaj_right" row="2" seat="1"/>
          <rect className="place" x="2038" y="86" width="16" height="16" rx="6"
                id="beltaj_right_2_3" sectorAlias="beltaj_right" row="2" seat="3"/>
          <rect className="place" x="2038" y="58" width="16" height="16" rx="6"
                id="beltaj_right_2_2" sectorAlias="beltaj_right" row="2" seat="2"/>
          <rect className="place" x="2038" y="252" width="16" height="16" rx="6"
                id="beltaj_right_2_9" sectorAlias="beltaj_right" row="2" seat="9"/>
          <rect className="place" x="2038" y="225" width="16" height="16" rx="6"
                id="beltaj_right_2_8" sectorAlias="beltaj_right" row="2" seat="8"/>
          <rect className="place" x="654" y="396" width="16" height="16" rx="6"
                id="parter_8_36" sectorAlias="parter" row="8" seat="36"/>
          <rect className="place" x="930" y="433" width="16" height="16" rx="6"
                id="parter_9_26" sectorAlias="parter" row="9" seat="26"/>
          <rect className="place" x="903" y="433" width="16" height="16" rx="6"
                id="parter_9_27" sectorAlias="parter" row="9" seat="27"/>
          <rect className="place" x="876" y="433" width="16" height="16" rx="6"
                id="parter_9_28" sectorAlias="parter" row="9" seat="28"/>
          <rect className="place" x="848" y="433" width="16" height="16" rx="6"
                id="parter_9_29" sectorAlias="parter" row="9" seat="29"/>
          <rect className="place" x="1097" y="433" width="16" height="16" rx="6"
                id="parter_9_20" sectorAlias="parter" row="9" seat="20"/>
          <rect className="place" x="820" y="396" width="16" height="16" rx="6"
                id="parter_8_30" sectorAlias="parter" row="8" seat="30"/>
          <rect className="place" x="1069" y="433" width="16" height="16" rx="6"
                id="parter_9_21" sectorAlias="parter" row="9" seat="21"/>
          <rect className="place" x="792" y="396" width="16" height="16" rx="6"
                id="parter_8_31" sectorAlias="parter" row="8" seat="31"/>
          <rect className="place" x="1041" y="433" width="16" height="16" rx="6"
                id="parter_9_22" sectorAlias="parter" row="9" seat="22"/>
          <rect className="place" x="765" y="396" width="16" height="16" rx="6"
                id="parter_8_32" sectorAlias="parter" row="8" seat="32"/>
          <rect className="place" x="1014" y="433" width="16" height="16" rx="6"
                id="parter_9_23" sectorAlias="parter" row="9" seat="23"/>
          <rect className="place" x="737" y="396" width="16" height="16" rx="6"
                id="parter_8_33" sectorAlias="parter" row="8" seat="33"/>
          <rect className="place" x="709" y="396" width="16" height="16" rx="6"
                id="parter_8_34" sectorAlias="parter" row="8" seat="34"/>
          <rect className="place" x="986" y="433" width="16" height="16" rx="6"
                id="parter_9_24" sectorAlias="parter" row="9" seat="24"/>
          <rect className="place" x="682" y="396" width="16" height="16" rx="6"
                id="parter_8_35" sectorAlias="parter" row="8" seat="35"/>
          <rect className="place" x="958" y="433" width="16" height="16" rx="6"
                id="parter_9_25" sectorAlias="parter" row="9" seat="25"/>
          <rect className="place" x="820" y="433" width="16" height="16" rx="6"
                id="parter_9_30" sectorAlias="parter" row="9" seat="30"/>
          <rect className="place" x="792" y="433" width="16" height="16" rx="6"
                id="parter_9_31" sectorAlias="parter" row="9" seat="31"/>
          <rect className="place" x="2094" y="30" width="16" height="16" rx="6"
                id="beltaj_right_4_1" sectorAlias="beltaj_right" row="4" seat="1"/>
          <rect className="place" x="765" y="433" width="16" height="16" rx="6"
                id="parter_9_32" sectorAlias="parter" row="9" seat="32"/>
          <rect className="place" x="737" y="433" width="16" height="16" rx="6"
                id="parter_9_33" sectorAlias="parter" row="9" seat="33"/>
          <rect className="place" x="709" y="433" width="16" height="16" rx="6"
                id="parter_9_34" sectorAlias="parter" row="9" seat="34"/>
          <rect className="place" x="682" y="433" width="16" height="16" rx="6"
                id="parter_9_35" sectorAlias="parter" row="9" seat="35"/>
          <rect className="place" x="654" y="433" width="16" height="16" rx="6"
                id="parter_9_36" sectorAlias="parter" row="9" seat="36"/>
          <rect className="place" x="2094" y="197" width="16" height="16" rx="6"
                id="beltaj_right_4_7" sectorAlias="beltaj_right" row="4" seat="7"/>
          <rect className="place" x="2094" y="169" width="16" height="16" rx="6"
                id="beltaj_right_4_6" sectorAlias="beltaj_right" row="4" seat="6"/>
          <rect className="place" x="2094" y="252" width="16" height="16" rx="6"
                id="beltaj_right_4_9" sectorAlias="beltaj_right" row="4" seat="9"/>
          <rect className="place" x="2094" y="225" width="16" height="16" rx="6"
                id="beltaj_right_4_8" sectorAlias="beltaj_right" row="4" seat="8"/>
          <rect className="place" x="2094" y="86" width="16" height="16" rx="6"
                id="beltaj_right_4_3" sectorAlias="beltaj_right" row="4" seat="3"/>
          <rect className="place" x="2094" y="58" width="16" height="16" rx="6"
                id="beltaj_right_4_2" sectorAlias="beltaj_right" row="4" seat="2"/>
          <rect className="place" x="2094" y="141" width="16" height="16" rx="6"
                id="beltaj_right_4_5" sectorAlias="beltaj_right" row="4" seat="5"/>
          <rect className="place" x="2094" y="113" width="16" height="16" rx="6"
                id="beltaj_right_4_4" sectorAlias="beltaj_right" row="4" seat="4"/>
          <rect className="place" x="1383" y="396" width="16" height="16" rx="6"
                id="parter_8_14" sectorAlias="parter" row="8" seat="14"/>
          <rect className="place" x="986" y="360" width="16" height="16" rx="6"
                id="parter_7_24" sectorAlias="parter" row="7" seat="24"/>
          <rect className="place" x="709" y="324" width="16" height="16" rx="6"
                id="parter_6_34" sectorAlias="parter" row="6" seat="34"/>
          <rect className="place" x="958" y="360" width="16" height="16" rx="6"
                id="parter_7_25" sectorAlias="parter" row="7" seat="25"/>
          <rect className="place" x="1356" y="396" width="16" height="16" rx="6"
                id="parter_8_15" sectorAlias="parter" row="8" seat="15"/>
          <rect className="place" x="682" y="324" width="16" height="16" rx="6"
                id="parter_6_35" sectorAlias="parter" row="6" seat="35"/>
          <rect className="place" x="930" y="360" width="16" height="16" rx="6"
                id="parter_7_26" sectorAlias="parter" row="7" seat="26"/>
          <rect className="place" x="1328" y="396" width="16" height="16" rx="6"
                id="parter_8_16" sectorAlias="parter" row="8" seat="16"/>
          <rect className="place" x="654" y="324" width="16" height="16" rx="6"
                id="parter_6_36" sectorAlias="parter" row="6" seat="36"/>
          <rect className="place" x="903" y="360" width="16" height="16" rx="6"
                id="parter_7_27" sectorAlias="parter" row="7" seat="27"/>
          <rect className="place" x="1300" y="396" width="16" height="16" rx="6"
                id="parter_8_17" sectorAlias="parter" row="8" seat="17"/>
          <rect className="place" x="876" y="360" width="16" height="16" rx="6"
                id="parter_7_28" sectorAlias="parter" row="7" seat="28"/>
          <rect className="place" x="1273" y="396" width="16" height="16" rx="6"
                id="parter_8_18" sectorAlias="parter" row="8" seat="18"/>
          <rect className="place" x="848" y="360" width="16" height="16" rx="6"
                id="parter_7_29" sectorAlias="parter" row="7" seat="29"/>
          <rect className="place" x="1125" y="396" width="16" height="16" rx="6"
                id="parter_8_19" sectorAlias="parter" row="8" seat="19"/>
          <rect className="place" x="1494" y="396" width="16" height="16" rx="6"
                id="parter_8_10" sectorAlias="parter" row="8" seat="10"/>
          <rect className="place" x="1097" y="360" width="16" height="16" rx="6"
                id="parter_7_20" sectorAlias="parter" row="7" seat="20"/>
          <rect className="place" x="820" y="324" width="16" height="16" rx="6"
                id="parter_6_30" sectorAlias="parter" row="6" seat="30"/>
          <rect className="place" x="1466" y="396" width="16" height="16" rx="6"
                id="parter_8_11" sectorAlias="parter" row="8" seat="11"/>
          <rect className="place" x="1069" y="360" width="16" height="16" rx="6"
                id="parter_7_21" sectorAlias="parter" row="7" seat="21"/>
          <rect className="place" x="792" y="324" width="16" height="16" rx="6"
                id="parter_6_31" sectorAlias="parter" row="6" seat="31"/>
          <rect className="place" x="1439" y="396" width="16" height="16" rx="6"
                id="parter_8_12" sectorAlias="parter" row="8" seat="12"/>
          <rect className="place" x="1041" y="360" width="16" height="16" rx="6"
                id="parter_7_22" sectorAlias="parter" row="7" seat="22"/>
          <rect className="place" x="765" y="324" width="16" height="16" rx="6"
                id="parter_6_32" sectorAlias="parter" row="6" seat="32"/>
          <rect className="place" x="1411" y="396" width="16" height="16" rx="6"
                id="parter_8_13" sectorAlias="parter" row="8" seat="13"/>
          <rect className="place" x="1014" y="360" width="16" height="16" rx="6"
                id="parter_7_23" sectorAlias="parter" row="7" seat="23"/>
          <rect className="place" x="737" y="324" width="16" height="16" rx="6"
                id="parter_6_33" sectorAlias="parter" row="6" seat="33"/>
          <rect className="place" x="682" y="360" width="16" height="16" rx="6"
                id="parter_7_35" sectorAlias="parter" row="7" seat="35"/>
          <rect className="place" x="1356" y="432" width="16" height="16" rx="6"
                id="parter_9_15" sectorAlias="parter" row="9" seat="15"/>
          <rect className="place" x="958" y="396" width="16" height="16" rx="6"
                id="parter_8_25" sectorAlias="parter" row="8" seat="25"/>
          <rect className="place" x="654" y="360" width="16" height="16" rx="6"
                id="parter_7_36" sectorAlias="parter" row="7" seat="36"/>
          <rect className="place" x="1328" y="432" width="16" height="16" rx="6"
                id="parter_9_16" sectorAlias="parter" row="9" seat="16"/>
          <rect className="place" x="930" y="396" width="16" height="16" rx="6"
                id="parter_8_26" sectorAlias="parter" row="8" seat="26"/>
          <rect className="place" x="1300" y="432" width="16" height="16" rx="6"
                id="parter_9_17" sectorAlias="parter" row="9" seat="17"/>
          <rect className="place" x="903" y="396" width="16" height="16" rx="6"
                id="parter_8_27" sectorAlias="parter" row="8" seat="27"/>
          <rect className="place" x="1273" y="432" width="16" height="16" rx="6"
                id="parter_9_18" sectorAlias="parter" row="9" seat="18"/>
          <rect className="place" x="876" y="396" width="16" height="16" rx="6"
                id="parter_8_28" sectorAlias="parter" row="8" seat="28"/>
          <rect className="place" x="1125" y="433" width="16" height="16" rx="6"
                id="parter_9_19" sectorAlias="parter" row="9" seat="19"/>
          <rect className="place" x="848" y="396" width="16" height="16" rx="6"
                id="parter_8_29" sectorAlias="parter" row="8" seat="29"/>
          <rect className="place" x="820" y="360" width="16" height="16" rx="6"
                id="parter_7_30" sectorAlias="parter" row="7" seat="30"/>
          <rect className="place" x="1494" y="432" width="16" height="16" rx="6"
                id="parter_9_10" sectorAlias="parter" row="9" seat="10"/>
          <rect className="place" x="1097" y="396" width="16" height="16" rx="6"
                id="parter_8_20" sectorAlias="parter" row="8" seat="20"/>
          <rect className="place" x="792" y="360" width="16" height="16" rx="6"
                id="parter_7_31" sectorAlias="parter" row="7" seat="31"/>
          <rect className="place" x="1466" y="432" width="16" height="16" rx="6"
                id="parter_9_11" sectorAlias="parter" row="9" seat="11"/>
          <rect className="place" x="1069" y="396" width="16" height="16" rx="6"
                id="parter_8_21" sectorAlias="parter" row="8" seat="21"/>
          <rect className="place" x="765" y="360" width="16" height="16" rx="6"
                id="parter_7_32" sectorAlias="parter" row="7" seat="32"/>
          <rect className="place" x="1439" y="432" width="16" height="16" rx="6"
                id="parter_9_12" sectorAlias="parter" row="9" seat="12"/>
          <rect className="place" x="1041" y="396" width="16" height="16" rx="6"
                id="parter_8_22" sectorAlias="parter" row="8" seat="22"/>
          <rect className="place" x="737" y="360" width="16" height="16" rx="6"
                id="parter_7_33" sectorAlias="parter" row="7" seat="33"/>
          <rect className="place" x="1411" y="432" width="16" height="16" rx="6"
                id="parter_9_13" sectorAlias="parter" row="9" seat="13"/>
          <rect className="place" x="1014" y="396" width="16" height="16" rx="6"
                id="parter_8_23" sectorAlias="parter" row="8" seat="23"/>
          <rect className="place" x="709" y="360" width="16" height="16" rx="6"
                id="parter_7_34" sectorAlias="parter" row="7" seat="34"/>
          <rect className="place" x="1383" y="432" width="16" height="16" rx="6"
                id="parter_9_14" sectorAlias="parter" row="9" seat="14"/>
          <rect className="place" x="986" y="396" width="16" height="16" rx="6"
                id="parter_8_24" sectorAlias="parter" row="8" seat="24"/>
          <rect className="place" x="1439" y="324" width="16" height="16" rx="6"
                id="parter_6_12" sectorAlias="parter" row="6" seat="12"/>
          <rect className="place" x="765" y="252" width="16" height="16" rx="6"
                id="parter_4_32" sectorAlias="parter" row="4" seat="32"/>
          <rect className="place" x="1041" y="288" width="16" height="16" rx="6"
                id="parter_5_22" sectorAlias="parter" row="5" seat="22"/>
          <rect className="place" x="1411" y="324" width="16" height="16" rx="6"
                id="parter_6_13" sectorAlias="parter" row="6" seat="13"/>
          <rect className="place" x="737" y="252" width="16" height="16" rx="6"
                id="parter_4_33" sectorAlias="parter" row="4" seat="33"/>
          <rect className="place" x="1014" y="288" width="16" height="16" rx="6"
                id="parter_5_23" sectorAlias="parter" row="5" seat="23"/>
          <rect className="place" x="1383" y="324" width="16" height="16" rx="6"
                id="parter_6_14" sectorAlias="parter" row="6" seat="14"/>
          <rect className="place" x="709" y="252" width="16" height="16" rx="6"
                id="parter_4_34" sectorAlias="parter" row="4" seat="34"/>
          <rect className="place" x="986" y="288" width="16" height="16" rx="6"
                id="parter_5_24" sectorAlias="parter" row="5" seat="24"/>
          <rect className="place" x="1356" y="324" width="16" height="16" rx="6"
                id="parter_6_15" sectorAlias="parter" row="6" seat="15"/>
          <rect className="place" x="682" y="252" width="16" height="16" rx="6"
                id="parter_4_35" sectorAlias="parter" row="4" seat="35"/>
          <rect className="place" x="958" y="288" width="16" height="16" rx="6"
                id="parter_5_25" sectorAlias="parter" row="5" seat="25"/>
          <rect className="place" x="1328" y="324" width="16" height="16" rx="6"
                id="parter_6_16" sectorAlias="parter" row="6" seat="16"/>
          <rect className="place" x="654" y="252" width="16" height="16" rx="6"
                id="parter_4_36" sectorAlias="parter" row="4" seat="36"/>
          <rect className="place" x="930" y="288" width="16" height="16" rx="6"
                id="parter_5_26" sectorAlias="parter" row="5" seat="26"/>
          <rect className="place" x="1300" y="324" width="16" height="16" rx="6"
                id="parter_6_17" sectorAlias="parter" row="6" seat="17"/>
          <rect className="place" x="903" y="288" width="16" height="16" rx="6"
                id="parter_5_27" sectorAlias="parter" row="5" seat="27"/>
          <rect className="place" x="1273" y="324" width="16" height="16" rx="6"
                id="parter_6_18" sectorAlias="parter" row="6" seat="18"/>
          <rect className="place" x="876" y="288" width="16" height="16" rx="6"
                id="parter_5_28" sectorAlias="parter" row="5" seat="28"/>
          <rect className="place" x="1125" y="324" width="16" height="16" rx="6"
                id="parter_6_19" sectorAlias="parter" row="6" seat="19"/>
          <rect className="place" x="848" y="288" width="16" height="16" rx="6"
                id="parter_5_29" sectorAlias="parter" row="5" seat="29"/>
          <rect className="place" x="1494" y="324" width="16" height="16" rx="6"
                id="parter_6_10" sectorAlias="parter" row="6" seat="10"/>
          <rect className="place" x="820" y="252" width="16" height="16" rx="6"
                id="parter_4_30" sectorAlias="parter" row="4" seat="30"/>
          <rect className="place" x="1097" y="288" width="16" height="16" rx="6"
                id="parter_5_20" sectorAlias="parter" row="5" seat="20"/>
          <rect className="place" x="1466" y="324" width="16" height="16" rx="6"
                id="parter_6_11" sectorAlias="parter" row="6" seat="11"/>
          <rect className="place" x="792" y="252" width="16" height="16" rx="6"
                id="parter_4_31" sectorAlias="parter" row="4" seat="31"/>
          <rect className="place" x="1069" y="288" width="16" height="16" rx="6"
                id="parter_5_21" sectorAlias="parter" row="5" seat="21"/>
          <rect className="place" x="2011" y="113" width="16" height="16" rx="6"
                id="beltaj_right_1_4" sectorAlias="beltaj_right" row="1" seat="4"/>
          <rect className="place" x="2011" y="86" width="16" height="16" rx="6"
                id="beltaj_right_1_3" sectorAlias="beltaj_right" row="1" seat="3"/>
          <rect className="place" x="2011" y="169" width="16" height="16" rx="6"
                id="beltaj_right_1_6" sectorAlias="beltaj_right" row="1" seat="6"/>
          <rect className="place" x="2011" y="141" width="16" height="16" rx="6"
                id="beltaj_right_1_5" sectorAlias="beltaj_right" row="1" seat="5"/>
          <rect className="place" x="2011" y="58" width="16" height="16" rx="6"
                id="beltaj_right_1_2" sectorAlias="beltaj_right" row="1" seat="2"/>
          <rect className="place" x="2011" y="30" width="16" height="16" rx="6"
                id="beltaj_right_1_1" sectorAlias="beltaj_right" row="1" seat="1"/>
          <rect className="place" x="2011" y="225" width="16" height="16" rx="6"
                id="beltaj_right_1_8" sectorAlias="beltaj_right" row="1" seat="8"/>
          <rect className="place" x="2011" y="197" width="16" height="16" rx="6"
                id="beltaj_right_1_7" sectorAlias="beltaj_right" row="1" seat="7"/>
          <rect className="place" x="2011" y="252" width="16" height="16" rx="6"
                id="beltaj_right_1_9" sectorAlias="beltaj_right" row="1" seat="9"/>
          <rect className="place" x="1411" y="360" width="16" height="16" rx="6"
                id="parter_7_13" sectorAlias="parter" row="7" seat="13"/>
          <rect className="place" x="1014" y="324" width="16" height="16" rx="6"
                id="parter_6_23" sectorAlias="parter" row="6" seat="23"/>
          <rect className="place" x="737" y="288" width="16" height="16" rx="6"
                id="parter_5_33" sectorAlias="parter" row="5" seat="33"/>
          <rect className="place" x="1383" y="360" width="16" height="16" rx="6"
                id="parter_7_14" sectorAlias="parter" row="7" seat="14"/>
          <rect className="place" x="986" y="324" width="16" height="16" rx="6"
                id="parter_6_24" sectorAlias="parter" row="6" seat="24"/>
          <rect className="place" x="709" y="288" width="16" height="16" rx="6"
                id="parter_5_34" sectorAlias="parter" row="5" seat="34"/>
          <rect className="place" x="1356" y="360" width="16" height="16" rx="6"
                id="parter_7_15" sectorAlias="parter" row="7" seat="15"/>
          <rect className="place" x="958" y="324" width="16" height="16" rx="6"
                id="parter_6_25" sectorAlias="parter" row="6" seat="25"/>
          <rect className="place" x="682" y="288" width="16" height="16" rx="6"
                id="parter_5_35" sectorAlias="parter" row="5" seat="35"/>
          <rect className="place" x="1328" y="360" width="16" height="16" rx="6"
                id="parter_7_16" sectorAlias="parter" row="7" seat="16"/>
          <rect className="place" x="930" y="324" width="16" height="16" rx="6"
                id="parter_6_26" sectorAlias="parter" row="6" seat="26"/>
          <rect className="place" x="654" y="288" width="16" height="16" rx="6"
                id="parter_5_36" sectorAlias="parter" row="5" seat="36"/>
          <rect className="place" x="1300" y="360" width="16" height="16" rx="6"
                id="parter_7_17" sectorAlias="parter" row="7" seat="17"/>
          <rect className="place" x="903" y="324" width="16" height="16" rx="6"
                id="parter_6_27" sectorAlias="parter" row="6" seat="27"/>
          <rect className="place" x="1273" y="360" width="16" height="16" rx="6"
                id="parter_7_18" sectorAlias="parter" row="7" seat="18"/>
          <rect className="place" x="876" y="324" width="16" height="16" rx="6"
                id="parter_6_28" sectorAlias="parter" row="6" seat="28"/>
          <rect className="place" x="1125" y="360" width="16" height="16" rx="6"
                id="parter_7_19" sectorAlias="parter" row="7" seat="19"/>
          <rect className="place" x="848" y="324" width="16" height="16" rx="6"
                id="parter_6_29" sectorAlias="parter" row="6" seat="29"/>
          <rect className="place" x="2196" y="633" width="16" height="16" rx="6"
                id="first_level_right_1_10" sectorAlias="first_level_right" row="1" seat="10"/>
          <rect className="place" x="2196" y="689" width="16" height="16" rx="6"
                id="first_level_right_1_12" sectorAlias="first_level_right" row="1" seat="12"/>
          <rect className="place" x="2196" y="661" width="16" height="16" rx="6"
                id="first_level_right_1_11" sectorAlias="first_level_right" row="1" seat="11"/>
          <rect className="place" x="2196" y="744" width="16" height="16" rx="6"
                id="first_level_right_1_14" sectorAlias="first_level_right" row="1" seat="14"/>
          <rect className="place" x="2196" y="716" width="16" height="16" rx="6"
                id="first_level_right_1_13" sectorAlias="first_level_right" row="1" seat="13"/>
          <rect className="place" x="2196" y="800" width="16" height="16" rx="6"
                id="first_level_right_1_16" sectorAlias="first_level_right" row="1" seat="16"/>
          <rect className="place" x="1494" y="360" width="16" height="16" rx="6"
                id="parter_7_10" sectorAlias="parter" row="7" seat="10"/>
          <rect className="place" x="1097" y="324" width="16" height="16" rx="6"
                id="parter_6_20" sectorAlias="parter" row="6" seat="20"/>
          <rect className="place" x="820" y="288" width="16" height="16" rx="6"
                id="parter_5_30" sectorAlias="parter" row="5" seat="30"/>
          <rect className="place" x="2196" y="772" width="16" height="16" rx="6"
                id="first_level_right_1_15" sectorAlias="first_level_right" row="1" seat="15"/>
          <rect className="place" x="1466" y="360" width="16" height="16" rx="6"
                id="parter_7_11" sectorAlias="parter" row="7" seat="11"/>
          <rect className="place" x="1069" y="324" width="16" height="16" rx="6"
                id="parter_6_21" sectorAlias="parter" row="6" seat="21"/>
          <rect className="place" x="792" y="288" width="16" height="16" rx="6"
                id="parter_5_31" sectorAlias="parter" row="5" seat="31"/>
          <rect className="place" x="2196" y="855" width="16" height="16" rx="6"
                id="first_level_right_1_18" sectorAlias="first_level_right" row="1" seat="18"/>
          <rect className="place" x="1439" y="360" width="16" height="16" rx="6"
                id="parter_7_12" sectorAlias="parter" row="7" seat="12"/>
          <rect className="place" x="1041" y="324" width="16" height="16" rx="6"
                id="parter_6_22" sectorAlias="parter" row="6" seat="22"/>
          <rect className="place" x="765" y="288" width="16" height="16" rx="6"
                id="parter_5_32" sectorAlias="parter" row="5" seat="32"/>
          <rect className="place" x="2196" y="827" width="16" height="16" rx="6"
                id="first_level_right_1_17" sectorAlias="first_level_right" row="1" seat="17"/>
          <rect className="place" x="1097" y="216" width="16" height="16" rx="6"
                id="parter_3_20" sectorAlias="parter" row="3" seat="20"/>
          <rect className="place" x="820" y="180" width="16" height="16" rx="6"
                id="parter_2_30" sectorAlias="parter" row="2" seat="30"/>
          <rect className="place" x="1494" y="251" width="16" height="16" rx="6"
                id="parter_4_10" sectorAlias="parter" row="4" seat="10"/>
          <rect className="place" x="1069" y="216" width="16" height="16" rx="6"
                id="parter_3_21" sectorAlias="parter" row="3" seat="21"/>
          <rect className="place" x="792" y="180" width="16" height="16" rx="6"
                id="parter_2_31" sectorAlias="parter" row="2" seat="31"/>
          <rect className="place" x="1466" y="251" width="16" height="16" rx="6"
                id="parter_4_11" sectorAlias="parter" row="4" seat="11"/>
          <rect className="place" x="1041" y="216" width="16" height="16" rx="6"
                id="parter_3_22" sectorAlias="parter" row="3" seat="22"/>
          <rect className="place" x="765" y="180" width="16" height="16" rx="6"
                id="parter_2_32" sectorAlias="parter" row="2" seat="32"/>
          <rect className="place" x="1439" y="251" width="16" height="16" rx="6"
                id="parter_4_12" sectorAlias="parter" row="4" seat="12"/>
          <rect className="place" x="1014" y="216" width="16" height="16" rx="6"
                id="parter_3_23" sectorAlias="parter" row="3" seat="23"/>
          <rect className="place" x="737" y="180" width="16" height="16" rx="6"
                id="parter_2_33" sectorAlias="parter" row="2" seat="33"/>
          <rect className="place" x="1411" y="251" width="16" height="16" rx="6"
                id="parter_4_13" sectorAlias="parter" row="4" seat="13"/>
          <rect className="place" x="986" y="216" width="16" height="16" rx="6"
                id="parter_3_24" sectorAlias="parter" row="3" seat="24"/>
          <rect className="place" x="709" y="180" width="16" height="16" rx="6"
                id="parter_2_34" sectorAlias="parter" row="2" seat="34"/>
          <rect className="place" x="1383" y="251" width="16" height="16" rx="6"
                id="parter_4_14" sectorAlias="parter" row="4" seat="14"/>
          <rect className="place" x="958" y="216" width="16" height="16" rx="6"
                id="parter_3_25" sectorAlias="parter" row="3" seat="25"/>
          <rect className="place" x="682" y="180" width="16" height="16" rx="6"
                id="parter_2_35" sectorAlias="parter" row="2" seat="35"/>
          <rect className="place" x="1356" y="251" width="16" height="16" rx="6"
                id="parter_4_15" sectorAlias="parter" row="4" seat="15"/>
          <rect className="place" x="930" y="216" width="16" height="16" rx="6"
                id="parter_3_26" sectorAlias="parter" row="3" seat="26"/>
          <rect className="place" x="654" y="180" width="16" height="16" rx="6"
                id="parter_2_36" sectorAlias="parter" row="2" seat="36"/>
          <rect className="place" x="1328" y="251" width="16" height="16" rx="6"
                id="parter_4_16" sectorAlias="parter" row="4" seat="16"/>
          <rect className="place" x="903" y="216" width="16" height="16" rx="6"
                id="parter_3_27" sectorAlias="parter" row="3" seat="27"/>
          <rect className="place" x="1300" y="251" width="16" height="16" rx="6"
                id="parter_4_17" sectorAlias="parter" row="4" seat="17"/>
          <rect className="place" x="1134" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_20" sectorAlias="beltaj_middle" row="1" seat="20"/>
          <rect className="place" x="1567" y="1666" width="16" height="16" rx="6"
                id="beltaj_middle_2_10" sectorAlias="beltaj_middle" row="2" seat="10"/>
          <rect className="place" x="1106" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_21" sectorAlias="beltaj_middle" row="1" seat="21"/>
          <rect className="place" x="1542" y="1678" width="16" height="16" rx="6"
                id="beltaj_middle_2_11" sectorAlias="beltaj_middle" row="2" seat="11"/>
          <rect className="place" x="1079" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_22" sectorAlias="beltaj_middle" row="1" seat="22"/>
          <rect className="place" x="1384" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_12" sectorAlias="beltaj_middle" row="2" seat="12"/>
          <rect className="place" x="1356" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_13" sectorAlias="beltaj_middle" row="2" seat="13"/>
          <rect className="place" x="1051" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_23" sectorAlias="beltaj_middle" row="1" seat="23"/>
          <rect className="place" x="1328" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_14" sectorAlias="beltaj_middle" row="2" seat="14"/>
          <rect className="place" x="1024" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_24" sectorAlias="beltaj_middle" row="1" seat="24"/>
          <rect className="place" x="1300" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_15" sectorAlias="beltaj_middle" row="2" seat="15"/>
          <rect className="place" x="996" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_25" sectorAlias="beltaj_middle" row="1" seat="25"/>
          <rect className="place" x="1273" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_16" sectorAlias="beltaj_middle" row="2" seat="16"/>
          <rect className="place" x="867" y="1662" width="16" height="16" rx="6"
                id="beltaj_middle_1_26" sectorAlias="beltaj_middle" row="1" seat="26"/>
          <rect className="place" x="1245" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_17" sectorAlias="beltaj_middle" row="2" seat="17"/>
          <rect className="place" x="842" y="1651" width="16" height="16" rx="6"
                id="beltaj_middle_1_27" sectorAlias="beltaj_middle" row="1" seat="27"/>
          <rect className="place" x="1217" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_18" sectorAlias="beltaj_middle" row="2" seat="18"/>
          <rect className="place" x="816" y="1640" width="16" height="16" rx="6"
                id="beltaj_middle_1_28" sectorAlias="beltaj_middle" row="1" seat="28"/>
          <rect className="place" x="1189" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_19" sectorAlias="beltaj_middle" row="2" seat="19"/>
          <rect className="place" x="876" y="216" width="16" height="16" rx="6"
                id="parter_3_28" sectorAlias="parter" row="3" seat="28"/>
          <rect className="place" x="791" y="1628" width="16" height="16" rx="6"
                id="beltaj_middle_1_29" sectorAlias="beltaj_middle" row="1" seat="29"/>
          <rect className="place" x="1273" y="251" width="16" height="16" rx="6"
                id="parter_4_18" sectorAlias="parter" row="4" seat="18"/>
          <rect className="place" x="848" y="216" width="16" height="16" rx="6"
                id="parter_3_29" sectorAlias="parter" row="3" seat="29"/>
          <rect className="place" x="1125" y="252" width="16" height="16" rx="6"
                id="parter_4_19" sectorAlias="parter" row="4" seat="19"/>
          <rect className="place" x="792" y="216" width="16" height="16" rx="6"
                id="parter_3_31" sectorAlias="parter" row="3" seat="31"/>
          <rect className="place" x="1069" y="252" width="16" height="16" rx="6"
                id="parter_4_21" sectorAlias="parter" row="4" seat="21"/>
          <rect className="place" x="1466" y="288" width="16" height="16" rx="6"
                id="parter_5_11" sectorAlias="parter" row="5" seat="11"/>
          <rect className="place" x="765" y="216" width="16" height="16" rx="6"
                id="parter_3_32" sectorAlias="parter" row="3" seat="32"/>
          <rect className="place" x="1041" y="252" width="16" height="16" rx="6"
                id="parter_4_22" sectorAlias="parter" row="4" seat="22"/>
          <rect className="place" x="1439" y="288" width="16" height="16" rx="6"
                id="parter_5_12" sectorAlias="parter" row="5" seat="12"/>
          <rect className="place" x="737" y="216" width="16" height="16" rx="6"
                id="parter_3_33" sectorAlias="parter" row="3" seat="33"/>
          <rect className="place" x="1014" y="252" width="16" height="16" rx="6"
                id="parter_4_23" sectorAlias="parter" row="4" seat="23"/>
          <rect className="place" x="1411" y="288" width="16" height="16" rx="6"
                id="parter_5_13" sectorAlias="parter" row="5" seat="13"/>
          <rect className="place" x="709" y="216" width="16" height="16" rx="6"
                id="parter_3_34" sectorAlias="parter" row="3" seat="34"/>
          <rect className="place" x="986" y="252" width="16" height="16" rx="6"
                id="parter_4_24" sectorAlias="parter" row="4" seat="24"/>
          <rect className="place" x="1383" y="288" width="16" height="16" rx="6"
                id="parter_5_14" sectorAlias="parter" row="5" seat="14"/>
          <rect className="place" x="682" y="216" width="16" height="16" rx="6"
                id="parter_3_35" sectorAlias="parter" row="3" seat="35"/>
          <rect className="place" x="958" y="252" width="16" height="16" rx="6"
                id="parter_4_25" sectorAlias="parter" row="4" seat="25"/>
          <rect className="place" x="1356" y="288" width="16" height="16" rx="6"
                id="parter_5_15" sectorAlias="parter" row="5" seat="15"/>
          <rect className="place" x="654" y="216" width="16" height="16" rx="6"
                id="parter_3_36" sectorAlias="parter" row="3" seat="36"/>
          <rect className="place" x="930" y="252" width="16" height="16" rx="6"
                id="parter_4_26" sectorAlias="parter" row="4" seat="26"/>
          <rect className="place" x="1328" y="288" width="16" height="16" rx="6"
                id="parter_5_16" sectorAlias="parter" row="5" seat="16"/>
          <rect className="place" x="903" y="252" width="16" height="16" rx="6"
                id="parter_4_27" sectorAlias="parter" row="4" seat="27"/>
          <rect className="place" x="1300" y="288" width="16" height="16" rx="6"
                id="parter_5_17" sectorAlias="parter" row="5" seat="17"/>
          <rect className="place" x="876" y="252" width="16" height="16" rx="6"
                id="parter_4_28" sectorAlias="parter" row="4" seat="28"/>
          <rect className="place" x="1273" y="288" width="16" height="16" rx="6"
                id="parter_5_18" sectorAlias="parter" row="5" seat="18"/>
          <rect className="place" x="820" y="216" width="16" height="16" rx="6"
                id="parter_3_30" sectorAlias="parter" row="3" seat="30"/>
          <rect className="place" x="1097" y="252" width="16" height="16" rx="6"
                id="parter_4_20" sectorAlias="parter" row="4" seat="20"/>
          <rect className="place" x="1494" y="288" width="16" height="16" rx="6"
                id="parter_5_10" sectorAlias="parter" row="5" seat="10"/>
          <rect className="place" x="1573" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_3" sectorAlias="amfiteatr" row="9" seat="3"/>
          <rect className="place" x="1530" y="1653" width="16" height="16" rx="6"
                id="beltaj_middle_1_10" sectorAlias="beltaj_middle" row="1" seat="10"/>
          <rect className="place" x="1546" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_4" sectorAlias="amfiteatr" row="9" seat="4"/>
          <rect className="place" x="1384" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_11" sectorAlias="beltaj_middle" row="1" seat="11"/>
          <rect className="place" x="1356" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_12" sectorAlias="beltaj_middle" row="1" seat="12"/>
          <rect className="place" x="1518" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_5" sectorAlias="amfiteatr" row="9" seat="5"/>
          <rect className="place" x="1328" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_13" sectorAlias="beltaj_middle" row="1" seat="13"/>
          <rect className="place" x="1490" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_6" sectorAlias="amfiteatr" row="9" seat="6"/>
          <rect className="place" x="1300" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_14" sectorAlias="beltaj_middle" row="1" seat="14"/>
          <rect className="place" x="1273" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_15" sectorAlias="beltaj_middle" row="1" seat="15"/>
          <rect className="place" x="1245" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_16" sectorAlias="beltaj_middle" row="1" seat="16"/>
          <rect className="place" x="1217" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_17" sectorAlias="beltaj_middle" row="1" seat="17"/>
          <rect className="place" x="1601" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_2" sectorAlias="amfiteatr" row="9" seat="2"/>
          <rect className="place" x="848" y="252" width="16" height="16" rx="6"
                id="parter_4_29" sectorAlias="parter" row="4" seat="29"/>
          <rect className="place" x="1125" y="288" width="16" height="16" rx="6"
                id="parter_5_19" sectorAlias="parter" row="5" seat="19"/>
          <rect className="place" x="1189" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_18" sectorAlias="beltaj_middle" row="1" seat="18"/>
          <rect className="place" x="1162" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_1_19" sectorAlias="beltaj_middle" row="1" seat="19"/>
          <rect className="place" x="1463" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_7" sectorAlias="amfiteatr" row="9" seat="7"/>
          <rect className="place" x="1435" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_8" sectorAlias="amfiteatr" row="9" seat="8"/>
          <rect className="place" x="1407" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_9" sectorAlias="amfiteatr" row="9" seat="9"/>
          <rect className="place" x="1097" y="144" width="16" height="16" rx="6"
                id="parter_1_20" sectorAlias="parter" row="1" seat="20"/>
          <rect className="place" x="1494" y="179" width="16" height="16" rx="6"
                id="parter_2_10" sectorAlias="parter" row="2" seat="10"/>
          <rect className="place" x="1069" y="144" width="16" height="16" rx="6"
                id="parter_1_21" sectorAlias="parter" row="1" seat="21"/>
          <rect className="place" x="1466" y="179" width="16" height="16" rx="6"
                id="parter_2_11" sectorAlias="parter" row="2" seat="11"/>
          <rect className="place" x="1041" y="144" width="16" height="16" rx="6"
                id="parter_1_22" sectorAlias="parter" row="1" seat="22"/>
          <rect className="place" x="1439" y="179" width="16" height="16" rx="6"
                id="parter_2_12" sectorAlias="parter" row="2" seat="12"/>
          <rect className="place" x="1014" y="144" width="16" height="16" rx="6"
                id="parter_1_23" sectorAlias="parter" row="1" seat="23"/>
          <rect className="place" x="1411" y="179" width="16" height="16" rx="6"
                id="parter_2_13" sectorAlias="parter" row="2" seat="13"/>
          <rect className="place" x="986" y="144" width="16" height="16" rx="6"
                id="parter_1_24" sectorAlias="parter" row="1" seat="24"/>
          <rect className="place" x="1383" y="179" width="16" height="16" rx="6"
                id="parter_2_14" sectorAlias="parter" row="2" seat="14"/>
          <rect className="place" x="958" y="144" width="16" height="16" rx="6"
                id="parter_1_25" sectorAlias="parter" row="1" seat="25"/>
          <rect className="place" x="1356" y="179" width="16" height="16" rx="6"
                id="parter_2_15" sectorAlias="parter" row="2" seat="15"/>
          <rect className="place" x="1217" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_20" sectorAlias="beltaj_middle" row="3" seat="20"/>
          <rect className="place" x="780" y="1655" width="16" height="16" rx="6"
                id="beltaj_middle_2_30" sectorAlias="beltaj_middle" row="2" seat="30"/>
          <rect className="place" x="1568" y="1728" width="16" height="16" rx="6"
                id="beltaj_middle_4_10" sectorAlias="beltaj_middle" row="4" seat="10"/>
          <rect className="place" x="1189" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_21" sectorAlias="beltaj_middle" row="3" seat="21"/>
          <rect className="place" x="1412" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_11" sectorAlias="beltaj_middle" row="4" seat="11"/>
          <rect className="place" x="755" y="1643" width="16" height="16" rx="6"
                id="beltaj_middle_2_31" sectorAlias="beltaj_middle" row="2" seat="31"/>
          <rect className="place" x="1162" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_22" sectorAlias="beltaj_middle" row="3" seat="22"/>
          <rect className="place" x="1384" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_12" sectorAlias="beltaj_middle" row="4" seat="12"/>
          <rect className="place" x="729" y="1632" width="16" height="16" rx="6"
                id="beltaj_middle_2_32" sectorAlias="beltaj_middle" row="2" seat="32"/>
          <rect className="place" x="1134" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_23" sectorAlias="beltaj_middle" row="3" seat="23"/>
          <rect className="place" x="1356" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_13" sectorAlias="beltaj_middle" row="4" seat="13"/>
          <rect className="place" x="704" y="1621" width="16" height="16" rx="6"
                id="beltaj_middle_2_33" sectorAlias="beltaj_middle" row="2" seat="33"/>
          <rect className="place" x="1106" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_24" sectorAlias="beltaj_middle" row="3" seat="24"/>
          <rect className="place" x="1328" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_14" sectorAlias="beltaj_middle" row="4" seat="14"/>
          <rect className="place" x="679" y="1609" width="16" height="16" rx="6"
                id="beltaj_middle_2_34" sectorAlias="beltaj_middle" row="2" seat="34"/>
          <rect className="place" x="1078" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_25" sectorAlias="beltaj_middle" row="3" seat="25"/>
          <rect className="place" x="1300" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_15" sectorAlias="beltaj_middle" row="4" seat="15"/>
          <rect className="place" x="653" y="1598" width="16" height="16" rx="6"
                id="beltaj_middle_2_35" sectorAlias="beltaj_middle" row="2" seat="35"/>
          <rect className="place" x="1050" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_26" sectorAlias="beltaj_middle" row="3" seat="26"/>
          <rect className="place" x="1273" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_16" sectorAlias="beltaj_middle" row="4" seat="16"/>
          <rect className="place" x="628" y="1587" width="16" height="16" rx="6"
                id="beltaj_middle_2_36" sectorAlias="beltaj_middle" row="2" seat="36"/>
          <rect className="place" x="1023" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_27" sectorAlias="beltaj_middle" row="3" seat="27"/>
          <rect className="place" x="1245" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_17" sectorAlias="beltaj_middle" row="4" seat="17"/>
          <rect className="place" x="603" y="1576" width="16" height="16" rx="6"
                id="beltaj_middle_2_37" sectorAlias="beltaj_middle" row="2" seat="37"/>
          <rect className="place" x="996" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_28" sectorAlias="beltaj_middle" row="3" seat="28"/>
          <rect className="place" x="1217" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_18" sectorAlias="beltaj_middle" row="4" seat="18"/>
          <rect className="place" x="968" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_29" sectorAlias="beltaj_middle" row="3" seat="29"/>
          <rect className="place" x="1189" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_19" sectorAlias="beltaj_middle" row="4" seat="19"/>
          <rect className="place" x="930" y="144" width="16" height="16" rx="6"
                id="parter_1_26" sectorAlias="parter" row="1" seat="26"/>
          <rect className="place" x="1328" y="179" width="16" height="16" rx="6"
                id="parter_2_16" sectorAlias="parter" row="2" seat="16"/>
          <rect className="place" x="903" y="144" width="16" height="16" rx="6"
                id="parter_1_27" sectorAlias="parter" row="1" seat="27"/>
          <rect className="place" x="1300" y="179" width="16" height="16" rx="6"
                id="parter_2_17" sectorAlias="parter" row="2" seat="17"/>
          <rect className="place" x="876" y="144" width="16" height="16" rx="6"
                id="parter_1_28" sectorAlias="parter" row="1" seat="28"/>
          <rect className="place" x="1273" y="179" width="16" height="16" rx="6"
                id="parter_2_18" sectorAlias="parter" row="2" seat="18"/>
          <rect className="place" x="848" y="144" width="16" height="16" rx="6"
                id="parter_1_29" sectorAlias="parter" row="1" seat="29"/>
          <rect className="place" x="1125" y="180" width="16" height="16" rx="6"
                id="parter_2_19" sectorAlias="parter" row="2" seat="19"/>
          <rect className="place" x="820" y="144" width="16" height="16" rx="6"
                id="parter_1_30" sectorAlias="parter" row="1" seat="30"/>
          <rect className="place" x="1097" y="180" width="16" height="16" rx="6"
                id="parter_2_20" sectorAlias="parter" row="2" seat="20"/>
          <rect className="place" x="1494" y="215" width="16" height="16" rx="6"
                id="parter_3_10" sectorAlias="parter" row="3" seat="10"/>
          <rect className="place" x="1069" y="180" width="16" height="16" rx="6"
                id="parter_2_21" sectorAlias="parter" row="2" seat="21"/>
          <rect className="place" x="1466" y="215" width="16" height="16" rx="6"
                id="parter_3_11" sectorAlias="parter" row="3" seat="11"/>
          <rect className="place" x="792" y="144" width="16" height="16" rx="6"
                id="parter_1_31" sectorAlias="parter" row="1" seat="31"/>
          <rect className="place" x="1041" y="180" width="16" height="16" rx="6"
                id="parter_2_22" sectorAlias="parter" row="2" seat="22"/>
          <rect className="place" x="1439" y="215" width="16" height="16" rx="6"
                id="parter_3_12" sectorAlias="parter" row="3" seat="12"/>
          <rect className="place" x="765" y="144" width="16" height="16" rx="6"
                id="parter_1_32" sectorAlias="parter" row="1" seat="32"/>
          <rect className="place" x="1014" y="180" width="16" height="16" rx="6"
                id="parter_2_23" sectorAlias="parter" row="2" seat="23"/>
          <rect className="place" x="1411" y="215" width="16" height="16" rx="6"
                id="parter_3_13" sectorAlias="parter" row="3" seat="13"/>
          <rect className="place" x="738" y="144" width="16" height="16" rx="6"
                id="parter_1_33" sectorAlias="parter" row="1" seat="33"/>
          <rect className="place" x="986" y="180" width="16" height="16" rx="6"
                id="parter_2_24" sectorAlias="parter" row="2" seat="24"/>
          <rect className="place" x="1383" y="215" width="16" height="16" rx="6"
                id="parter_3_14" sectorAlias="parter" row="3" seat="14"/>
          <rect className="place" x="710" y="144" width="16" height="16" rx="6"
                id="parter_1_34" sectorAlias="parter" row="1" seat="34"/>
          <rect className="place" x="958" y="180" width="16" height="16" rx="6"
                id="parter_2_25" sectorAlias="parter" row="2" seat="25"/>
          <rect className="place" x="1356" y="215" width="16" height="16" rx="6"
                id="parter_3_15" sectorAlias="parter" row="3" seat="15"/>
          <rect className="place" x="682" y="144" width="16" height="16" rx="6"
                id="parter_1_35" sectorAlias="parter" row="1" seat="35"/>
          <rect className="place" x="930" y="180" width="16" height="16" rx="6"
                id="parter_2_26" sectorAlias="parter" row="2" seat="26"/>
          <rect className="place" x="1328" y="215" width="16" height="16" rx="6"
                id="parter_3_16" sectorAlias="parter" row="3" seat="16"/>
          <rect className="place" x="654" y="144" width="16" height="16" rx="6"
                id="parter_1_36" sectorAlias="parter" row="1" seat="36"/>
          <rect className="place" x="1162" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_20" sectorAlias="beltaj_middle" row="2" seat="20"/>
          <rect className="place" x="766" y="1617" width="16" height="16" rx="6"
                id="beltaj_middle_1_30" sectorAlias="beltaj_middle" row="1" seat="30"/>
          <rect className="place" x="1604" y="1678" width="16" height="16" rx="6"
                id="beltaj_middle_3_10" sectorAlias="beltaj_middle" row="3" seat="10"/>
          <rect className="place" x="1134" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_21" sectorAlias="beltaj_middle" row="2" seat="21"/>
          <rect className="place" x="740" y="1606" width="16" height="16" rx="6"
                id="beltaj_middle_1_31" sectorAlias="beltaj_middle" row="1" seat="31"/>
          <rect className="place" x="1580" y="1690" width="16" height="16" rx="6"
                id="beltaj_middle_3_11" sectorAlias="beltaj_middle" row="3" seat="11"/>
          <rect className="place" x="1106" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_22" sectorAlias="beltaj_middle" row="2" seat="22"/>
          <rect className="place" x="715" y="1595" width="16" height="16" rx="6"
                id="beltaj_middle_1_32" sectorAlias="beltaj_middle" row="1" seat="32"/>
          <rect className="place" x="1555" y="1703" width="16" height="16" rx="6"
                id="beltaj_middle_3_12" sectorAlias="beltaj_middle" row="3" seat="12"/>
          <rect className="place" x="1079" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_23" sectorAlias="beltaj_middle" row="2" seat="23"/>
          <rect className="place" x="690" y="1584" width="16" height="16" rx="6"
                id="beltaj_middle_1_33" sectorAlias="beltaj_middle" row="1" seat="33"/>
          <rect className="place" x="1411" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_13" sectorAlias="beltaj_middle" row="3" seat="13"/>
          <rect className="place" x="1051" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_24" sectorAlias="beltaj_middle" row="2" seat="24"/>
          <rect className="place" x="1383" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_14" sectorAlias="beltaj_middle" row="3" seat="14"/>
          <rect className="place" x="664" y="1572" width="16" height="16" rx="6"
                id="beltaj_middle_1_34" sectorAlias="beltaj_middle" row="1" seat="34"/>
          <rect className="place" x="1024" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_25" sectorAlias="beltaj_middle" row="2" seat="25"/>
          <rect className="place" x="1356" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_15" sectorAlias="beltaj_middle" row="3" seat="15"/>
          <rect className="place" x="639" y="1561" width="16" height="16" rx="6"
                id="beltaj_middle_1_35" sectorAlias="beltaj_middle" row="1" seat="35"/>
          <rect className="place" x="1328" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_16" sectorAlias="beltaj_middle" row="3" seat="16"/>
          <rect className="place" x="996" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_2_26" sectorAlias="beltaj_middle" row="2" seat="26"/>
          <rect className="place" x="614" y="1550" width="16" height="16" rx="6"
                id="beltaj_middle_1_36" sectorAlias="beltaj_middle" row="1" seat="36"/>
          <rect className="place" x="1300" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_17" sectorAlias="beltaj_middle" row="3" seat="17"/>
          <rect className="place" x="856" y="1688" width="16" height="16" rx="6"
                id="beltaj_middle_2_27" sectorAlias="beltaj_middle" row="2" seat="27"/>
          <rect className="place" x="1272" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_18" sectorAlias="beltaj_middle" row="3" seat="18"/>
          <rect className="place" x="831" y="1677" width="16" height="16" rx="6"
                id="beltaj_middle_2_28" sectorAlias="beltaj_middle" row="2" seat="28"/>
          <rect className="place" x="1245" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_3_19" sectorAlias="beltaj_middle" row="3" seat="19"/>
          <rect className="place" x="805" y="1666" width="16" height="16" rx="6"
                id="beltaj_middle_2_29" sectorAlias="beltaj_middle" row="2" seat="29"/>
          <rect className="place" x="903" y="180" width="16" height="16" rx="6"
                id="parter_2_27" sectorAlias="parter" row="2" seat="27"/>
          <rect className="place" x="1300" y="215" width="16" height="16" rx="6"
                id="parter_3_17" sectorAlias="parter" row="3" seat="17"/>
          <rect className="place" x="876" y="180" width="16" height="16" rx="6"
                id="parter_2_28" sectorAlias="parter" row="2" seat="28"/>
          <rect className="place" x="1273" y="215" width="16" height="16" rx="6"
                id="parter_3_18" sectorAlias="parter" row="3" seat="18"/>
          <rect className="place" x="848" y="180" width="16" height="16" rx="6"
                id="parter_2_29" sectorAlias="parter" row="2" seat="29"/>
          <rect className="place" x="1125" y="216" width="16" height="16" rx="6"
                id="parter_3_19" sectorAlias="parter" row="3" seat="19"/>
          <rect className="place" x="1629" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_1" sectorAlias="amfiteatr" row="6" seat="1"/>
          <rect className="place" x="1601" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_2" sectorAlias="amfiteatr" row="6" seat="2"/>
          <rect className="place" x="1573" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_3" sectorAlias="amfiteatr" row="6" seat="3"/>
          <rect className="place" x="1435" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_8" sectorAlias="amfiteatr" row="6" seat="8"/>
          <rect className="place" x="1407" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_9" sectorAlias="amfiteatr" row="6" seat="9"/>
          <rect className="place" x="1546" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_4" sectorAlias="amfiteatr" row="6" seat="4"/>
          <rect className="place" x="1518" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_5" sectorAlias="amfiteatr" row="6" seat="5"/>
          <rect className="place" x="1490" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_6" sectorAlias="amfiteatr" row="6" seat="6"/>
          <rect className="place" x="1463" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_7" sectorAlias="amfiteatr" row="6" seat="7"/>
          <rect className="place" x="1494" y="143" width="16" height="16" rx="6"
                id="parter_1_10" sectorAlias="parter" row="1" seat="10"/>
          <rect className="place" x="1466" y="143" width="16" height="16" rx="6"
                id="parter_1_11" sectorAlias="parter" row="1" seat="11"/>
          <rect className="place" x="1439" y="143" width="16" height="16" rx="6"
                id="parter_1_12" sectorAlias="parter" row="1" seat="12"/>
          <rect className="place" x="1411" y="143" width="16" height="16" rx="6"
                id="parter_1_13" sectorAlias="parter" row="1" seat="13"/>
          <rect className="place" x="1383" y="143" width="16" height="16" rx="6"
                id="parter_1_14" sectorAlias="parter" row="1" seat="14"/>
          <rect className="place" x="1629" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_1" sectorAlias="amfiteatr" row="5" seat="1"/>
          <rect className="place" x="1601" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_2" sectorAlias="amfiteatr" row="5" seat="2"/>
          <rect className="place" x="1356" y="143" width="16" height="16" rx="6"
                id="parter_1_15" sectorAlias="parter" row="1" seat="15"/>
          <rect className="place" x="1463" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_7" sectorAlias="amfiteatr" row="5" seat="7"/>
          <rect className="place" x="1435" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_8" sectorAlias="amfiteatr" row="5" seat="8"/>
          <rect className="place" x="1328" y="143" width="16" height="16" rx="6"
                id="parter_1_16" sectorAlias="parter" row="1" seat="16"/>
          <rect className="place" x="1407" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_9" sectorAlias="amfiteatr" row="5" seat="9"/>
          <rect className="place" x="1300" y="143" width="16" height="16" rx="6"
                id="parter_1_17" sectorAlias="parter" row="1" seat="17"/>
          <rect className="place" x="1273" y="143" width="16" height="16" rx="6"
                id="parter_1_18" sectorAlias="parter" row="1" seat="18"/>
          <rect className="place" x="1573" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_3" sectorAlias="amfiteatr" row="5" seat="3"/>
          <rect className="place" x="1125" y="144" width="16" height="16" rx="6"
                id="parter_1_19" sectorAlias="parter" row="1" seat="19"/>
          <rect className="place" x="1546" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_4" sectorAlias="amfiteatr" row="5" seat="4"/>
          <rect className="place" x="1518" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_5" sectorAlias="amfiteatr" row="5" seat="5"/>
          <rect className="place" x="1490" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_6" sectorAlias="amfiteatr" row="5" seat="6"/>
          <rect className="place" x="1601" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_2" sectorAlias="amfiteatr" row="8" seat="2"/>
          <rect className="place" x="1573" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_3" sectorAlias="amfiteatr" row="8" seat="3"/>
          <rect className="place" x="1546" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_4" sectorAlias="amfiteatr" row="8" seat="4"/>
          <rect className="place" x="1518" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_5" sectorAlias="amfiteatr" row="8" seat="5"/>
          <rect className="place" x="1629" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_1" sectorAlias="amfiteatr" row="8" seat="1"/>
          <rect className="place" x="1490" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_6" sectorAlias="amfiteatr" row="8" seat="6"/>
          <rect className="place" x="1463" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_7" sectorAlias="amfiteatr" row="8" seat="7"/>
          <rect className="place" x="1435" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_8" sectorAlias="amfiteatr" row="8" seat="8"/>
          <rect className="place" x="1407" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_9" sectorAlias="amfiteatr" row="8" seat="9"/>
          <rect className="place" x="1629" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_1" sectorAlias="amfiteatr" row="7" seat="1"/>
          <rect className="place" x="1601" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_2" sectorAlias="amfiteatr" row="7" seat="2"/>
          <rect className="place" x="1573" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_3" sectorAlias="amfiteatr" row="7" seat="3"/>
          <rect className="place" x="1546" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_4" sectorAlias="amfiteatr" row="7" seat="4"/>
          <rect className="place" x="1407" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_9" sectorAlias="amfiteatr" row="7" seat="9"/>
          <rect className="place" x="1518" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_5" sectorAlias="amfiteatr" row="7" seat="5"/>
          <rect className="place" x="1490" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_6" sectorAlias="amfiteatr" row="7" seat="6"/>
          <rect className="place" x="1463" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_7" sectorAlias="amfiteatr" row="7" seat="7"/>
          <rect className="place" x="1435" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_8" sectorAlias="amfiteatr" row="7" seat="8"/>
          <rect className="place" x="1284" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_13" sectorAlias="first_level_middle" row="4" seat="13"/>
          <rect className="place" x="1035" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_23" sectorAlias="first_level_middle" row="3" seat="23"/>
          <rect className="place" x="1312" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_12" sectorAlias="first_level_middle" row="4" seat="12"/>
          <rect className="place" x="1063" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_22" sectorAlias="first_level_middle" row="3" seat="22"/>
          <rect className="place" x="1340" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_11" sectorAlias="first_level_middle" row="4" seat="11"/>
          <rect className="place" x="1090" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_21" sectorAlias="first_level_middle" row="3" seat="21"/>
          <rect className="place" x="1368" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_10" sectorAlias="first_level_middle" row="4" seat="10"/>
          <rect className="place" x="814" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_30" sectorAlias="first_level_middle" row="2" seat="30"/>
          <rect className="place" x="1118" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_20" sectorAlias="first_level_middle" row="3" seat="20"/>
          <rect className="place" x="924" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_27" sectorAlias="first_level_middle" row="3" seat="27"/>
          <rect className="place" x="1174" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_17" sectorAlias="first_level_middle" row="4" seat="17"/>
          <rect className="place" x="1201" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_16" sectorAlias="first_level_middle" row="4" seat="16"/>
          <rect className="place" x="952" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_26" sectorAlias="first_level_middle" row="3" seat="26"/>
          <rect className="place" x="1229" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_15" sectorAlias="first_level_middle" row="4" seat="15"/>
          <rect className="place" x="980" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_25" sectorAlias="first_level_middle" row="3" seat="25"/>
          <rect className="place" x="1257" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_14" sectorAlias="first_level_middle" row="4" seat="14"/>
          <rect className="place" x="1008" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_24" sectorAlias="first_level_middle" row="3" seat="24"/>
          <rect className="place" x="869" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_29" sectorAlias="first_level_middle" row="3" seat="29"/>
          <rect className="place" x="1118" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_19" sectorAlias="first_level_middle" row="4" seat="19"/>
          <rect className="place" x="896" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_28" sectorAlias="first_level_middle" row="3" seat="28"/>
          <rect className="place" x="1146" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_18" sectorAlias="first_level_middle" row="4" seat="18"/>
          <rect className="place" x="841" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_30" sectorAlias="first_level_middle" row="3" seat="30"/>
          <rect className="place" x="1090" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_20" sectorAlias="first_level_middle" row="4" seat="20"/>
          <rect className="place" x="980" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_24" sectorAlias="first_level_middle" row="4" seat="24"/>
          <rect className="place" x="1008" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_23" sectorAlias="first_level_middle" row="4" seat="23"/>
          <rect className="place" x="785" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_32" sectorAlias="first_level_middle" row="3" seat="32"/>
          <rect className="place" x="1035" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_22" sectorAlias="first_level_middle" row="4" seat="22"/>
          <rect className="place" x="813" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_31" sectorAlias="first_level_middle" row="3" seat="31"/>
          <rect className="place" x="1062" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_21" sectorAlias="first_level_middle" row="4" seat="21"/>
          <rect className="place" x="869" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_28" sectorAlias="first_level_middle" row="4" seat="28"/>
          <rect className="place" x="897" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_27" sectorAlias="first_level_middle" row="4" seat="27"/>
          <rect className="place" x="924" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_26" sectorAlias="first_level_middle" row="4" seat="26"/>
          <rect className="place" x="952" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_25" sectorAlias="first_level_middle" row="4" seat="25"/>
          <rect className="place" x="840" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_29" sectorAlias="first_level_middle" row="4" seat="29"/>
          <rect className="place" x="1035" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_21" sectorAlias="first_level_middle" row="1" seat="21"/>
          <rect className="place" x="1340" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_11" sectorAlias="first_level_middle" row="2" seat="11"/>
          <rect className="place" x="1063" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_20" sectorAlias="first_level_middle" row="1" seat="20"/>
          <rect className="place" x="1368" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_10" sectorAlias="first_level_middle" row="2" seat="10"/>
          <rect className="place" x="924" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_25" sectorAlias="first_level_middle" row="1" seat="25"/>
          <rect className="place" x="1229" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_15" sectorAlias="first_level_middle" row="2" seat="15"/>
          <rect className="place" x="952" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_24" sectorAlias="first_level_middle" row="1" seat="24"/>
          <rect className="place" x="1257" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_14" sectorAlias="first_level_middle" row="2" seat="14"/>
          <rect className="place" x="980" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_23" sectorAlias="first_level_middle" row="1" seat="23"/>
          <rect className="place" x="1284" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_13" sectorAlias="first_level_middle" row="2" seat="13"/>
          <rect className="place" x="1008" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_22" sectorAlias="first_level_middle" row="1" seat="22"/>
          <rect className="place" x="1312" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_12" sectorAlias="first_level_middle" row="2" seat="12"/>
          <rect className="place" x="1118" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_19" sectorAlias="first_level_middle" row="2" seat="19"/>
          <rect className="place" x="841" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_28" sectorAlias="first_level_middle" row="1" seat="28"/>
          <rect className="place" x="1146" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_18" sectorAlias="first_level_middle" row="2" seat="18"/>
          <rect className="place" x="869" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_27" sectorAlias="first_level_middle" row="1" seat="27"/>
          <rect className="place" x="1174" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_17" sectorAlias="first_level_middle" row="2" seat="17"/>
          <rect className="place" x="897" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_26" sectorAlias="first_level_middle" row="1" seat="26"/>
          <rect className="place" x="1201" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_16" sectorAlias="first_level_middle" row="2" seat="16"/>
          <rect className="place" x="1035" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_22" sectorAlias="first_level_middle" row="2" seat="22"/>
          <rect className="place" x="1340" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_12" sectorAlias="first_level_middle" row="3" seat="12"/>
          <rect className="place" x="1063" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_21" sectorAlias="first_level_middle" row="2" seat="21"/>
          <rect className="place" x="1368" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_11" sectorAlias="first_level_middle" row="3" seat="11"/>
          <rect className="place" x="1090" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_20" sectorAlias="first_level_middle" row="2" seat="20"/>
          <rect className="place" x="1395" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_10" sectorAlias="first_level_middle" row="3" seat="10"/>
          <rect className="place" x="924" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_26" sectorAlias="first_level_middle" row="2" seat="26"/>
          <rect className="place" x="1229" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_16" sectorAlias="first_level_middle" row="3" seat="16"/>
          <rect className="place" x="952" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_25" sectorAlias="first_level_middle" row="2" seat="25"/>
          <rect className="place" x="1257" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_15" sectorAlias="first_level_middle" row="3" seat="15"/>
          <rect className="place" x="980" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_24" sectorAlias="first_level_middle" row="2" seat="24"/>
          <rect className="place" x="1284" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_14" sectorAlias="first_level_middle" row="3" seat="14"/>
          <rect className="place" x="1008" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_23" sectorAlias="first_level_middle" row="2" seat="23"/>
          <rect className="place" x="1312" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_13" sectorAlias="first_level_middle" row="3" seat="13"/>
          <rect className="place" x="841" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_29" sectorAlias="first_level_middle" row="2" seat="29"/>
          <rect className="place" x="1145" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_19" sectorAlias="first_level_middle" row="3" seat="19"/>
          <rect className="place" x="869" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_28" sectorAlias="first_level_middle" row="2" seat="28"/>
          <rect className="place" x="1173" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_18" sectorAlias="first_level_middle" row="3" seat="18"/>
          <rect className="place" x="897" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_27" sectorAlias="first_level_middle" row="2" seat="27"/>
          <rect className="place" x="1201" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_17" sectorAlias="first_level_middle" row="3" seat="17"/>
          <rect className="place" x="1090" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_19" sectorAlias="first_level_middle" row="1" seat="19"/>
          <rect className="place" x="1340" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_10" sectorAlias="first_level_middle" row="1" seat="10"/>
          <rect className="place" x="1229" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_14" sectorAlias="first_level_middle" row="1" seat="14"/>
          <rect className="place" x="1257" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_13" sectorAlias="first_level_middle" row="1" seat="13"/>
          <rect className="place" x="1284" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_12" sectorAlias="first_level_middle" row="1" seat="12"/>
          <rect className="place" x="1312" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_11" sectorAlias="first_level_middle" row="1" seat="11"/>
          <rect className="place" x="1118" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_18" sectorAlias="first_level_middle" row="1" seat="18"/>
          <rect className="place" x="1146" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_17" sectorAlias="first_level_middle" row="1" seat="17"/>
          <rect className="place" x="1174" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_16" sectorAlias="first_level_middle" row="1" seat="16"/>
          <rect className="place" x="1199" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_15" sectorAlias="first_level_middle" row="1" seat="15"/>
          <rect className="place" x="175" y="764" width="16" height="16" rx="6"
                id="first_level_left_2_8" sectorAlias="first_level_left" row="2" seat="8"/>
          <rect className="place" x="175" y="792" width="16" height="16" rx="6"
                id="first_level_left_2_9" sectorAlias="first_level_left" row="2" seat="9"/>
          <rect className="place" x="175" y="653" width="16" height="16" rx="6"
                id="first_level_left_2_4" sectorAlias="first_level_left" row="2" seat="4"/>
          <rect className="place" x="175" y="681" width="16" height="16" rx="6"
                id="first_level_left_2_5" sectorAlias="first_level_left" row="2" seat="5"/>
          <rect className="place" x="175" y="708" width="16" height="16" rx="6"
                id="first_level_left_2_6" sectorAlias="first_level_left" row="2" seat="6"/>
          <rect className="place" x="175" y="736" width="16" height="16" rx="6"
                id="first_level_left_2_7" sectorAlias="first_level_left" row="2" seat="7"/>
          <rect className="place" x="175" y="570" width="16" height="16" rx="6"
                id="first_level_left_2_1" sectorAlias="first_level_left" row="2" seat="1"/>
          <rect className="place" x="175" y="598" width="16" height="16" rx="6"
                id="first_level_left_2_2" sectorAlias="first_level_left" row="2" seat="2"/>
          <rect className="place" x="175" y="625" width="16" height="16" rx="6"
                id="first_level_left_2_3" sectorAlias="first_level_left" row="2" seat="3"/>
          <rect className="place" x="203" y="542" width="16" height="16" rx="6"
                id="first_level_left_1_7" sectorAlias="first_level_left" row="1" seat="7"/>
          <rect className="place" x="203" y="570" width="16" height="16" rx="6"
                id="first_level_left_1_8" sectorAlias="first_level_left" row="1" seat="8"/>
          <rect className="place" x="203" y="598" width="16" height="16" rx="6"
                id="first_level_left_1_9" sectorAlias="first_level_left" row="1" seat="9"/>
          <rect className="place" x="203" y="431" width="16" height="16" rx="6"
                id="first_level_left_1_3" sectorAlias="first_level_left" row="1" seat="3"/>
          <rect className="place" x="203" y="459" width="16" height="16" rx="6"
                id="first_level_left_1_4" sectorAlias="first_level_left" row="1" seat="4"/>
          <rect className="place" x="203" y="487" width="16" height="16" rx="6"
                id="first_level_left_1_5" sectorAlias="first_level_left" row="1" seat="5"/>
          <rect className="place" x="203" y="515" width="16" height="16" rx="6"
                id="first_level_left_1_6" sectorAlias="first_level_left" row="1" seat="6"/>
          <rect className="place" x="203" y="375" width="16" height="16" rx="6"
                id="first_level_left_1_1" sectorAlias="first_level_left" row="1" seat="1"/>
          <rect className="place" x="203" y="403" width="16" height="16" rx="6"
                id="first_level_left_1_2" sectorAlias="first_level_left" row="1" seat="2"/>
          <rect className="place" x="813" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_30" sectorAlias="first_level_middle" row="4" seat="30"/>
          <rect className="place" x="906" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_18" sectorAlias="amfiteatr" row="12" seat="18"/>
          <rect className="place" x="860" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_25" sectorAlias="orchestry_bottom" row="2" seat="25"/>
          <rect className="place" x="887" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_24" sectorAlias="orchestry_bottom" row="2" seat="24"/>
          <rect className="place" x="915" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_23" sectorAlias="orchestry_bottom" row="2" seat="23"/>
          <rect className="place" x="943" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_22" sectorAlias="orchestry_bottom" row="2" seat="22"/>
          <rect className="place" x="970" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_21" sectorAlias="orchestry_bottom" row="2" seat="21"/>
          <rect className="place" x="997" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_20" sectorAlias="orchestry_bottom" row="2" seat="20"/>
          <rect className="place" x="1154" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_10" sectorAlias="amfiteatr" row="13" seat="10"/>
          <rect className="place" x="934" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_16" sectorAlias="amfiteatr" row="13" seat="16"/>
          <rect className="place" x="962" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_15" sectorAlias="amfiteatr" row="13" seat="15"/>
          <rect className="place" x="1045" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_12" sectorAlias="amfiteatr" row="13" seat="12"/>
          <rect className="place" x="1073" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_11" sectorAlias="amfiteatr" row="13" seat="11"/>
          <rect className="place" x="989" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_14" sectorAlias="amfiteatr" row="13" seat="14"/>
          <rect className="place" x="1017" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_13" sectorAlias="amfiteatr" row="13" seat="13"/>
          <rect className="place" x="962" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_18" sectorAlias="amfiteatr" row="11" seat="18"/>
          <rect className="place" x="989" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_17" sectorAlias="amfiteatr" row="11" seat="17"/>
          <rect className="place" x="934" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_19" sectorAlias="amfiteatr" row="11" seat="19"/>
          <rect className="place" x="1196" y="1223" width="16" height="16" rx="6"
                id="amfiteatr__В" sectorAlias="amfiteatr" row="" seat="В"/>
          <rect className="place" x="1169" y="1223" width="16" height="16" rx="6"
                id="amfiteatr__Г" sectorAlias="amfiteatr" row="" seat="Г"/>
          <rect className="place" x="1141" y="1223" width="16" height="16" rx="6"
                id="amfiteatr__Д" sectorAlias="amfiteatr" row="" seat="Д"/>
          <rect className="place" x="1252" y="1223" width="16" height="16" rx="6"
                id="amfiteatr__А" sectorAlias="amfiteatr" row="" seat="А"/>
          <rect className="place" x="1224" y="1223" width="16" height="16" rx="6"
                id="amfiteatr__Б" sectorAlias="amfiteatr" row="" seat="Б"/>
          <rect className="place" x="989" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_15" sectorAlias="amfiteatr" row="12" seat="15"/>
          <rect className="place" x="1017" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_14" sectorAlias="amfiteatr" row="12" seat="14"/>
          <rect className="place" x="934" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_17" sectorAlias="amfiteatr" row="12" seat="17"/>
          <rect className="place" x="962" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_16" sectorAlias="amfiteatr" row="12" seat="16"/>
          <rect className="place" x="1154" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_11" sectorAlias="amfiteatr" row="12" seat="11"/>
          <rect className="place" x="878" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_21" sectorAlias="amfiteatr" row="11" seat="21"/>
          <rect className="place" x="1182" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_10" sectorAlias="amfiteatr" row="12" seat="10"/>
          <rect className="place" x="906" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_20" sectorAlias="amfiteatr" row="11" seat="20"/>
          <rect className="place" x="1045" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_13" sectorAlias="amfiteatr" row="12" seat="13"/>
          <rect className="place" x="1073" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_12" sectorAlias="amfiteatr" row="12" seat="12"/>
          <rect className="place" x="851" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_22" sectorAlias="amfiteatr" row="11" seat="22"/>
          <rect className="place" x="1074" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_10" sectorAlias="amfiteatr" row="14" seat="10"/>
          <rect className="place" x="1025" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_19" sectorAlias="orchestry_bottom" row="1" seat="19"/>
          <rect className="place" x="1053" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_18" sectorAlias="orchestry_bottom" row="1" seat="18"/>
          <rect className="place" x="1081" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_17" sectorAlias="orchestry_bottom" row="1" seat="17"/>
          <rect className="place" x="1109" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_16" sectorAlias="orchestry_bottom" row="1" seat="16"/>
          <rect className="place" x="1045" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_17" sectorAlias="amfiteatr" row="10" seat="17"/>
          <rect className="place" x="1137" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_15" sectorAlias="orchestry_bottom" row="1" seat="15"/>
          <rect className="place" x="1073" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_16" sectorAlias="amfiteatr" row="10" seat="16"/>
          <rect className="place" x="1164" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_14" sectorAlias="orchestry_bottom" row="1" seat="14"/>
          <rect className="place" x="989" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_19" sectorAlias="amfiteatr" row="10" seat="19"/>
          <rect className="place" x="1191" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_13" sectorAlias="orchestry_bottom" row="1" seat="13"/>
          <rect className="place" x="1017" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_18" sectorAlias="amfiteatr" row="10" seat="18"/>
          <rect className="place" x="1219" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_12" sectorAlias="orchestry_bottom" row="1" seat="12"/>
          <rect className="place" x="1247" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_11" sectorAlias="orchestry_bottom" row="1" seat="11"/>
          <rect className="place" x="1274" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_10" sectorAlias="orchestry_bottom" row="1" seat="10"/>
          <rect className="place" x="1073" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_14" sectorAlias="amfiteatr" row="11" seat="14"/>
          <rect className="place" x="852" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_24" sectorAlias="amfiteatr" row="10" seat="24"/>
          <rect className="place" x="1154" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_13" sectorAlias="amfiteatr" row="11" seat="13"/>
          <rect className="place" x="879" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_23" sectorAlias="amfiteatr" row="10" seat="23"/>
          <rect className="place" x="1017" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_16" sectorAlias="amfiteatr" row="11" seat="16"/>
          <rect className="place" x="796" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_26" sectorAlias="amfiteatr" row="10" seat="26"/>
          <rect className="place" x="1045" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_15" sectorAlias="amfiteatr" row="11" seat="15"/>
          <rect className="place" x="824" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_25" sectorAlias="amfiteatr" row="10" seat="25"/>
          <rect className="place" x="1237" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_10" sectorAlias="amfiteatr" row="11" seat="10"/>
          <rect className="place" x="962" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_20" sectorAlias="amfiteatr" row="10" seat="20"/>
          <rect className="place" x="1182" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_12" sectorAlias="amfiteatr" row="11" seat="12"/>
          <rect className="place" x="906" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_22" sectorAlias="amfiteatr" row="10" seat="22"/>
          <rect className="place" x="1210" y="1368" width="16" height="16" rx="6"
                id="amfiteatr_11_11" sectorAlias="amfiteatr" row="11" seat="11"/>
          <rect className="place" x="934" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_21" sectorAlias="amfiteatr" row="10" seat="21"/>
          <rect className="place" x="1025" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_19" sectorAlias="orchestry_bottom" row="2" seat="19"/>
          <rect className="place" x="1053" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_18" sectorAlias="orchestry_bottom" row="2" seat="18"/>
          <rect className="place" x="1081" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_17" sectorAlias="orchestry_bottom" row="2" seat="17"/>
          <rect className="place" x="1109" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_16" sectorAlias="orchestry_bottom" row="2" seat="16"/>
          <rect className="place" x="1137" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_15" sectorAlias="orchestry_bottom" row="2" seat="15"/>
          <rect className="place" x="860" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_25" sectorAlias="orchestry_bottom" row="1" seat="25"/>
          <rect className="place" x="1164" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_14" sectorAlias="orchestry_bottom" row="2" seat="14"/>
          <rect className="place" x="887" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_24" sectorAlias="orchestry_bottom" row="1" seat="24"/>
          <rect className="place" x="1191" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_13" sectorAlias="orchestry_bottom" row="2" seat="13"/>
          <rect className="place" x="915" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_23" sectorAlias="orchestry_bottom" row="1" seat="23"/>
          <rect className="place" x="1219" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_12" sectorAlias="orchestry_bottom" row="2" seat="12"/>
          <rect className="place" x="943" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_22" sectorAlias="orchestry_bottom" row="1" seat="22"/>
          <rect className="place" x="1247" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_11" sectorAlias="orchestry_bottom" row="2" seat="11"/>
          <rect className="place" x="970" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_21" sectorAlias="orchestry_bottom" row="1" seat="21"/>
          <rect className="place" x="997" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_20" sectorAlias="orchestry_bottom" row="1" seat="20"/>
          <rect className="place" x="1274" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_10" sectorAlias="orchestry_bottom" row="2" seat="10"/>
          <rect className="place" x="1210" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_13" sectorAlias="amfiteatr" row="10" seat="13"/>
          <rect className="place" x="1237" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_12" sectorAlias="amfiteatr" row="10" seat="12"/>
          <rect className="place" x="1154" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_15" sectorAlias="amfiteatr" row="10" seat="15"/>
          <rect className="place" x="1182" y="1332" width="16" height="16" rx="6"
                id="amfiteatr_10_14" sectorAlias="amfiteatr" row="10" seat="14"/>
          <rect className="place" x="1324" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_11" sectorAlias="amfiteatr" row="10" seat="11"/>
          <rect className="place" x="1352" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_10" sectorAlias="amfiteatr" row="10" seat="10"/>
          <rect className="place" x="2196" y="606" width="16" height="16" rx="6"
                id="first_level_right_1_9" sectorAlias="first_level_right" row="1" seat="9"/>
          <rect className="place" x="2196" y="578" width="16" height="16" rx="6"
                id="first_level_right_1_8" sectorAlias="first_level_right" row="1" seat="8"/>
          <rect className="place" x="2196" y="383" width="16" height="16" rx="6"
                id="first_level_right_1_1" sectorAlias="first_level_right" row="1" seat="1"/>
          <rect className="place" x="2196" y="439" width="16" height="16" rx="6"
                id="first_level_right_1_3" sectorAlias="first_level_right" row="1" seat="3"/>
          <rect className="place" x="2196" y="411" width="16" height="16" rx="6"
                id="first_level_right_1_2" sectorAlias="first_level_right" row="1" seat="2"/>
          <rect className="place" x="2196" y="495" width="16" height="16" rx="6"
                id="first_level_right_1_5" sectorAlias="first_level_right" row="1" seat="5"/>
          <rect className="place" x="2196" y="467" width="16" height="16" rx="6"
                id="first_level_right_1_4" sectorAlias="first_level_right" row="1" seat="4"/>
          <rect className="place" x="2196" y="550" width="16" height="16" rx="6"
                id="first_level_right_1_7" sectorAlias="first_level_right" row="1" seat="7"/>
          <rect className="place" x="2196" y="523" width="16" height="16" rx="6"
                id="first_level_right_1_6" sectorAlias="first_level_right" row="1" seat="6"/>
          <rect className="place" x="2224" y="800" width="16" height="16" rx="6"
                id="first_level_right_2_9" sectorAlias="first_level_right" row="2" seat="9"/>
          <rect className="place" x="2224" y="606" width="16" height="16" rx="6"
                id="first_level_right_2_2" sectorAlias="first_level_right" row="2" seat="2"/>
          <rect className="place" x="2224" y="578" width="16" height="16" rx="6"
                id="first_level_right_2_1" sectorAlias="first_level_right" row="2" seat="1"/>
          <rect className="place" x="2224" y="661" width="16" height="16" rx="6"
                id="first_level_right_2_4" sectorAlias="first_level_right" row="2" seat="4"/>
          <rect className="place" x="2224" y="633" width="16" height="16" rx="6"
                id="first_level_right_2_3" sectorAlias="first_level_right" row="2" seat="3"/>
          <rect className="place" x="2224" y="716" width="16" height="16" rx="6"
                id="first_level_right_2_6" sectorAlias="first_level_right" row="2" seat="6"/>
          <rect className="place" x="2224" y="689" width="16" height="16" rx="6"
                id="first_level_right_2_5" sectorAlias="first_level_right" row="2" seat="5"/>
          <rect className="place" x="2224" y="772" width="16" height="16" rx="6"
                id="first_level_right_2_8" sectorAlias="first_level_right" row="2" seat="8"/>
          <rect className="place" x="2224" y="744" width="16" height="16" rx="6"
                id="first_level_right_2_7" sectorAlias="first_level_right" row="2" seat="7"/>
          <rect className="place" x="374" y="244" width="16" height="16" rx="6"
                id="beltaj_left_1_9" sectorAlias="beltaj_left" row="1" seat="9"/>
          <rect className="place" x="374" y="216" width="16" height="16" rx="6"
                id="beltaj_left_1_8" sectorAlias="beltaj_left" row="1" seat="8"/>
          <rect className="place" x="374" y="133" width="16" height="16" rx="6"
                id="beltaj_left_1_5" sectorAlias="beltaj_left" row="1" seat="5"/>
          <rect className="place" x="654" y="891" width="16" height="16" rx="6"
                id="parter_20_35" sectorAlias="parter" row="20" seat="35"/>
          <rect className="place" x="374" y="105" width="16" height="16" rx="6"
                id="beltaj_left_1_4" sectorAlias="beltaj_left" row="1" seat="4"/>
          <rect className="place" x="682" y="891" width="16" height="16" rx="6"
                id="parter_20_34" sectorAlias="parter" row="20" seat="34"/>
          <rect className="place" x="374" y="188" width="16" height="16" rx="6"
                id="beltaj_left_1_7" sectorAlias="beltaj_left" row="1" seat="7"/>
          <rect className="place" x="374" y="160" width="16" height="16" rx="6"
                id="beltaj_left_1_6" sectorAlias="beltaj_left" row="1" seat="6"/>
          <rect className="place" x="626" y="891" width="16" height="16" rx="6"
                id="parter_20_36" sectorAlias="parter" row="20" seat="36"/>
          <rect className="place" x="374" y="21" width="16" height="16" rx="6"
                id="beltaj_left_1_1" sectorAlias="beltaj_left" row="1" seat="1"/>
          <rect className="place" x="374" y="77" width="16" height="16" rx="6"
                id="beltaj_left_1_3" sectorAlias="beltaj_left" row="1" seat="3"/>
          <rect className="place" x="374" y="49" width="16" height="16" rx="6"
                id="beltaj_left_1_2" sectorAlias="beltaj_left" row="1" seat="2"/>
          <rect className="place" x="346" y="244" width="16" height="16" rx="6"
                id="beltaj_left_2_9" sectorAlias="beltaj_left" row="2" seat="9"/>
          <rect className="place" x="346" y="160" width="16" height="16" rx="6"
                id="beltaj_left_2_6" sectorAlias="beltaj_left" row="2" seat="6"/>
          <rect className="place" x="346" y="133" width="16" height="16" rx="6"
                id="beltaj_left_2_5" sectorAlias="beltaj_left" row="2" seat="5"/>
          <rect className="place" x="346" y="216" width="16" height="16" rx="6"
                id="beltaj_left_2_8" sectorAlias="beltaj_left" row="2" seat="8"/>
          <rect className="place" x="346" y="188" width="16" height="16" rx="6"
                id="beltaj_left_2_7" sectorAlias="beltaj_left" row="2" seat="7"/>
          <rect className="place" x="346" y="49" width="16" height="16" rx="6"
                id="beltaj_left_2_2" sectorAlias="beltaj_left" row="2" seat="2"/>
          <rect className="place" x="346" y="21" width="16" height="16" rx="6"
                id="beltaj_left_2_1" sectorAlias="beltaj_left" row="2" seat="1"/>
          <rect className="place" x="346" y="105" width="16" height="16" rx="6"
                id="beltaj_left_2_4" sectorAlias="beltaj_left" row="2" seat="4"/>
          <rect className="place" x="346" y="77" width="16" height="16" rx="6"
                id="beltaj_left_2_3" sectorAlias="beltaj_left" row="2" seat="3"/>
          <rect className="place" x="318" y="21" width="16" height="16" rx="6"
                id="beltaj_left_3_1" sectorAlias="beltaj_left" row="3" seat="1"/>
          <rect className="place" x="1439" y="890" width="16" height="16" rx="6"
                id="parter_20_13" sectorAlias="parter" row="20" seat="13"/>
          <rect className="place" x="318" y="188" width="16" height="16" rx="6"
                id="beltaj_left_3_7" sectorAlias="beltaj_left" row="3" seat="7"/>
          <rect className="place" x="1466" y="890" width="16" height="16" rx="6"
                id="parter_20_12" sectorAlias="parter" row="20" seat="12"/>
          <rect className="place" x="318" y="160" width="16" height="16" rx="6"
                id="beltaj_left_3_6" sectorAlias="beltaj_left" row="3" seat="6"/>
          <rect className="place" x="1384" y="890" width="16" height="16" rx="6"
                id="parter_20_15" sectorAlias="parter" row="20" seat="15"/>
          <rect className="place" x="318" y="244" width="16" height="16" rx="6"
                id="beltaj_left_3_9" sectorAlias="beltaj_left" row="3" seat="9"/>
          <rect className="place" x="1411" y="890" width="16" height="16" rx="6"
                id="parter_20_14" sectorAlias="parter" row="20" seat="14"/>
          <rect className="place" x="318" y="216" width="16" height="16" rx="6"
                id="beltaj_left_3_8" sectorAlias="beltaj_left" row="3" seat="8"/>
          <rect className="place" x="318" y="77" width="16" height="16" rx="6"
                id="beltaj_left_3_3" sectorAlias="beltaj_left" row="3" seat="3"/>
          <rect className="place" x="318" y="49" width="16" height="16" rx="6"
                id="beltaj_left_3_2" sectorAlias="beltaj_left" row="3" seat="2"/>
          <rect className="place" x="1097" y="891" width="16" height="16" rx="6"
                id="parter_20_19" sectorAlias="parter" row="20" seat="19"/>
          <rect className="place" x="318" y="133" width="16" height="16" rx="6"
                id="beltaj_left_3_5" sectorAlias="beltaj_left" row="3" seat="5"/>
          <rect className="place" x="318" y="105" width="16" height="16" rx="6"
                id="beltaj_left_3_4" sectorAlias="beltaj_left" row="3" seat="4"/>
          <rect className="place" x="290" y="49" width="16" height="16" rx="6"
                id="beltaj_left_4_2" sectorAlias="beltaj_left" row="4" seat="2"/>
          <rect className="place" x="290" y="21" width="16" height="16" rx="6"
                id="beltaj_left_4_1" sectorAlias="beltaj_left" row="4" seat="1"/>
          <rect className="place" x="1069" y="891" width="16" height="16" rx="6"
                id="parter_20_20" sectorAlias="parter" row="20" seat="20"/>
          <rect className="place" x="1014" y="891" width="16" height="16" rx="6"
                id="parter_20_22" sectorAlias="parter" row="20" seat="22"/>
          <rect className="place" x="1041" y="891" width="16" height="16" rx="6"
                id="parter_20_21" sectorAlias="parter" row="20" seat="21"/>
          <rect className="place" x="290" y="216" width="16" height="16" rx="6"
                id="beltaj_left_4_8" sectorAlias="beltaj_left" row="4" seat="8"/>
          <rect className="place" x="958" y="891" width="16" height="16" rx="6"
                id="parter_20_24" sectorAlias="parter" row="20" seat="24"/>
          <rect className="place" x="290" y="188" width="16" height="16" rx="6"
                id="beltaj_left_4_7" sectorAlias="beltaj_left" row="4" seat="7"/>
          <rect className="place" x="986" y="891" width="16" height="16" rx="6"
                id="parter_20_23" sectorAlias="parter" row="20" seat="23"/>
          <rect className="place" x="902" y="891" width="16" height="16" rx="6"
                id="parter_20_26" sectorAlias="parter" row="20" seat="26"/>
          <rect className="place" x="290" y="244" width="16" height="16" rx="6"
                id="beltaj_left_4_9" sectorAlias="beltaj_left" row="4" seat="9"/>
          <rect className="place" x="930" y="891" width="16" height="16" rx="6"
                id="parter_20_25" sectorAlias="parter" row="20" seat="25"/>
          <rect className="place" x="290" y="105" width="16" height="16" rx="6"
                id="beltaj_left_4_4" sectorAlias="beltaj_left" row="4" seat="4"/>
          <rect className="place" x="848" y="891" width="16" height="16" rx="6"
                id="parter_20_28" sectorAlias="parter" row="20" seat="28"/>
          <rect className="place" x="290" y="77" width="16" height="16" rx="6"
                id="beltaj_left_4_3" sectorAlias="beltaj_left" row="4" seat="3"/>
          <rect className="place" x="876" y="891" width="16" height="16" rx="6"
                id="parter_20_27" sectorAlias="parter" row="20" seat="27"/>
          <rect className="place" x="290" y="160" width="16" height="16" rx="6"
                id="beltaj_left_4_6" sectorAlias="beltaj_left" row="4" seat="6"/>
          <rect className="place" x="290" y="133" width="16" height="16" rx="6"
                id="beltaj_left_4_5" sectorAlias="beltaj_left" row="4" seat="5"/>
          <rect className="place" x="820" y="891" width="16" height="16" rx="6"
                id="parter_20_29" sectorAlias="parter" row="20" seat="29"/>
          <rect className="place" x="765" y="891" width="16" height="16" rx="6"
                id="parter_20_31" sectorAlias="parter" row="20" seat="31"/>
          <rect className="place" x="792" y="891" width="16" height="16" rx="6"
                id="parter_20_30" sectorAlias="parter" row="20" seat="30"/>
          <rect className="place" x="709" y="891" width="16" height="16" rx="6"
                id="parter_20_33" sectorAlias="parter" row="20" seat="33"/>
          <rect className="place" x="737" y="891" width="16" height="16" rx="6"
                id="parter_20_32" sectorAlias="parter" row="20" seat="32"/>
          <rect className="place" x="1546" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_7" sectorAlias="amfiteatr" row="1" seat="7"/>
          <rect className="place" x="1518" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_8" sectorAlias="amfiteatr" row="1" seat="8"/>
          <rect className="place" x="1490" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_9" sectorAlias="amfiteatr" row="1" seat="9"/>
          <rect className="place" x="968" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_20" sectorAlias="beltaj_middle" row="9" seat="20"/>
          <rect className="place" x="940" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_21" sectorAlias="beltaj_middle" row="9" seat="21"/>
          <rect className="place" x="912" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_22" sectorAlias="beltaj_middle" row="9" seat="22"/>
          <rect className="place" x="885" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_23" sectorAlias="beltaj_middle" row="9" seat="23"/>
          <rect className="place" x="1629" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_4" sectorAlias="amfiteatr" row="2" seat="4"/>
          <rect className="place" x="1601" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_5" sectorAlias="amfiteatr" row="2" seat="5"/>
          <rect className="place" x="1573" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_6" sectorAlias="amfiteatr" row="2" seat="6"/>
          <rect className="place" x="1546" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_7" sectorAlias="amfiteatr" row="2" seat="7"/>
          <rect className="place" x="1712" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_1" sectorAlias="amfiteatr" row="2" seat="1"/>
          <rect className="place" x="1685" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_2" sectorAlias="amfiteatr" row="2" seat="2"/>
          <rect className="place" x="1657" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_3" sectorAlias="amfiteatr" row="2" seat="3"/>
          <rect className="place" x="1245" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_10" sectorAlias="beltaj_middle" row="9" seat="10"/>
          <rect className="place" x="1217" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_11" sectorAlias="beltaj_middle" row="9" seat="11"/>
          <rect className="place" x="1189" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_12" sectorAlias="beltaj_middle" row="9" seat="12"/>
          <rect className="place" x="1162" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_13" sectorAlias="beltaj_middle" row="9" seat="13"/>
          <rect className="place" x="1134" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_14" sectorAlias="beltaj_middle" row="9" seat="14"/>
          <rect className="place" x="1106" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_15" sectorAlias="beltaj_middle" row="9" seat="15"/>
          <rect className="place" x="1079" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_16" sectorAlias="beltaj_middle" row="9" seat="16"/>
          <rect className="place" x="1051" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_17" sectorAlias="beltaj_middle" row="9" seat="17"/>
          <rect className="place" x="1023" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_18" sectorAlias="beltaj_middle" row="9" seat="18"/>
          <rect className="place" x="996" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_19" sectorAlias="beltaj_middle" row="9" seat="19"/>
          <rect className="place" x="1494" y="890" width="16" height="16" rx="6"
                id="parter_20_11" sectorAlias="parter" row="20" seat="11"/>
          <rect className="place" x="1522" y="890" width="16" height="16" rx="6"
                id="parter_20_10" sectorAlias="parter" row="20" seat="10"/>
          <rect className="place" x="1657" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_3" sectorAlias="amfiteatr" row="1" seat="3"/>
          <rect className="place" x="1629" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_4" sectorAlias="amfiteatr" row="1" seat="4"/>
          <rect className="place" x="1601" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_5" sectorAlias="amfiteatr" row="1" seat="5"/>
          <rect className="place" x="1574" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_6" sectorAlias="amfiteatr" row="1" seat="6"/>
          <rect className="place" x="1713" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_1" sectorAlias="amfiteatr" row="1" seat="1"/>
          <rect className="place" x="1685" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_2" sectorAlias="amfiteatr" row="1" seat="2"/>
          <rect className="place" x="1490" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_9" sectorAlias="amfiteatr" row="3" seat="9"/>
          <rect className="place" x="1573" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_6" sectorAlias="amfiteatr" row="4" seat="6"/>
          <rect className="place" x="1546" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_7" sectorAlias="amfiteatr" row="4" seat="7"/>
          <rect className="place" x="1518" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_8" sectorAlias="amfiteatr" row="4" seat="8"/>
          <rect className="place" x="1490" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_9" sectorAlias="amfiteatr" row="4" seat="9"/>
          <rect className="place" x="1685" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_2" sectorAlias="amfiteatr" row="4" seat="2"/>
          <rect className="place" x="1657" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_3" sectorAlias="amfiteatr" row="4" seat="3"/>
          <rect className="place" x="1629" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_4" sectorAlias="amfiteatr" row="4" seat="4"/>
          <rect className="place" x="1601" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_5" sectorAlias="amfiteatr" row="4" seat="5"/>
          <rect className="place" x="1518" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_8" sectorAlias="amfiteatr" row="2" seat="8"/>
          <rect className="place" x="1490" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_9" sectorAlias="amfiteatr" row="2" seat="9"/>
          <rect className="place" x="1601" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_5" sectorAlias="amfiteatr" row="3" seat="5"/>
          <rect className="place" x="1573" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_6" sectorAlias="amfiteatr" row="3" seat="6"/>
          <rect className="place" x="1546" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_7" sectorAlias="amfiteatr" row="3" seat="7"/>
          <rect className="place" x="1518" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_8" sectorAlias="amfiteatr" row="3" seat="8"/>
          <rect className="place" x="1712" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_1" sectorAlias="amfiteatr" row="3" seat="1"/>
          <rect className="place" x="1685" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_2" sectorAlias="amfiteatr" row="3" seat="2"/>
          <rect className="place" x="1657" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_3" sectorAlias="amfiteatr" row="3" seat="3"/>
          <rect className="place" x="1629" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_4" sectorAlias="amfiteatr" row="3" seat="4"/>
          <rect className="place" x="1134" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_20" sectorAlias="beltaj_middle" row="5" seat="20"/>
          <rect className="place" x="1328" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_10" sectorAlias="beltaj_middle" row="6" seat="10"/>
          <rect className="place" x="783" y="1716" width="16" height="16" rx="6"
                id="beltaj_middle_4_30" sectorAlias="beltaj_middle" row="4" seat="30"/>
          <rect className="place" x="592" y="1601" width="16" height="16" rx="6"
                id="beltaj_middle_3_40" sectorAlias="beltaj_middle" row="3" seat="40"/>
          <rect className="place" x="1106" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_21" sectorAlias="beltaj_middle" row="5" seat="21"/>
          <rect className="place" x="1300" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_11" sectorAlias="beltaj_middle" row="6" seat="11"/>
          <rect className="place" x="566" y="1590" width="16" height="16" rx="6"
                id="beltaj_middle_3_41" sectorAlias="beltaj_middle" row="3" seat="41"/>
          <rect className="place" x="757" y="1705" width="16" height="16" rx="6"
                id="beltaj_middle_4_31" sectorAlias="beltaj_middle" row="4" seat="31"/>
          <rect className="place" x="1079" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_22" sectorAlias="beltaj_middle" row="5" seat="22"/>
          <rect className="place" x="1273" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_12" sectorAlias="beltaj_middle" row="6" seat="12"/>
          <rect className="place" x="732" y="1693" width="16" height="16" rx="6"
                id="beltaj_middle_4_32" sectorAlias="beltaj_middle" row="4" seat="32"/>
          <rect className="place" x="1051" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_23" sectorAlias="beltaj_middle" row="5" seat="23"/>
          <rect className="place" x="1245" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_13" sectorAlias="beltaj_middle" row="6" seat="13"/>
          <rect className="place" x="707" y="1682" width="16" height="16" rx="6"
                id="beltaj_middle_4_33" sectorAlias="beltaj_middle" row="4" seat="33"/>
          <rect className="place" x="1024" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_24" sectorAlias="beltaj_middle" row="5" seat="24"/>
          <rect className="place" x="1217" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_14" sectorAlias="beltaj_middle" row="6" seat="14"/>
          <rect className="place" x="681" y="1671" width="16" height="16" rx="6"
                id="beltaj_middle_4_34" sectorAlias="beltaj_middle" row="4" seat="34"/>
          <rect className="place" x="996" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_25" sectorAlias="beltaj_middle" row="5" seat="25"/>
          <rect className="place" x="1189" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_15" sectorAlias="beltaj_middle" row="6" seat="15"/>
          <rect className="place" x="656" y="1660" width="16" height="16" rx="6"
                id="beltaj_middle_4_35" sectorAlias="beltaj_middle" row="4" seat="35"/>
          <rect className="place" x="1689" y="396" width="16" height="16" rx="6"
                id="parter_8_3" sectorAlias="parter" row="8" seat="3"/>
          <rect className="place" x="968" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_26" sectorAlias="beltaj_middle" row="5" seat="26"/>
          <rect className="place" x="1162" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_16" sectorAlias="beltaj_middle" row="6" seat="16"/>
          <rect className="place" x="631" y="1649" width="16" height="16" rx="6"
                id="beltaj_middle_4_36" sectorAlias="beltaj_middle" row="4" seat="36"/>
          <rect className="place" x="1661" y="396" width="16" height="16" rx="6"
                id="parter_8_4" sectorAlias="parter" row="8" seat="4"/>
          <rect className="place" x="1134" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_17" sectorAlias="beltaj_middle" row="6" seat="17"/>
          <rect className="place" x="606" y="1638" width="16" height="16" rx="6"
                id="beltaj_middle_4_37" sectorAlias="beltaj_middle" row="4" seat="37"/>
          <rect className="place" x="1633" y="396" width="16" height="16" rx="6"
                id="parter_8_5" sectorAlias="parter" row="8" seat="5"/>
          <rect className="place" x="940" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_27" sectorAlias="beltaj_middle" row="5" seat="27"/>
          <rect className="place" x="1106" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_18" sectorAlias="beltaj_middle" row="6" seat="18"/>
          <rect className="place" x="822" y="1764" width="16" height="16" rx="6"
                id="beltaj_middle_5_28" sectorAlias="beltaj_middle" row="5" seat="28"/>
          <rect className="place" x="1605" y="396" width="16" height="16" rx="6"
                id="parter_8_6" sectorAlias="parter" row="8" seat="6"/>
          <rect className="place" x="1079" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_19" sectorAlias="beltaj_middle" row="6" seat="19"/>
          <rect className="place" x="797" y="1752" width="16" height="16" rx="6"
                id="beltaj_middle_5_29" sectorAlias="beltaj_middle" row="5" seat="29"/>
          <rect className="place" x="1577" y="396" width="16" height="16" rx="6"
                id="parter_8_7" sectorAlias="parter" row="8" seat="7"/>
          <rect className="place" x="1550" y="396" width="16" height="16" rx="6"
                id="parter_8_8" sectorAlias="parter" row="8" seat="8"/>
          <rect className="place" x="1522" y="396" width="16" height="16" rx="6"
                id="parter_8_9" sectorAlias="parter" row="8" seat="9"/>
          <rect className="place" x="1744" y="396" width="16" height="16" rx="6"
                id="parter_8_1" sectorAlias="parter" row="8" seat="1"/>
          <rect className="place" x="1716" y="396" width="16" height="16" rx="6"
                id="parter_8_2" sectorAlias="parter" row="8" seat="2"/>
          <rect className="place" x="845" y="1712" width="16" height="16" rx="6"
                id="beltaj_middle_3_30" sectorAlias="beltaj_middle" row="3" seat="30"/>
          <rect className="place" x="1162" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_20" sectorAlias="beltaj_middle" row="4" seat="20"/>
          <rect className="place" x="1412" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_10" sectorAlias="beltaj_middle" row="5" seat="10"/>
          <rect className="place" x="1134" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_21" sectorAlias="beltaj_middle" row="4" seat="21"/>
          <rect className="place" x="1384" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_11" sectorAlias="beltaj_middle" row="5" seat="11"/>
          <rect className="place" x="820" y="1701" width="16" height="16" rx="6"
                id="beltaj_middle_3_31" sectorAlias="beltaj_middle" row="3" seat="31"/>
          <rect className="place" x="1356" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_12" sectorAlias="beltaj_middle" row="5" seat="12"/>
          <rect className="place" x="1106" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_22" sectorAlias="beltaj_middle" row="4" seat="22"/>
          <rect className="place" x="794" y="1690" width="16" height="16" rx="6"
                id="beltaj_middle_3_32" sectorAlias="beltaj_middle" row="3" seat="32"/>
          <rect className="place" x="1328" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_13" sectorAlias="beltaj_middle" row="5" seat="13"/>
          <rect className="place" x="1079" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_23" sectorAlias="beltaj_middle" row="4" seat="23"/>
          <rect className="place" x="769" y="1679" width="16" height="16" rx="6"
                id="beltaj_middle_3_33" sectorAlias="beltaj_middle" row="3" seat="33"/>
          <rect className="place" x="1300" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_14" sectorAlias="beltaj_middle" row="5" seat="14"/>
          <rect className="place" x="1051" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_24" sectorAlias="beltaj_middle" row="4" seat="24"/>
          <rect className="place" x="744" y="1668" width="16" height="16" rx="6"
                id="beltaj_middle_3_34" sectorAlias="beltaj_middle" row="3" seat="34"/>
          <rect className="place" x="1661" y="432" width="16" height="16" rx="6"
                id="parter_9_4" sectorAlias="parter" row="9" seat="4"/>
          <rect className="place" x="1273" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_15" sectorAlias="beltaj_middle" row="5" seat="15"/>
          <rect className="place" x="1024" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_25" sectorAlias="beltaj_middle" row="4" seat="25"/>
          <rect className="place" x="719" y="1656" width="16" height="16" rx="6"
                id="beltaj_middle_3_35" sectorAlias="beltaj_middle" row="3" seat="35"/>
          <rect className="place" x="1633" y="432" width="16" height="16" rx="6"
                id="parter_9_5" sectorAlias="parter" row="9" seat="5"/>
          <rect className="place" x="1245" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_16" sectorAlias="beltaj_middle" row="5" seat="16"/>
          <rect className="place" x="996" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_26" sectorAlias="beltaj_middle" row="4" seat="26"/>
          <rect className="place" x="693" y="1645" width="16" height="16" rx="6"
                id="beltaj_middle_3_36" sectorAlias="beltaj_middle" row="3" seat="36"/>
          <rect className="place" x="1605" y="432" width="16" height="16" rx="6"
                id="parter_9_6" sectorAlias="parter" row="9" seat="6"/>
          <rect className="place" x="1217" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_17" sectorAlias="beltaj_middle" row="5" seat="17"/>
          <rect className="place" x="968" y="1768" width="16" height="16" rx="6"
                id="beltaj_middle_4_27" sectorAlias="beltaj_middle" row="4" seat="27"/>
          <rect className="place" x="668" y="1634" width="16" height="16" rx="6"
                id="beltaj_middle_3_37" sectorAlias="beltaj_middle" row="3" seat="37"/>
          <rect className="place" x="1577" y="432" width="16" height="16" rx="6"
                id="parter_9_7" sectorAlias="parter" row="9" seat="7"/>
          <rect className="place" x="1189" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_18" sectorAlias="beltaj_middle" row="5" seat="18"/>
          <rect className="place" x="834" y="1738" width="16" height="16" rx="6"
                id="beltaj_middle_4_28" sectorAlias="beltaj_middle" row="4" seat="28"/>
          <rect className="place" x="642" y="1623" width="16" height="16" rx="6"
                id="beltaj_middle_3_38" sectorAlias="beltaj_middle" row="3" seat="38"/>
          <rect className="place" x="1550" y="432" width="16" height="16" rx="6"
                id="parter_9_8" sectorAlias="parter" row="9" seat="8"/>
          <rect className="place" x="1162" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_19" sectorAlias="beltaj_middle" row="5" seat="19"/>
          <rect className="place" x="808" y="1727" width="16" height="16" rx="6"
                id="beltaj_middle_4_29" sectorAlias="beltaj_middle" row="4" seat="29"/>
          <rect className="place" x="617" y="1612" width="16" height="16" rx="6"
                id="beltaj_middle_3_39" sectorAlias="beltaj_middle" row="3" seat="39"/>
          <rect className="place" x="1522" y="432" width="16" height="16" rx="6"
                id="parter_9_9" sectorAlias="parter" row="9" seat="9"/>
          <rect className="place" x="1744" y="432" width="16" height="16" rx="6"
                id="parter_9_1" sectorAlias="parter" row="9" seat="1"/>
          <rect className="place" x="1716" y="432" width="16" height="16" rx="6"
                id="parter_9_2" sectorAlias="parter" row="9" seat="2"/>
          <rect className="place" x="1689" y="432" width="16" height="16" rx="6"
                id="parter_9_3" sectorAlias="parter" row="9" seat="3"/>
          <rect className="place" x="1550" y="288" width="16" height="16" rx="6"
                id="parter_5_8" sectorAlias="parter" row="5" seat="8"/>
          <rect className="place" x="1024" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_20" sectorAlias="beltaj_middle" row="7" seat="20"/>
          <rect className="place" x="1217" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_10" sectorAlias="beltaj_middle" row="8" seat="10"/>
          <rect className="place" x="1522" y="288" width="16" height="16" rx="6"
                id="parter_5_9" sectorAlias="parter" row="5" seat="9"/>
          <rect className="place" x="996" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_21" sectorAlias="beltaj_middle" row="7" seat="21"/>
          <rect className="place" x="1189" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_11" sectorAlias="beltaj_middle" row="8" seat="11"/>
          <rect className="place" x="968" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_22" sectorAlias="beltaj_middle" row="7" seat="22"/>
          <rect className="place" x="1162" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_12" sectorAlias="beltaj_middle" row="8" seat="12"/>
          <rect className="place" x="1134" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_13" sectorAlias="beltaj_middle" row="8" seat="13"/>
          <rect className="place" x="800" y="1814" width="16" height="16" rx="6"
                id="beltaj_middle_7_23" sectorAlias="beltaj_middle" row="7" seat="23"/>
          <rect className="place" x="1106" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_14" sectorAlias="beltaj_middle" row="8" seat="14"/>
          <rect className="place" x="775" y="1803" width="16" height="16" rx="6"
                id="beltaj_middle_7_24" sectorAlias="beltaj_middle" row="7" seat="24"/>
          <rect className="place" x="1079" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_15" sectorAlias="beltaj_middle" row="8" seat="15"/>
          <rect className="place" x="749" y="1792" width="16" height="16" rx="6"
                id="beltaj_middle_7_25" sectorAlias="beltaj_middle" row="7" seat="25"/>
          <rect className="place" x="1051" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_16" sectorAlias="beltaj_middle" row="8" seat="16"/>
          <rect className="place" x="724" y="1781" width="16" height="16" rx="6"
                id="beltaj_middle_7_26" sectorAlias="beltaj_middle" row="7" seat="26"/>
          <rect className="place" x="1023" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_17" sectorAlias="beltaj_middle" row="8" seat="17"/>
          <rect className="place" x="1744" y="324" width="16" height="16" rx="6"
                id="parter_6_1" sectorAlias="parter" row="6" seat="1"/>
          <rect className="place" x="996" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_18" sectorAlias="beltaj_middle" row="8" seat="18"/>
          <rect className="place" x="1716" y="324" width="16" height="16" rx="6"
                id="parter_6_2" sectorAlias="parter" row="6" seat="2"/>
          <rect className="place" x="968" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_19" sectorAlias="beltaj_middle" row="8" seat="19"/>
          <rect className="place" x="1689" y="324" width="16" height="16" rx="6"
                id="parter_6_3" sectorAlias="parter" row="6" seat="3"/>
          <rect className="place" x="1661" y="324" width="16" height="16" rx="6"
                id="parter_6_4" sectorAlias="parter" row="6" seat="4"/>
          <rect className="place" x="1633" y="324" width="16" height="16" rx="6"
                id="parter_6_5" sectorAlias="parter" row="6" seat="5"/>
          <rect className="place" x="1605" y="324" width="16" height="16" rx="6"
                id="parter_6_6" sectorAlias="parter" row="6" seat="6"/>
          <rect className="place" x="1577" y="324" width="16" height="16" rx="6"
                id="parter_6_7" sectorAlias="parter" row="6" seat="7"/>
          <rect className="place" x="1550" y="324" width="16" height="16" rx="6"
                id="parter_6_8" sectorAlias="parter" row="6" seat="8"/>
          <rect className="place" x="1522" y="324" width="16" height="16" rx="6"
                id="parter_6_9" sectorAlias="parter" row="6" seat="9"/>
          <rect className="place" x="1051" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_20" sectorAlias="beltaj_middle" row="6" seat="20"/>
          <rect className="place" x="1300" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_10" sectorAlias="beltaj_middle" row="7" seat="10"/>
          <rect className="place" x="772" y="1741" width="16" height="16" rx="6"
                id="beltaj_middle_5_30" sectorAlias="beltaj_middle" row="5" seat="30"/>
          <rect className="place" x="1024" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_21" sectorAlias="beltaj_middle" row="6" seat="21"/>
          <rect className="place" x="1273" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_11" sectorAlias="beltaj_middle" row="7" seat="11"/>
          <rect className="place" x="746" y="1730" width="16" height="16" rx="6"
                id="beltaj_middle_5_31" sectorAlias="beltaj_middle" row="5" seat="31"/>
          <rect className="place" x="996" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_22" sectorAlias="beltaj_middle" row="6" seat="22"/>
          <rect className="place" x="1245" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_12" sectorAlias="beltaj_middle" row="7" seat="12"/>
          <rect className="place" x="721" y="1719" width="16" height="16" rx="6"
                id="beltaj_middle_5_32" sectorAlias="beltaj_middle" row="5" seat="32"/>
          <rect className="place" x="1217" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_13" sectorAlias="beltaj_middle" row="7" seat="13"/>
          <rect className="place" x="968" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_23" sectorAlias="beltaj_middle" row="6" seat="23"/>
          <rect className="place" x="696" y="1708" width="16" height="16" rx="6"
                id="beltaj_middle_5_33" sectorAlias="beltaj_middle" row="5" seat="33"/>
          <rect className="place" x="1189" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_14" sectorAlias="beltaj_middle" row="7" seat="14"/>
          <rect className="place" x="811" y="1789" width="16" height="16" rx="6"
                id="beltaj_middle_6_24" sectorAlias="beltaj_middle" row="6" seat="24"/>
          <rect className="place" x="670" y="1697" width="16" height="16" rx="6"
                id="beltaj_middle_5_34" sectorAlias="beltaj_middle" row="5" seat="34"/>
          <rect className="place" x="1162" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_15" sectorAlias="beltaj_middle" row="7" seat="15"/>
          <rect className="place" x="786" y="1778" width="16" height="16" rx="6"
                id="beltaj_middle_6_25" sectorAlias="beltaj_middle" row="6" seat="25"/>
          <rect className="place" x="645" y="1685" width="16" height="16" rx="6"
                id="beltaj_middle_5_35" sectorAlias="beltaj_middle" row="5" seat="35"/>
          <rect className="place" x="1134" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_16" sectorAlias="beltaj_middle" row="7" seat="16"/>
          <rect className="place" x="760" y="1767" width="16" height="16" rx="6"
                id="beltaj_middle_6_26" sectorAlias="beltaj_middle" row="6" seat="26"/>
          <rect className="place" x="1716" y="360" width="16" height="16" rx="6"
                id="parter_7_2" sectorAlias="parter" row="7" seat="2"/>
          <rect className="place" x="1106" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_17" sectorAlias="beltaj_middle" row="7" seat="17"/>
          <rect className="place" x="735" y="1755" width="16" height="16" rx="6"
                id="beltaj_middle_6_27" sectorAlias="beltaj_middle" row="6" seat="27"/>
          <rect className="place" x="1689" y="360" width="16" height="16" rx="6"
                id="parter_7_3" sectorAlias="parter" row="7" seat="3"/>
          <rect className="place" x="1079" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_18" sectorAlias="beltaj_middle" row="7" seat="18"/>
          <rect className="place" x="709" y="1744" width="16" height="16" rx="6"
                id="beltaj_middle_6_28" sectorAlias="beltaj_middle" row="6" seat="28"/>
          <rect className="place" x="1661" y="360" width="16" height="16" rx="6"
                id="parter_7_4" sectorAlias="parter" row="7" seat="4"/>
          <rect className="place" x="1051" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_19" sectorAlias="beltaj_middle" row="7" seat="19"/>
          <rect className="place" x="684" y="1733" width="16" height="16" rx="6"
                id="beltaj_middle_6_29" sectorAlias="beltaj_middle" row="6" seat="29"/>
          <rect className="place" x="1633" y="360" width="16" height="16" rx="6"
                id="parter_7_5" sectorAlias="parter" row="7" seat="5"/>
          <rect className="place" x="1605" y="360" width="16" height="16" rx="6"
                id="parter_7_6" sectorAlias="parter" row="7" seat="6"/>
          <rect className="place" x="1577" y="360" width="16" height="16" rx="6"
                id="parter_7_7" sectorAlias="parter" row="7" seat="7"/>
          <rect className="place" x="1550" y="360" width="16" height="16" rx="6"
                id="parter_7_8" sectorAlias="parter" row="7" seat="8"/>
          <rect className="place" x="1522" y="360" width="16" height="16" rx="6"
                id="parter_7_9" sectorAlias="parter" row="7" seat="9"/>
          <rect className="place" x="1744" y="360" width="16" height="16" rx="6"
                id="parter_7_1" sectorAlias="parter" row="7" seat="1"/>
          <rect className="place" x="1605" y="215" width="16" height="16" rx="6"
                id="parter_3_6" sectorAlias="parter" row="3" seat="6"/>
          <rect className="place" x="1577" y="215" width="16" height="16" rx="6"
                id="parter_3_7" sectorAlias="parter" row="3" seat="7"/>
          <rect className="place" x="1550" y="215" width="16" height="16" rx="6"
                id="parter_3_8" sectorAlias="parter" row="3" seat="8"/>
          <rect className="place" x="1522" y="215" width="16" height="16" rx="6"
                id="parter_3_9" sectorAlias="parter" row="3" seat="9"/>
          <rect className="place" x="1744" y="251" width="16" height="16" rx="6"
                id="parter_4_1" sectorAlias="parter" row="4" seat="1"/>
          <rect className="place" x="1716" y="251" width="16" height="16" rx="6"
                id="parter_4_2" sectorAlias="parter" row="4" seat="2"/>
          <rect className="place" x="1689" y="251" width="16" height="16" rx="6"
                id="parter_4_3" sectorAlias="parter" row="4" seat="3"/>
          <rect className="place" x="1661" y="251" width="16" height="16" rx="6"
                id="parter_4_4" sectorAlias="parter" row="4" seat="4"/>
          <rect className="place" x="1633" y="251" width="16" height="16" rx="6"
                id="parter_4_5" sectorAlias="parter" row="4" seat="5"/>
          <rect className="place" x="1605" y="251" width="16" height="16" rx="6"
                id="parter_4_6" sectorAlias="parter" row="4" seat="6"/>
          <rect className="place" x="1577" y="251" width="16" height="16" rx="6"
                id="parter_4_7" sectorAlias="parter" row="4" seat="7"/>
          <rect className="place" x="1550" y="251" width="16" height="16" rx="6"
                id="parter_4_8" sectorAlias="parter" row="4" seat="8"/>
          <rect className="place" x="1522" y="251" width="16" height="16" rx="6"
                id="parter_4_9" sectorAlias="parter" row="4" seat="9"/>
          <rect className="place" x="1744" y="288" width="16" height="16" rx="6"
                id="parter_5_1" sectorAlias="parter" row="5" seat="1"/>
          <rect className="place" x="1716" y="288" width="16" height="16" rx="6"
                id="parter_5_2" sectorAlias="parter" row="5" seat="2"/>
          <rect className="place" x="1689" y="288" width="16" height="16" rx="6"
                id="parter_5_3" sectorAlias="parter" row="5" seat="3"/>
          <rect className="place" x="1661" y="288" width="16" height="16" rx="6"
                id="parter_5_4" sectorAlias="parter" row="5" seat="4"/>
          <rect className="place" x="1633" y="288" width="16" height="16" rx="6"
                id="parter_5_5" sectorAlias="parter" row="5" seat="5"/>
          <rect className="place" x="1605" y="288" width="16" height="16" rx="6"
                id="parter_5_6" sectorAlias="parter" row="5" seat="6"/>
          <rect className="place" x="1577" y="288" width="16" height="16" rx="6"
                id="parter_5_7" sectorAlias="parter" row="5" seat="7"/>
          <rect className="place" x="1661" y="143" width="16" height="16" rx="6"
                id="parter_1_4" sectorAlias="parter" row="1" seat="4"/>
          <rect className="place" x="1633" y="143" width="16" height="16" rx="6"
                id="parter_1_5" sectorAlias="parter" row="1" seat="5"/>
          <rect className="place" x="1605" y="143" width="16" height="16" rx="6"
                id="parter_1_6" sectorAlias="parter" row="1" seat="6"/>
          <rect className="place" x="1577" y="143" width="16" height="16" rx="6"
                id="parter_1_7" sectorAlias="parter" row="1" seat="7"/>
          <rect className="place" x="1550" y="143" width="16" height="16" rx="6"
                id="parter_1_8" sectorAlias="parter" row="1" seat="8"/>
          <rect className="place" x="1522" y="143" width="16" height="16" rx="6"
                id="parter_1_9" sectorAlias="parter" row="1" seat="9"/>
          <rect className="place" x="1744" y="179" width="16" height="16" rx="6"
                id="parter_2_1" sectorAlias="parter" row="2" seat="1"/>
          <rect className="place" x="1716" y="179" width="16" height="16" rx="6"
                id="parter_2_2" sectorAlias="parter" row="2" seat="2"/>
          <rect className="place" x="1689" y="179" width="16" height="16" rx="6"
                id="parter_2_3" sectorAlias="parter" row="2" seat="3"/>
          <rect className="place" x="1661" y="179" width="16" height="16" rx="6"
                id="parter_2_4" sectorAlias="parter" row="2" seat="4"/>
          <rect className="place" x="1633" y="179" width="16" height="16" rx="6"
                id="parter_2_5" sectorAlias="parter" row="2" seat="5"/>
          <rect className="place" x="1605" y="179" width="16" height="16" rx="6"
                id="parter_2_6" sectorAlias="parter" row="2" seat="6"/>
          <rect className="place" x="1577" y="179" width="16" height="16" rx="6"
                id="parter_2_7" sectorAlias="parter" row="2" seat="7"/>
          <rect className="place" x="1550" y="179" width="16" height="16" rx="6"
                id="parter_2_8" sectorAlias="parter" row="2" seat="8"/>
          <rect className="place" x="1522" y="179" width="16" height="16" rx="6"
                id="parter_2_9" sectorAlias="parter" row="2" seat="9"/>
          <rect className="place" x="1744" y="215" width="16" height="16" rx="6"
                id="parter_3_1" sectorAlias="parter" row="3" seat="1"/>
          <rect className="place" x="1716" y="215" width="16" height="16" rx="6"
                id="parter_3_2" sectorAlias="parter" row="3" seat="2"/>
          <rect className="place" x="1689" y="215" width="16" height="16" rx="6"
                id="parter_3_3" sectorAlias="parter" row="3" seat="3"/>
          <rect className="place" x="1661" y="215" width="16" height="16" rx="6"
                id="parter_3_4" sectorAlias="parter" row="3" seat="4"/>
          <rect className="place" x="1633" y="215" width="16" height="16" rx="6"
                id="parter_3_5" sectorAlias="parter" row="3" seat="5"/>
          <rect className="place" x="1744" y="143" width="16" height="16" rx="6"
                id="parter_1_1" sectorAlias="parter" row="1" seat="1"/>
          <rect className="place" x="1716" y="143" width="16" height="16" rx="6"
                id="parter_1_2" sectorAlias="parter" row="1" seat="2"/>
          <rect className="place" x="1689" y="143" width="16" height="16" rx="6"
                id="parter_1_3" sectorAlias="parter" row="1" seat="3"/>
          <rect className="place" x="1590" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_2" sectorAlias="first_level_middle" row="4" seat="2"/>
          <rect className="place" x="1618" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_1" sectorAlias="first_level_middle" row="4" seat="1"/>
          <rect className="place" x="1478" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_6" sectorAlias="first_level_middle" row="4" seat="6"/>
          <rect className="place" x="1506" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_5" sectorAlias="first_level_middle" row="4" seat="5"/>
          <rect className="place" x="1534" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_4" sectorAlias="first_level_middle" row="4" seat="4"/>
          <rect className="place" x="1562" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_3" sectorAlias="first_level_middle" row="4" seat="3"/>
          <rect className="place" x="1395" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_9" sectorAlias="first_level_middle" row="4" seat="9"/>
          <rect className="place" x="1423" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_8" sectorAlias="first_level_middle" row="4" seat="8"/>
          <rect className="place" x="1451" y="2103" width="16" height="16" rx="6"
                id="first_level_middle_4_7" sectorAlias="first_level_middle" row="4" seat="7"/>
          <rect className="place" x="1534" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_4" sectorAlias="first_level_middle" row="2" seat="4"/>
          <rect className="place" x="1562" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_3" sectorAlias="first_level_middle" row="2" seat="3"/>
          <rect className="place" x="1590" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_2" sectorAlias="first_level_middle" row="2" seat="2"/>
          <rect className="place" x="1618" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_1" sectorAlias="first_level_middle" row="2" seat="1"/>
          <rect className="place" x="1423" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_8" sectorAlias="first_level_middle" row="2" seat="8"/>
          <rect className="place" x="1451" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_7" sectorAlias="first_level_middle" row="2" seat="7"/>
          <rect className="place" x="1479" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_6" sectorAlias="first_level_middle" row="2" seat="6"/>
          <rect className="place" x="1507" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_5" sectorAlias="first_level_middle" row="2" seat="5"/>
          <rect className="place" x="626" y="855" width="16" height="16" rx="6"
                id="parter_19_36" sectorAlias="parter" row="19" seat="36"/>
          <rect className="place" x="1368" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_9" sectorAlias="first_level_middle" row="1" seat="9"/>
          <rect className="place" x="1395" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_8" sectorAlias="first_level_middle" row="1" seat="8"/>
          <rect className="place" x="765" y="855" width="16" height="16" rx="6"
                id="parter_19_31" sectorAlias="parter" row="19" seat="31"/>
          <rect className="place" x="792" y="855" width="16" height="16" rx="6"
                id="parter_19_30" sectorAlias="parter" row="19" seat="30"/>
          <rect className="place" x="709" y="855" width="16" height="16" rx="6"
                id="parter_19_33" sectorAlias="parter" row="19" seat="33"/>
          <rect className="place" x="737" y="855" width="16" height="16" rx="6"
                id="parter_19_32" sectorAlias="parter" row="19" seat="32"/>
          <rect className="place" x="654" y="855" width="16" height="16" rx="6"
                id="parter_19_35" sectorAlias="parter" row="19" seat="35"/>
          <rect className="place" x="682" y="855" width="16" height="16" rx="6"
                id="parter_19_34" sectorAlias="parter" row="19" seat="34"/>
          <rect className="place" x="1645" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_1" sectorAlias="first_level_middle" row="3" seat="1"/>
          <rect className="place" x="1534" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_5" sectorAlias="first_level_middle" row="3" seat="5"/>
          <rect className="place" x="1562" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_4" sectorAlias="first_level_middle" row="3" seat="4"/>
          <rect className="place" x="1589" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_3" sectorAlias="first_level_middle" row="3" seat="3"/>
          <rect className="place" x="1617" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_2" sectorAlias="first_level_middle" row="3" seat="2"/>
          <rect className="place" x="1423" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_9" sectorAlias="first_level_middle" row="3" seat="9"/>
          <rect className="place" x="1451" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_8" sectorAlias="first_level_middle" row="3" seat="8"/>
          <rect className="place" x="1478" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_7" sectorAlias="first_level_middle" row="3" seat="7"/>
          <rect className="place" x="1506" y="2075" width="16" height="16" rx="6"
                id="first_level_middle_3_6" sectorAlias="first_level_middle" row="3" seat="6"/>
          <rect className="place" x="1395" y="2047" width="16" height="16" rx="6"
                id="first_level_middle_2_9" sectorAlias="first_level_middle" row="2" seat="9"/>
          <rect className="place" x="682" y="782" width="16" height="16" rx="6"
                id="parter_17_35" sectorAlias="parter" row="17" seat="35"/>
          <rect className="place" x="1384" y="854" width="16" height="16" rx="6"
                id="parter_19_15" sectorAlias="parter" row="19" seat="15"/>
          <rect className="place" x="930" y="819" width="16" height="16" rx="6"
                id="parter_18_25" sectorAlias="parter" row="18" seat="25"/>
          <rect className="place" x="709" y="782" width="16" height="16" rx="6"
                id="parter_17_34" sectorAlias="parter" row="17" seat="34"/>
          <rect className="place" x="1411" y="854" width="16" height="16" rx="6"
                id="parter_19_14" sectorAlias="parter" row="19" seat="14"/>
          <rect className="place" x="958" y="819" width="16" height="16" rx="6"
                id="parter_18_24" sectorAlias="parter" row="18" seat="24"/>
          <rect className="place" x="876" y="819" width="16" height="16" rx="6"
                id="parter_18_27" sectorAlias="parter" row="18" seat="27"/>
          <rect className="place" x="654" y="782" width="16" height="16" rx="6"
                id="parter_17_36" sectorAlias="parter" row="17" seat="36"/>
          <rect className="place" x="902" y="819" width="16" height="16" rx="6"
                id="parter_18_26" sectorAlias="parter" row="18" seat="26"/>
          <rect className="place" x="820" y="819" width="16" height="16" rx="6"
                id="parter_18_29" sectorAlias="parter" row="18" seat="29"/>
          <rect className="place" x="848" y="819" width="16" height="16" rx="6"
                id="parter_18_28" sectorAlias="parter" row="18" seat="28"/>
          <rect className="place" x="792" y="782" width="16" height="16" rx="6"
                id="parter_17_31" sectorAlias="parter" row="17" seat="31"/>
          <rect className="place" x="1494" y="854" width="16" height="16" rx="6"
                id="parter_19_11" sectorAlias="parter" row="19" seat="11"/>
          <rect className="place" x="1041" y="819" width="16" height="16" rx="6"
                id="parter_18_21" sectorAlias="parter" row="18" seat="21"/>
          <rect className="place" x="820" y="782" width="16" height="16" rx="6"
                id="parter_17_30" sectorAlias="parter" row="17" seat="30"/>
          <rect className="place" x="1522" y="854" width="16" height="16" rx="6"
                id="parter_19_10" sectorAlias="parter" row="19" seat="10"/>
          <rect className="place" x="1069" y="819" width="16" height="16" rx="6"
                id="parter_18_20" sectorAlias="parter" row="18" seat="20"/>
          <rect className="place" x="737" y="782" width="16" height="16" rx="6"
                id="parter_17_33" sectorAlias="parter" row="17" seat="33"/>
          <rect className="place" x="1439" y="854" width="16" height="16" rx="6"
                id="parter_19_13" sectorAlias="parter" row="19" seat="13"/>
          <rect className="place" x="986" y="819" width="16" height="16" rx="6"
                id="parter_18_23" sectorAlias="parter" row="18" seat="23"/>
          <rect className="place" x="765" y="782" width="16" height="16" rx="6"
                id="parter_17_32" sectorAlias="parter" row="17" seat="32"/>
          <rect className="place" x="1466" y="854" width="16" height="16" rx="6"
                id="parter_19_12" sectorAlias="parter" row="19" seat="12"/>
          <rect className="place" x="1014" y="819" width="16" height="16" rx="6"
                id="parter_18_22" sectorAlias="parter" row="18" seat="22"/>
          <rect className="place" x="1534" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_3" sectorAlias="first_level_middle" row="1" seat="3"/>
          <rect className="place" x="1562" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_2" sectorAlias="first_level_middle" row="1" seat="2"/>
          <rect className="place" x="1590" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_1" sectorAlias="first_level_middle" row="1" seat="1"/>
          <rect className="place" x="1423" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_7" sectorAlias="first_level_middle" row="1" seat="7"/>
          <rect className="place" x="1451" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_6" sectorAlias="first_level_middle" row="1" seat="6"/>
          <rect className="place" x="1479" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_5" sectorAlias="first_level_middle" row="1" seat="5"/>
          <rect className="place" x="1507" y="2020" width="16" height="16" rx="6"
                id="first_level_middle_1_4" sectorAlias="first_level_middle" row="1" seat="4"/>
          <rect className="place" x="902" y="855" width="16" height="16" rx="6"
                id="parter_19_26" sectorAlias="parter" row="19" seat="26"/>
          <rect className="place" x="626" y="819" width="16" height="16" rx="6"
                id="parter_18_36" sectorAlias="parter" row="18" seat="36"/>
          <rect className="place" x="930" y="855" width="16" height="16" rx="6"
                id="parter_19_25" sectorAlias="parter" row="19" seat="25"/>
          <rect className="place" x="654" y="819" width="16" height="16" rx="6"
                id="parter_18_35" sectorAlias="parter" row="18" seat="35"/>
          <rect className="place" x="848" y="855" width="16" height="16" rx="6"
                id="parter_19_28" sectorAlias="parter" row="19" seat="28"/>
          <rect className="place" x="876" y="855" width="16" height="16" rx="6"
                id="parter_19_27" sectorAlias="parter" row="19" seat="27"/>
          <rect className="place" x="820" y="855" width="16" height="16" rx="6"
                id="parter_19_29" sectorAlias="parter" row="19" seat="29"/>
          <rect className="place" x="792" y="819" width="16" height="16" rx="6"
                id="parter_18_30" sectorAlias="parter" row="18" seat="30"/>
          <rect className="place" x="1014" y="855" width="16" height="16" rx="6"
                id="parter_19_22" sectorAlias="parter" row="19" seat="22"/>
          <rect className="place" x="737" y="819" width="16" height="16" rx="6"
                id="parter_18_32" sectorAlias="parter" row="18" seat="32"/>
          <rect className="place" x="1041" y="855" width="16" height="16" rx="6"
                id="parter_19_21" sectorAlias="parter" row="19" seat="21"/>
          <rect className="place" x="765" y="819" width="16" height="16" rx="6"
                id="parter_18_31" sectorAlias="parter" row="18" seat="31"/>
          <rect className="place" x="958" y="855" width="16" height="16" rx="6"
                id="parter_19_24" sectorAlias="parter" row="19" seat="24"/>
          <rect className="place" x="682" y="819" width="16" height="16" rx="6"
                id="parter_18_34" sectorAlias="parter" row="18" seat="34"/>
          <rect className="place" x="986" y="855" width="16" height="16" rx="6"
                id="parter_19_23" sectorAlias="parter" row="19" seat="23"/>
          <rect className="place" x="709" y="819" width="16" height="16" rx="6"
                id="parter_18_33" sectorAlias="parter" row="18" seat="33"/>
          <rect className="place" x="848" y="710" width="16" height="16" rx="6"
                id="parter_15_29" sectorAlias="parter" row="15" seat="29"/>
          <rect className="place" x="1125" y="746" width="16" height="16" rx="6"
                id="parter_16_19" sectorAlias="parter" row="16" seat="19"/>
          <rect className="place" x="737" y="710" width="16" height="16" rx="6"
                id="parter_15_33" sectorAlias="parter" row="15" seat="33"/>
          <rect className="place" x="1411" y="782" width="16" height="16" rx="6"
                id="parter_17_13" sectorAlias="parter" row="17" seat="13"/>
          <rect className="place" x="1014" y="746" width="16" height="16" rx="6"
                id="parter_16_23" sectorAlias="parter" row="16" seat="23"/>
          <rect className="place" x="765" y="710" width="16" height="16" rx="6"
                id="parter_15_32" sectorAlias="parter" row="15" seat="32"/>
          <rect className="place" x="1439" y="782" width="16" height="16" rx="6"
                id="parter_17_12" sectorAlias="parter" row="17" seat="12"/>
          <rect className="place" x="1041" y="746" width="16" height="16" rx="6"
                id="parter_16_22" sectorAlias="parter" row="16" seat="22"/>
          <rect className="place" x="682" y="710" width="16" height="16" rx="6"
                id="parter_15_35" sectorAlias="parter" row="15" seat="35"/>
          <rect className="place" x="1356" y="782" width="16" height="16" rx="6"
                id="parter_17_15" sectorAlias="parter" row="17" seat="15"/>
          <rect className="place" x="958" y="746" width="16" height="16" rx="6"
                id="parter_16_25" sectorAlias="parter" row="16" seat="25"/>
          <rect className="place" x="709" y="710" width="16" height="16" rx="6"
                id="parter_15_34" sectorAlias="parter" row="15" seat="34"/>
          <rect className="place" x="1383" y="782" width="16" height="16" rx="6"
                id="parter_17_14" sectorAlias="parter" row="17" seat="14"/>
          <rect className="place" x="986" y="746" width="16" height="16" rx="6"
                id="parter_16_24" sectorAlias="parter" row="16" seat="24"/>
          <rect className="place" x="1300" y="782" width="16" height="16" rx="6"
                id="parter_17_17" sectorAlias="parter" row="17" seat="17"/>
          <rect className="place" x="903" y="746" width="16" height="16" rx="6"
                id="parter_16_27" sectorAlias="parter" row="16" seat="27"/>
          <rect className="place" x="654" y="710" width="16" height="16" rx="6"
                id="parter_15_36" sectorAlias="parter" row="15" seat="36"/>
          <rect className="place" x="1328" y="782" width="16" height="16" rx="6"
                id="parter_17_16" sectorAlias="parter" row="17" seat="16"/>
          <rect className="place" x="930" y="746" width="16" height="16" rx="6"
                id="parter_16_26" sectorAlias="parter" row="16" seat="26"/>
          <rect className="place" x="1125" y="782" width="16" height="16" rx="6"
                id="parter_17_19" sectorAlias="parter" row="17" seat="19"/>
          <rect className="place" x="848" y="746" width="16" height="16" rx="6"
                id="parter_16_29" sectorAlias="parter" row="16" seat="29"/>
          <rect className="place" x="1273" y="782" width="16" height="16" rx="6"
                id="parter_17_18" sectorAlias="parter" row="17" seat="18"/>
          <rect className="place" x="876" y="746" width="16" height="16" rx="6"
                id="parter_16_28" sectorAlias="parter" row="16" seat="28"/>
          <rect className="place" x="792" y="710" width="16" height="16" rx="6"
                id="parter_15_31" sectorAlias="parter" row="15" seat="31"/>
          <rect className="place" x="1466" y="782" width="16" height="16" rx="6"
                id="parter_17_11" sectorAlias="parter" row="17" seat="11"/>
          <rect className="place" x="1069" y="746" width="16" height="16" rx="6"
                id="parter_16_21" sectorAlias="parter" row="16" seat="21"/>
          <rect className="place" x="820" y="710" width="16" height="16" rx="6"
                id="parter_15_30" sectorAlias="parter" row="15" seat="30"/>
          <rect className="place" x="1494" y="782" width="16" height="16" rx="6"
                id="parter_17_10" sectorAlias="parter" row="17" seat="10"/>
          <rect className="place" x="1097" y="746" width="16" height="16" rx="6"
                id="parter_16_20" sectorAlias="parter" row="16" seat="20"/>
          <rect className="place" x="986" y="782" width="16" height="16" rx="6"
                id="parter_17_24" sectorAlias="parter" row="17" seat="24"/>
          <rect className="place" x="1411" y="818" width="16" height="16" rx="6"
                id="parter_18_14" sectorAlias="parter" row="18" seat="14"/>
          <rect className="place" x="709" y="746" width="16" height="16" rx="6"
                id="parter_16_34" sectorAlias="parter" row="16" seat="34"/>
          <rect className="place" x="1014" y="782" width="16" height="16" rx="6"
                id="parter_17_23" sectorAlias="parter" row="17" seat="23"/>
          <rect className="place" x="1439" y="818" width="16" height="16" rx="6"
                id="parter_18_13" sectorAlias="parter" row="18" seat="13"/>
          <rect className="place" x="737" y="746" width="16" height="16" rx="6"
                id="parter_16_33" sectorAlias="parter" row="16" seat="33"/>
          <rect className="place" x="930" y="782" width="16" height="16" rx="6"
                id="parter_17_26" sectorAlias="parter" row="17" seat="26"/>
          <rect className="place" x="1356" y="818" width="16" height="16" rx="6"
                id="parter_18_16" sectorAlias="parter" row="18" seat="16"/>
          <rect className="place" x="654" y="746" width="16" height="16" rx="6"
                id="parter_16_36" sectorAlias="parter" row="16" seat="36"/>
          <rect className="place" x="958" y="782" width="16" height="16" rx="6"
                id="parter_17_25" sectorAlias="parter" row="17" seat="25"/>
          <rect className="place" x="1384" y="818" width="16" height="16" rx="6"
                id="parter_18_15" sectorAlias="parter" row="18" seat="15"/>
          <rect className="place" x="682" y="746" width="16" height="16" rx="6"
                id="parter_16_35" sectorAlias="parter" row="16" seat="35"/>
          <rect className="place" x="876" y="782" width="16" height="16" rx="6"
                id="parter_17_28" sectorAlias="parter" row="17" seat="28"/>
          <rect className="place" x="1300" y="818" width="16" height="16" rx="6"
                id="parter_18_18" sectorAlias="parter" row="18" seat="18"/>
          <rect className="place" x="903" y="782" width="16" height="16" rx="6"
                id="parter_17_27" sectorAlias="parter" row="17" seat="27"/>
          <rect className="place" x="1328" y="818" width="16" height="16" rx="6"
                id="parter_18_17" sectorAlias="parter" row="18" seat="17"/>
          <rect className="place" x="848" y="782" width="16" height="16" rx="6"
                id="parter_17_29" sectorAlias="parter" row="17" seat="29"/>
          <rect className="place" x="1097" y="819" width="16" height="16" rx="6"
                id="parter_18_19" sectorAlias="parter" row="18" seat="19"/>
          <rect className="place" x="1522" y="818" width="16" height="16" rx="6"
                id="parter_18_10" sectorAlias="parter" row="18" seat="10"/>
          <rect className="place" x="1097" y="782" width="16" height="16" rx="6"
                id="parter_17_20" sectorAlias="parter" row="17" seat="20"/>
          <rect className="place" x="820" y="746" width="16" height="16" rx="6"
                id="parter_16_30" sectorAlias="parter" row="16" seat="30"/>
          <rect className="place" x="1041" y="782" width="16" height="16" rx="6"
                id="parter_17_22" sectorAlias="parter" row="17" seat="22"/>
          <rect className="place" x="1466" y="818" width="16" height="16" rx="6"
                id="parter_18_12" sectorAlias="parter" row="18" seat="12"/>
          <rect className="place" x="765" y="746" width="16" height="16" rx="6"
                id="parter_16_32" sectorAlias="parter" row="16" seat="32"/>
          <rect className="place" x="1494" y="818" width="16" height="16" rx="6"
                id="parter_18_11" sectorAlias="parter" row="18" seat="11"/>
          <rect className="place" x="1069" y="782" width="16" height="16" rx="6"
                id="parter_17_21" sectorAlias="parter" row="17" seat="21"/>
          <rect className="place" x="792" y="746" width="16" height="16" rx="6"
                id="parter_16_31" sectorAlias="parter" row="16" seat="31"/>
          <rect className="place" x="876" y="638" width="16" height="16" rx="6"
                id="parter_13_28" sectorAlias="parter" row="13" seat="28"/>
          <rect className="place" x="1273" y="673" width="16" height="16" rx="6"
                id="parter_14_18" sectorAlias="parter" row="14" seat="18"/>
          <rect className="place" x="903" y="638" width="16" height="16" rx="6"
                id="parter_13_27" sectorAlias="parter" row="13" seat="27"/>
          <rect className="place" x="1300" y="673" width="16" height="16" rx="6"
                id="parter_14_17" sectorAlias="parter" row="14" seat="17"/>
          <rect className="place" x="848" y="638" width="16" height="16" rx="6"
                id="parter_13_29" sectorAlias="parter" row="13" seat="29"/>
          <rect className="place" x="1125" y="674" width="16" height="16" rx="6"
                id="parter_14_19" sectorAlias="parter" row="14" seat="19"/>
          <rect className="place" x="792" y="638" width="16" height="16" rx="6"
                id="parter_13_31" sectorAlias="parter" row="13" seat="31"/>
          <rect className="place" x="1466" y="709" width="16" height="16" rx="6"
                id="parter_15_11" sectorAlias="parter" row="15" seat="11"/>
          <rect className="place" x="1069" y="674" width="16" height="16" rx="6"
                id="parter_14_21" sectorAlias="parter" row="14" seat="21"/>
          <rect className="place" x="820" y="638" width="16" height="16" rx="6"
                id="parter_13_30" sectorAlias="parter" row="13" seat="30"/>
          <rect className="place" x="1494" y="709" width="16" height="16" rx="6"
                id="parter_15_10" sectorAlias="parter" row="15" seat="10"/>
          <rect className="place" x="1097" y="674" width="16" height="16" rx="6"
                id="parter_14_20" sectorAlias="parter" row="14" seat="20"/>
          <rect className="place" x="737" y="638" width="16" height="16" rx="6"
                id="parter_13_33" sectorAlias="parter" row="13" seat="33"/>
          <rect className="place" x="1411" y="709" width="16" height="16" rx="6"
                id="parter_15_13" sectorAlias="parter" row="15" seat="13"/>
          <rect className="place" x="1014" y="674" width="16" height="16" rx="6"
                id="parter_14_23" sectorAlias="parter" row="14" seat="23"/>
          <rect className="place" x="765" y="638" width="16" height="16" rx="6"
                id="parter_13_32" sectorAlias="parter" row="13" seat="32"/>
          <rect className="place" x="1439" y="709" width="16" height="16" rx="6"
                id="parter_15_12" sectorAlias="parter" row="15" seat="12"/>
          <rect className="place" x="1041" y="674" width="16" height="16" rx="6"
                id="parter_14_22" sectorAlias="parter" row="14" seat="22"/>
          <rect className="place" x="682" y="638" width="16" height="16" rx="6"
                id="parter_13_35" sectorAlias="parter" row="13" seat="35"/>
          <rect className="place" x="1356" y="709" width="16" height="16" rx="6"
                id="parter_15_15" sectorAlias="parter" row="15" seat="15"/>
          <rect className="place" x="958" y="674" width="16" height="16" rx="6"
                id="parter_14_25" sectorAlias="parter" row="14" seat="25"/>
          <rect className="place" x="709" y="638" width="16" height="16" rx="6"
                id="parter_13_34" sectorAlias="parter" row="13" seat="34"/>
          <rect className="place" x="1383" y="709" width="16" height="16" rx="6"
                id="parter_15_14" sectorAlias="parter" row="15" seat="14"/>
          <rect className="place" x="986" y="674" width="16" height="16" rx="6"
                id="parter_14_24" sectorAlias="parter" row="14" seat="24"/>
          <rect className="place" x="903" y="674" width="16" height="16" rx="6"
                id="parter_14_27" sectorAlias="parter" row="14" seat="27"/>
          <rect className="place" x="1300" y="709" width="16" height="16" rx="6"
                id="parter_15_17" sectorAlias="parter" row="15" seat="17"/>
          <rect className="place" x="654" y="638" width="16" height="16" rx="6"
                id="parter_13_36" sectorAlias="parter" row="13" seat="36"/>
          <rect className="place" x="1328" y="709" width="16" height="16" rx="6"
                id="parter_15_16" sectorAlias="parter" row="15" seat="16"/>
          <rect className="place" x="930" y="674" width="16" height="16" rx="6"
                id="parter_14_26" sectorAlias="parter" row="14" seat="26"/>
          <rect className="place" x="848" y="674" width="16" height="16" rx="6"
                id="parter_14_29" sectorAlias="parter" row="14" seat="29"/>
          <rect className="place" x="1125" y="710" width="16" height="16" rx="6"
                id="parter_15_19" sectorAlias="parter" row="15" seat="19"/>
          <rect className="place" x="876" y="674" width="16" height="16" rx="6"
                id="parter_14_28" sectorAlias="parter" row="14" seat="28"/>
          <rect className="place" x="1273" y="709" width="16" height="16" rx="6"
                id="parter_15_18" sectorAlias="parter" row="15" seat="18"/>
          <rect className="place" x="765" y="674" width="16" height="16" rx="6"
                id="parter_14_32" sectorAlias="parter" row="14" seat="32"/>
          <rect className="place" x="1439" y="745" width="16" height="16" rx="6"
                id="parter_16_12" sectorAlias="parter" row="16" seat="12"/>
          <rect className="place" x="1041" y="710" width="16" height="16" rx="6"
                id="parter_15_22" sectorAlias="parter" row="15" seat="22"/>
          <rect className="place" x="792" y="674" width="16" height="16" rx="6"
                id="parter_14_31" sectorAlias="parter" row="14" seat="31"/>
          <rect className="place" x="1466" y="745" width="16" height="16" rx="6"
                id="parter_16_11" sectorAlias="parter" row="16" seat="11"/>
          <rect className="place" x="1069" y="710" width="16" height="16" rx="6"
                id="parter_15_21" sectorAlias="parter" row="15" seat="21"/>
          <rect className="place" x="709" y="674" width="16" height="16" rx="6"
                id="parter_14_34" sectorAlias="parter" row="14" seat="34"/>
          <rect className="place" x="986" y="710" width="16" height="16" rx="6"
                id="parter_15_24" sectorAlias="parter" row="15" seat="24"/>
          <rect className="place" x="1383" y="745" width="16" height="16" rx="6"
                id="parter_16_14" sectorAlias="parter" row="16" seat="14"/>
          <rect className="place" x="737" y="674" width="16" height="16" rx="6"
                id="parter_14_33" sectorAlias="parter" row="14" seat="33"/>
          <rect className="place" x="1411" y="745" width="16" height="16" rx="6"
                id="parter_16_13" sectorAlias="parter" row="16" seat="13"/>
          <rect className="place" x="1014" y="710" width="16" height="16" rx="6"
                id="parter_15_23" sectorAlias="parter" row="15" seat="23"/>
          <rect className="place" x="654" y="674" width="16" height="16" rx="6"
                id="parter_14_36" sectorAlias="parter" row="14" seat="36"/>
          <rect className="place" x="930" y="710" width="16" height="16" rx="6"
                id="parter_15_26" sectorAlias="parter" row="15" seat="26"/>
          <rect className="place" x="1328" y="745" width="16" height="16" rx="6"
                id="parter_16_16" sectorAlias="parter" row="16" seat="16"/>
          <rect className="place" x="682" y="674" width="16" height="16" rx="6"
                id="parter_14_35" sectorAlias="parter" row="14" seat="35"/>
          <rect className="place" x="958" y="710" width="16" height="16" rx="6"
                id="parter_15_25" sectorAlias="parter" row="15" seat="25"/>
          <rect className="place" x="1356" y="745" width="16" height="16" rx="6"
                id="parter_16_15" sectorAlias="parter" row="16" seat="15"/>
          <rect className="place" x="876" y="710" width="16" height="16" rx="6"
                id="parter_15_28" sectorAlias="parter" row="15" seat="28"/>
          <rect className="place" x="1273" y="745" width="16" height="16" rx="6"
                id="parter_16_18" sectorAlias="parter" row="16" seat="18"/>
          <rect className="place" x="903" y="710" width="16" height="16" rx="6"
                id="parter_15_27" sectorAlias="parter" row="15" seat="27"/>
          <rect className="place" x="1300" y="745" width="16" height="16" rx="6"
                id="parter_16_17" sectorAlias="parter" row="16" seat="17"/>
          <rect className="place" x="820" y="674" width="16" height="16" rx="6"
                id="parter_14_30" sectorAlias="parter" row="14" seat="30"/>
          <rect className="place" x="1494" y="745" width="16" height="16" rx="6"
                id="parter_16_10" sectorAlias="parter" row="16" seat="10"/>
          <rect className="place" x="1097" y="710" width="16" height="16" rx="6"
                id="parter_15_20" sectorAlias="parter" row="15" seat="20"/>
          <rect className="place" x="820" y="565" width="16" height="16" rx="6"
                id="parter_11_26" sectorAlias="parter" row="11" seat="26"/>
          <rect className="place" x="654" y="469" width="16" height="16" rx="6"
                id="parter_10_36" sectorAlias="parter" row="10" seat="36"/>
          <rect className="place" x="1097" y="602" width="16" height="16" rx="6"
                id="parter_12_16" sectorAlias="parter" row="12" seat="16"/>
          <rect className="place" x="848" y="565" width="16" height="16" rx="6"
                id="parter_11_25" sectorAlias="parter" row="11" seat="25"/>
          <rect className="place" x="682" y="469" width="16" height="16" rx="6"
                id="parter_10_35" sectorAlias="parter" row="10" seat="35"/>
          <rect className="place" x="1300" y="601" width="16" height="16" rx="6"
                id="parter_12_15" sectorAlias="parter" row="12" seat="15"/>
          <rect className="place" x="765" y="565" width="16" height="16" rx="6"
                id="parter_11_28" sectorAlias="parter" row="11" seat="28"/>
          <rect className="place" x="1041" y="602" width="16" height="16" rx="6"
                id="parter_12_18" sectorAlias="parter" row="12" seat="18"/>
          <rect className="place" x="792" y="565" width="16" height="16" rx="6"
                id="parter_11_27" sectorAlias="parter" row="11" seat="27"/>
          <rect className="place" x="1069" y="602" width="16" height="16" rx="6"
                id="parter_12_17" sectorAlias="parter" row="12" seat="17"/>
          <rect className="place" x="737" y="565" width="16" height="16" rx="6"
                id="parter_11_29" sectorAlias="parter" row="11" seat="29"/>
          <rect className="place" x="1014" y="602" width="16" height="16" rx="6"
                id="parter_12_19" sectorAlias="parter" row="12" seat="19"/>
          <rect className="place" x="958" y="602" width="16" height="16" rx="6"
                id="parter_12_21" sectorAlias="parter" row="12" seat="21"/>
          <rect className="place" x="1466" y="637" width="16" height="16" rx="6"
                id="parter_13_11" sectorAlias="parter" row="13" seat="11"/>
          <rect className="place" x="986" y="602" width="16" height="16" rx="6"
                id="parter_12_20" sectorAlias="parter" row="12" seat="20"/>
          <rect className="place" x="709" y="565" width="16" height="16" rx="6"
                id="parter_11_30" sectorAlias="parter" row="11" seat="30"/>
          <rect className="place" x="1494" y="637" width="16" height="16" rx="6"
                id="parter_13_10" sectorAlias="parter" row="13" seat="10"/>
          <rect className="place" x="903" y="602" width="16" height="16" rx="6"
                id="parter_12_23" sectorAlias="parter" row="12" seat="23"/>
          <rect className="place" x="1411" y="637" width="16" height="16" rx="6"
                id="parter_13_13" sectorAlias="parter" row="13" seat="13"/>
          <rect className="place" x="930" y="602" width="16" height="16" rx="6"
                id="parter_12_22" sectorAlias="parter" row="12" seat="22"/>
          <rect className="place" x="1439" y="637" width="16" height="16" rx="6"
                id="parter_13_12" sectorAlias="parter" row="13" seat="12"/>
          <rect className="place" x="848" y="602" width="16" height="16" rx="6"
                id="parter_12_25" sectorAlias="parter" row="12" seat="25"/>
          <rect className="place" x="1356" y="637" width="16" height="16" rx="6"
                id="parter_13_15" sectorAlias="parter" row="13" seat="15"/>
          <rect className="place" x="876" y="602" width="16" height="16" rx="6"
                id="parter_12_24" sectorAlias="parter" row="12" seat="24"/>
          <rect className="place" x="1383" y="637" width="16" height="16" rx="6"
                id="parter_13_14" sectorAlias="parter" row="13" seat="14"/>
          <rect className="place" x="792" y="602" width="16" height="16" rx="6"
                id="parter_12_27" sectorAlias="parter" row="12" seat="27"/>
          <rect className="place" x="1300" y="637" width="16" height="16" rx="6"
                id="parter_13_17" sectorAlias="parter" row="13" seat="17"/>
          <rect className="place" x="820" y="602" width="16" height="16" rx="6"
                id="parter_12_26" sectorAlias="parter" row="12" seat="26"/>
          <rect className="place" x="1328" y="637" width="16" height="16" rx="6"
                id="parter_13_16" sectorAlias="parter" row="13" seat="16"/>
          <rect className="place" x="737" y="602" width="16" height="16" rx="6"
                id="parter_12_29" sectorAlias="parter" row="12" seat="29"/>
          <rect className="place" x="1125" y="638" width="16" height="16" rx="6"
                id="parter_13_19" sectorAlias="parter" row="13" seat="19"/>
          <rect className="place" x="765" y="602" width="16" height="16" rx="6"
                id="parter_12_28" sectorAlias="parter" row="12" seat="28"/>
          <rect className="place" x="1273" y="637" width="16" height="16" rx="6"
                id="parter_13_18" sectorAlias="parter" row="13" seat="18"/>
          <rect className="place" x="709" y="602" width="16" height="16" rx="6"
                id="parter_12_30" sectorAlias="parter" row="12" seat="30"/>
          <rect className="place" x="1097" y="638" width="16" height="16" rx="6"
                id="parter_13_20" sectorAlias="parter" row="13" seat="20"/>
          <rect className="place" x="1494" y="673" width="16" height="16" rx="6"
                id="parter_14_10" sectorAlias="parter" row="14" seat="10"/>
          <rect className="place" x="1041" y="638" width="16" height="16" rx="6"
                id="parter_13_22" sectorAlias="parter" row="13" seat="22"/>
          <rect className="place" x="1439" y="673" width="16" height="16" rx="6"
                id="parter_14_12" sectorAlias="parter" row="14" seat="12"/>
          <rect className="place" x="1069" y="638" width="16" height="16" rx="6"
                id="parter_13_21" sectorAlias="parter" row="13" seat="21"/>
          <rect className="place" x="1466" y="673" width="16" height="16" rx="6"
                id="parter_14_11" sectorAlias="parter" row="14" seat="11"/>
          <rect className="place" x="986" y="638" width="16" height="16" rx="6"
                id="parter_13_24" sectorAlias="parter" row="13" seat="24"/>
          <rect className="place" x="1383" y="673" width="16" height="16" rx="6"
                id="parter_14_14" sectorAlias="parter" row="14" seat="14"/>
          <rect className="place" x="1014" y="638" width="16" height="16" rx="6"
                id="parter_13_23" sectorAlias="parter" row="13" seat="23"/>
          <rect className="place" x="1411" y="673" width="16" height="16" rx="6"
                id="parter_14_13" sectorAlias="parter" row="14" seat="13"/>
          <rect className="place" x="930" y="638" width="16" height="16" rx="6"
                id="parter_13_26" sectorAlias="parter" row="13" seat="26"/>
          <rect className="place" x="1328" y="673" width="16" height="16" rx="6"
                id="parter_14_16" sectorAlias="parter" row="14" seat="16"/>
          <rect className="place" x="958" y="638" width="16" height="16" rx="6"
                id="parter_13_25" sectorAlias="parter" row="13" seat="25"/>
          <rect className="place" x="1356" y="673" width="16" height="16" rx="6"
                id="parter_14_15" sectorAlias="parter" row="14" seat="15"/>
          <rect className="place" x="1383" y="468" width="16" height="16" rx="6"
                id="parter_10_14" sectorAlias="parter" row="10" seat="14"/>
          <rect className="place" x="1411" y="468" width="16" height="16" rx="6"
                id="parter_10_13" sectorAlias="parter" row="10" seat="13"/>
          <rect className="place" x="1328" y="468" width="16" height="16" rx="6"
                id="parter_10_16" sectorAlias="parter" row="10" seat="16"/>
          <rect className="place" x="1356" y="468" width="16" height="16" rx="6"
                id="parter_10_15" sectorAlias="parter" row="10" seat="15"/>
          <rect className="place" x="1273" y="468" width="16" height="16" rx="6"
                id="parter_10_18" sectorAlias="parter" row="10" seat="18"/>
          <rect className="place" x="1300" y="468" width="16" height="16" rx="6"
                id="parter_10_17" sectorAlias="parter" row="10" seat="17"/>
          <rect className="place" x="1125" y="469" width="16" height="16" rx="6"
                id="parter_10_19" sectorAlias="parter" row="10" seat="19"/>
          <rect className="place" x="1411" y="565" width="16" height="16" rx="6"
                id="parter_11_11" sectorAlias="parter" row="11" seat="11"/>
          <rect className="place" x="1069" y="469" width="16" height="16" rx="6"
                id="parter_10_21" sectorAlias="parter" row="10" seat="21"/>
          <rect className="place" x="1439" y="565" width="16" height="16" rx="6"
                id="parter_11_10" sectorAlias="parter" row="11" seat="10"/>
          <rect className="place" x="1097" y="469" width="16" height="16" rx="6"
                id="parter_10_20" sectorAlias="parter" row="10" seat="20"/>
          <rect className="place" x="1356" y="565" width="16" height="16" rx="6"
                id="parter_11_13" sectorAlias="parter" row="11" seat="13"/>
          <rect className="place" x="1014" y="469" width="16" height="16" rx="6"
                id="parter_10_23" sectorAlias="parter" row="10" seat="23"/>
          <rect className="place" x="1383" y="565" width="16" height="16" rx="6"
                id="parter_11_12" sectorAlias="parter" row="11" seat="12"/>
          <rect className="place" x="1041" y="469" width="16" height="16" rx="6"
                id="parter_10_22" sectorAlias="parter" row="10" seat="22"/>
          <rect className="place" x="1300" y="565" width="16" height="16" rx="6"
                id="parter_11_15" sectorAlias="parter" row="11" seat="15"/>
          <rect className="place" x="958" y="469" width="16" height="16" rx="6"
                id="parter_10_25" sectorAlias="parter" row="10" seat="25"/>
          <rect className="place" x="1328" y="565" width="16" height="16" rx="6"
                id="parter_11_14" sectorAlias="parter" row="11" seat="14"/>
          <rect className="place" x="986" y="469" width="16" height="16" rx="6"
                id="parter_10_24" sectorAlias="parter" row="10" seat="24"/>
          <rect className="place" x="1069" y="565" width="16" height="16" rx="6"
                id="parter_11_17" sectorAlias="parter" row="11" seat="17"/>
          <rect className="place" x="903" y="469" width="16" height="16" rx="6"
                id="parter_10_27" sectorAlias="parter" row="10" seat="27"/>
          <rect className="place" x="1097" y="565" width="16" height="16" rx="6"
                id="parter_11_16" sectorAlias="parter" row="11" seat="16"/>
          <rect className="place" x="930" y="469" width="16" height="16" rx="6"
                id="parter_10_26" sectorAlias="parter" row="10" seat="26"/>
          <rect className="place" x="1014" y="565" width="16" height="16" rx="6"
                id="parter_11_19" sectorAlias="parter" row="11" seat="19"/>
          <rect className="place" x="848" y="469" width="16" height="16" rx="6"
                id="parter_10_29" sectorAlias="parter" row="10" seat="29"/>
          <rect className="place" x="1041" y="565" width="16" height="16" rx="6"
                id="parter_11_18" sectorAlias="parter" row="11" seat="18"/>
          <rect className="place" x="876" y="469" width="16" height="16" rx="6"
                id="parter_10_28" sectorAlias="parter" row="10" seat="28"/>
          <rect className="place" x="986" y="565" width="16" height="16" rx="6"
                id="parter_11_20" sectorAlias="parter" row="11" seat="20"/>
          <rect className="place" x="820" y="469" width="16" height="16" rx="6"
                id="parter_10_30" sectorAlias="parter" row="10" seat="30"/>
          <rect className="place" x="1439" y="601" width="16" height="16" rx="6"
                id="parter_12_10" sectorAlias="parter" row="12" seat="10"/>
          <rect className="place" x="930" y="565" width="16" height="16" rx="6"
                id="parter_11_22" sectorAlias="parter" row="11" seat="22"/>
          <rect className="place" x="765" y="469" width="16" height="16" rx="6"
                id="parter_10_32" sectorAlias="parter" row="10" seat="32"/>
          <rect className="place" x="1383" y="601" width="16" height="16" rx="6"
                id="parter_12_12" sectorAlias="parter" row="12" seat="12"/>
          <rect className="place" x="958" y="565" width="16" height="16" rx="6"
                id="parter_11_21" sectorAlias="parter" row="11" seat="21"/>
          <rect className="place" x="792" y="469" width="16" height="16" rx="6"
                id="parter_10_31" sectorAlias="parter" row="10" seat="31"/>
          <rect className="place" x="1411" y="601" width="16" height="16" rx="6"
                id="parter_12_11" sectorAlias="parter" row="12" seat="11"/>
          <rect className="place" x="876" y="565" width="16" height="16" rx="6"
                id="parter_11_24" sectorAlias="parter" row="11" seat="24"/>
          <rect className="place" x="709" y="469" width="16" height="16" rx="6"
                id="parter_10_34" sectorAlias="parter" row="10" seat="34"/>
          <rect className="place" x="1328" y="601" width="16" height="16" rx="6"
                id="parter_12_14" sectorAlias="parter" row="12" seat="14"/>
          <rect className="place" x="903" y="565" width="16" height="16" rx="6"
                id="parter_11_23" sectorAlias="parter" row="11" seat="23"/>
          <rect className="place" x="737" y="469" width="16" height="16" rx="6"
                id="parter_10_33" sectorAlias="parter" row="10" seat="33"/>
          <rect className="place" x="1356" y="601" width="16" height="16" rx="6"
                id="parter_12_13" sectorAlias="parter" row="12" seat="13"/>
          <rect className="place" x="1494" y="468" width="16" height="16" rx="6"
                id="parter_10_10" sectorAlias="parter" row="10" seat="10"/>
          <rect className="place" x="1439" y="468" width="16" height="16" rx="6"
                id="parter_10_12" sectorAlias="parter" row="10" seat="12"/>
          <rect className="place" x="1466" y="468" width="16" height="16" rx="6"
                id="parter_10_11" sectorAlias="parter" row="10" seat="11"/>
          <rect className="place" x="2038" y="955" width="16" height="16" rx="6"
                id="beltaj_right_2_27" sectorAlias="beltaj_right" row="2" seat="27"/>
          <rect className="place" x="2066" y="705" width="16" height="16" rx="6"
                id="beltaj_right_3_17" sectorAlias="beltaj_right" row="3" seat="17"/>
          <rect className="place" x="2011" y="1093" width="16" height="16" rx="6"
                id="beltaj_right_1_37" sectorAlias="beltaj_right" row="1" seat="37"/>
          <rect className="place" x="2038" y="927" width="16" height="16" rx="6"
                id="beltaj_right_2_26" sectorAlias="beltaj_right" row="2" seat="26"/>
          <rect className="place" x="2066" y="678" width="16" height="16" rx="6"
                id="beltaj_right_3_16" sectorAlias="beltaj_right" row="3" seat="16"/>
          <rect className="place" x="2011" y="1066" width="16" height="16" rx="6"
                id="beltaj_right_1_36" sectorAlias="beltaj_right" row="1" seat="36"/>
          <rect className="place" x="2066" y="761" width="16" height="16" rx="6"
                id="beltaj_right_3_19" sectorAlias="beltaj_right" row="3" seat="19"/>
          <rect className="place" x="2038" y="1010" width="16" height="16" rx="6"
                id="beltaj_right_2_29" sectorAlias="beltaj_right" row="2" seat="29"/>
          <rect className="place" x="2011" y="1149" width="16" height="16" rx="6"
                id="beltaj_right_1_39" sectorAlias="beltaj_right" row="1" seat="39"/>
          <rect className="place" x="2066" y="733" width="16" height="16" rx="6"
                id="beltaj_right_3_18" sectorAlias="beltaj_right" row="3" seat="18"/>
          <rect className="place" x="2038" y="983" width="16" height="16" rx="6"
                id="beltaj_right_2_28" sectorAlias="beltaj_right" row="2" seat="28"/>
          <rect className="place" x="2011" y="1121" width="16" height="16" rx="6"
                id="beltaj_right_1_38" sectorAlias="beltaj_right" row="1" seat="38"/>
          <rect className="place" x="2038" y="844" width="16" height="16" rx="6"
                id="beltaj_right_2_23" sectorAlias="beltaj_right" row="2" seat="23"/>
          <rect className="place" x="2066" y="363" width="16" height="16" rx="6"
                id="beltaj_right_3_13" sectorAlias="beltaj_right" row="3" seat="13"/>
          <rect className="place" x="2011" y="983" width="16" height="16" rx="6"
                id="beltaj_right_1_33" sectorAlias="beltaj_right" row="1" seat="33"/>
          <rect className="place" x="2038" y="816" width="16" height="16" rx="6"
                id="beltaj_right_2_22" sectorAlias="beltaj_right" row="2" seat="22"/>
          <rect className="place" x="2066" y="336" width="16" height="16" rx="6"
                id="beltaj_right_3_12" sectorAlias="beltaj_right" row="3" seat="12"/>
          <rect className="place" x="2011" y="955" width="16" height="16" rx="6"
                id="beltaj_right_1_32" sectorAlias="beltaj_right" row="1" seat="32"/>
          <rect className="place" x="2038" y="900" width="16" height="16" rx="6"
                id="beltaj_right_2_25" sectorAlias="beltaj_right" row="2" seat="25"/>
          <rect className="place" x="2066" y="650" width="16" height="16" rx="6"
                id="beltaj_right_3_15" sectorAlias="beltaj_right" row="3" seat="15"/>
          <rect className="place" x="2011" y="1038" width="16" height="16" rx="6"
                id="beltaj_right_1_35" sectorAlias="beltaj_right" row="1" seat="35"/>
          <rect className="place" x="2038" y="872" width="16" height="16" rx="6"
                id="beltaj_right_2_24" sectorAlias="beltaj_right" row="2" seat="24"/>
          <rect className="place" x="2066" y="391" width="16" height="16" rx="6"
                id="beltaj_right_3_14" sectorAlias="beltaj_right" row="3" seat="14"/>
          <rect className="place" x="2011" y="1010" width="16" height="16" rx="6"
                id="beltaj_right_1_34" sectorAlias="beltaj_right" row="1" seat="34"/>
          <rect className="place" x="2038" y="1038" width="16" height="16" rx="6"
                id="beltaj_right_2_30" sectorAlias="beltaj_right" row="2" seat="30"/>
          <rect className="place" x="2066" y="789" width="16" height="16" rx="6"
                id="beltaj_right_3_20" sectorAlias="beltaj_right" row="3" seat="20"/>
          <rect className="place" x="2011" y="1176" width="16" height="16" rx="6"
                id="beltaj_right_1_40" sectorAlias="beltaj_right" row="1" seat="40"/>
          <rect className="place" x="2094" y="280" width="16" height="16" rx="6"
                id="beltaj_right_4_10" sectorAlias="beltaj_right" row="4" seat="10"/>
          <rect className="place" x="1985" y="1258" width="16" height="16" rx="6"
                id="beltaj_right_1_42" sectorAlias="beltaj_right" row="1" seat="42"/>
          <rect className="place" x="2066" y="844" width="16" height="16" rx="6"
                id="beltaj_right_3_22" sectorAlias="beltaj_right" row="3" seat="22"/>
          <rect className="place" x="2022" y="1246" width="16" height="16" rx="6"
                id="beltaj_right_2_32" sectorAlias="beltaj_right" row="2" seat="32"/>
          <rect className="place" x="2094" y="336" width="16" height="16" rx="6"
                id="beltaj_right_4_12" sectorAlias="beltaj_right" row="4" seat="12"/>
          <rect className="place" x="1998" y="1233" width="16" height="16" rx="6"
                id="beltaj_right_1_41" sectorAlias="beltaj_right" row="1" seat="41"/>
          <rect className="place" x="2066" y="816" width="16" height="16" rx="6"
                id="beltaj_right_3_21" sectorAlias="beltaj_right" row="3" seat="21"/>
          <rect className="place" x="2038" y="1066" width="16" height="16" rx="6"
                id="beltaj_right_2_31" sectorAlias="beltaj_right" row="2" seat="31"/>
          <rect className="place" x="2094" y="308" width="16" height="16" rx="6"
                id="beltaj_right_4_11" sectorAlias="beltaj_right" row="4" seat="11"/>
          <rect className="place" x="2038" y="650" width="16" height="16" rx="6"
                id="beltaj_right_2_16" sectorAlias="beltaj_right" row="2" seat="16"/>
          <rect className="place" x="2011" y="789" width="16" height="16" rx="6"
                id="beltaj_right_1_26" sectorAlias="beltaj_right" row="1" seat="26"/>
          <rect className="place" x="2039" y="418" width="16" height="16" rx="6"
                id="beltaj_right_2_15" sectorAlias="beltaj_right" row="2" seat="15"/>
          <rect className="place" x="2011" y="761" width="16" height="16" rx="6"
                id="beltaj_right_1_25" sectorAlias="beltaj_right" row="1" seat="25"/>
          <rect className="place" x="2038" y="705" width="16" height="16" rx="6"
                id="beltaj_right_2_18" sectorAlias="beltaj_right" row="2" seat="18"/>
          <rect className="place" x="2011" y="844" width="16" height="16" rx="6"
                id="beltaj_right_1_28" sectorAlias="beltaj_right" row="1" seat="28"/>
          <rect className="place" x="2038" y="678" width="16" height="16" rx="6"
                id="beltaj_right_2_17" sectorAlias="beltaj_right" row="2" seat="17"/>
          <rect className="place" x="2011" y="816" width="16" height="16" rx="6"
                id="beltaj_right_1_27" sectorAlias="beltaj_right" row="1" seat="27"/>
          <rect className="place" x="2038" y="336" width="16" height="16" rx="6"
                id="beltaj_right_2_12" sectorAlias="beltaj_right" row="2" seat="12"/>
          <rect className="place" x="2011" y="678" width="16" height="16" rx="6"
                id="beltaj_right_1_22" sectorAlias="beltaj_right" row="1" seat="22"/>
          <rect className="place" x="2038" y="308" width="16" height="16" rx="6"
                id="beltaj_right_2_11" sectorAlias="beltaj_right" row="2" seat="11"/>
          <rect className="place" x="2011" y="650" width="16" height="16" rx="6"
                id="beltaj_right_1_21" sectorAlias="beltaj_right" row="1" seat="21"/>
          <rect className="place" x="2038" y="391" width="16" height="16" rx="6"
                id="beltaj_right_2_14" sectorAlias="beltaj_right" row="2" seat="14"/>
          <rect className="place" x="2011" y="733" width="16" height="16" rx="6"
                id="beltaj_right_1_24" sectorAlias="beltaj_right" row="1" seat="24"/>
          <rect className="place" x="2038" y="363" width="16" height="16" rx="6"
                id="beltaj_right_2_13" sectorAlias="beltaj_right" row="2" seat="13"/>
          <rect className="place" x="2011" y="705" width="16" height="16" rx="6"
                id="beltaj_right_1_23" sectorAlias="beltaj_right" row="1" seat="23"/>
          <rect className="place" x="2038" y="733" width="16" height="16" rx="6"
                id="beltaj_right_2_19" sectorAlias="beltaj_right" row="2" seat="19"/>
          <rect className="place" x="2011" y="872" width="16" height="16" rx="6"
                id="beltaj_right_1_29" sectorAlias="beltaj_right" row="1" seat="29"/>
          <rect className="place" x="2038" y="789" width="16" height="16" rx="6"
                id="beltaj_right_2_21" sectorAlias="beltaj_right" row="2" seat="21"/>
          <rect className="place" x="2066" y="308" width="16" height="16" rx="6"
                id="beltaj_right_3_11" sectorAlias="beltaj_right" row="3" seat="11"/>
          <rect className="place" x="2011" y="927" width="16" height="16" rx="6"
                id="beltaj_right_1_31" sectorAlias="beltaj_right" row="1" seat="31"/>
          <rect className="place" x="2038" y="761" width="16" height="16" rx="6"
                id="beltaj_right_2_20" sectorAlias="beltaj_right" row="2" seat="20"/>
          <rect className="place" x="2066" y="280" width="16" height="16" rx="6"
                id="beltaj_right_3_10" sectorAlias="beltaj_right" row="3" seat="10"/>
          <rect className="place" x="2011" y="900" width="16" height="16" rx="6"
                id="beltaj_right_1_30" sectorAlias="beltaj_right" row="1" seat="30"/>
          <rect className="place" x="1866" y="1540" width="16" height="16" rx="6"
                id="beltaj_right_2_44" sectorAlias="beltaj_right" row="2" seat="44"/>
          <rect className="place" x="1907" y="1405" width="16" height="16" rx="6"
                id="beltaj_right_1_48" sectorAlias="beltaj_right" row="1" seat="48"/>
          <rect className="place" x="1944" y="1393" width="16" height="16" rx="6"
                id="beltaj_right_2_38" sectorAlias="beltaj_right" row="2" seat="38"/>
          <rect className="place" x="2034" y="1284" width="16" height="16" rx="6"
                id="beltaj_right_3_28" sectorAlias="beltaj_right" row="3" seat="28"/>
          <rect className="place" x="1920" y="1380" width="16" height="16" rx="6"
                id="beltaj_right_1_47" sectorAlias="beltaj_right" row="1" seat="47"/>
          <rect className="place" x="1957" y="1368" width="16" height="16" rx="6"
                id="beltaj_right_2_37" sectorAlias="beltaj_right" row="2" seat="37"/>
          <rect className="place" x="2047" y="1259" width="16" height="16" rx="6"
                id="beltaj_right_3_27" sectorAlias="beltaj_right" row="3" seat="27"/>
          <rect className="place" x="1894" y="1429" width="16" height="16" rx="6"
                id="beltaj_right_1_49" sectorAlias="beltaj_right" row="1" seat="49"/>
          <rect className="place" x="1931" y="1417" width="16" height="16" rx="6"
                id="beltaj_right_2_39" sectorAlias="beltaj_right" row="2" seat="39"/>
          <rect className="place" x="2020" y="1308" width="16" height="16" rx="6"
                id="beltaj_right_3_29" sectorAlias="beltaj_right" row="3" seat="29"/>
          <rect className="place" x="1959" y="1307" width="16" height="16" rx="6"
                id="beltaj_right_1_44" sectorAlias="beltaj_right" row="1" seat="44"/>
          <rect className="place" x="2066" y="900" width="16" height="16" rx="6"
                id="beltaj_right_3_24" sectorAlias="beltaj_right" row="3" seat="24"/>
          <rect className="place" x="1996" y="1295" width="16" height="16" rx="6"
                id="beltaj_right_2_34" sectorAlias="beltaj_right" row="2" seat="34"/>
          <rect className="place" x="1972" y="1283" width="16" height="16" rx="6"
                id="beltaj_right_1_43" sectorAlias="beltaj_right" row="1" seat="43"/>
          <rect className="place" x="2066" y="872" width="16" height="16" rx="6"
                id="beltaj_right_3_23" sectorAlias="beltaj_right" row="3" seat="23"/>
          <rect className="place" x="2009" y="1271" width="16" height="16" rx="6"
                id="beltaj_right_2_33" sectorAlias="beltaj_right" row="2" seat="33"/>
          <rect className="place" x="1933" y="1356" width="16" height="16" rx="6"
                id="beltaj_right_1_46" sectorAlias="beltaj_right" row="1" seat="46"/>
          <rect className="place" x="1970" y="1344" width="16" height="16" rx="6"
                id="beltaj_right_2_36" sectorAlias="beltaj_right" row="2" seat="36"/>
          <rect className="place" x="2066" y="955" width="16" height="16" rx="6"
                id="beltaj_right_3_26" sectorAlias="beltaj_right" row="3" seat="26"/>
          <rect className="place" x="1946" y="1332" width="16" height="16" rx="6"
                id="beltaj_right_1_45" sectorAlias="beltaj_right" row="1" seat="45"/>
          <rect className="place" x="1983" y="1320" width="16" height="16" rx="6"
                id="beltaj_right_2_35" sectorAlias="beltaj_right" row="2" seat="35"/>
          <rect className="place" x="2066" y="927" width="16" height="16" rx="6"
                id="beltaj_right_3_25" sectorAlias="beltaj_right" row="3" seat="25"/>
          <rect className="place" x="1995" y="1357" width="16" height="16" rx="6"
                id="beltaj_right_3_31" sectorAlias="beltaj_right" row="3" seat="31"/>
          <rect className="place" x="1868" y="1478" width="16" height="16" rx="6"
                id="beltaj_right_1_51" sectorAlias="beltaj_right" row="1" seat="51"/>
          <rect className="place" x="1905" y="1467" width="16" height="16" rx="6"
                id="beltaj_right_2_41" sectorAlias="beltaj_right" row="2" seat="41"/>
          <rect className="place" x="2008" y="1333" width="16" height="16" rx="6"
                id="beltaj_right_3_30" sectorAlias="beltaj_right" row="3" seat="30"/>
          <rect className="place" x="1881" y="1454" width="16" height="16" rx="6"
                id="beltaj_right_1_50" sectorAlias="beltaj_right" row="1" seat="50"/>
          <rect className="place" x="1918" y="1442" width="16" height="16" rx="6"
                id="beltaj_right_2_40" sectorAlias="beltaj_right" row="2" seat="40"/>
          <rect className="place" x="1879" y="1516" width="16" height="16" rx="6"
                id="beltaj_right_2_43" sectorAlias="beltaj_right" row="2" seat="43"/>
          <rect className="place" x="1855" y="1503" width="16" height="16" rx="6"
                id="beltaj_right_1_52" sectorAlias="beltaj_right" row="1" seat="52"/>
          <rect className="place" x="1892" y="1491" width="16" height="16" rx="6"
                id="beltaj_right_2_42" sectorAlias="beltaj_right" row="2" seat="42"/>
          <rect className="place" x="2011" y="418" width="16" height="16" rx="6"
                id="beltaj_right_1_15" sectorAlias="beltaj_right" row="1" seat="15"/>
          <rect className="place" x="2011" y="391" width="16" height="16" rx="6"
                id="beltaj_right_1_14" sectorAlias="beltaj_right" row="1" seat="14"/>
          <rect className="place" x="2011" y="474" width="16" height="16" rx="6"
                id="beltaj_right_1_17" sectorAlias="beltaj_right" row="1" seat="17"/>
          <rect className="place" x="2011" y="446" width="16" height="16" rx="6"
                id="beltaj_right_1_16" sectorAlias="beltaj_right" row="1" seat="16"/>
          <rect className="place" x="2011" y="308" width="16" height="16" rx="6"
                id="beltaj_right_1_11" sectorAlias="beltaj_right" row="1" seat="11"/>
          <rect className="place" x="2011" y="280" width="16" height="16" rx="6"
                id="beltaj_right_1_10" sectorAlias="beltaj_right" row="1" seat="10"/>
          <rect className="place" x="2011" y="363" width="16" height="16" rx="6"
                id="beltaj_right_1_13" sectorAlias="beltaj_right" row="1" seat="13"/>
          <rect className="place" x="2011" y="336" width="16" height="16" rx="6"
                id="beltaj_right_1_12" sectorAlias="beltaj_right" row="1" seat="12"/>
          <rect className="place" x="2011" y="529" width="16" height="16" rx="6"
                id="beltaj_right_1_19" sectorAlias="beltaj_right" row="1" seat="19"/>
          <rect className="place" x="2011" y="502" width="16" height="16" rx="6"
                id="beltaj_right_1_18" sectorAlias="beltaj_right" row="1" seat="18"/>
          <rect className="place" x="2011" y="557" width="16" height="16" rx="6"
                id="beltaj_right_1_20" sectorAlias="beltaj_right" row="1" seat="20"/>
          <rect className="place" x="2038" y="280" width="16" height="16" rx="6"
                id="beltaj_right_2_10" sectorAlias="beltaj_right" row="2" seat="10"/>
          <rect className="place" x="1549" y="890" width="16" height="16" rx="6"
                id="parter_20_9" sectorAlias="parter" row="20" seat="9"/>
          <rect className="place" x="1744" y="890" width="16" height="16" rx="6"
                id="parter_20_2" sectorAlias="parter" row="20" seat="2"/>
          <rect className="place" x="1772" y="890" width="16" height="16" rx="6"
                id="parter_20_1" sectorAlias="parter" row="20" seat="1"/>
          <rect className="place" x="1688" y="890" width="16" height="16" rx="6"
                id="parter_20_4" sectorAlias="parter" row="20" seat="4"/>
          <rect className="place" x="1716" y="890" width="16" height="16" rx="6"
                id="parter_20_3" sectorAlias="parter" row="20" seat="3"/>
          <rect className="place" x="1633" y="890" width="16" height="16" rx="6"
                id="parter_20_6" sectorAlias="parter" row="20" seat="6"/>
          <rect className="place" x="1661" y="890" width="16" height="16" rx="6"
                id="parter_20_5" sectorAlias="parter" row="20" seat="5"/>
          <rect className="place" x="1577" y="890" width="16" height="16" rx="6"
                id="parter_20_8" sectorAlias="parter" row="20" seat="8"/>
          <rect className="place" x="1605" y="890" width="16" height="16" rx="6"
                id="parter_20_7" sectorAlias="parter" row="20" seat="7"/>
          <rect className="place" x="1328" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_7" sectorAlias="beltaj_middle" row="9" seat="7"/>
          <rect className="place" x="1300" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_8" sectorAlias="beltaj_middle" row="9" seat="8"/>
          <rect className="place" x="1272" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_9" sectorAlias="beltaj_middle" row="9" seat="9"/>
          <rect className="place" x="1463" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_10" sectorAlias="amfiteatr" row="2" seat="10"/>
          <rect className="place" x="962" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_20" sectorAlias="amfiteatr" row="1" seat="20"/>
          <rect className="place" x="1324" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_15" sectorAlias="amfiteatr" row="2" seat="15"/>
          <rect className="place" x="824" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_25" sectorAlias="amfiteatr" row="1" seat="25"/>
          <rect className="place" x="1073" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_16" sectorAlias="amfiteatr" row="2" seat="16"/>
          <rect className="place" x="796" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_26" sectorAlias="amfiteatr" row="1" seat="26"/>
          <rect className="place" x="1045" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_17" sectorAlias="amfiteatr" row="2" seat="17"/>
          <rect className="place" x="768" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_27" sectorAlias="amfiteatr" row="1" seat="27"/>
          <rect className="place" x="1017" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_18" sectorAlias="amfiteatr" row="2" seat="18"/>
          <rect className="place" x="741" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_28" sectorAlias="amfiteatr" row="1" seat="28"/>
          <rect className="place" x="1435" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_11" sectorAlias="amfiteatr" row="2" seat="11"/>
          <rect className="place" x="934" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_21" sectorAlias="amfiteatr" row="1" seat="21"/>
          <rect className="place" x="1407" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_12" sectorAlias="amfiteatr" row="2" seat="12"/>
          <rect className="place" x="906" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_22" sectorAlias="amfiteatr" row="1" seat="22"/>
          <rect className="place" x="1380" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_13" sectorAlias="amfiteatr" row="2" seat="13"/>
          <rect className="place" x="879" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_23" sectorAlias="amfiteatr" row="1" seat="23"/>
          <rect className="place" x="1352" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_14" sectorAlias="amfiteatr" row="2" seat="14"/>
          <rect className="place" x="852" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_24" sectorAlias="amfiteatr" row="1" seat="24"/>
          <rect className="place" x="989" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_19" sectorAlias="amfiteatr" row="2" seat="19"/>
          <rect className="place" x="713" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_29" sectorAlias="amfiteatr" row="1" seat="29"/>
          <rect className="place" x="1328" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_6" sectorAlias="beltaj_middle" row="8" seat="6"/>
          <rect className="place" x="1300" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_7" sectorAlias="beltaj_middle" row="8" seat="7"/>
          <rect className="place" x="1272" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_8" sectorAlias="beltaj_middle" row="8" seat="8"/>
          <rect className="place" x="1245" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_9" sectorAlias="beltaj_middle" row="8" seat="9"/>
          <rect className="place" x="1352" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_14" sectorAlias="amfiteatr" row="1" seat="14"/>
          <rect className="place" x="1324" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_15" sectorAlias="amfiteatr" row="1" seat="15"/>
          <rect className="place" x="1073" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_16" sectorAlias="amfiteatr" row="1" seat="16"/>
          <rect className="place" x="1045" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_17" sectorAlias="amfiteatr" row="1" seat="17"/>
          <rect className="place" x="1463" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_10" sectorAlias="amfiteatr" row="1" seat="10"/>
          <rect className="place" x="1435" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_11" sectorAlias="amfiteatr" row="1" seat="11"/>
          <rect className="place" x="1407" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_12" sectorAlias="amfiteatr" row="1" seat="12"/>
          <rect className="place" x="1380" y="1005" width="16" height="16" rx="6"
                id="amfiteatr_1_13" sectorAlias="amfiteatr" row="1" seat="13"/>
          <rect className="place" x="1017" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_18" sectorAlias="amfiteatr" row="1" seat="18"/>
          <rect className="place" x="990" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_19" sectorAlias="amfiteatr" row="1" seat="19"/>
          <rect className="place" x="1494" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_1" sectorAlias="beltaj_middle" row="9" seat="1"/>
          <rect className="place" x="1467" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_2" sectorAlias="beltaj_middle" row="9" seat="2"/>
          <rect className="place" x="1439" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_3" sectorAlias="beltaj_middle" row="9" seat="3"/>
          <rect className="place" x="1411" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_4" sectorAlias="beltaj_middle" row="9" seat="4"/>
          <rect className="place" x="1383" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_5" sectorAlias="beltaj_middle" row="9" seat="5"/>
          <rect className="place" x="1356" y="1907" width="16" height="16" rx="6"
                id="beltaj_middle_9_6" sectorAlias="beltaj_middle" row="9" seat="6"/>
          <rect className="place" x="962" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_20" sectorAlias="amfiteatr" row="3" seat="20"/>
          <rect className="place" x="685" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_30" sectorAlias="amfiteatr" row="2" seat="30"/>
          <rect className="place" x="1463" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_10" sectorAlias="amfiteatr" row="4" seat="10"/>
          <rect className="place" x="934" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_21" sectorAlias="amfiteatr" row="3" seat="21"/>
          <rect className="place" x="1435" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_11" sectorAlias="amfiteatr" row="4" seat="11"/>
          <rect className="place" x="906" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_22" sectorAlias="amfiteatr" row="3" seat="22"/>
          <rect className="place" x="1407" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_12" sectorAlias="amfiteatr" row="4" seat="12"/>
          <rect className="place" x="1045" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_17" sectorAlias="amfiteatr" row="4" seat="17"/>
          <rect className="place" x="768" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_27" sectorAlias="amfiteatr" row="3" seat="27"/>
          <rect className="place" x="1017" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_18" sectorAlias="amfiteatr" row="4" seat="18"/>
          <rect className="place" x="740" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_28" sectorAlias="amfiteatr" row="3" seat="28"/>
          <rect className="place" x="989" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_19" sectorAlias="amfiteatr" row="4" seat="19"/>
          <rect className="place" x="713" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_29" sectorAlias="amfiteatr" row="3" seat="29"/>
          <rect className="place" x="879" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_23" sectorAlias="amfiteatr" row="3" seat="23"/>
          <rect className="place" x="1380" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_13" sectorAlias="amfiteatr" row="4" seat="13"/>
          <rect className="place" x="852" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_24" sectorAlias="amfiteatr" row="3" seat="24"/>
          <rect className="place" x="1352" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_14" sectorAlias="amfiteatr" row="4" seat="14"/>
          <rect className="place" x="824" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_25" sectorAlias="amfiteatr" row="3" seat="25"/>
          <rect className="place" x="1324" y="1114" width="16" height="16" rx="6"
                id="amfiteatr_4_15" sectorAlias="amfiteatr" row="4" seat="15"/>
          <rect className="place" x="796" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_26" sectorAlias="amfiteatr" row="3" seat="26"/>
          <rect className="place" x="1073" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_16" sectorAlias="amfiteatr" row="4" seat="16"/>
          <rect className="place" x="1463" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_10" sectorAlias="amfiteatr" row="3" seat="10"/>
          <rect className="place" x="962" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_20" sectorAlias="amfiteatr" row="2" seat="20"/>
          <rect className="place" x="685" y="1006" width="16" height="16" rx="6"
                id="amfiteatr_1_30" sectorAlias="amfiteatr" row="1" seat="30"/>
          <rect className="place" x="1435" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_11" sectorAlias="amfiteatr" row="3" seat="11"/>
          <rect className="place" x="934" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_21" sectorAlias="amfiteatr" row="2" seat="21"/>
          <rect className="place" x="1073" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_16" sectorAlias="amfiteatr" row="3" seat="16"/>
          <rect className="place" x="796" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_26" sectorAlias="amfiteatr" row="2" seat="26"/>
          <rect className="place" x="1045" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_17" sectorAlias="amfiteatr" row="3" seat="17"/>
          <rect className="place" x="768" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_27" sectorAlias="amfiteatr" row="2" seat="27"/>
          <rect className="place" x="1017" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_18" sectorAlias="amfiteatr" row="3" seat="18"/>
          <rect className="place" x="740" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_28" sectorAlias="amfiteatr" row="2" seat="28"/>
          <rect className="place" x="989" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_19" sectorAlias="amfiteatr" row="3" seat="19"/>
          <rect className="place" x="713" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_29" sectorAlias="amfiteatr" row="2" seat="29"/>
          <rect className="place" x="1407" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_12" sectorAlias="amfiteatr" row="3" seat="12"/>
          <rect className="place" x="906" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_22" sectorAlias="amfiteatr" row="2" seat="22"/>
          <rect className="place" x="1380" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_13" sectorAlias="amfiteatr" row="3" seat="13"/>
          <rect className="place" x="879" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_23" sectorAlias="amfiteatr" row="2" seat="23"/>
          <rect className="place" x="1352" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_14" sectorAlias="amfiteatr" row="3" seat="14"/>
          <rect className="place" x="852" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_24" sectorAlias="amfiteatr" row="2" seat="24"/>
          <rect className="place" x="1324" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_15" sectorAlias="amfiteatr" row="3" seat="15"/>
          <rect className="place" x="824" y="1042" width="16" height="16" rx="6"
                id="amfiteatr_2_25" sectorAlias="amfiteatr" row="2" seat="25"/>
          <rect className="place" x="1704" y="1691" width="16" height="16" rx="6"
                id="beltaj_middle_5_3" sectorAlias="beltaj_middle" row="5" seat="3"/>
          <rect className="place" x="1680" y="1703" width="16" height="16" rx="6"
                id="beltaj_middle_5_4" sectorAlias="beltaj_middle" row="5" seat="4"/>
          <rect className="place" x="1655" y="1715" width="16" height="16" rx="6"
                id="beltaj_middle_5_5" sectorAlias="beltaj_middle" row="5" seat="5"/>
          <rect className="place" x="1630" y="1728" width="16" height="16" rx="6"
                id="beltaj_middle_5_6" sectorAlias="beltaj_middle" row="5" seat="6"/>
          <rect className="place" x="1605" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_5_7" sectorAlias="beltaj_middle" row="5" seat="7"/>
          <rect className="place" x="1580" y="1752" width="16" height="16" rx="6"
                id="beltaj_middle_5_8" sectorAlias="beltaj_middle" row="5" seat="8"/>
          <rect className="place" x="1439" y="1796" width="16" height="16" rx="6"
                id="beltaj_middle_5_9" sectorAlias="beltaj_middle" row="5" seat="9"/>
          <rect className="place" x="1717" y="1716" width="16" height="16" rx="6"
                id="beltaj_middle_6_1" sectorAlias="beltaj_middle" row="6" seat="1"/>
          <rect className="place" x="1692" y="1728" width="16" height="16" rx="6"
                id="beltaj_middle_6_2" sectorAlias="beltaj_middle" row="6" seat="2"/>
          <rect className="place" x="1667" y="1740" width="16" height="16" rx="6"
                id="beltaj_middle_6_3" sectorAlias="beltaj_middle" row="6" seat="3"/>
          <rect className="place" x="1767" y="1629" width="16" height="16" rx="6"
                id="beltaj_middle_4_2" sectorAlias="beltaj_middle" row="4" seat="2"/>
          <rect className="place" x="1742" y="1641" width="16" height="16" rx="6"
                id="beltaj_middle_4_3" sectorAlias="beltaj_middle" row="4" seat="3"/>
          <rect className="place" x="1717" y="1653" width="16" height="16" rx="6"
                id="beltaj_middle_4_4" sectorAlias="beltaj_middle" row="4" seat="4"/>
          <rect className="place" x="1692" y="1666" width="16" height="16" rx="6"
                id="beltaj_middle_4_5" sectorAlias="beltaj_middle" row="4" seat="5"/>
          <rect className="place" x="1668" y="1678" width="16" height="16" rx="6"
                id="beltaj_middle_4_6" sectorAlias="beltaj_middle" row="4" seat="6"/>
          <rect className="place" x="1643" y="1691" width="16" height="16" rx="6"
                id="beltaj_middle_4_7" sectorAlias="beltaj_middle" row="4" seat="7"/>
          <rect className="place" x="1618" y="1703" width="16" height="16" rx="6"
                id="beltaj_middle_4_8" sectorAlias="beltaj_middle" row="4" seat="8"/>
          <rect className="place" x="1593" y="1715" width="16" height="16" rx="6"
                id="beltaj_middle_4_9" sectorAlias="beltaj_middle" row="4" seat="9"/>
          <rect className="place" x="1754" y="1666" width="16" height="16" rx="6"
                id="beltaj_middle_5_1" sectorAlias="beltaj_middle" row="5" seat="1"/>
          <rect className="place" x="1729" y="1678" width="16" height="16" rx="6"
                id="beltaj_middle_5_2" sectorAlias="beltaj_middle" row="5" seat="2"/>
          <rect className="place" x="1439" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_5" sectorAlias="beltaj_middle" row="7" seat="5"/>
          <rect className="place" x="1412" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_6" sectorAlias="beltaj_middle" row="7" seat="6"/>
          <rect className="place" x="1384" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_7" sectorAlias="beltaj_middle" row="7" seat="7"/>
          <rect className="place" x="1356" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_8" sectorAlias="beltaj_middle" row="7" seat="8"/>
          <rect className="place" x="1328" y="1851" width="16" height="16" rx="6"
                id="beltaj_middle_7_9" sectorAlias="beltaj_middle" row="7" seat="9"/>
          <rect className="place" x="1467" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_1" sectorAlias="beltaj_middle" row="8" seat="1"/>
          <rect className="place" x="1439" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_2" sectorAlias="beltaj_middle" row="8" seat="2"/>
          <rect className="place" x="1411" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_3" sectorAlias="beltaj_middle" row="8" seat="3"/>
          <rect className="place" x="1384" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_4" sectorAlias="beltaj_middle" row="8" seat="4"/>
          <rect className="place" x="1356" y="1879" width="16" height="16" rx="6"
                id="beltaj_middle_8_5" sectorAlias="beltaj_middle" row="8" seat="5"/>
          <rect className="place" x="1643" y="1752" width="16" height="16" rx="6"
                id="beltaj_middle_6_4" sectorAlias="beltaj_middle" row="6" seat="4"/>
          <rect className="place" x="1618" y="1765" width="16" height="16" rx="6"
                id="beltaj_middle_6_5" sectorAlias="beltaj_middle" row="6" seat="5"/>
          <rect className="place" x="1593" y="1777" width="16" height="16" rx="6"
                id="beltaj_middle_6_6" sectorAlias="beltaj_middle" row="6" seat="6"/>
          <rect className="place" x="1412" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_7" sectorAlias="beltaj_middle" row="6" seat="7"/>
          <rect className="place" x="1384" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_8" sectorAlias="beltaj_middle" row="6" seat="8"/>
          <rect className="place" x="1356" y="1823" width="16" height="16" rx="6"
                id="beltaj_middle_6_9" sectorAlias="beltaj_middle" row="6" seat="9"/>
          <rect className="place" x="1672" y="1765" width="16" height="16" rx="6"
                id="beltaj_middle_7_1" sectorAlias="beltaj_middle" row="7" seat="1"/>
          <rect className="place" x="1655" y="1777" width="16" height="16" rx="6"
                id="beltaj_middle_7_2" sectorAlias="beltaj_middle" row="7" seat="2"/>
          <rect className="place" x="1630" y="1789" width="16" height="16" rx="6"
                id="beltaj_middle_7_3" sectorAlias="beltaj_middle" row="7" seat="3"/>
          <rect className="place" x="1605" y="1802" width="16" height="16" rx="6"
                id="beltaj_middle_7_4" sectorAlias="beltaj_middle" row="7" seat="4"/>
          <rect className="place" x="516" y="1801" width="16" height="16" rx="6"
                id="first_level_left_1_40" sectorAlias="first_level_left" row="1" seat="40"/>
          <rect className="place" x="497" y="1821" width="16" height="16" rx="6"
                id="first_level_left_2_30" sectorAlias="first_level_left" row="2" seat="30"/>
          <rect className="place" x="537" y="1820" width="16" height="16" rx="6"
                id="first_level_left_1_41" sectorAlias="first_level_left" row="1" seat="41"/>
          <rect className="place" x="517" y="1841" width="16" height="16" rx="6"
                id="first_level_left_2_31" sectorAlias="first_level_left" row="2" seat="31"/>
          <rect className="place" x="557" y="1840" width="16" height="16" rx="6"
                id="first_level_left_1_42" sectorAlias="first_level_left" row="1" seat="42"/>
          <rect className="place" x="538" y="1860" width="16" height="16" rx="6"
                id="first_level_left_2_32" sectorAlias="first_level_left" row="2" seat="32"/>
          <rect className="place" x="638" y="1955" width="16" height="16" rx="6"
                id="first_level_left_2_37" sectorAlias="first_level_left" row="2" seat="37"/>
          <rect className="place" x="657" y="1935" width="16" height="16" rx="6"
                id="first_level_left_1_47" sectorAlias="first_level_left" row="1" seat="47"/>
          <rect className="place" x="658" y="1975" width="16" height="16" rx="6"
                id="first_level_left_2_38" sectorAlias="first_level_left" row="2" seat="38"/>
          <rect className="place" x="677" y="1954" width="16" height="16" rx="6"
                id="first_level_left_1_48" sectorAlias="first_level_left" row="1" seat="48"/>
          <rect className="place" x="678" y="1994" width="16" height="16" rx="6"
                id="first_level_left_2_39" sectorAlias="first_level_left" row="2" seat="39"/>
          <rect className="place" x="577" y="1859" width="16" height="16" rx="6"
                id="first_level_left_1_43" sectorAlias="first_level_left" row="1" seat="43"/>
          <rect className="place" x="558" y="1879" width="16" height="16" rx="6"
                id="first_level_left_2_33" sectorAlias="first_level_left" row="2" seat="33"/>
          <rect className="place" x="597" y="1878" width="16" height="16" rx="6"
                id="first_level_left_1_44" sectorAlias="first_level_left" row="1" seat="44"/>
          <rect className="place" x="578" y="1898" width="16" height="16" rx="6"
                id="first_level_left_2_34" sectorAlias="first_level_left" row="2" seat="34"/>
          <rect className="place" x="617" y="1897" width="16" height="16" rx="6"
                id="first_level_left_1_45" sectorAlias="first_level_left" row="1" seat="45"/>
          <rect className="place" x="598" y="1917" width="16" height="16" rx="6"
                id="first_level_left_2_35" sectorAlias="first_level_left" row="2" seat="35"/>
          <rect className="place" x="637" y="1916" width="16" height="16" rx="6"
                id="first_level_left_1_46" sectorAlias="first_level_left" row="1" seat="46"/>
          <rect className="place" x="618" y="1936" width="16" height="16" rx="6"
                id="first_level_left_2_36" sectorAlias="first_level_left" row="2" seat="36"/>
          <rect className="place" x="308" y="1465" width="16" height="16" rx="6"
                id="first_level_left_1_30" sectorAlias="first_level_left" row="1" seat="30"/>
          <rect className="place" x="282" y="1473" width="16" height="16" rx="6"
                id="first_level_left_2_20" sectorAlias="first_level_left" row="2" seat="20"/>
          <rect className="place" x="316" y="1491" width="16" height="16" rx="6"
                id="first_level_left_1_31" sectorAlias="first_level_left" row="1" seat="31"/>
          <rect className="place" x="289" y="1499" width="16" height="16" rx="6"
                id="first_level_left_2_21" sectorAlias="first_level_left" row="2" seat="21"/>
          <rect className="place" x="355" y="1625" width="16" height="16" rx="6"
                id="first_level_left_1_36" sectorAlias="first_level_left" row="1" seat="36"/>
          <rect className="place" x="328" y="1632" width="16" height="16" rx="6"
                id="first_level_left_2_26" sectorAlias="first_level_left" row="2" seat="26"/>
          <rect className="place" x="456" y="1744" width="16" height="16" rx="6"
                id="first_level_left_1_37" sectorAlias="first_level_left" row="1" seat="37"/>
          <rect className="place" x="437" y="1764" width="16" height="16" rx="6"
                id="first_level_left_2_27" sectorAlias="first_level_left" row="2" seat="27"/>
          <rect className="place" x="477" y="1763" width="16" height="16" rx="6"
                id="first_level_left_1_38" sectorAlias="first_level_left" row="1" seat="38"/>
          <rect className="place" x="457" y="1783" width="16" height="16" rx="6"
                id="first_level_left_2_28" sectorAlias="first_level_left" row="2" seat="28"/>
          <rect className="place" x="496" y="1782" width="16" height="16" rx="6"
                id="first_level_left_1_39" sectorAlias="first_level_left" row="1" seat="39"/>
          <rect className="place" x="478" y="1802" width="16" height="16" rx="6"
                id="first_level_left_2_29" sectorAlias="first_level_left" row="2" seat="29"/>
          <rect className="place" x="324" y="1518" width="16" height="16" rx="6"
                id="first_level_left_1_32" sectorAlias="first_level_left" row="1" seat="32"/>
          <rect className="place" x="297" y="1526" width="16" height="16" rx="6"
                id="first_level_left_2_22" sectorAlias="first_level_left" row="2" seat="22"/>
          <rect className="place" x="332" y="1545" width="16" height="16" rx="6"
                id="first_level_left_1_33" sectorAlias="first_level_left" row="1" seat="33"/>
          <rect className="place" x="305" y="1552" width="16" height="16" rx="6"
                id="first_level_left_2_23" sectorAlias="first_level_left" row="2" seat="23"/>
          <rect className="place" x="339" y="1572" width="16" height="16" rx="6"
                id="first_level_left_1_34" sectorAlias="first_level_left" row="1" seat="34"/>
          <rect className="place" x="312" y="1579" width="16" height="16" rx="6"
                id="first_level_left_2_24" sectorAlias="first_level_left" row="2" seat="24"/>
          <rect className="place" x="347" y="1598" width="16" height="16" rx="6"
                id="first_level_left_1_35" sectorAlias="first_level_left" row="1" seat="35"/>
          <rect className="place" x="320" y="1606" width="16" height="16" rx="6"
                id="first_level_left_2_25" sectorAlias="first_level_left" row="2" seat="25"/>
          <rect className="place" x="300" y="1438" width="16" height="16" rx="6"
                id="first_level_left_1_29" sectorAlias="first_level_left" row="1" seat="29"/>
          <rect className="place" x="274" y="1446" width="16" height="16" rx="6"
                id="first_level_left_2_19" sectorAlias="first_level_left" row="2" seat="19"/>
          <rect className="place" x="203" y="903" width="16" height="16" rx="6"
                id="first_level_left_1_20" sectorAlias="first_level_left" row="1" seat="20"/>
          <rect className="place" x="175" y="819" width="16" height="16" rx="6"
                id="first_level_left_2_10" sectorAlias="first_level_left" row="2" seat="10"/>
          <rect className="place" x="203" y="1041" width="16" height="16" rx="6"
                id="first_level_left_1_25" sectorAlias="first_level_left" row="1" seat="25"/>
          <rect className="place" x="175" y="958" width="16" height="16" rx="6"
                id="first_level_left_2_15" sectorAlias="first_level_left" row="2" seat="15"/>
          <rect className="place" x="203" y="1069" width="16" height="16" rx="6"
                id="first_level_left_1_26" sectorAlias="first_level_left" row="1" seat="26"/>
          <rect className="place" x="175" y="985" width="16" height="16" rx="6"
                id="first_level_left_2_16" sectorAlias="first_level_left" row="2" seat="16"/>
          <rect className="place" x="285" y="1385" width="16" height="16" rx="6"
                id="first_level_left_1_27" sectorAlias="first_level_left" row="1" seat="27"/>
          <rect className="place" x="259" y="1392" width="16" height="16" rx="6"
                id="first_level_left_2_17" sectorAlias="first_level_left" row="2" seat="17"/>
          <rect className="place" x="293" y="1412" width="16" height="16" rx="6"
                id="first_level_left_1_28" sectorAlias="first_level_left" row="1" seat="28"/>
          <rect className="place" x="266" y="1419" width="16" height="16" rx="6"
                id="first_level_left_2_18" sectorAlias="first_level_left" row="2" seat="18"/>
          <rect className="place" x="203" y="931" width="16" height="16" rx="6"
                id="first_level_left_1_21" sectorAlias="first_level_left" row="1" seat="21"/>
          <rect className="place" x="175" y="847" width="16" height="16" rx="6"
                id="first_level_left_2_11" sectorAlias="first_level_left" row="2" seat="11"/>
          <rect className="place" x="203" y="958" width="16" height="16" rx="6"
                id="first_level_left_1_22" sectorAlias="first_level_left" row="1" seat="22"/>
          <rect className="place" x="175" y="875" width="16" height="16" rx="6"
                id="first_level_left_2_12" sectorAlias="first_level_left" row="2" seat="12"/>
          <rect className="place" x="203" y="985" width="16" height="16" rx="6"
                id="first_level_left_1_23" sectorAlias="first_level_left" row="1" seat="23"/>
          <rect className="place" x="175" y="903" width="16" height="16" rx="6"
                id="first_level_left_2_13" sectorAlias="first_level_left" row="2" seat="13"/>
          <rect className="place" x="203" y="1013" width="16" height="16" rx="6"
                id="first_level_left_1_24" sectorAlias="first_level_left" row="1" seat="24"/>
          <rect className="place" x="175" y="931" width="16" height="16" rx="6"
                id="first_level_left_2_14" sectorAlias="first_level_left" row="2" seat="14"/>
          <rect className="place" x="203" y="847" width="16" height="16" rx="6"
                id="first_level_left_1_18" sectorAlias="first_level_left" row="1" seat="18"/>
          <rect className="place" x="203" y="875" width="16" height="16" rx="6"
                id="first_level_left_1_19" sectorAlias="first_level_left" row="1" seat="19"/>
          <rect className="place" x="1407" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_4" sectorAlias="amfiteatr" row="12" seat="4"/>
          <rect className="place" x="1435" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_3" sectorAlias="amfiteatr" row="12" seat="3"/>
          <rect className="place" x="1352" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_6" sectorAlias="amfiteatr" row="12" seat="6"/>
          <rect className="place" x="1380" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_5" sectorAlias="amfiteatr" row="12" seat="5"/>
          <rect className="place" x="1463" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_2" sectorAlias="amfiteatr" row="12" seat="2"/>
          <rect className="place" x="1490" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_1" sectorAlias="amfiteatr" row="12" seat="1"/>
          <rect className="place" x="1237" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_8" sectorAlias="amfiteatr" row="12" seat="8"/>
          <rect className="place" x="1324" y="1403" width="16" height="16" rx="6"
                id="amfiteatr_12_7" sectorAlias="amfiteatr" row="12" seat="7"/>
          <rect className="place" x="1210" y="1404" width="16" height="16" rx="6"
                id="amfiteatr_12_9" sectorAlias="amfiteatr" row="12" seat="9"/>
          <rect className="place" x="1490" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_3" sectorAlias="amfiteatr" row="11" seat="3"/>
          <rect className="place" x="1518" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_2" sectorAlias="amfiteatr" row="11" seat="2"/>
          <rect className="place" x="1435" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_5" sectorAlias="amfiteatr" row="11" seat="5"/>
          <rect className="place" x="1463" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_4" sectorAlias="amfiteatr" row="11" seat="4"/>
          <rect className="place" x="1546" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_1" sectorAlias="amfiteatr" row="11" seat="1"/>
          <rect className="place" x="1380" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_7" sectorAlias="amfiteatr" row="11" seat="7"/>
          <rect className="place" x="1407" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_6" sectorAlias="amfiteatr" row="11" seat="6"/>
          <rect className="place" x="1324" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_9" sectorAlias="amfiteatr" row="11" seat="9"/>
          <rect className="place" x="1352" y="1367" width="16" height="16" rx="6"
                id="amfiteatr_11_8" sectorAlias="amfiteatr" row="11" seat="8"/>
          <rect className="place" x="1184" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_6" sectorAlias="amfiteatr" row="14" seat="6"/>
          <rect className="place" x="1212" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_5" sectorAlias="amfiteatr" row="14" seat="5"/>
          <rect className="place" x="1128" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_8" sectorAlias="amfiteatr" row="14" seat="8"/>
          <rect className="place" x="1156" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_7" sectorAlias="amfiteatr" row="14" seat="7"/>
          <rect className="place" x="1295" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_2" sectorAlias="amfiteatr" row="14" seat="2"/>
          <rect className="place" x="1323" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_1" sectorAlias="amfiteatr" row="14" seat="1"/>
          <rect className="place" x="1240" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_4" sectorAlias="amfiteatr" row="14" seat="4"/>
          <rect className="place" x="1267" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_3" sectorAlias="amfiteatr" row="14" seat="3"/>
          <rect className="place" x="1101" y="1476" width="16" height="16" rx="6"
                id="amfiteatr_14_9" sectorAlias="amfiteatr" row="14" seat="9"/>
          <rect className="place" x="1352" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_5" sectorAlias="amfiteatr" row="13" seat="5"/>
          <rect className="place" x="1380" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_4" sectorAlias="amfiteatr" row="13" seat="4"/>
          <rect className="place" x="1237" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_7" sectorAlias="amfiteatr" row="13" seat="7"/>
          <rect className="place" x="1324" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_6" sectorAlias="amfiteatr" row="13" seat="6"/>
          <rect className="place" x="1463" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_1" sectorAlias="amfiteatr" row="13" seat="1"/>
          <rect className="place" x="1407" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_3" sectorAlias="amfiteatr" row="13" seat="3"/>
          <rect className="place" x="1435" y="1439" width="16" height="16" rx="6"
                id="amfiteatr_13_2" sectorAlias="amfiteatr" row="13" seat="2"/>
          <rect className="place" x="1182" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_9" sectorAlias="amfiteatr" row="13" seat="9"/>
          <rect className="place" x="1210" y="1440" width="16" height="16" rx="6"
                id="amfiteatr_13_8" sectorAlias="amfiteatr" row="13" seat="8"/>
          <rect className="place" x="1716" y="818" width="16" height="16" rx="6"
                id="parter_18_3" sectorAlias="parter" row="18" seat="3"/>
          <rect className="place" x="1744" y="818" width="16" height="16" rx="6"
                id="parter_18_2" sectorAlias="parter" row="18" seat="2"/>
          <rect className="place" x="1661" y="818" width="16" height="16" rx="6"
                id="parter_18_5" sectorAlias="parter" row="18" seat="5"/>
          <rect className="place" x="1688" y="818" width="16" height="16" rx="6"
                id="parter_18_4" sectorAlias="parter" row="18" seat="4"/>
          <rect className="place" x="1605" y="818" width="16" height="16" rx="6"
                id="parter_18_7" sectorAlias="parter" row="18" seat="7"/>
          <rect className="place" x="1633" y="818" width="16" height="16" rx="6"
                id="parter_18_6" sectorAlias="parter" row="18" seat="6"/>
          <rect className="place" x="1549" y="818" width="16" height="16" rx="6"
                id="parter_18_9" sectorAlias="parter" row="18" seat="9"/>
          <rect className="place" x="1577" y="818" width="16" height="16" rx="6"
                id="parter_18_8" sectorAlias="parter" row="18" seat="8"/>
          <rect className="place" x="203" y="736" width="16" height="16" rx="6"
                id="first_level_left_1_14" sectorAlias="first_level_left" row="1" seat="14"/>
          <rect className="place" x="203" y="764" width="16" height="16" rx="6"
                id="first_level_left_1_15" sectorAlias="first_level_left" row="1" seat="15"/>
          <rect className="place" x="203" y="792" width="16" height="16" rx="6"
                id="first_level_left_1_16" sectorAlias="first_level_left" row="1" seat="16"/>
          <rect className="place" x="203" y="819" width="16" height="16" rx="6"
                id="first_level_left_1_17" sectorAlias="first_level_left" row="1" seat="17"/>
          <rect className="place" x="203" y="625" width="16" height="16" rx="6"
                id="first_level_left_1_10" sectorAlias="first_level_left" row="1" seat="10"/>
          <rect className="place" x="203" y="653" width="16" height="16" rx="6"
                id="first_level_left_1_11" sectorAlias="first_level_left" row="1" seat="11"/>
          <rect className="place" x="203" y="681" width="16" height="16" rx="6"
                id="first_level_left_1_12" sectorAlias="first_level_left" row="1" seat="12"/>
          <rect className="place" x="1772" y="818" width="16" height="16" rx="6"
                id="parter_18_1" sectorAlias="parter" row="18" seat="1"/>
          <rect className="place" x="203" y="708" width="16" height="16" rx="6"
                id="first_level_left_1_13" sectorAlias="first_level_left" row="1" seat="13"/>
          <rect className="place" x="1688" y="854" width="16" height="16" rx="6"
                id="parter_19_4" sectorAlias="parter" row="19" seat="4"/>
          <rect className="place" x="1716" y="854" width="16" height="16" rx="6"
                id="parter_19_3" sectorAlias="parter" row="19" seat="3"/>
          <rect className="place" x="1633" y="854" width="16" height="16" rx="6"
                id="parter_19_6" sectorAlias="parter" row="19" seat="6"/>
          <rect className="place" x="1661" y="854" width="16" height="16" rx="6"
                id="parter_19_5" sectorAlias="parter" row="19" seat="5"/>
          <rect className="place" x="1577" y="854" width="16" height="16" rx="6"
                id="parter_19_8" sectorAlias="parter" row="19" seat="8"/>
          <rect className="place" x="1605" y="854" width="16" height="16" rx="6"
                id="parter_19_7" sectorAlias="parter" row="19" seat="7"/>
          <rect className="place" x="1549" y="854" width="16" height="16" rx="6"
                id="parter_19_9" sectorAlias="parter" row="19" seat="9"/>
          <rect className="place" x="1744" y="854" width="16" height="16" rx="6"
                id="parter_19_2" sectorAlias="parter" row="19" seat="2"/>
          <rect className="place" x="1772" y="854" width="16" height="16" rx="6"
                id="parter_19_1" sectorAlias="parter" row="19" seat="1"/>
          <rect className="place" x="1744" y="745" width="16" height="16" rx="6"
                id="parter_16_1" sectorAlias="parter" row="16" seat="1"/>
          <rect className="place" x="1689" y="745" width="16" height="16" rx="6"
                id="parter_16_3" sectorAlias="parter" row="16" seat="3"/>
          <rect className="place" x="1716" y="745" width="16" height="16" rx="6"
                id="parter_16_2" sectorAlias="parter" row="16" seat="2"/>
          <rect className="place" x="1633" y="745" width="16" height="16" rx="6"
                id="parter_16_5" sectorAlias="parter" row="16" seat="5"/>
          <rect className="place" x="1661" y="745" width="16" height="16" rx="6"
                id="parter_16_4" sectorAlias="parter" row="16" seat="4"/>
          <rect className="place" x="1577" y="745" width="16" height="16" rx="6"
                id="parter_16_7" sectorAlias="parter" row="16" seat="7"/>
          <rect className="place" x="1605" y="745" width="16" height="16" rx="6"
                id="parter_16_6" sectorAlias="parter" row="16" seat="6"/>
          <rect className="place" x="1573" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_2" sectorAlias="amfiteatr" row="10" seat="2"/>
          <rect className="place" x="1601" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_1" sectorAlias="amfiteatr" row="10" seat="1"/>
          <rect className="place" x="1518" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_4" sectorAlias="amfiteatr" row="10" seat="4"/>
          <rect className="place" x="1546" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_3" sectorAlias="amfiteatr" row="10" seat="3"/>
          <rect className="place" x="1302" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_9" sectorAlias="orchestry_bottom" row="1" seat="9"/>
          <rect className="place" x="1330" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_8" sectorAlias="orchestry_bottom" row="1" seat="8"/>
          <rect className="place" x="1380" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_9" sectorAlias="amfiteatr" row="10" seat="9"/>
          <rect className="place" x="1358" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_7" sectorAlias="orchestry_bottom" row="1" seat="7"/>
          <rect className="place" x="1386" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_6" sectorAlias="orchestry_bottom" row="1" seat="6"/>
          <rect className="place" x="1413" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_5" sectorAlias="orchestry_bottom" row="1" seat="5"/>
          <rect className="place" x="1463" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_6" sectorAlias="amfiteatr" row="10" seat="6"/>
          <rect className="place" x="1441" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_4" sectorAlias="orchestry_bottom" row="1" seat="4"/>
          <rect className="place" x="1490" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_5" sectorAlias="amfiteatr" row="10" seat="5"/>
          <rect className="place" x="1469" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_3" sectorAlias="orchestry_bottom" row="1" seat="3"/>
          <rect className="place" x="1407" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_8" sectorAlias="amfiteatr" row="10" seat="8"/>
          <rect className="place" x="1497" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_2" sectorAlias="orchestry_bottom" row="1" seat="2"/>
          <rect className="place" x="1435" y="1331" width="16" height="16" rx="6"
                id="amfiteatr_10_7" sectorAlias="amfiteatr" row="10" seat="7"/>
          <rect className="place" x="1524" y="8" width="16" height="16" rx="6"
                id="orchestry_bottom_1_1" sectorAlias="orchestry_bottom" row="1" seat="1"/>
          <rect className="place" x="1522" y="745" width="16" height="16" rx="6"
                id="parter_16_9" sectorAlias="parter" row="16" seat="9"/>
          <rect className="place" x="1550" y="745" width="16" height="16" rx="6"
                id="parter_16_8" sectorAlias="parter" row="16" seat="8"/>
          <rect className="place" x="1716" y="782" width="16" height="16" rx="6"
                id="parter_17_2" sectorAlias="parter" row="17" seat="2"/>
          <rect className="place" x="1744" y="782" width="16" height="16" rx="6"
                id="parter_17_1" sectorAlias="parter" row="17" seat="1"/>
          <rect className="place" x="1661" y="782" width="16" height="16" rx="6"
                id="parter_17_4" sectorAlias="parter" row="17" seat="4"/>
          <rect className="place" x="1689" y="782" width="16" height="16" rx="6"
                id="parter_17_3" sectorAlias="parter" row="17" seat="3"/>
          <rect className="place" x="1605" y="782" width="16" height="16" rx="6"
                id="parter_17_6" sectorAlias="parter" row="17" seat="6"/>
          <rect className="place" x="1633" y="782" width="16" height="16" rx="6"
                id="parter_17_5" sectorAlias="parter" row="17" seat="5"/>
          <rect className="place" x="1550" y="782" width="16" height="16" rx="6"
                id="parter_17_8" sectorAlias="parter" row="17" seat="8"/>
          <rect className="place" x="1577" y="782" width="16" height="16" rx="6"
                id="parter_17_7" sectorAlias="parter" row="17" seat="7"/>
          <rect className="place" x="1302" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_9" sectorAlias="orchestry_bottom" row="2" seat="9"/>
          <rect className="place" x="1330" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_8" sectorAlias="orchestry_bottom" row="2" seat="8"/>
          <rect className="place" x="1358" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_7" sectorAlias="orchestry_bottom" row="2" seat="7"/>
          <rect className="place" x="1386" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_6" sectorAlias="orchestry_bottom" row="2" seat="6"/>
          <rect className="place" x="1413" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_5" sectorAlias="orchestry_bottom" row="2" seat="5"/>
          <rect className="place" x="1441" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_4" sectorAlias="orchestry_bottom" row="2" seat="4"/>
          <rect className="place" x="1469" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_3" sectorAlias="orchestry_bottom" row="2" seat="3"/>
          <rect className="place" x="1497" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_2" sectorAlias="orchestry_bottom" row="2" seat="2"/>
          <rect className="place" x="1524" y="44" width="16" height="16" rx="6"
                id="orchestry_bottom_2_1" sectorAlias="orchestry_bottom" row="2" seat="1"/>
          <rect className="place" x="1522" y="782" width="16" height="16" rx="6"
                id="parter_17_9" sectorAlias="parter" row="17" seat="9"/>
          <rect className="place" x="852" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_25" sectorAlias="amfiteatr" row="9" seat="25"/>
          <rect className="place" x="824" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_26" sectorAlias="amfiteatr" row="9" seat="26"/>
          <rect className="place" x="1744" y="673" width="16" height="16" rx="6"
                id="parter_14_1" sectorAlias="parter" row="14" seat="1"/>
          <rect className="place" x="1753" y="1541" width="16" height="16" rx="6"
                id="beltaj_middle_1_1" sectorAlias="beltaj_middle" row="1" seat="1"/>
          <rect className="place" x="796" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_27" sectorAlias="amfiteatr" row="9" seat="27"/>
          <rect className="place" x="1728" y="1554" width="16" height="16" rx="6"
                id="beltaj_middle_1_2" sectorAlias="beltaj_middle" row="1" seat="2"/>
          <rect className="place" x="768" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_28" sectorAlias="amfiteatr" row="9" seat="28"/>
          <rect className="place" x="1689" y="673" width="16" height="16" rx="6"
                id="parter_14_3" sectorAlias="parter" row="14" seat="3"/>
          <rect className="place" x="1704" y="1566" width="16" height="16" rx="6"
                id="beltaj_middle_1_3" sectorAlias="beltaj_middle" row="1" seat="3"/>
          <rect className="place" x="962" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_21" sectorAlias="amfiteatr" row="9" seat="21"/>
          <rect className="place" x="1716" y="673" width="16" height="16" rx="6"
                id="parter_14_2" sectorAlias="parter" row="14" seat="2"/>
          <rect className="place" x="1679" y="1579" width="16" height="16" rx="6"
                id="beltaj_middle_1_4" sectorAlias="beltaj_middle" row="1" seat="4"/>
          <rect className="place" x="934" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_22" sectorAlias="amfiteatr" row="9" seat="22"/>
          <rect className="place" x="1633" y="673" width="16" height="16" rx="6"
                id="parter_14_5" sectorAlias="parter" row="14" seat="5"/>
          <rect className="place" x="2196" y="939" width="16" height="16" rx="6"
                id="first_level_right_1_21" sectorAlias="first_level_right" row="1" seat="21"/>
          <rect className="place" x="2224" y="855" width="16" height="16" rx="6"
                id="first_level_right_2_11" sectorAlias="first_level_right" row="2" seat="11"/>
          <rect className="place" x="1654" y="1591" width="16" height="16" rx="6"
                id="beltaj_middle_1_5" sectorAlias="beltaj_middle" row="1" seat="5"/>
          <rect className="place" x="906" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_23" sectorAlias="amfiteatr" row="9" seat="23"/>
          <rect className="place" x="1661" y="673" width="16" height="16" rx="6"
                id="parter_14_4" sectorAlias="parter" row="14" seat="4"/>
          <rect className="place" x="2196" y="911" width="16" height="16" rx="6"
                id="first_level_right_1_20" sectorAlias="first_level_right" row="1" seat="20"/>
          <rect className="place" x="2224" y="827" width="16" height="16" rx="6"
                id="first_level_right_2_10" sectorAlias="first_level_right" row="2" seat="10"/>
          <rect className="place" x="1629" y="1603" width="16" height="16" rx="6"
                id="beltaj_middle_1_6" sectorAlias="beltaj_middle" row="1" seat="6"/>
          <rect className="place" x="879" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_24" sectorAlias="amfiteatr" row="9" seat="24"/>
          <rect className="place" x="2196" y="993" width="16" height="16" rx="6"
                id="first_level_right_1_23" sectorAlias="first_level_right" row="1" seat="23"/>
          <rect className="place" x="2224" y="911" width="16" height="16" rx="6"
                id="first_level_right_2_13" sectorAlias="first_level_right" row="2" seat="13"/>
          <rect className="place" x="1604" y="1616" width="16" height="16" rx="6"
                id="beltaj_middle_1_7" sectorAlias="beltaj_middle" row="1" seat="7"/>
          <rect className="place" x="2196" y="966" width="16" height="16" rx="6"
                id="first_level_right_1_22" sectorAlias="first_level_right" row="1" seat="22"/>
          <rect className="place" x="2224" y="883" width="16" height="16" rx="6"
                id="first_level_right_2_12" sectorAlias="first_level_right" row="2" seat="12"/>
          <rect className="place" x="1580" y="1628" width="16" height="16" rx="6"
                id="beltaj_middle_1_8" sectorAlias="beltaj_middle" row="1" seat="8"/>
          <rect className="place" x="2196" y="1049" width="16" height="16" rx="6"
                id="first_level_right_1_25" sectorAlias="first_level_right" row="1" seat="25"/>
          <rect className="place" x="2224" y="966" width="16" height="16" rx="6"
                id="first_level_right_2_15" sectorAlias="first_level_right" row="2" seat="15"/>
          <rect className="place" x="1555" y="1640" width="16" height="16" rx="6"
                id="beltaj_middle_1_9" sectorAlias="beltaj_middle" row="1" seat="9"/>
          <rect className="place" x="2196" y="1021" width="16" height="16" rx="6"
                id="first_level_right_1_24" sectorAlias="first_level_right" row="1" seat="24"/>
          <rect className="place" x="2224" y="939" width="16" height="16" rx="6"
                id="first_level_right_2_14" sectorAlias="first_level_right" row="2" seat="14"/>
          <rect className="place" x="2196" y="1104" width="16" height="16" rx="6"
                id="first_level_right_1_27" sectorAlias="first_level_right" row="1" seat="27"/>
          <rect className="place" x="2141" y="1418" width="16" height="16" rx="6"
                id="first_level_right_2_17" sectorAlias="first_level_right" row="2" seat="17"/>
          <rect className="place" x="2196" y="1077" width="16" height="16" rx="6"
                id="first_level_right_1_26" sectorAlias="first_level_right" row="1" seat="26"/>
          <rect className="place" x="2224" y="993" width="16" height="16" rx="6"
                id="first_level_right_2_16" sectorAlias="first_level_right" row="2" seat="16"/>
          <rect className="place" x="2124" y="1472" width="16" height="16" rx="6"
                id="first_level_right_2_19" sectorAlias="first_level_right" row="2" seat="19"/>
          <rect className="place" x="2106" y="1436" width="16" height="16" rx="6"
                id="first_level_right_1_29" sectorAlias="first_level_right" row="1" seat="29"/>
          <rect className="place" x="2133" y="1445" width="16" height="16" rx="6"
                id="first_level_right_2_18" sectorAlias="first_level_right" row="2" seat="18"/>
          <rect className="place" x="2114" y="1410" width="16" height="16" rx="6"
                id="first_level_right_1_28" sectorAlias="first_level_right" row="1" seat="28"/>
          <rect className="place" x="2196" y="883" width="16" height="16" rx="6"
                id="first_level_right_1_19" sectorAlias="first_level_right" row="1" seat="19"/>
          <rect className="place" x="1577" y="673" width="16" height="16" rx="6"
                id="parter_14_7" sectorAlias="parter" row="14" seat="7"/>
          <rect className="place" x="1605" y="673" width="16" height="16" rx="6"
                id="parter_14_6" sectorAlias="parter" row="14" seat="6"/>
          <rect className="place" x="1522" y="673" width="16" height="16" rx="6"
                id="parter_14_9" sectorAlias="parter" row="14" seat="9"/>
          <rect className="place" x="1550" y="673" width="16" height="16" rx="6"
                id="parter_14_8" sectorAlias="parter" row="14" seat="8"/>
          <rect className="place" x="1210" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_14" sectorAlias="amfiteatr" row="9" seat="14"/>
          <rect className="place" x="879" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_24" sectorAlias="amfiteatr" row="8" seat="24"/>
          <rect className="place" x="1182" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_15" sectorAlias="amfiteatr" row="9" seat="15"/>
          <rect className="place" x="852" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_25" sectorAlias="amfiteatr" row="8" seat="25"/>
          <rect className="place" x="1716" y="709" width="16" height="16" rx="6"
                id="parter_15_2" sectorAlias="parter" row="15" seat="2"/>
          <rect className="place" x="824" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_26" sectorAlias="amfiteatr" row="8" seat="26"/>
          <rect className="place" x="1154" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_16" sectorAlias="amfiteatr" row="9" seat="16"/>
          <rect className="place" x="1744" y="709" width="16" height="16" rx="6"
                id="parter_15_1" sectorAlias="parter" row="15" seat="1"/>
          <rect className="place" x="796" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_27" sectorAlias="amfiteatr" row="8" seat="27"/>
          <rect className="place" x="1073" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_17" sectorAlias="amfiteatr" row="9" seat="17"/>
          <rect className="place" x="2116" y="1498" width="16" height="16" rx="6"
                id="first_level_right_2_20" sectorAlias="first_level_right" row="2" seat="20"/>
          <rect className="place" x="1661" y="709" width="16" height="16" rx="6"
                id="parter_15_4" sectorAlias="parter" row="15" seat="4"/>
          <rect className="place" x="2098" y="1463" width="16" height="16" rx="6"
                id="first_level_right_1_30" sectorAlias="first_level_right" row="1" seat="30"/>
          <rect className="place" x="1380" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_10" sectorAlias="amfiteatr" row="9" seat="10"/>
          <rect className="place" x="989" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_20" sectorAlias="amfiteatr" row="8" seat="20"/>
          <rect className="place" x="1689" y="709" width="16" height="16" rx="6"
                id="parter_15_3" sectorAlias="parter" row="15" seat="3"/>
          <rect className="place" x="1352" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_11" sectorAlias="amfiteatr" row="9" seat="11"/>
          <rect className="place" x="962" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_21" sectorAlias="amfiteatr" row="8" seat="21"/>
          <rect className="place" x="2100" y="1551" width="16" height="16" rx="6"
                id="first_level_right_2_22" sectorAlias="first_level_right" row="2" seat="22"/>
          <rect className="place" x="1605" y="709" width="16" height="16" rx="6"
                id="parter_15_6" sectorAlias="parter" row="15" seat="6"/>
          <rect className="place" x="2082" y="1516" width="16" height="16" rx="6"
                id="first_level_right_1_32" sectorAlias="first_level_right" row="1" seat="32"/>
          <rect className="place" x="1324" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_12" sectorAlias="amfiteatr" row="9" seat="12"/>
          <rect className="place" x="934" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_22" sectorAlias="amfiteatr" row="8" seat="22"/>
          <rect className="place" x="2108" y="1524" width="16" height="16" rx="6"
                id="first_level_right_2_21" sectorAlias="first_level_right" row="2" seat="21"/>
          <rect className="place" x="1633" y="709" width="16" height="16" rx="6"
                id="parter_15_5" sectorAlias="parter" row="15" seat="5"/>
          <rect className="place" x="2090" y="1490" width="16" height="16" rx="6"
                id="first_level_right_1_31" sectorAlias="first_level_right" row="1" seat="31"/>
          <rect className="place" x="1237" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_13" sectorAlias="amfiteatr" row="9" seat="13"/>
          <rect className="place" x="906" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_23" sectorAlias="amfiteatr" row="8" seat="23"/>
          <rect className="place" x="2083" y="1604" width="16" height="16" rx="6"
                id="first_level_right_2_24" sectorAlias="first_level_right" row="2" seat="24"/>
          <rect className="place" x="2065" y="1569" width="16" height="16" rx="6"
                id="first_level_right_1_34" sectorAlias="first_level_right" row="1" seat="34"/>
          <rect className="place" x="2091" y="1578" width="16" height="16" rx="6"
                id="first_level_right_2_23" sectorAlias="first_level_right" row="2" seat="23"/>
          <rect className="place" x="2073" y="1543" width="16" height="16" rx="6"
                id="first_level_right_1_33" sectorAlias="first_level_right" row="1" seat="33"/>
          <rect className="place" x="2067" y="1657" width="16" height="16" rx="6"
                id="first_level_right_2_26" sectorAlias="first_level_right" row="2" seat="26"/>
          <rect className="place" x="2049" y="1622" width="16" height="16" rx="6"
                id="first_level_right_1_36" sectorAlias="first_level_right" row="1" seat="36"/>
          <rect className="place" x="2075" y="1630" width="16" height="16" rx="6"
                id="first_level_right_2_25" sectorAlias="first_level_right" row="2" seat="25"/>
          <rect className="place" x="2057" y="1596" width="16" height="16" rx="6"
                id="first_level_right_1_35" sectorAlias="first_level_right" row="1" seat="35"/>
          <rect className="place" x="1947" y="1759" width="16" height="16" rx="6"
                id="first_level_right_1_38" sectorAlias="first_level_right" row="1" seat="38"/>
          <rect className="place" x="1944" y="1798" width="16" height="16" rx="6"
                id="first_level_right_2_28" sectorAlias="first_level_right" row="2" seat="28"/>
          <rect className="place" x="768" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_28" sectorAlias="amfiteatr" row="8" seat="28"/>
          <rect className="place" x="1045" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_18" sectorAlias="amfiteatr" row="9" seat="18"/>
          <rect className="place" x="1965" y="1780" width="16" height="16" rx="6"
                id="first_level_right_2_27" sectorAlias="first_level_right" row="2" seat="27"/>
          <rect className="place" x="2040" y="1649" width="16" height="16" rx="6"
                id="first_level_right_1_37" sectorAlias="first_level_right" row="1" seat="37"/>
          <rect className="place" x="1017" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_19" sectorAlias="amfiteatr" row="9" seat="19"/>
          <rect className="place" x="1926" y="1778" width="16" height="16" rx="6"
                id="first_level_right_1_39" sectorAlias="first_level_right" row="1" seat="39"/>
          <rect className="place" x="1924" y="1817" width="16" height="16" rx="6"
                id="first_level_right_2_29" sectorAlias="first_level_right" row="2" seat="29"/>
          <rect className="place" x="1550" y="709" width="16" height="16" rx="6"
                id="parter_15_8" sectorAlias="parter" row="15" seat="8"/>
          <rect className="place" x="1577" y="709" width="16" height="16" rx="6"
                id="parter_15_7" sectorAlias="parter" row="15" seat="7"/>
          <rect className="place" x="1522" y="709" width="16" height="16" rx="6"
                id="parter_15_9" sectorAlias="parter" row="15" seat="9"/>
          <rect className="place" x="989" y="1295" width="16" height="16" rx="6"
                id="amfiteatr_9_20" sectorAlias="amfiteatr" row="9" seat="20"/>
          <rect className="place" x="1828" y="1567" width="16" height="16" rx="6"
                id="beltaj_middle_3_1" sectorAlias="beltaj_middle" row="3" seat="1"/>
          <rect className="place" x="1803" y="1579" width="16" height="16" rx="6"
                id="beltaj_middle_3_2" sectorAlias="beltaj_middle" row="3" seat="2"/>
          <rect className="place" x="1778" y="1591" width="16" height="16" rx="6"
                id="beltaj_middle_3_3" sectorAlias="beltaj_middle" row="3" seat="3"/>
          <rect className="place" x="1753" y="1604" width="16" height="16" rx="6"
                id="beltaj_middle_3_4" sectorAlias="beltaj_middle" row="3" seat="4"/>
          <rect className="place" x="1689" y="601" width="16" height="16" rx="6"
                id="parter_12_1" sectorAlias="parter" row="12" seat="1"/>
          <rect className="place" x="1884" y="1815" width="16" height="16" rx="6"
                id="first_level_right_1_41" sectorAlias="first_level_right" row="1" seat="41"/>
          <rect className="place" x="1882" y="1853" width="16" height="16" rx="6"
                id="first_level_right_2_31" sectorAlias="first_level_right" row="2" seat="31"/>
          <rect className="place" x="1728" y="1616" width="16" height="16" rx="6"
                id="beltaj_middle_3_5" sectorAlias="beltaj_middle" row="3" seat="5"/>
          <rect className="place" x="1905" y="1796" width="16" height="16" rx="6"
                id="first_level_right_1_40" sectorAlias="first_level_right" row="1" seat="40"/>
          <rect className="place" x="1902" y="1835" width="16" height="16" rx="6"
                id="first_level_right_2_30" sectorAlias="first_level_right" row="2" seat="30"/>
          <rect className="place" x="1704" y="1629" width="16" height="16" rx="6"
                id="beltaj_middle_3_6" sectorAlias="beltaj_middle" row="3" seat="6"/>
          <rect className="place" x="1633" y="601" width="16" height="16" rx="6"
                id="parter_12_3" sectorAlias="parter" row="12" seat="3"/>
          <rect className="place" x="1843" y="1851" width="16" height="16" rx="6"
                id="first_level_right_1_43" sectorAlias="first_level_right" row="1" seat="43"/>
          <rect className="place" x="1840" y="1890" width="16" height="16" rx="6"
                id="first_level_right_2_33" sectorAlias="first_level_right" row="2" seat="33"/>
          <rect className="place" x="1679" y="1641" width="16" height="16" rx="6"
                id="beltaj_middle_3_7" sectorAlias="beltaj_middle" row="3" seat="7"/>
          <rect className="place" x="1661" y="601" width="16" height="16" rx="6"
                id="parter_12_2" sectorAlias="parter" row="12" seat="2"/>
          <rect className="place" x="1864" y="1833" width="16" height="16" rx="6"
                id="first_level_right_1_42" sectorAlias="first_level_right" row="1" seat="42"/>
          <rect className="place" x="1861" y="1872" width="16" height="16" rx="6"
                id="first_level_right_2_32" sectorAlias="first_level_right" row="2" seat="32"/>
          <rect className="place" x="1654" y="1653" width="16" height="16" rx="6"
                id="beltaj_middle_3_8" sectorAlias="beltaj_middle" row="3" seat="8"/>
          <rect className="place" x="1801" y="1888" width="16" height="16" rx="6"
                id="first_level_right_1_45" sectorAlias="first_level_right" row="1" seat="45"/>
          <rect className="place" x="1799" y="1927" width="16" height="16" rx="6"
                id="first_level_right_2_35" sectorAlias="first_level_right" row="2" seat="35"/>
          <rect className="place" x="1629" y="1666" width="16" height="16" rx="6"
                id="beltaj_middle_3_9" sectorAlias="beltaj_middle" row="3" seat="9"/>
          <rect className="place" x="1822" y="1870" width="16" height="16" rx="6"
                id="first_level_right_1_44" sectorAlias="first_level_right" row="1" seat="44"/>
          <rect className="place" x="1819" y="1909" width="16" height="16" rx="6"
                id="first_level_right_2_34" sectorAlias="first_level_right" row="2" seat="34"/>
          <rect className="place" x="1759" y="1925" width="16" height="16" rx="6"
                id="first_level_right_1_47" sectorAlias="first_level_right" row="1" seat="47"/>
          <rect className="place" x="1757" y="1964" width="16" height="16" rx="6"
                id="first_level_right_2_37" sectorAlias="first_level_right" row="2" seat="37"/>
          <rect className="place" x="1780" y="1906" width="16" height="16" rx="6"
                id="first_level_right_1_46" sectorAlias="first_level_right" row="1" seat="46"/>
          <rect className="place" x="1778" y="1946" width="16" height="16" rx="6"
                id="first_level_right_2_36" sectorAlias="first_level_right" row="2" seat="36"/>
          <rect className="place" x="1718" y="1961" width="16" height="16" rx="6"
                id="first_level_right_1_49" sectorAlias="first_level_right" row="1" seat="49"/>
          <rect className="place" x="1716" y="2001" width="16" height="16" rx="6"
                id="first_level_right_2_39" sectorAlias="first_level_right" row="2" seat="39"/>
          <rect className="place" x="1739" y="1943" width="16" height="16" rx="6"
                id="first_level_right_1_48" sectorAlias="first_level_right" row="1" seat="48"/>
          <rect className="place" x="1736" y="1982" width="16" height="16" rx="6"
                id="first_level_right_2_38" sectorAlias="first_level_right" row="2" seat="38"/>
          <rect className="place" x="1577" y="601" width="16" height="16" rx="6"
                id="parter_12_5" sectorAlias="parter" row="12" seat="5"/>
          <rect className="place" x="1605" y="601" width="16" height="16" rx="6"
                id="parter_12_4" sectorAlias="parter" row="12" seat="4"/>
          <rect className="place" x="1522" y="601" width="16" height="16" rx="6"
                id="parter_12_7" sectorAlias="parter" row="12" seat="7"/>
          <rect className="place" x="1550" y="601" width="16" height="16" rx="6"
                id="parter_12_6" sectorAlias="parter" row="12" seat="6"/>
          <rect className="place" x="1466" y="601" width="16" height="16" rx="6"
                id="parter_12_9" sectorAlias="parter" row="12" seat="9"/>
          <rect className="place" x="1494" y="601" width="16" height="16" rx="6"
                id="parter_12_8" sectorAlias="parter" row="12" seat="8"/>
          <rect className="place" x="1792" y="1616" width="16" height="16" rx="6"
                id="beltaj_middle_4_1" sectorAlias="beltaj_middle" row="4" seat="1"/>
          <rect className="place" x="1791" y="1554" width="16" height="16" rx="6"
                id="beltaj_middle_2_1" sectorAlias="beltaj_middle" row="2" seat="1"/>
          <rect className="place" x="374" y="271" width="16" height="16" rx="6"
                id="beltaj_left_1_10" sectorAlias="beltaj_left" row="1" seat="10"/>
          <rect className="place" x="1766" y="1567" width="16" height="16" rx="6"
                id="beltaj_middle_2_2" sectorAlias="beltaj_middle" row="2" seat="2"/>
          <rect className="place" x="1741" y="1579" width="16" height="16" rx="6"
                id="beltaj_middle_2_3" sectorAlias="beltaj_middle" row="2" seat="3"/>
          <rect className="place" x="1716" y="637" width="16" height="16" rx="6"
                id="parter_13_2" sectorAlias="parter" row="13" seat="2"/>
          <rect className="place" x="1716" y="1591" width="16" height="16" rx="6"
                id="beltaj_middle_2_4" sectorAlias="beltaj_middle" row="2" seat="4"/>
          <rect className="place" x="1744" y="637" width="16" height="16" rx="6"
                id="parter_13_1" sectorAlias="parter" row="13" seat="1"/>
          <rect className="place" x="1692" y="1604" width="16" height="16" rx="6"
                id="beltaj_middle_2_5" sectorAlias="beltaj_middle" row="2" seat="5"/>
          <rect className="place" x="1661" y="637" width="16" height="16" rx="6"
                id="parter_13_4" sectorAlias="parter" row="13" seat="4"/>
          <rect className="place" x="1667" y="1616" width="16" height="16" rx="6"
                id="beltaj_middle_2_6" sectorAlias="beltaj_middle" row="2" seat="6"/>
          <rect className="place" x="1689" y="637" width="16" height="16" rx="6"
                id="parter_13_3" sectorAlias="parter" row="13" seat="3"/>
          <rect className="place" x="1642" y="1628" width="16" height="16" rx="6"
                id="beltaj_middle_2_7" sectorAlias="beltaj_middle" row="2" seat="7"/>
          <rect className="place" x="1617" y="1641" width="16" height="16" rx="6"
                id="beltaj_middle_2_8" sectorAlias="beltaj_middle" row="2" seat="8"/>
          <rect className="place" x="1592" y="1653" width="16" height="16" rx="6"
                id="beltaj_middle_2_9" sectorAlias="beltaj_middle" row="2" seat="9"/>
          <rect className="place" x="374" y="520" width="16" height="16" rx="6"
                id="beltaj_left_1_19" sectorAlias="beltaj_left" row="1" seat="19"/>
          <rect className="place" x="1605" y="637" width="16" height="16" rx="6"
                id="parter_13_6" sectorAlias="parter" row="13" seat="6"/>
          <rect className="place" x="374" y="437" width="16" height="16" rx="6"
                id="beltaj_left_1_16" sectorAlias="beltaj_left" row="1" seat="16"/>
          <rect className="place" x="1633" y="637" width="16" height="16" rx="6"
                id="parter_13_5" sectorAlias="parter" row="13" seat="5"/>
          <rect className="place" x="374" y="410" width="16" height="16" rx="6"
                id="beltaj_left_1_15" sectorAlias="beltaj_left" row="1" seat="15"/>
          <rect className="place" x="1550" y="637" width="16" height="16" rx="6"
                id="parter_13_8" sectorAlias="parter" row="13" seat="8"/>
          <rect className="place" x="374" y="493" width="16" height="16" rx="6"
                id="beltaj_left_1_18" sectorAlias="beltaj_left" row="1" seat="18"/>
          <rect className="place" x="1577" y="637" width="16" height="16" rx="6"
                id="parter_13_7" sectorAlias="parter" row="13" seat="7"/>
          <rect className="place" x="374" y="465" width="16" height="16" rx="6"
                id="beltaj_left_1_17" sectorAlias="beltaj_left" row="1" seat="17"/>
          <rect className="place" x="374" y="327" width="16" height="16" rx="6"
                id="beltaj_left_1_12" sectorAlias="beltaj_left" row="1" seat="12"/>
          <rect className="place" x="1522" y="637" width="16" height="16" rx="6"
                id="parter_13_9" sectorAlias="parter" row="13" seat="9"/>
          <rect className="place" x="374" y="299" width="16" height="16" rx="6"
                id="beltaj_left_1_11" sectorAlias="beltaj_left" row="1" seat="11"/>
          <rect className="place" x="374" y="382" width="16" height="16" rx="6"
                id="beltaj_left_1_14" sectorAlias="beltaj_left" row="1" seat="14"/>
          <rect className="place" x="374" y="354" width="16" height="16" rx="6"
                id="beltaj_left_1_13" sectorAlias="beltaj_left" row="1" seat="13"/>
          <rect className="place" x="1352" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_11" sectorAlias="amfiteatr" row="6" seat="11"/>
          <rect className="place" x="852" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_21" sectorAlias="amfiteatr" row="5" seat="21"/>
          <rect className="place" x="1324" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_12" sectorAlias="amfiteatr" row="6" seat="12"/>
          <rect className="place" x="824" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_22" sectorAlias="amfiteatr" row="5" seat="22"/>
          <rect className="place" x="796" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_23" sectorAlias="amfiteatr" row="5" seat="23"/>
          <rect className="place" x="1073" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_13" sectorAlias="amfiteatr" row="6" seat="13"/>
          <rect className="place" x="346" y="299" width="16" height="16" rx="6"
                id="beltaj_left_2_11" sectorAlias="beltaj_left" row="2" seat="11"/>
          <rect className="place" x="374" y="648" width="16" height="16" rx="6"
                id="beltaj_left_1_21" sectorAlias="beltaj_left" row="1" seat="21"/>
          <rect className="place" x="768" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_24" sectorAlias="amfiteatr" row="5" seat="24"/>
          <rect className="place" x="1045" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_14" sectorAlias="amfiteatr" row="6" seat="14"/>
          <rect className="place" x="374" y="548" width="16" height="16" rx="6"
                id="beltaj_left_1_20" sectorAlias="beltaj_left" row="1" seat="20"/>
          <rect className="place" x="346" y="271" width="16" height="16" rx="6"
                id="beltaj_left_2_10" sectorAlias="beltaj_left" row="2" seat="10"/>
          <rect className="place" x="1744" y="468" width="16" height="16" rx="6"
                id="parter_10_1" sectorAlias="parter" row="10" seat="1"/>
          <rect className="place" x="685" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_30" sectorAlias="amfiteatr" row="4" seat="30"/>
          <rect className="place" x="1380" y="1186" width="16" height="16" rx="6"
                id="amfiteatr_6_10" sectorAlias="amfiteatr" row="6" seat="10"/>
          <rect className="place" x="879" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_20" sectorAlias="amfiteatr" row="5" seat="20"/>
          <rect className="place" x="906" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_19" sectorAlias="amfiteatr" row="6" seat="19"/>
          <rect className="place" x="1017" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_15" sectorAlias="amfiteatr" row="6" seat="15"/>
          <rect className="place" x="989" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_16" sectorAlias="amfiteatr" row="6" seat="16"/>
          <rect className="place" x="962" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_17" sectorAlias="amfiteatr" row="6" seat="17"/>
          <rect className="place" x="934" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_18" sectorAlias="amfiteatr" row="6" seat="18"/>
          <rect className="place" x="1689" y="468" width="16" height="16" rx="6"
                id="parter_10_3" sectorAlias="parter" row="10" seat="3"/>
          <rect className="place" x="374" y="814" width="16" height="16" rx="6"
                id="beltaj_left_1_27" sectorAlias="beltaj_left" row="1" seat="27"/>
          <rect className="place" x="346" y="648" width="16" height="16" rx="6"
                id="beltaj_left_2_17" sectorAlias="beltaj_left" row="2" seat="17"/>
          <rect className="place" x="1716" y="468" width="16" height="16" rx="6"
                id="parter_10_2" sectorAlias="parter" row="10" seat="2"/>
          <rect className="place" x="374" y="786" width="16" height="16" rx="6"
                id="beltaj_left_1_26" sectorAlias="beltaj_left" row="1" seat="26"/>
          <rect className="place" x="346" y="437" width="16" height="16" rx="6"
                id="beltaj_left_2_16" sectorAlias="beltaj_left" row="2" seat="16"/>
          <rect className="place" x="1633" y="468" width="16" height="16" rx="6"
                id="parter_10_5" sectorAlias="parter" row="10" seat="5"/>
          <rect className="place" x="374" y="869" width="16" height="16" rx="6"
                id="beltaj_left_1_29" sectorAlias="beltaj_left" row="1" seat="29"/>
          <rect className="place" x="346" y="703" width="16" height="16" rx="6"
                id="beltaj_left_2_19" sectorAlias="beltaj_left" row="2" seat="19"/>
          <rect className="place" x="1661" y="468" width="16" height="16" rx="6"
                id="parter_10_4" sectorAlias="parter" row="10" seat="4"/>
          <rect className="place" x="374" y="842" width="16" height="16" rx="6"
                id="beltaj_left_1_28" sectorAlias="beltaj_left" row="1" seat="28"/>
          <rect className="place" x="346" y="676" width="16" height="16" rx="6"
                id="beltaj_left_2_18" sectorAlias="beltaj_left" row="2" seat="18"/>
          <rect className="place" x="346" y="354" width="16" height="16" rx="6"
                id="beltaj_left_2_13" sectorAlias="beltaj_left" row="2" seat="13"/>
          <rect className="place" x="1577" y="468" width="16" height="16" rx="6"
                id="parter_10_7" sectorAlias="parter" row="10" seat="7"/>
          <rect className="place" x="374" y="703" width="16" height="16" rx="6"
                id="beltaj_left_1_23" sectorAlias="beltaj_left" row="1" seat="23"/>
          <rect className="place" x="346" y="327" width="16" height="16" rx="6"
                id="beltaj_left_2_12" sectorAlias="beltaj_left" row="2" seat="12"/>
          <rect className="place" x="1605" y="468" width="16" height="16" rx="6"
                id="parter_10_6" sectorAlias="parter" row="10" seat="6"/>
          <rect className="place" x="374" y="676" width="16" height="16" rx="6"
                id="beltaj_left_1_22" sectorAlias="beltaj_left" row="1" seat="22"/>
          <rect className="place" x="1522" y="468" width="16" height="16" rx="6"
                id="parter_10_9" sectorAlias="parter" row="10" seat="9"/>
          <rect className="place" x="374" y="759" width="16" height="16" rx="6"
                id="beltaj_left_1_25" sectorAlias="beltaj_left" row="1" seat="25"/>
          <rect className="place" x="346" y="410" width="16" height="16" rx="6"
                id="beltaj_left_2_15" sectorAlias="beltaj_left" row="2" seat="15"/>
          <rect className="place" x="346" y="382" width="16" height="16" rx="6"
                id="beltaj_left_2_14" sectorAlias="beltaj_left" row="2" seat="14"/>
          <rect className="place" x="1550" y="468" width="16" height="16" rx="6"
                id="parter_10_8" sectorAlias="parter" row="10" seat="8"/>
          <rect className="place" x="374" y="731" width="16" height="16" rx="6"
                id="beltaj_left_1_24" sectorAlias="beltaj_left" row="1" seat="24"/>
          <rect className="place" x="1380" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_10" sectorAlias="amfiteatr" row="5" seat="10"/>
          <rect className="place" x="962" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_20" sectorAlias="amfiteatr" row="4" seat="20"/>
          <rect className="place" x="685" y="1078" width="16" height="16" rx="6"
                id="amfiteatr_3_30" sectorAlias="amfiteatr" row="3" seat="30"/>
          <rect className="place" x="374" y="897" width="16" height="16" rx="6"
                id="beltaj_left_1_30" sectorAlias="beltaj_left" row="1" seat="30"/>
          <rect className="place" x="346" y="731" width="16" height="16" rx="6"
                id="beltaj_left_2_20" sectorAlias="beltaj_left" row="2" seat="20"/>
          <rect className="place" x="318" y="271" width="16" height="16" rx="6"
                id="beltaj_left_3_10" sectorAlias="beltaj_left" row="3" seat="10"/>
          <rect className="place" x="1352" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_11" sectorAlias="amfiteatr" row="5" seat="11"/>
          <rect className="place" x="934" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_21" sectorAlias="amfiteatr" row="4" seat="21"/>
          <rect className="place" x="1324" y="1150" width="16" height="16" rx="6"
                id="amfiteatr_5_12" sectorAlias="amfiteatr" row="5" seat="12"/>
          <rect className="place" x="906" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_22" sectorAlias="amfiteatr" row="4" seat="22"/>
          <rect className="place" x="374" y="953" width="16" height="16" rx="6"
                id="beltaj_left_1_32" sectorAlias="beltaj_left" row="1" seat="32"/>
          <rect className="place" x="346" y="787" width="16" height="16" rx="6"
                id="beltaj_left_2_22" sectorAlias="beltaj_left" row="2" seat="22"/>
          <rect className="place" x="318" y="327" width="16" height="16" rx="6"
                id="beltaj_left_3_12" sectorAlias="beltaj_left" row="3" seat="12"/>
          <rect className="place" x="879" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_23" sectorAlias="amfiteatr" row="4" seat="23"/>
          <rect className="place" x="1073" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_13" sectorAlias="amfiteatr" row="5" seat="13"/>
          <rect className="place" x="374" y="925" width="16" height="16" rx="6"
                id="beltaj_left_1_31" sectorAlias="beltaj_left" row="1" seat="31"/>
          <rect className="place" x="346" y="759" width="16" height="16" rx="6"
                id="beltaj_left_2_21" sectorAlias="beltaj_left" row="2" seat="21"/>
          <rect className="place" x="318" y="299" width="16" height="16" rx="6"
                id="beltaj_left_3_11" sectorAlias="beltaj_left" row="3" seat="11"/>
          <rect className="place" x="1661" y="565" width="16" height="16" rx="6"
                id="parter_11_2" sectorAlias="parter" row="11" seat="2"/>
          <rect className="place" x="1689" y="565" width="16" height="16" rx="6"
                id="parter_11_1" sectorAlias="parter" row="11" seat="1"/>
          <rect className="place" x="740" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_28" sectorAlias="amfiteatr" row="4" seat="28"/>
          <rect className="place" x="934" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_18" sectorAlias="amfiteatr" row="5" seat="18"/>
          <rect className="place" x="713" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_29" sectorAlias="amfiteatr" row="4" seat="29"/>
          <rect className="place" x="906" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_19" sectorAlias="amfiteatr" row="5" seat="19"/>
          <rect className="place" x="852" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_24" sectorAlias="amfiteatr" row="4" seat="24"/>
          <rect className="place" x="1045" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_14" sectorAlias="amfiteatr" row="5" seat="14"/>
          <rect className="place" x="824" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_25" sectorAlias="amfiteatr" row="4" seat="25"/>
          <rect className="place" x="1017" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_15" sectorAlias="amfiteatr" row="5" seat="15"/>
          <rect className="place" x="796" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_26" sectorAlias="amfiteatr" row="4" seat="26"/>
          <rect className="place" x="989" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_16" sectorAlias="amfiteatr" row="5" seat="16"/>
          <rect className="place" x="768" y="1115" width="16" height="16" rx="6"
                id="amfiteatr_4_27" sectorAlias="amfiteatr" row="4" seat="27"/>
          <rect className="place" x="962" y="1151" width="16" height="16" rx="6"
                id="amfiteatr_5_17" sectorAlias="amfiteatr" row="5" seat="17"/>
          <rect className="place" x="1605" y="565" width="16" height="16" rx="6"
                id="parter_11_4" sectorAlias="parter" row="11" seat="4"/>
          <rect className="place" x="346" y="953" width="16" height="16" rx="6"
                id="beltaj_left_2_28" sectorAlias="beltaj_left" row="2" seat="28"/>
          <rect className="place" x="318" y="731" width="16" height="16" rx="6"
                id="beltaj_left_3_18" sectorAlias="beltaj_left" row="3" seat="18"/>
          <rect className="place" x="374" y="1119" width="16" height="16" rx="6"
                id="beltaj_left_1_38" sectorAlias="beltaj_left" row="1" seat="38"/>
          <rect className="place" x="1633" y="565" width="16" height="16" rx="6"
                id="parter_11_3" sectorAlias="parter" row="11" seat="3"/>
          <rect className="place" x="346" y="926" width="16" height="16" rx="6"
                id="beltaj_left_2_27" sectorAlias="beltaj_left" row="2" seat="27"/>
          <rect className="place" x="318" y="703" width="16" height="16" rx="6"
                id="beltaj_left_3_17" sectorAlias="beltaj_left" row="3" seat="17"/>
          <rect className="place" x="374" y="1091" width="16" height="16" rx="6"
                id="beltaj_left_1_37" sectorAlias="beltaj_left" row="1" seat="37"/>
          <rect className="place" x="1550" y="565" width="16" height="16" rx="6"
                id="parter_11_6" sectorAlias="parter" row="11" seat="6"/>
          <rect className="place" x="1577" y="565" width="16" height="16" rx="6"
                id="parter_11_5" sectorAlias="parter" row="11" seat="5"/>
          <rect className="place" x="346" y="980" width="16" height="16" rx="6"
                id="beltaj_left_2_29" sectorAlias="beltaj_left" row="2" seat="29"/>
          <rect className="place" x="318" y="759" width="16" height="16" rx="6"
                id="beltaj_left_3_19" sectorAlias="beltaj_left" row="3" seat="19"/>
          <rect className="place" x="374" y="1146" width="16" height="16" rx="6"
                id="beltaj_left_1_39" sectorAlias="beltaj_left" row="1" seat="39"/>
          <rect className="place" x="1494" y="565" width="16" height="16" rx="6"
                id="parter_11_8" sectorAlias="parter" row="11" seat="8"/>
          <rect className="place" x="318" y="382" width="16" height="16" rx="6"
                id="beltaj_left_3_14" sectorAlias="beltaj_left" row="3" seat="14"/>
          <rect className="place" x="346" y="842" width="16" height="16" rx="6"
                id="beltaj_left_2_24" sectorAlias="beltaj_left" row="2" seat="24"/>
          <rect className="place" x="374" y="1008" width="16" height="16" rx="6"
                id="beltaj_left_1_34" sectorAlias="beltaj_left" row="1" seat="34"/>
          <rect className="place" x="1522" y="565" width="16" height="16" rx="6"
                id="parter_11_7" sectorAlias="parter" row="11" seat="7"/>
          <rect className="place" x="346" y="814" width="16" height="16" rx="6"
                id="beltaj_left_2_23" sectorAlias="beltaj_left" row="2" seat="23"/>
          <rect className="place" x="318" y="354" width="16" height="16" rx="6"
                id="beltaj_left_3_13" sectorAlias="beltaj_left" row="3" seat="13"/>
          <rect className="place" x="374" y="981" width="16" height="16" rx="6"
                id="beltaj_left_1_33" sectorAlias="beltaj_left" row="1" seat="33"/>
          <rect className="place" x="346" y="898" width="16" height="16" rx="6"
                id="beltaj_left_2_26" sectorAlias="beltaj_left" row="2" seat="26"/>
          <rect className="place" x="318" y="676" width="16" height="16" rx="6"
                id="beltaj_left_3_16" sectorAlias="beltaj_left" row="3" seat="16"/>
          <rect className="place" x="374" y="1063" width="16" height="16" rx="6"
                id="beltaj_left_1_36" sectorAlias="beltaj_left" row="1" seat="36"/>
          <rect className="place" x="1466" y="565" width="16" height="16" rx="6"
                id="parter_11_9" sectorAlias="parter" row="11" seat="9"/>
          <rect className="place" x="346" y="870" width="16" height="16" rx="6"
                id="beltaj_left_2_25" sectorAlias="beltaj_left" row="2" seat="25"/>
          <rect className="place" x="318" y="648" width="16" height="16" rx="6"
                id="beltaj_left_3_15" sectorAlias="beltaj_left" row="3" seat="15"/>
          <rect className="place" x="374" y="1036" width="16" height="16" rx="6"
                id="beltaj_left_1_35" sectorAlias="beltaj_left" row="1" seat="35"/>
          <rect className="place" x="796" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_23" sectorAlias="amfiteatr" row="7" seat="23"/>
          <rect className="place" x="1237" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_13" sectorAlias="amfiteatr" row="8" seat="13"/>
          <rect className="place" x="346" y="1036" width="16" height="16" rx="6"
                id="beltaj_left_2_31" sectorAlias="beltaj_left" row="2" seat="31"/>
          <rect className="place" x="318" y="814" width="16" height="16" rx="6"
                id="beltaj_left_3_21" sectorAlias="beltaj_left" row="3" seat="21"/>
          <rect className="place" x="290" y="299" width="16" height="16" rx="6"
                id="beltaj_left_4_11" sectorAlias="beltaj_left" row="4" seat="11"/>
          <rect className="place" x="374" y="1202" width="16" height="16" rx="6"
                id="beltaj_left_1_41" sectorAlias="beltaj_left" row="1" seat="41"/>
          <rect className="place" x="768" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_24" sectorAlias="amfiteatr" row="7" seat="24"/>
          <rect className="place" x="1210" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_14" sectorAlias="amfiteatr" row="8" seat="14"/>
          <rect className="place" x="346" y="1008" width="16" height="16" rx="6"
                id="beltaj_left_2_30" sectorAlias="beltaj_left" row="2" seat="30"/>
          <rect className="place" x="318" y="787" width="16" height="16" rx="6"
                id="beltaj_left_3_20" sectorAlias="beltaj_left" row="3" seat="20"/>
          <rect className="place" x="290" y="271" width="16" height="16" rx="6"
                id="beltaj_left_4_10" sectorAlias="beltaj_left" row="4" seat="10"/>
          <rect className="place" x="374" y="1174" width="16" height="16" rx="6"
                id="beltaj_left_1_40" sectorAlias="beltaj_left" row="1" seat="40"/>
          <rect className="place" x="1182" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_15" sectorAlias="amfiteatr" row="8" seat="15"/>
          <rect className="place" x="318" y="870" width="16" height="16" rx="6"
                id="beltaj_left_3_23" sectorAlias="beltaj_left" row="3" seat="23"/>
          <rect className="place" x="410" y="1284" width="16" height="16" rx="6"
                id="beltaj_left_1_43" sectorAlias="beltaj_left" row="1" seat="43"/>
          <rect className="place" x="372" y="1273" width="16" height="16" rx="6"
                id="beltaj_left_2_33" sectorAlias="beltaj_left" row="2" seat="33"/>
          <rect className="place" x="318" y="842" width="16" height="16" rx="6"
                id="beltaj_left_3_22" sectorAlias="beltaj_left" row="3" seat="22"/>
          <rect className="place" x="290" y="327" width="16" height="16" rx="6"
                id="beltaj_left_4_12" sectorAlias="beltaj_left" row="4" seat="12"/>
          <rect className="place" x="396" y="1260" width="16" height="16" rx="6"
                id="beltaj_left_1_42" sectorAlias="beltaj_left" row="1" seat="42"/>
          <rect className="place" x="346" y="1063" width="16" height="16" rx="6"
                id="beltaj_left_2_32" sectorAlias="beltaj_left" row="2" seat="32"/>
          <rect className="place" x="1154" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_16" sectorAlias="amfiteatr" row="8" seat="16"/>
          <rect className="place" x="879" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_20" sectorAlias="amfiteatr" row="7" seat="20"/>
          <rect className="place" x="1380" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_10" sectorAlias="amfiteatr" row="8" seat="10"/>
          <rect className="place" x="852" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_21" sectorAlias="amfiteatr" row="7" seat="21"/>
          <rect className="place" x="1352" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_11" sectorAlias="amfiteatr" row="8" seat="11"/>
          <rect className="place" x="824" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_22" sectorAlias="amfiteatr" row="7" seat="22"/>
          <rect className="place" x="1324" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_12" sectorAlias="amfiteatr" row="8" seat="12"/>
          <rect className="place" x="1073" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_17" sectorAlias="amfiteatr" row="8" seat="17"/>
          <rect className="place" x="1045" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_18" sectorAlias="amfiteatr" row="8" seat="18"/>
          <rect className="place" x="1017" y="1259" width="16" height="16" rx="6"
                id="amfiteatr_8_19" sectorAlias="amfiteatr" row="8" seat="19"/>
          <rect className="place" x="491" y="1429" width="16" height="16" rx="6"
                id="beltaj_left_1_49" sectorAlias="beltaj_left" row="1" seat="49"/>
          <rect className="place" x="453" y="1419" width="16" height="16" rx="6"
                id="beltaj_left_2_39" sectorAlias="beltaj_left" row="2" seat="39"/>
          <rect className="place" x="375" y="1335" width="16" height="16" rx="6"
                id="beltaj_left_3_29" sectorAlias="beltaj_left" row="3" seat="29"/>
          <rect className="place" x="477" y="1405" width="16" height="16" rx="6"
                id="beltaj_left_1_48" sectorAlias="beltaj_left" row="1" seat="48"/>
          <rect className="place" x="440" y="1394" width="16" height="16" rx="6"
                id="beltaj_left_2_38" sectorAlias="beltaj_left" row="2" seat="38"/>
          <rect className="place" x="361" y="1311" width="16" height="16" rx="6"
                id="beltaj_left_3_28" sectorAlias="beltaj_left" row="3" seat="28"/>
          <rect className="place" x="318" y="926" width="16" height="16" rx="6"
                id="beltaj_left_3_25" sectorAlias="beltaj_left" row="3" seat="25"/>
          <rect className="place" x="437" y="1332" width="16" height="16" rx="6"
                id="beltaj_left_1_45" sectorAlias="beltaj_left" row="1" seat="45"/>
          <rect className="place" x="399" y="1322" width="16" height="16" rx="6"
                id="beltaj_left_2_35" sectorAlias="beltaj_left" row="2" seat="35"/>
          <rect className="place" x="318" y="898" width="16" height="16" rx="6"
                id="beltaj_left_3_24" sectorAlias="beltaj_left" row="3" seat="24"/>
          <rect className="place" x="423" y="1308" width="16" height="16" rx="6"
                id="beltaj_left_1_44" sectorAlias="beltaj_left" row="1" seat="44"/>
          <rect className="place" x="385" y="1297" width="16" height="16" rx="6"
                id="beltaj_left_2_34" sectorAlias="beltaj_left" row="2" seat="34"/>
          <rect className="place" x="464" y="1381" width="16" height="16" rx="6"
                id="beltaj_left_1_47" sectorAlias="beltaj_left" row="1" seat="47"/>
          <rect className="place" x="426" y="1370" width="16" height="16" rx="6"
                id="beltaj_left_2_37" sectorAlias="beltaj_left" row="2" seat="37"/>
          <rect className="place" x="348" y="1287" width="16" height="16" rx="6"
                id="beltaj_left_3_27" sectorAlias="beltaj_left" row="3" seat="27"/>
          <rect className="place" x="450" y="1356" width="16" height="16" rx="6"
                id="beltaj_left_1_46" sectorAlias="beltaj_left" row="1" seat="46"/>
          <rect className="place" x="413" y="1346" width="16" height="16" rx="6"
                id="beltaj_left_2_36" sectorAlias="beltaj_left" row="2" seat="36"/>
          <rect className="place" x="318" y="953" width="16" height="16" rx="6"
                id="beltaj_left_3_26" sectorAlias="beltaj_left" row="3" seat="26"/>
          <rect className="place" x="824" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_22" sectorAlias="amfiteatr" row="6" seat="22"/>
          <rect className="place" x="1324" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_12" sectorAlias="amfiteatr" row="7" seat="12"/>
          <rect className="place" x="532" y="1502" width="16" height="16" rx="6"
                id="beltaj_left_1_52" sectorAlias="beltaj_left" row="1" seat="52"/>
          <rect className="place" x="494" y="1491" width="16" height="16" rx="6"
                id="beltaj_left_2_42" sectorAlias="beltaj_left" row="2" seat="42"/>
          <rect className="place" x="416" y="1408" width="16" height="16" rx="6"
                id="beltaj_left_3_32" sectorAlias="beltaj_left" row="3" seat="32"/>
          <rect className="place" x="1073" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_13" sectorAlias="amfiteatr" row="7" seat="13"/>
          <rect className="place" x="796" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_23" sectorAlias="amfiteatr" row="6" seat="23"/>
          <rect className="place" x="518" y="1478" width="16" height="16" rx="6"
                id="beltaj_left_1_51" sectorAlias="beltaj_left" row="1" seat="51"/>
          <rect className="place" x="480" y="1467" width="16" height="16" rx="6"
                id="beltaj_left_2_41" sectorAlias="beltaj_left" row="2" seat="41"/>
          <rect className="place" x="402" y="1384" width="16" height="16" rx="6"
                id="beltaj_left_3_31" sectorAlias="beltaj_left" row="3" seat="31"/>
          <rect className="place" x="1045" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_14" sectorAlias="amfiteatr" row="7" seat="14"/>
          <rect className="place" x="768" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_24" sectorAlias="amfiteatr" row="6" seat="24"/>
          <rect className="place" x="521" y="1540" width="16" height="16" rx="6"
                id="beltaj_left_2_44" sectorAlias="beltaj_left" row="2" seat="44"/>
          <rect className="place" x="442" y="1456" width="16" height="16" rx="6"
                id="beltaj_left_3_34" sectorAlias="beltaj_left" row="3" seat="34"/>
          <rect className="place" x="1017" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_15" sectorAlias="amfiteatr" row="7" seat="15"/>
          <rect className="place" x="507" y="1515" width="16" height="16" rx="6"
                id="beltaj_left_2_43" sectorAlias="beltaj_left" row="2" seat="43"/>
          <rect className="place" x="429" y="1432" width="16" height="16" rx="6"
                id="beltaj_left_3_33" sectorAlias="beltaj_left" row="3" seat="33"/>
          <rect className="place" x="879" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_20" sectorAlias="amfiteatr" row="6" seat="20"/>
          <rect className="place" x="1380" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_10" sectorAlias="amfiteatr" row="7" seat="10"/>
          <rect className="place" x="504" y="1453" width="16" height="16" rx="6"
                id="beltaj_left_1_50" sectorAlias="beltaj_left" row="1" seat="50"/>
          <rect className="place" x="467" y="1443" width="16" height="16" rx="6"
                id="beltaj_left_2_40" sectorAlias="beltaj_left" row="2" seat="40"/>
          <rect className="place" x="388" y="1359" width="16" height="16" rx="6"
                id="beltaj_left_3_30" sectorAlias="beltaj_left" row="3" seat="30"/>
          <rect className="place" x="852" y="1187" width="16" height="16" rx="6"
                id="amfiteatr_6_21" sectorAlias="amfiteatr" row="6" seat="21"/>
          <rect className="place" x="1352" y="1222" width="16" height="16" rx="6"
                id="amfiteatr_7_11" sectorAlias="amfiteatr" row="7" seat="11"/>
          <rect className="place" x="989" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_16" sectorAlias="amfiteatr" row="7" seat="16"/>
          <rect className="place" x="962" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_17" sectorAlias="amfiteatr" row="7" seat="17"/>
          <rect className="place" x="934" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_18" sectorAlias="amfiteatr" row="7" seat="18"/>
          <rect className="place" x="906" y="1223" width="16" height="16" rx="6"
                id="amfiteatr_7_19" sectorAlias="amfiteatr" row="7" seat="19"/>
          <rect className="place" x="535" y="1564" width="16" height="16" rx="6"
                id="beltaj_left_2_45" sectorAlias="beltaj_left" row="2" seat="45"/>

        </g>
      </svg>

    </ReactSVGPanZoom>
  )
}

export default SVGZoom;