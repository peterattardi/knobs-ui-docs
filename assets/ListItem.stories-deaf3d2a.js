var s=Object.defineProperty;var i=(e,o)=>s(e,"name",{value:o,configurable:!0});import{j as n,a as t}from"./jsx-runtime-bbb324fa.js";import{L as r}from"./index-188fef8c.js";import{I as l}from"./Ethereum-d897ac13.js";import{I as c}from"./ThreeDots-98af5593.js";import"./index-75ce2bcb.js";import"./es.object.get-own-property-descriptor-e7155286.js";const I={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";
import { CSSProperties } from "react";

import { ListItem } from "@knobs-dev/ui-components/src";
import { IconEthereum, IconThreeDots } from "@knobs-dev/ui-icons/src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/List Element",
  component: ListItem
} as ComponentMeta<typeof ListItem>;

export const Component: Story<typeof ListItem> = () => {
  const container: CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const leftSubContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  };
  const rightSubContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    textAlign: "right"
  };

  return (
    <ListItem
      leftIcon={<IconEthereum width={25} height={25} />}
      rightIcon={<IconThreeDots />}
    >
      <div style={container}>
        <div style={leftSubContainer}>
          <span>ETH</span>
          <span>Ethereum</span>
        </div>
        <div style={rightSubContainer}>
          <span>45,13 €</span>
          <span>0,00066ETH</span>
        </div>
      </div>
    </ListItem>
  );
};
`,locationsMap:{component:{startLoc:{col:49,line:16},endLoc:{col:1,line:52},startBody:{col:49,line:16},endBody:{col:1,line:52}}}}},title:"Components/List Element",component:r},g=i(()=>n(r,{leftIcon:n(l,{width:25,height:25}),rightIcon:n(c,{}),children:t("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"},children:[t("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[n("span",{children:"ETH"}),n("span",{children:"Ethereum"})]}),t("div",{style:{display:"flex",flexDirection:"column",textAlign:"right"},children:[n("span",{children:"45,13 €"}),n("span",{children:"0,00066ETH"})]})]})}),"Component"),C=["Component"];export{g as Component,C as __namedExportsOrder,I as default};
//# sourceMappingURL=ListItem.stories-deaf3d2a.js.map
