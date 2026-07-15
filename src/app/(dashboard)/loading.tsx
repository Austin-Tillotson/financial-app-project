"use client";

import { Skeleton } from "primereact/skeleton";
import { Card } from "@/components/ui/Card";

function InfoCardSkeleton() {
  return (
    <Card>
      <Skeleton width="6rem" height="1rem" />
      <Skeleton width="8rem" height="2rem" className="mt-3" />
      <Skeleton width="7rem" height="1rem" className="mt-3" />
      <Skeleton width="100%" height="3rem" className="mt-4" />
    </Card>
  );
}

function ChartSkeleton() {
  return (
    <Card>
      <Skeleton width="11rem" height="1.25rem" className="mb-4" />
      <Skeleton width="100%" height="15rem" />
    </Card>
  );
}

function AllocationSkeleton() {
  return (
    <Card>
      <Skeleton width="11rem" height="1.25rem" className="mb-4" />

      <div className="grid gap-4 sm:grid-cols-[auto_auto] sm:items-center md:grid-cols-[1fr_auto]">
        <div className="flex h-55 items-center justify-center">
          <Skeleton shape="circle" size="10rem" className="rounded-full" />
        </div>

        <div className="grid gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex items-center gap-2" key={index}>
              <Skeleton shape="circle" size="0.5rem" />
              <Skeleton width="5rem" height="1rem" />
              <Skeleton width="2rem" height="1rem" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function TableSkeleton() {
  return (
    <Card className="overflow-x-auto">
      <Skeleton width="10rem" height="1.25rem" className="mb-5" />

      <div className="grid gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="grid min-w-180 grid-cols-5 gap-4" key={index}>
            <Skeleton height="1rem" />
            <Skeleton height="1rem" />
            <Skeleton height="1rem" />
            <Skeleton height="1rem" />
            <Skeleton height="1rem" />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function Loading() {
  return (
    <>
      <section className="hidden gap-2 lg:grid">
        <Skeleton width="6rem" height="1rem" />
        <Skeleton width="18rem" height="2.25rem" />
        <Skeleton width="34rem" height="1rem" />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <InfoCardSkeleton key={index} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ChartSkeleton />
        <AllocationSkeleton />
      </section>

      <TableSkeleton />
      <TableSkeleton />
    </>
  );
}