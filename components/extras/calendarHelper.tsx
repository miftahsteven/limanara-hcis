import { Views } from 'react-big-calendar'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import Button, { ButtonGroup } from '../bootstrap/Button'
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../bootstrap/Dropdown'

export const getUnitType = (viewMode: 'month' | 'week' | 'work_week' | 'day' | 'agenda') => {
	let unitType = null
	switch (viewMode) {
		case Views.WEEK:
		case Views.WORK_WEEK:
			unitType = Views.WEEK
			break
		case Views.MONTH:
		case Views.AGENDA:
			unitType = Views.MONTH
			break
		default:
			unitType = Views.DAY
	}
	return unitType
}

export const getLabel = (
	date: dayjs.ConfigType,
	viewMode: 'month' | 'week' | 'work_week' | 'day' | 'agenda',
) => {
	if (viewMode === Views.MONTH) return dayjs(date).format('MMMM YYYY')
	if (viewMode === Views.WEEK)
		return `${dayjs(date).startOf('week').format('MMM D')} - ${dayjs(date)
			.endOf('week')
			.format('MMM D')}`
	if (viewMode === Views.WORK_WEEK)
		return `${dayjs(date).startOf('week').add(1, 'day').format('MMM D')} - ${dayjs(date)
			.endOf('week')
			.add(-1, 'day')
			.format('MMM D')}`
	if (viewMode === Views.AGENDA)
		return `${dayjs(date).format('L')} - ${dayjs(date).add(1, 'month').format('L')}`
	return dayjs(date).format('dddd, MMM D')
}

export const getTodayButtonLabel = (
	viewMode: 'month' | 'week' | 'work_week' | 'day' | 'agenda',
) => {
	if (viewMode === Views.MONTH || viewMode === Views.AGENDA) return 'This month'
	if (viewMode === Views.WEEK || viewMode === Views.WORK_WEEK) return 'This week'
	return 'Today'
}

export const getViews = () => {
	// @ts-ignore
	return Object.keys(Views).map((k) => Views[k])
}

interface ICalendarTodayButtonProps {
	setDate(...args: unknown[]): unknown
	date: object
	unitType: string
	viewMode: 'month' | 'week' | 'work_week' | 'day' | 'agenda'
}
export const CalendarTodayButton: FC<ICalendarTodayButtonProps> = ({
	setDate,
	date,
	unitType,
	viewMode,
}) => {
	return (
		<ButtonGroup>
			<Button
				color='info'
				isLight
				// @ts-ignore
				onClick={() => setDate(dayjs(date).add(-1, unitType)._d)}
				icon='ChevronLeft'
				aria-label='Prev'
			/>
			{/* @ts-ignore */}
			<Button color='info' isLight onClick={() => setDate(dayjs()._d)}>
				{getTodayButtonLabel(viewMode)}
			</Button>
			<Button
				color='info'
				isLight
				// @ts-ignore
				onClick={() => setDate(dayjs(date).add(1, unitType)._d)}
				icon='ChevronRight'
				aria-label='Next'
			/>
		</ButtonGroup>
	)
}

interface ICalendarViewModeButtonsProps {
	viewMode: 'month' | 'week' | 'work_week' | 'day' | 'agenda'
	setViewMode(...args: unknown[]): unknown
}
export const CalendarViewModeButtons: FC<ICalendarViewModeButtonsProps> = ({
	viewMode,
	setViewMode,
}) => {
	return (
		<Dropdown>
			<DropdownToggle>
				<Button
					color='primary'
					isLight
					icon={
						(viewMode === Views.MONTH && 'calendar_view_month') ||
						(viewMode === Views.WEEK && 'calendar_view_week') ||
						(viewMode === Views.WORK_WEEK && 'view_week') ||
						(viewMode === Views.DAY && 'calendar_view_day') ||
						'view_agenda'
					}>
					{(viewMode === Views.MONTH && 'Month') ||
						(viewMode === Views.WEEK && 'Week') ||
						(viewMode === Views.WORK_WEEK && 'Work Week') ||
						(viewMode === Views.DAY && 'Day') ||
						'Agenda'}
				</Button>
			</DropdownToggle>
			<DropdownMenu isAlignmentEnd>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_month'
						isActive={viewMode === Views.MONTH}
						onClick={() => setViewMode(Views.MONTH)}>
						Month
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_week'
						isActive={viewMode === Views.WEEK}
						onClick={() => setViewMode(Views.WEEK)}>
						Week
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='view_week'
						isActive={viewMode === Views.WORK_WEEK}
						onClick={() => setViewMode(Views.WORK_WEEK)}>
						Work Week
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_day'
						isActive={viewMode === Views.DAY}
						onClick={() => setViewMode(Views.DAY)}>
						Day
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='view_agenda'
						isActive={viewMode === Views.AGENDA}
						onClick={() => setViewMode(Views.AGENDA)}>
						Agenda
					</Button>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
