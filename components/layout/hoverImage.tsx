"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
    const imageUrl =
        "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">In the mountains</p>
                <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
        </div>
    );
}
