import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

import { currentUserAtom } from "@/atoms/user-atom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { clearLocalStorage } from "@/storages/local-storage"
import { useAtom } from "jotai"

export function UserNav() {
  // const user = useUser()
  const navigate = useNavigate()
  const [user, setUser] = useAtom(currentUserAtom)
  const { t } = useTranslation()
  const fnLogout = () => {
    clearLocalStorage()
    navigate('/login')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage alt={user?.fullname ?? ""} />
            <AvatarFallback>{user?.fullname}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.fullname}</p>
            {/* <p className="text-xs leading-none text-muted-foreground">
              {user.data?.email}
            </p> */}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/settings/profile">
              {t("user_nav.profile")}
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">
              {t("user_nav.settings")}
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <span onClick={fnLogout}>
            {t("user_nav.logout")}
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </span>
          {/* <Link to="/login">
            {t("user_nav.logout")}
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
