const darkest = require('../darkest.js');
const colorGlobals = require('../colorGlobals.js');
const large = require('../large.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const dimensionGlobals = require('../dimensionGlobals.js');
exports["icon-color"] = darkest["colorSemantics"]["negative-color-text-small"];
exports["background-color"] = darkest["background-color-transparent"];
exports["border-color"] = darkest["colorSemantics"]["negative-color-text-small"];
exports["text-color"] = darkest["colorSemantics"]["negative-color-text-small"];
exports["icon-color-hover"] = darkest["gray-50"];
exports["background-color-hover"] = darkest["colorSemantics"]["negative-color-text-small"];
exports["border-color-hover"] = darkest["colorSemantics"]["negative-color-text-small"];
exports["text-color-hover"] = darkest["gray-50"];
exports["icon-color-down"] = darkest["gray-50"];
exports["background-color-down"] = darkest["red-700"];
exports["border-color-down"] = darkest["red-700"];
exports["text-color-down"] = darkest["gray-50"];
exports["icon-color-key-focus"] = colorGlobals["static-white"];
exports["border-size-increase-key-focus"] = "1px";
exports["background-color-key-focus"] = darkest["colorSemantics"]["background-color-key-focus"];
exports["border-color-key-focus"] = darkest["colorSemantics"]["background-color-key-focus"];
exports["text-color-key-focus"] = colorGlobals["static-white"];
exports["icon-color-disabled"] = darkest["icon-color-disabled"];
exports["background-color-disabled"] = darkest["gray-200"];
exports["border-color-disabled"] = darkest["gray-200"];
exports["text-color-disabled"] = darkest["gray-500"];
exports["height"] = large["single-line-height"];
exports["padding-x"] = large["size-200"];
exports["text-padding-x"] = large["size-200"];
exports["icon-padding-left"] = large["size-175"];
exports["icon-padding-right"] = large["size-100"];
exports["border-radius"] = large["border-radius-large"];
exports["border-size"] = staticAliases["border-size-thick"];
exports["text-font-weight"] = fontGlobals["weight-bold"];
exports["text-gap"] = large["size-100"];
exports["text-size"] = large["pill-button-text-size"];
exports["text-baseline"] = large["pill-button-text-baseline"];
exports["min-width"] = "90px";
exports["touch-hit-x"] = dimensionGlobals["size-50"];
exports["touch-hit-y"] = dimensionGlobals["size-50"];
exports["cursor-hit-x"] = dimensionGlobals["size-250"];
