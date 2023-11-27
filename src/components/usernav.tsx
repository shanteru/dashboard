'use client'
import * as React from "react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
  import { Button } from "./ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"

  import { useTheme } from "next-themes"
  
  export function UserNav() {
    const { setTheme } = useTheme()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/showcase-avatar.jpg" alt="@shadcn" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Renata Alink</p>
              
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
              
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem>
              Changelog
            </DropdownMenuItem>
            <DropdownMenuItem>
              Help
              <DropdownMenuShortcut>?</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark mode
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light mode
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>Ctrl+Shift+Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }