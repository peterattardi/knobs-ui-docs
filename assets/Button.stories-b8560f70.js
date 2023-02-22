var i=Object.defineProperty;var r=(n,c)=>i(n,"name",{value:c,configurable:!0});import{j as o}from"./jsx-runtime-bbb324fa.js";import{B as a}from"./index-188fef8c.js";import{I as e}from"./Person-d764880f.js";import"./index-75ce2bcb.js";import"./es.object.get-own-property-descriptor-e7155286.js";const f={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import { Button } from "@knobs-dev/ui-components/src";
import { IconPerson } from "@knobs-dev/ui-icons/src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "CTA",
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "CTA",
  variant: "secondary"
};

export const Icons = Template.bind({});
Icons.args = {
  children: "CTA",
  variant: "primary",
  leftIcon: <IconPerson />,
  rightIcon: <IconPerson />
};
`,locationsMap:{primary:{startLoc:{col:39,line:15},endLoc:{col:69,line:15},startBody:{col:39,line:15},endBody:{col:69,line:15}},secondary:{startLoc:{col:39,line:15},endLoc:{col:69,line:15},startBody:{col:39,line:15},endBody:{col:69,line:15}},icons:{startLoc:{col:39,line:15},endLoc:{col:69,line:15},startBody:{col:39,line:15},endBody:{col:69,line:15}}}}},title:"Components/Button",component:a},t=r(n=>o(a,{...n}),"Template"),s=t.bind({});s.args={children:"CTA",variant:"primary"};const l=t.bind({});l.args={children:"CTA",variant:"secondary"};const d=t.bind({});d.args={children:"CTA",variant:"primary",leftIcon:o(e,{}),rightIcon:o(e,{})};const I=["Primary","Secondary","Icons"];export{d as Icons,s as Primary,l as Secondary,I as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories-b8560f70.js.map
