import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  placeHolder?: string;
};

export default function SearchInput({
  placeHolder = "Search",
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Input type="search" placeholder={placeHolder} className="pr-10" />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
}
