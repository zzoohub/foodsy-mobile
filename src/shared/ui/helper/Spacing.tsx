import { View } from "../extended/View";

interface Props {
  height: number;
}
export const Spacing = ({ height }: Props) => {
  return <View style={{ height }} />;
};
