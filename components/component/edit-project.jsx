import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function EditProject({ openModal }) {
  return (
    <div
    className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center">
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Edit ProjectName</h2>
        <Button className="ml-auto" size="icon" variant="ghost" onClick={() => openModal(false)}>
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email">Project Name</Label>
          <Input defaultValue="john@example.com" id="email" type="email" />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            defaultValue="I'm a passionate software engineer with a strong background in full-stack web development. I love building innovative and user-friendly applications that solve real-world problems."
            id="bio"
            rows={6} />
        </div>
        <div>
            <Label htmlFor="role">Technology</Label>
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
        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  </div>);
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
