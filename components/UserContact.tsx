import React, { FC } from 'react'
import classNames from 'classnames'
import Card, { CardBody } from './bootstrap/Card'
import Button from './bootstrap/Button'
import Avatar from './Avatar'
import { TColor } from '../type/color-type'

interface IUserContactProps {
	className?: string
	name: string
	position?: string
	src: string
	color?: TColor | 'link' | 'brand' | 'brand-two' | 'storybook'
	mail?: string
	phone?: string
	division?: string
	onChat?(...args: unknown[]): unknown
}
const UserContact: FC<IUserContactProps> = ({
	name,
	position,
	src,
	color,
	mail,
	phone,
	division,
	onChat,
	...props
}) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Card {...props} className={classNames(props.className)} stretch>
			<CardBody className='d-flex align-items-center'>
				<div className='flex-grow-1'>
					<div className='fs-5 fw-bold'>{name}</div>
					{position && (
						<div className='text-muted'>
							{position} - {division}
						</div>
					)}
					<div className='row mt-2 g-3'>
						{mail && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='Email'
									isLight
									aria-label='Mail'
									tag='a'
									href={`mailto:${mail}`}
								/>
							</div>
						)}
						{phone && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='PhoneIphone'
									isLight
									aria-label='Phone'
									tag='a'
									href={`tel:${phone}`}
								/>
							</div>
						)}
						{/* {onChat && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='Edit'
									isLight
									aria-label='Chat'
									onClick={onChat}
								/>
							</div>
						)} */}
					</div>
				</div>
				{src && (
					<div className='flex-shrink-0'>
						<Avatar
							src={src}
							color={color}
							className='rounded-circle'
							shadow='sm'
							size={110}
						/>
					</div>
				)}
			</CardBody>
		</Card>
	)
}

export default UserContact
