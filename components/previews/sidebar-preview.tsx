"use client"

import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  Inbox, 
  HelpCircle 
} from "lucide-react"

interface SidebarPreviewProps {
  variant?: string;
}

export function SidebarPreview({ variant = "default" }: SidebarPreviewProps) {
  if (variant === "inset") {
    return (
      <div className="w-full">
        <SidebarProvider className="h-[400px] w-full max-w-3xl mx-auto overflow-hidden rounded-xl border">
          <Sidebar variant="inset" className="border-r">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2">
                <Button variant="outline" size="icon" className="h-8 w-8 shrink-0">
                  <Home className="h-4 w-4" />
                </Button>
                <p className="text-sm font-semibold">Inset Sidebar</p>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive tooltip="Dashboard">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Users">
                        <Users className="h-4 w-4" />
                        <span>Users</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Documents">
                        <FileText className="h-4 w-4" />
                        <span>Documents</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Messages">
                        <Inbox className="h-4 w-4" />
                        <span>Messages</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Settings">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Help">
                        <HelpCircle className="h-4 w-4" />
                        <span>Help</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarFooter>
          </Sidebar>
          <div className="flex h-full w-full flex-1 flex-col p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Main content area</p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    )
  }

  return (
    <div className="w-full">
      <SidebarProvider className="h-[400px] w-full max-w-3xl mx-auto overflow-hidden rounded-xl border">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <Button variant="outline" size="icon" className="h-8 w-8 shrink-0">
                <Home className="h-4 w-4" />
              </Button>
              <p className="text-sm font-semibold">Sidebar Example</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Users">
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Documents">
                      <FileText className="h-4 w-4" />
                      <span>Documents</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Messages">
                      <Inbox className="h-4 w-4" />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Help">
                      <HelpCircle className="h-4 w-4" />
                      <span>Help</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarFooter>
        </Sidebar>
        <div className="flex h-full w-full flex-1 flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Main content area</p>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
} 