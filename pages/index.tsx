"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="md:flex w-full h-full">
      <Head>
        <title>Reelify</title>
        <meta name="Reelify" content="Make Reels from AI" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex-1 w-full">
        <h1 className="font-bold text-5xl m-10">Re:elify</h1>
        <h3 className="font-italic text-xl pl-10">
          Make reels easier than ever...
        </h3>        
        <h1 className="font-bold text-3xl m-10 mt-10 text-center">Enter your prompt</h1>
        <div className="flex justify-center items-center m-10 mt-10">
          <div className="w-4/6">
          <RenderControls
            text={text}
            setText={setText}
            inputProps={inputProps}
          ></RenderControls>
          </div>
        </div>
      </div>
      <div className="cinematics m-10 border-2 rounded-lg border-gray-400 shadow-2xl min-w-[360px] min-h-[640px]">
        <Player
          component={Main}
          inputProps={inputProps}
          durationInFrames={DURATION_IN_FRAMES}
          fps={VIDEO_FPS}
          compositionHeight={VIDEO_HEIGHT}
          compositionWidth={VIDEO_WIDTH}
          style={{ width: "100%", height: "100%"}}
          controls
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default Home;
