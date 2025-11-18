import { Skeleton } from "@/components/ui/skeleton";

export default function GrantLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-full border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-200"
        >
          {/* Title */}
          <Skeleton className="h-6 w-60 mb-4 bg-white" />

          {/* Author */}
          <Skeleton className="h-4 w-24 mb-4 bg-white" />

          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="h-6 w-28 rounded-full bg-white" />
            <Skeleton className="h-6 w-32 rounded-full bg-white" />
            <Skeleton className="h-6 w-24 rounded-full bg-white" />
          </div>

          {/* Button */}
          <div className="flex justify-between items-center">
            <div className="h-full w-full flex items-center justify-start">

             <Skeleton className="h-4 w-40 bg-white" />
            </div>
            <div>

            <Skeleton className="h-10 w-28 rounded-lg bg-white" />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
