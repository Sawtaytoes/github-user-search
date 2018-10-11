import PropTypes from 'prop-types'
import React from 'react'

import Count from './Count'

const propTypes = {
	avatarUrl: PropTypes.string.isRequired,
	bioHTML: PropTypes.string.isRequired,
	followers: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
		.isRequired
	),
	following: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
		.isRequired
	),
	login: PropTypes.string.isRequired,
	name: PropTypes.string,
	starredRepositories: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
		.isRequired
	),
	url: PropTypes.string.isRequired,
	websiteUrl: PropTypes.string,
}

const User = ({
	avatarUrl,
	bioHTML,
	followers,
	following,
	login,
	name,
	starredRepositories,
	url,
	websiteUrl,
}) => (
	<div
		style={{
			border: '2px solid grey',
			height: '100%',
			padding: '20px',
		}}
	>
		<div>
			<a
				href={url}
				style={{
					color: 'inherit',
					textDecoration: 'none',
				}}
			>
				<div
					style={{
						fontWeight: 'bold',
						marginBottom: '10px',
						textDecoration: 'underline',
					}}
				>
					{login}
				</div>

				{
					name
					&& (
						<small>
							{name}
						</small>
					)
				}

				<div>
					<img
						alt="user avatar"
						src={avatarUrl}
						style={{ width: '50%' }}
					/>
				</div>
			</a>
		</div>

		<div>
			<small
				dangerouslySetInnerHTML={{
					__html: bioHTML,
				}}
			/>
		</div>

		<div>
			{
				websiteUrl
				&& (
					<a
						href={websiteUrl}
						style={{
							color: 'inherit',
						}}
					>
						Go to Website
					</a>
				)
			}
		</div>

		<div>
			<Count
				name="Followers"
				value={followers.totalCount}
			/>
			<Count
				name="Following"
				value={following.totalCount}
			/>
			<Count
				name="Starred"
				value={starredRepositories.totalCount}
			/>
		</div>
	</div>
)

User
.propTypes = propTypes

export default User
