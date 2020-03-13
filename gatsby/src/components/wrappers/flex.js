import React from "react"

import { cleanObject } from "./../../utils"
const flexOptions = {
  flexDirection: {
    row: "row",
    rowReverse: "row-reverse",
    column: "column",
    columnReverse: "column-reverse",
  },
  flexWrap: {
    nowrap: "no-wrap",
    wrap: "wrap",
    wrapReverse: "wrap-reverse",
  },
  justifyContent: {
    justifyFlexStart: "flex-start",
    justfyFlexEnd: "flex-end",
    justifyCenter: "center",
    justifySpaceBetween: "space-between",
    justifySpaceAround: "space-around",
    justifySpaceEvenly: "space-evenly",
  },
  alignItems: {
    alignStretch: "stretch",
    alignFlexStart: "flex-start",
    alignFlexEnd: "flex-end",
    alignCenter: "center",
    alignBaseline: "baseline",
  },
}

const parseFlexValue = value => {
  const type = typeof value
  switch (type) {
    case "boolean":
      return 1
    case "number":
      return value
    default:
      return undefined
  }
}
const getFlexOption = (key, flexProps) => {
  const names = Object.keys(flexOptions[key])
  return names.reduce((acc, name) => {
    if (flexProps[name]) {
      return flexOptions[key][name]
    }
    return acc
  }, undefined)
}

const getFlexStyle = flexProps => {
  const { flex, flexGrow, flexShrink } = flexProps
  const flexDirection = getFlexOption("flexDirection", flexProps),
    flexWrap = getFlexOption("flexWrap", flexProps),
    alignItems = getFlexOption("alignItems", flexProps),
    justifyContent = getFlexOption("justifyContent", flexProps)
  const flexStyle = {
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    flex: parseFlexValue(flex),
    flexGrow: parseFlexValue(flexGrow),
    flexShrink: parseFlexValue(flexShrink),
  }
  return cleanObject(flexStyle)
}

const Flex = ({ children, style = {}, className, ...flexProps }) => {
  const flexStyle = getFlexStyle(flexProps)

  return (
    <div
      className={className}
      style={{ display: "flex", ...flexStyle, ...style }}
    >
      {children}
    </div>
  )
}

export default Flex
