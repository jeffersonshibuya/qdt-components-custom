import {
  axis, tooltip, line, point, range,
} from './components';
import { itooltip, pan } from './interactions';
import theme from '../../../../styles';

const setting = {
  scales: {
    y: { data: { field: 'qMeasureInfo/0' }, expand: 0.1, invert: true },
    x: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: 0.2 },
  },
  components: [
    { type: 'grid-line', y: 'y' },
    axis(),
    axis({ scale: 'y' }),
    tooltip,
    line({ stroke: theme.primary }),
    point({ displayOrder: 2, fill: theme.primary, stroke: theme.primaryLight }),
    range(),
  ],
  interactions: [itooltip, pan()],
};

export default setting;
