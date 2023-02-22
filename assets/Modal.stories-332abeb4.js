var a=Object.defineProperty;var n=(i,r)=>a(i,"name",{value:r,configurable:!0});import{j as o,a as l}from"./jsx-runtime-bbb324fa.js";import{M as e,B as t}from"./index-188fef8c.js";import{I as c}from"./ExclamationCircle-e117b1f0.js";import"./index-75ce2bcb.js";import"./es.object.get-own-property-descriptor-e7155286.js";const f={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { Button, Modal } from "@knobs-dev/ui-components/src";
import { IconExclamationCircle } from "@knobs-dev/ui-icons/src";
import { ReactNode } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Component: Story<typeof Modal> = () => {
  return (
    <Modal
      icon={<IconExclamationCircle width={90} height={103} fill="#F2994A" />}
      title="Bad Boy"
      subtitle="You did something wrong apparently"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "24px",
          flexDirection: "column"
        }}
      >
        <Button>Bad bad</Button>
        <Button variant="secondary">Go back</Button>
      </div>
    </Modal>
  );
};
`,locationsMap:{component:{startLoc:{col:46,line:16},endLoc:{col:1,line:36},startBody:{col:46,line:16},endBody:{col:1,line:36}}}}},title:"Components/Modal",component:e},h=n(()=>o(e,{icon:o(c,{width:90,height:103,fill:"#F2994A"}),title:"Bad Boy",subtitle:"You did something wrong apparently",children:l("div",{style:{width:"100%",display:"flex",gap:"24px",flexDirection:"column"},children:[o(t,{children:"Bad bad"}),o(t,{variant:"secondary",children:"Go back"})]})}),"Component"),x=["Component"];export{h as Component,x as __namedExportsOrder,f as default};
//# sourceMappingURL=Modal.stories-332abeb4.js.map
