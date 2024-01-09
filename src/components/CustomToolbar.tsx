import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiMaximize } from "react-icons/fi";

const CustomToolbar = ({handleZoomIn, handleZoomOut, handleReset}: {
  handleZoomIn: () => void,
  handleZoomOut:() => void,
  handleReset: () => void
}) => (
  <div className='toolbarWrapper'>
    <div className='toolbarBottom'>
      <AiOutlinePlus className='tool' onClick={handleZoomIn}/>
      <AiOutlineMinus className='tool' onClick={handleZoomOut}/>
      <FiMaximize className='tool' onClick={handleReset}/>
    </div>
  </div>
);

export default CustomToolbar;