import { Badge } from "./ui/badge";

export default function Category({
  category,
  onBadgeClick,
}: {
  category: string;
}) {
  return (
    <Badge
      onClick={onBadgeClick}
      variant="outline"
      className="scroll-mx-0.5 snap-start"
    >
      {category}
    </Badge>
  );
}
