
import UserAvatar from './userAvatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function userButton() {
    // session ... 

  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <UserAvatar name="Mohib Arsala" image="https://github.com/shadcn.png" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>

  )
}

export default userButton