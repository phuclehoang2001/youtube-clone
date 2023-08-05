import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.scss";
export default function SkeletonRelatedVideo() {
  return (
    <div style={{ width: "100%", margin: "0 0  0.2rem 0rem" }}>
      <SkeletonTheme color="#343a40">
        <div style={{ display: "flex" }}>
          <Skeleton
            style={{ marginTop: "0.5rem", borderRadius: "0px" }}
            height={80}
            width={160}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Skeleton
              style={{
                margin: "0.5rem",
                marginBottom: "0.2rem",
                borderRadius: "8px",
              }}
              height={20}
              width={200}
            />
            <Skeleton
              style={{ margin: "0.5rem", borderRadius: "8px" }}
              height={20}
              width={100}
            />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}
