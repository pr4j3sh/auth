import { Badge } from "./ui/badge";

export default function Category({ category }: { category: string }) {
  return (
    <Badge variant="outline" className="scroll-mx-0.5 snap-start">
      {category}
    </Badge>
  );
}
