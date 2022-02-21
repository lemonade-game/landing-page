import { Children, isValidElement } from "react";

export default function Paragraph({ children }) {
  function hasChildren(element) {
    return isValidElement(element) && Boolean(element.props.children);
  }

  function childToString(child) {
    if (
      typeof child === "undefined" ||
      child === null ||
      typeof child === "boolean"
    ) {
      return "";
    }

    if (JSON.stringify(child) === "{}") {
      return "";
    }

    return child.toString();
  }

  function onlyText(children) {
    if (!(children instanceof Array) && !isValidElement(children)) {
      return childToString(children);
    }

    return Children.toArray(children).reduce((text, child) => {
      let newText = "";

      if (isValidElement(child) && hasChildren(child)) {
        newText = onlyText(child.props.children);
      } else if (isValidElement(child) && !hasChildren(child)) {
        newText = "";
      } else {
        newText = childToString(child);
      }

      return text.concat(newText);
    }, "");
  }

  const __html = onlyText(children)
    .replace(/\'/g, "&#39;")
    .replace(/\"/g, "&quot;");

  console.dir(__html);
  return (
    <p
      dangerouslySetInnerHTML={{
        __html,
      }}></p>
  );
}
