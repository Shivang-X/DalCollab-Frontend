import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function EditSkills({ openModal }) {
  return (
    (<div
      key="1"
      className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center">
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <Button className="ml-auto" size="icon" variant="ghost" onClick={() => openModal(false)}>
            <XIcon className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="role">Skills</Label>
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Type here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Badge className="mr-3">JavaScript <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">React <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">Node.js <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">TypeScript <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">Git <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">CSS <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">SQL <XIcon className="ml-1.5 w-4 h-4" /></Badge>
              <Badge className="mr-1.5">AWS <XIcon className="ml-1.5 w-4 h-4" /></Badge>
          <div className="grid grid-cols-2 gap-4" />
        </form>
      </div>
    </div>)
  );
}

function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
