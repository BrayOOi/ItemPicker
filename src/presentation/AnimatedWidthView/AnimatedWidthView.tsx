import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

interface AnimatedHeightViewProps {
  containerStyle?: Array<any>;
  afterWidth: number;
  children: React.ReactNode;
  onToggle: boolean;
}

const AnimatedWidthView: React.FC<AnimatedHeightViewProps> = ({
  containerStyle = [],
  afterWidth,
  children,
  onToggle,
}) => {
  const [width, setWidth] = useState(new Animated.Value(1));

  useEffect(() => {
    if (onToggle) {
      toggleAnimation();
    } else {
      untoggleAnimation();
    }
  }, [onToggle]);

  const toggleAnimation = () => Animated.timing(width, {
    toValue: afterWidth,
    duration: 50,
    useNativeDriver: true,
  }).start();

  const untoggleAnimation = () => Animated.timing(width, {
    toValue: 1,
    duration: 50,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={[
        ...containerStyle,
        {
          transform: [{
            scaleX: width,
          }],
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedWidthView;
