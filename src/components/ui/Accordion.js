import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import './styles.css'

const Root = AccordionPrimitive.Root;

const Item = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b AccordionItem", props.className)}
    {...props}
  />
));
Item.displayName = "Item";

const Trigger = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Header className="flex AccordionHeader">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "AccordionTrigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        props.className
      )}
      {...props}
    >
      {props.children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
Trigger.displayName = AccordionPrimitive.Trigger.displayName;

const Content = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="AccordionContent overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 AccordionContentText", props.className)}>{props.children}</div>
  </AccordionPrimitive.Content>
));

Content.displayName = AccordionPrimitive.Content.displayName;

export { Root, Item, Trigger, Content };
