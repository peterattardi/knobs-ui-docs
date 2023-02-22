var r=Object.defineProperty;var e=(o,t)=>r(o,"name",{value:t,configurable:!0});import{a as i,j as n}from"./jsx-runtime-bbb324fa.js";import{r as c}from"./index-75ce2bcb.js";import{F as s,b as a}from"./index-188fef8c.js";import"./es.object.get-own-property-descriptor-e7155286.js";const F={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { FloatingTab, FloatingTabs } from "@knobs-dev/ui-components/src";
import { useState } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Floating Tabs",
  component: FloatingTabs
} as ComponentMeta<typeof FloatingTabs>;

export const Component: Story<typeof FloatingTabs> = () => {
  const [value, setValue] = useState(0);

  return (
    <FloatingTabs value={value} onChange={(value) => setValue(value)}>
      <FloatingTab value={0}>Home</FloatingTab>
      <FloatingTab value={1}>About</FloatingTab>
      <FloatingTab value={2}>Contact us</FloatingTab>
    </FloatingTabs>
  );
};
`,locationsMap:{component:{startLoc:{col:53,line:15},endLoc:{col:1,line:25},startBody:{col:53,line:15},endBody:{col:1,line:25}}}}},title:"Components/Floating Tabs",component:s},T=e(()=>{const[o,t]=c.useState(0);return i(s,{value:o,onChange:l=>t(l),children:[n(a,{value:0,children:"Home"}),n(a,{value:1,children:"About"}),n(a,{value:2,children:"Contact us"})]})},"Component"),d=["Component"];export{T as Component,d as __namedExportsOrder,F as default};
//# sourceMappingURL=FloatingTabs.stories-cfe0d9a8.js.map
