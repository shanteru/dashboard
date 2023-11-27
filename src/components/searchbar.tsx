import { Input } from "@/components/ui/input"
export function Search() {
    return (
      <div className="w-full">
        
        <Input
          type="search"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    )
  }