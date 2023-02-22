var c=Object.defineProperty;var a=(o,e)=>c(o,"name",{value:e,configurable:!0});import{a as l,j as t}from"./jsx-runtime-bbb324fa.js";import{r as u}from"./index-75ce2bcb.js";import{T as s,c as n}from"./index-188fef8c.js";import"./es.object.get-own-property-descriptor-e7155286.js";const d={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { Tab, Tabs } from "@knobs-dev/ui-components/src";
import { IconBell } from "@knobs-dev/ui-icons/src";
import { ReactNode, useState } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

export const Component: Story<typeof Tabs> = () => {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(value) => setValue(value)}>
      <Tab value={0}>Home</Tab>
      <Tab value={1}>About</Tab>
      <Tab value={2}>Contact us</Tab>
    </Tabs>
  );
};
`,locationsMap:{component:{startLoc:{col:45,line:16},endLoc:{col:1,line:26},startBody:{col:45,line:16},endBody:{col:1,line:26}}}}},title:"Components/Tabs",component:s},v=a(()=>{const[o,e]=u.useState(0);return l(s,{value:o,onChange:r=>e(r),children:[t(n,{value:0,children:"Home"}),t(n,{value:1,children:"About"}),t(n,{value:2,children:"Contact us"})]})},"Component"),f=["Component"];export{v as Component,f as __namedExportsOrder,d as default};
//# sourceMappingURL=Tabs.stories-b300b438.js.map
