import 'rc-slider/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import injectSheet from 'react-jss';

function SliderWeight({ handleFormat, handleChange, classes }) {
  const handle = ({ value, dragging, index, ...restProps }) => (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={handleFormat(value)}
      visible
      placement="top"
      key={index}
      overlayStyle={{
        userSelect: 'none',
        touchCallout: 'none',
        touchAction: 'none',
      }}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );

  handle.propTypes = {
    value: PropTypes.string.isRequired,
    dragging: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <Slider
      onChange={handleChange}
      min={0}
      max={5000}
      step={100}
      handle={handle}
      className={classes.slider}
    />
  );
}

SliderWeight.propTypes = {
  handleFormat: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    slider: PropTypes.string,
  }).isRequired,
};

export default injectSheet({
  slider: {
    '& .rc-slider-track': {
      backgroundColor: '#007aff',
    },

    '& .rc-slider-handle': {
      width: '30px',
      height: '30px',
      marginTop: '12px',
      marginLeft: '-15px',
      backgroundColor: '#007aff',
      border: 'none',
      borderRadius: '50% 0 50% 50%',
      transform: 'rotate(-45deg)',
      userSelect: 'none',
      touchCallout: 'none',

      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
})(SliderWeight);
