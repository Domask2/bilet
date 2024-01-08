import './App.css'
import { useState } from "react";
// @ts-ignore
import { INITIAL_VALUE, ReactSVGPanZoom, zoomOnViewerCenter, reset } from "react-svg-pan-zoom";
import styled from "styled-components";
import { FiMaximize } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Main = styled("div")`
  flex: 1 1 auto;
  position: relative;
  margin: 0 auto;
`;
const ToolbarWrapper = styled("div")`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ToolbarBottom = styled("div")`
  flex: 0 0 auto;
  border-radius: 2px;
  background: white;
`;

const ToolCss = `
  padding: 4px;
  height: 30px;
  width: 30px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: block;
`;

const ZoomInTool = styled(AiOutlinePlus)`
  ${ToolCss};
  color: gray;
`;
const ZoomOutTool = styled(AiOutlineMinus)`
  ${ToolCss};
  color: gray;
`;
const MaximizeTool = styled(FiMaximize)`
  ${ToolCss};
  color: gray;
`;

const App = () => {
  const [value, setValue] = useState<any>({
    "a": 0.44230096437967265,
    "c": 0,
    "e": -16.816193566306655,
    "b": 0,
    "d": 0.44230096437967265,
    "f": 80.03007505941673,
    "version": 3,
    "mode": "idle",
    "focus": false,
    "pinchPointDistance": null,
    "prePinchMode": null,
    "viewerWidth": 1000,
    "viewerHeight": 800,
    "SVGMinX": 167,
    "SVGMinY": -152,
    "SVGWidth": 2065,
    "SVGHeight": 2263,
    "scaleFactorMin": -10,
    "scaleFactorMax": 4,
    "startX": null,
    "startY": null,
    "endX": null,
    "endY": null,
    "miniatureOpen": true,
    "lastAction": null
  });
  const [tool, setTool] = useState("auto");
  const handleTool = (tool: never) => setTool(tool);
  const handleValue = (nextValue: never) => setValue(nextValue);
  const handleZoomIn = () => setValue(zoomOnViewerCenter(value, 1.1));
  const handleZoomOut = () => setValue(zoomOnViewerCenter(value, 0.9));
  const handleReset = () => setValue(reset(value));

  const CustomToolbar = ({handleZoomIn, handleZoomOut, handleReset}: any) => (
    <ToolbarWrapper>
      <ToolbarBottom>
        <ZoomInTool onClick={handleZoomIn}/>
        <ZoomOutTool onClick={handleZoomOut}/>
        <MaximizeTool onClick={handleReset}/>
      </ToolbarBottom>
    </ToolbarWrapper>
  );

  return (
    <>
      <Wrapper>
        <Main>

          <ReactSVGPanZoom
            customToolbar={() => (
              <CustomToolbar
                setTool={setTool}
                tool={tool}
                handleZoomIn={handleZoomIn}
                handleZoomOut={handleZoomOut}
                handleReset={handleReset}
              />
            )}
            style={{margin: '0 auto'}}
            scaleFactorMax={4}
            scaleFactorMin={-10}
            disableDoubleClickZoomWithToolAuto={true}
            detectAutoPan={false}
            width={1000}
            height={800}
            // @ts-ignore
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
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">ПАРТЕР</text>
                </g>
                <g transform="translate(1199, -60) rotate(0)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">ОРКЕСТРОВАЯ
                    ЯМА
                  </text>
                </g>
                <g transform="translate(1199, 972) rotate(0)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">АМФИТЕАТР
                  </text>
                </g>
                <g transform="translate(412, 528) rotate(-90)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">БЕЛЬЭТАЖ ЛЕВАЯ
                    СТОРОНА
                  </text>
                </g>
                <g transform="translate(1976, 528) rotate(90)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">БЕЛЬЭТАЖ
                    ПРАВАЯ СТОРОНА
                  </text>
                </g>
                <g transform="translate(2164, 608) rotate(90)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">ПЕРВЫЙ ЯРУС
                    ПРАВАЯ СТОРОНА
                  </text>
                </g>
                <g transform="translate(236, 608) rotate(-90)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">ПЕРВЫЙ ЯРУС
                    ЛЕВАЯ СТОРОНА
                  </text>
                </g>
                <g transform="translate(1199, 1644) rotate(0)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">БЕЛЬЭТАЖ
                    СЕРЕДИНА
                  </text>
                </g>
                <g transform="translate(1196, 1988) rotate(0)">
                  <text text-anchor="middle" alignment-baseline="middle" x="0" y="0" font-size="16">ПЕРВЫЙ ЯРУС
                    СЕРЕДИНА
                  </text>
                </g>

                <g id="stage" transform="translate(1199, -121) rotate(0)">
                  <rect fill="#e2e6ea" fill-rule="nonzero" x="-629" y="-31" width="1258" height="62"/>
                  <text id="Сцена" font-size="14" font-weight="bold">
                    <tspan x="0" y="0" text-anchor="middle">СЦЕНА</tspan>
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

            </svg>

          </ReactSVGPanZoom>

        </Main>
      </Wrapper>
    </>
  )
}

export default App
