import React from 'react';
import Giscus from "@giscus/react";

export default function GiscusComponent() {

  return (
    <Giscus    
      repo="RulerChen/RulerChen-Website"
      repoId="R_kgDOJt31hg"
      category="General"
      categoryId="DIC_kwDOJt31hs4CYS9l"  // E.g. id of "General"
      mapping="title"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme='dark_dimmed'
      lang="en"
      loading="lazy"
    />
  );
}