import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "../../lib/utils";
import './styles.css'

// const Root = AvatarPrimitive.Root

const Root = React.forwardRef((props, ref) => (
    <AvatarPrimitive.Avatar
    ref={ref}
    className={cn(
        "AvatarRoot relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
    props.className)}
    {...props}
    />
));

Root.displayName= "Avatar"

const Image = React.forwardRef((props, ref) => (
    <AvatarPrimitive.AvatarImage
        ref={ref}
        className={cn("AvatarImage flex h-full w-full items-center justify-center rounded-full bg-muted",
        props.className
        )}
        {...props}
    />
));
Image.displayName = AvatarPrimitive.AvatarImage.displayName

const Fallback = React.forwardRef((props, ref)=> (
    <AvatarPrimitive.AvatarFallback
        ref={ref}
        className={cn("AvatarFallback flex h-full w-full items-center justify-center rounded-full bg-muted",
            props.className
        )}
        {...props}
    />
));
Fallback.displayName= AvatarPrimitive.AvatarFallback.displayName

export { Root, Image, Fallback};