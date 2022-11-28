import React from "react";
import {
  ControlledTreeEnvironment,
  Tree
} from "react-complex-tree";
import { renderers as bpRenderers } from "react-complex-tree-blueprintjs-renderers";

export interface INestedSelect {

}

const data = {
    "list": {
        "items": {
            "root": {
                "index": "root",
                "canMove": true,
                "hasChildren": true,
                "children": [
                    "container"
                ],
                "data": "root",
                "canRename": true
            },
            "container": {
                "index": "container",
                "canMove": true,
                "hasChildren": true,
                "children": [
                    "item0",
                    "item1",
                    "item2",
                    "item3",
                    "item4",
                    "item5"
                ],
                "data": "container",
                "canRename": true
            },
            "item0": {
                "index": "item0",
                "canMove": true,
                "hasChildren": false,
                "data": "item0",
                "canRename": true
            },
            "item1": {
                "index": "item1",
                "canMove": true,
                "hasChildren": false,
                "data": "item1",
                "canRename": true
            },
            "item2": {
                "index": "item2",
                "canMove": true,
                "hasChildren": false,
                "data": "item2",
                "canRename": true
            },
            "item3": {
                "index": "item3",
                "canMove": true,
                "hasChildren": true,
                "children": [
                    "inner0",
                    "inner1",
                    "inner2",
                    "inner3"
                ],
                "data": "item3",
                "canRename": true
            },
            "inner0": {
                "index": "inner0",
                "canMove": true,
                "hasChildren": false,
                "data": "inner0",
                "canRename": true
            },
            "inner1": {
                "index": "inner1",
                "canMove": true,
                "hasChildren": false,
                "data": "inner1",
                "canRename": true
            },
            "inner2": {
                "index": "inner2",
                "canMove": true,
                "hasChildren": false,
                "data": "inner2",
                "canRename": true
            },
            "inner3": {
                "index": "inner3",
                "canMove": true,
                "hasChildren": false,
                "data": "inner3",
                "canRename": true
            },
            "item4": {
                "index": "item4",
                "canMove": true,
                "hasChildren": false,
                "data": "item4",
                "canRename": true
            },
            "item5": {
                "index": "item5",
                "canMove": true,
                "hasChildren": false,
                "data": "item5",
                "canRename": true
            }
        }
    }
}

const NestedSelect = () => {
    return (
      <ControlledTreeEnvironment
        {...bpRenderers}
        getItemTitle={(item) => item.data}
        items={data.list.items}
        viewState={{
          "tree-1": {
          },
        }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
      </ControlledTreeEnvironment>
    );
}

export default NestedSelect;