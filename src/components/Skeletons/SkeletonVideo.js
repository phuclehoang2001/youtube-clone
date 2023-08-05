import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.scss";
const SkeletonVideo = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme color="#343a40">
        <Skeleton height={180} />
        <div style={{ display: "flex" }}>
          <Skeleton
            style={{ marginTop: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Skeleton
              style={{ margin: "0.5rem", marginBottom: "0.2rem" }}
              height={20}
              width={300}
            />
            <Skeleton style={{ margin: "0.5rem" }} height={20} width={200} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
