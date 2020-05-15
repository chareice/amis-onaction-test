import * as React from "react";
import * as ReactDOM from "react-dom";

import "amis/lib/themes/default.css";
import { render as renderAmis } from "amis";
import "./CustomComponent";

function AmisRootRenderer() {
  return <>
    {
      renderAmis({
        type: "page",
        title: "默认组件",
        body: {
          label: "可以弹窗",
          type: "button",
          level: "dark",
          actionType: "dialog",
          dialog: {
            title: "弹框",
            body: "这是个简单的弹框。",
          },
        }
      })
    }

    {
      renderAmis({
        type: "custom-component",
        title: "自定义组件",
        body: {
          label: "弹不出来",
          type: "button",
          level: "dark",
          actionType: "dialog",
          dialog: {
            title: "弹框",
            body: "这是个简单的弹框。",
          },
        }
      })
    }
  </>
}

ReactDOM.render(
  <AmisRootRenderer />,
  document.getElementById("app")
);