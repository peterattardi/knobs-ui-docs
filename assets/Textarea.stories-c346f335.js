var a=Object.defineProperty;var e=(n,r)=>a(n,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-bbb324fa.js";import{d as t}from"./index-188fef8c.js";import"./index-75ce2bcb.js";import"./es.object.get-own-property-descriptor-e7155286.js";const m={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { Textarea } from "@knobs-dev/ui-components/src";
import { useState, BaseSyntheticEvent } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Textarea",
  component: Textarea
} as ComponentMeta<typeof Textarea>;

export const Default = () => {
  return <Textarea placeholder="Insert your name" />;
};

export const Variants = () => {
  return <Textarea variant="secondary" placeholder="Insert your bio" />;
};
`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:1,line:17},startBody:{col:23,line:15},endBody:{col:1,line:17}},variants:{startLoc:{col:24,line:19},endLoc:{col:1,line:21},startBody:{col:24,line:19},endBody:{col:1,line:21}}}}},title:"Components/Textarea",component:t},d=e(()=>o(t,{placeholder:"Insert your name"}),"Default"),u=e(()=>o(t,{variant:"secondary",placeholder:"Insert your bio"}),"Variants"),y=["Default","Variants"];export{d as Default,u as Variants,y as __namedExportsOrder,m as default};
//# sourceMappingURL=Textarea.stories-c346f335.js.map
