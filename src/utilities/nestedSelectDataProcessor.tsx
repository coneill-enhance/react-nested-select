import { TreeItem, TreeItemIndex } from "react-complex-tree";

export interface INestedSelectRawData{
  root: Record<any,any>
}

const formatData = (
  rawData: INestedSelectRawData,
  formattedData: { items: Record<TreeItemIndex, TreeItem<any>> } = { items: {} }
): { items: Record<TreeItemIndex, TreeItem<any>> } => {
  for (const [key, value] of Object.entries(rawData)) {
    formattedData.items[key] = {
      index: key,
      canMove: false,
      hasChildren: value !== null,
      children: value !== null ? Object.keys(value as object) : undefined,
      data: key,
      canRename: false,
    };

    if (value !== null) {
      formatData(value, formattedData);
    }
  }
  return formattedData;
};

export default formatData;
