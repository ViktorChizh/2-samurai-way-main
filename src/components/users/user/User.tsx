import { UserType } from "api/API"
import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import ava from "../../../assets/avatar.webp"
import s from "../Users.module.css"

export const User: FC<UserPropsType> = ({ user, followUser, unFollowUser, buttonDisabled }) => {
	return (
		<div className={s.block}>
			<div className={s.blockImg}>
				<NavLink to={`/profile/${user.id}`}>
					<img src={user.photos.small ? user.photos.small : ava} width="50px" height="50px" alt="avatar" />
				</NavLink>
				{user.followed ? (
					<button
						disabled={buttonDisabled.some((id) => id === user.id)}
						style={{ opacity: buttonDisabled.some((id) => id === user.id) ? "0.3" : "1" }}
						onClick={() => followUser(user.id)}>
						FOLLOW
					</button>
				) : (
					<button
						disabled={buttonDisabled.some((id) => id === user.id)}
						style={{ opacity: buttonDisabled.some((id) => id === user.id) ? "0.3" : "1" }}
						onClick={() => unFollowUser(user.id)}>
						UNFOLLOW
					</button>
				)}
			</div>
			<div className={s.blockMain}>
				<NavLink to={`/profile/${user.id}`}>
					<span>{user.name}</span>
				</NavLink>
				<span className={s.status}>{user.status}</span>
			</div>
			{/*<div className={s.blockLocation}>*/}
			{/*    <span>{'user.location.country'}</span>*/}
			{/*    <span>{'user.location.city'}</span>*/}
			{/*</div>*/}
		</div>
	)
}
//types
type UserPropsType = {
	user: UserType
	buttonDisabled: number[]
	followUser: (userId: number) => void
	unFollowUser: (userId: number) => void
}