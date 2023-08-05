import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.scss";
export default function SkeletonWatchMetadata() {
  return (
    <div style={{ margin: "1rem 3rem 1rem 3rem" }}>
      <SkeletonTheme color="#343a40">
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Skeleton
              style={{
                margin: "0.5rem 0 0.2rem 0",
                borderRadius: "10px",
              }}
              height={20}
              width={400}
            />
            <Skeleton
              style={{
                margin: "0.5rem",
                marginLeft: "0",
                borderRadius: "10px",
              }}
              height={20}
              width={200}
            />
          </div>
          <div
            style={{
              marginLeft: "auto",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
            <Skeleton
              style={{
                margin: "0.4rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              circle
              height={20}
              width={20}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Skeleton
            style={{ marginTop: "0.5rem" }}
            circle
            height={45}
            width={45}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Skeleton
              style={{
                margin: "0.5rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              height={20}
              width={200}
            />
            <Skeleton
              style={{ margin: "0.5rem", borderRadius: "10px" }}
              height={20}
              width={200}
            />
          </div>
          <div
            style={{
              marginLeft: "auto",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Skeleton
              style={{
                margin: "0.5rem",
                marginBottom: "0.2rem",
                borderRadius: "10px",
              }}
              height={40}
              width={140}
            />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}
