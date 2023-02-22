var i=Object.defineProperty;var n=(t,e)=>i(t,"name",{value:e,configurable:!0});import{j as c}from"./jsx-runtime-bbb324fa.js";import{r as a}from"./index-75ce2bcb.js";import{I as o}from"./index-188fef8c.js";import"./es.object.get-own-property-descriptor-e7155286.js";const C={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { Input } from "@knobs-dev/ui-components/src";
import { useState, BaseSyntheticEvent } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Input",
  component: Input
} as ComponentMeta<typeof Input>;

export const Default = () => {
  return <Input placeholder="Insert your name" />;
};

export const Dynamic = () => {
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event: BaseSyntheticEvent) => {
    const value = event.target.value;
    if (value.toLowerCase() === "Vincenzo Rana".toLowerCase()) {
      setSucces(true);
      setError(false);
    } else if (value.length > 0) {
      setSucces(false);
      setError(true);
    }
  };
  return (
    <Input
      success={success}
      error={error}
      placeholder="Who is the CEO of KNOBS?"
      onChange={handleChange}
    />
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:1,line:17},startBody:{col:23,line:15},endBody:{col:1,line:17}},dynamic:{startLoc:{col:23,line:19},endLoc:{col:1,line:41},startBody:{col:23,line:19},endBody:{col:1,line:41}}}}},title:"Components/Input",component:o},S=n(()=>c(o,{placeholder:"Insert your name"}),"Default"),g=n(()=>{const[t,e]=a.useState(!1),[l,r]=a.useState(!1);return c(o,{success:t,error:l,placeholder:"Who is the CEO of KNOBS?",onChange:n(u=>{const s=u.target.value;s.toLowerCase()==="Vincenzo Rana".toLowerCase()?(e(!0),r(!1)):s.length>0&&(e(!1),r(!0))},"handleChange")})},"Dynamic"),v=["Default","Dynamic"];export{S as Default,g as Dynamic,v as __namedExportsOrder,C as default};
//# sourceMappingURL=Input.stories-3d3adc1a.js.map
