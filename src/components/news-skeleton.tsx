import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function NewsCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-24 w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-1/4" />
      </CardFooter>
    </Card>
  )
}

export function NewsSkeletonGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  )
}

