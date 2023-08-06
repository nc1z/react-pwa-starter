export default interface AvatarProps {
    avatarImage?: string | null
    avatarImageAlt?: string | null
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
    handleCloseUserMenu: () => void
    handleSignOut: () => void
    anchorElUser: HTMLElement | null
}
