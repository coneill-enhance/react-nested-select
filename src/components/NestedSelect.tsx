// import "react-complex-tree/lib/style.css";
import "./NestedSelect.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import React, { SetStateAction } from "react";
import {
  ControlledTreeEnvironment,
  Tree,
  TreeItem,
  TreeItemIndex,
} from "react-complex-tree";
import { renderers as bpRenderers } from "react-complex-tree-blueprintjs-renderers";

export interface INestedSelect {
  treeData: { items: Record<TreeItemIndex, TreeItem<any>> };
  onSelected: (arg0: any) => void;
}

export const NestedSelect = (list: INestedSelect) => {
  const treeNodes = list.treeData;
  const onSelectedCallback = list.onSelected;
  const [focusedItem, setFocusedItem] = React.useState();
  const [expandedItems, setExpandedItems] = React.useState([]);
  const [selectedItems, setSelectedItems] = React.useState([]);
  return (
    <div className="nested-select">
      <ControlledTreeEnvironment
        {...bpRenderers}
        getItemTitle={(item) => item.data}
        items={treeNodes.items}
        onFocusItem={(item) =>
          setFocusedItem(item.index as unknown as SetStateAction<undefined>)
        }
        onExpandItem={(item) =>
          setExpandedItems([...expandedItems, item.index] as never)
        }
        onCollapseItem={(item) =>
          setExpandedItems(
            expandedItems.filter(
              (expandedItemIndex) => expandedItemIndex !== item.index
            )
          )
        }
        onSelectItems={(items) => {
          setSelectedItems(items as SetStateAction<never[]>);
          onSelectedCallback(items);
        }}
        viewState={{
          "tree-1": {
            focusedItem,
            expandedItems,
            selectedItems,
          },
        }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
      </ControlledTreeEnvironment>
    </div>
  );
};
