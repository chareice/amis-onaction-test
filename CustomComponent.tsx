import * as React from "react";
import { Renderer } from "amis";
import { RendererProps } from "amis/lib/factory";

@Renderer({
  test: /^custom-component$/,
})
class CustomComponent extends React.Component<RendererProps> {
  render() {
    const { render, body, title } = this.props
    return (
      <>
        <div>{title}</div>
        {render('body', body, {})}
      </>
    );
  }
}