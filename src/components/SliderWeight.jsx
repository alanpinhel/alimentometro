import 'rc-slider/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

function SliderWeight({ handleFormat, handleChange }) {
  const handle = ({ value, dragging, index, ...restProps }) => (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={handleFormat(value)}
      visible
      placement="topRight"
      key={index}
      overlayStyle={{ touchAction: 'none' }}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );

  handle.propTypes = {
    value: PropTypes.string.isRequired,
    dragging: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };

  return <Slider onChange={handleChange} min={0} max={5000} step={100} handle={handle} />;
}

SliderWeight.propTypes = {
  handleFormat: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SliderWeight;
