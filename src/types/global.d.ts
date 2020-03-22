type FlexAlignmentValues =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right';

type FlexDistributedValues =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
declare namespace CSS {
  type JustifyConent = FlexAlignmentValues | FlexDistributedValues;
}
