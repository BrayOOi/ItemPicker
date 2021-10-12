import { useSelector } from 'react-redux';
import { RootState } from '../store';
import COLORS from '../config/colors';

const useTheme = () => {
  const { theme } = useSelector((state: RootState) => state.system);

  if (theme) {
    return COLORS[theme];
  } else {
    return COLORS.light;
  }
};

export default useTheme;
