"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { EditProfile } from "./edit-profile";
import { EditSkills } from "./edit-skills";
import { EditIntrests } from "./edit-intrests";
import { EditProject } from "./edit-project";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ProfilePage() {
  const [editModal, setEditModal] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [editIntrests, setEditIntrests] = useState(false);
  const [editProject, setEditProject] = useState(false);

  const { isAuthenticated, user, error } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto py-10 px-4 md:px-6">
      {editModal ? <EditProfile openModal={setEditModal} /> : <></>}
      {editSkills ? <EditSkills openModal={setEditSkills} /> : <></>}
      {editIntrests ? <EditIntrests openModal={setEditIntrests} /> : <></>}
      {editProject ? <EditProject openModal={setEditProject} /> : <></>}
      <div>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-2xl font-bold">{user?.userName}</h1>
              <Button onClick={() => setEditModal(true)}>Edit Profile</Button>
            </div>
            <p className="text-gray-500 dark:text-gray-400">{user?.tagline}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {user?.bio}
        </p>
        <div className="grid gap-4 mt-8">
          {user?.projects?.length > 0 ? (
            <>
              {user?.projects.map((project) => (
                <div className="rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-100 dark:bg-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="ml-auto" size="icon" variant="ghost">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Project</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setEditProject(true)}>
                          Edit Project
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => 
                    <Badge>{tag}</Badge>
                  )}
                  </div>
                </div>
              </div>
              ))}
            </>
          ) : (
            <></>
          )}
          {/* <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web application for managing team tasks and projects.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setEditProject(true)}>
                      Edit Project
                    </DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Web Development</Badge>
                <Badge>Project Management</Badge>
                <Badge>Collaboration</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A mobile app for tracking personal fitness goals.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Mobile Development</Badge>
                <Badge>Fitness</Badge>
                <Badge>Health</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web-based e-commerce platform for selling handmade crafts.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>E-commerce</Badge>
                <Badge>Crafts</Badge>
                <Badge>Handmade</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 4</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web application for managing personal finances.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Personal Finance</Badge>
                <Badge>Budgeting</Badge>
                <Badge>Expense Tracking</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 5</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web-based platform for hosting online workshops and
                    events.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Online Events</Badge>
                <Badge>Workshops</Badge>
                <Badge>Education</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Project 6</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A mobile app for booking and managing vacation rentals.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Travel</Badge>
                <Badge>Vacation Rentals</Badge>
                <Badge>Mobile Development</Badge>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <Button onClick={() => setEditSkills(true)}>Edit</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
            {
              user?.skills?.map((skill) =><>
              <Badge>{skill}</Badge>
              </>)
            }
              {/* <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Git</Badge>
              <Badge>CSS</Badge>
              <Badge>SQL</Badge>
              <Badge>AWS</Badge> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
            <Button onClick={() => setEditIntrests(true)}>Edit</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
            {
              user?.interests?.map((interest) =><>
              <Badge>{interest}</Badge>
              </>)
            }
              {/* <Badge>Web Development</Badge>
              <Badge>Mobile Development</Badge>
              <Badge>Open Source</Badge>
              <Badge>Artificial Intelligence</Badge>
              <Badge>Blockchain</Badge>
              <Badge>Sustainability</Badge> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <TwitterIcon className="h-5 w-5 text-[#1DA1F2]" />
                <Link className="text-sm hover:underline" href="#">
                  @johndoe
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="h-5 w-5 text-[#0077B5]" />
                <Link className="text-sm hover:underline" href="#">
                  John Doe
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                <Link className="text-sm hover:underline" href="#">
                  johndoe
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
