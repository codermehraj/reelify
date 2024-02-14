import { z } from "zod";
import {
  AbsoluteFill,
  Sequence
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { TextFade } from "./TextFade";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  // const frame = useCurrentFrame();
  // const { fps } = useVideoConfig();

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  return (
    <AbsoluteFill style={container}>      
      <Sequence from={0}>
        <TextFade>
          <h1 style={titleStyle}>{title}</h1>
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
};
