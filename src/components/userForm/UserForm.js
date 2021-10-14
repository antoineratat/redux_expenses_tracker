import React, { useState } from 'react'
import { Spin, Card, Typography, Button, Avatar, Skeleton } from 'antd'
import { LoadingOutlined, UserOutlined } from '@ant-design/icons'
import './UserForm.css'

export default function UserForm(props) {
	const { isLoading, user } = props

	const [firstName, setFirstName] = useState(user['first_name'])
	const [lastName, setLastName] = useState(user['last_name'])
	const [email, setEmail] = useState(user['email'])

	const [isDisabled, setIsDisabled] = useState(false)
	const { Paragraph, Title, Text } = Typography
	const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />

	return (
		<>
			<Card
				className='profile-picture-card'
				style={{ width: 350 }}
				cover={
					<Avatar shape='square' size={86} icon={<UserOutlined />} />
				}>
				<hr />
				<Skeleton loading={isLoading} active>
					<Title level={5} className='detail-title'>
						Details
					</Title>
					<div className='input-div'>
						<Text type='secondary'>First Name:</Text>
						<Paragraph
							editable={{
								onChange: setFirstName,
								maxLength: 50,
								autoSize: { maxRows: 1, minRows: 1 },
							}}>
							{firstName}
						</Paragraph>
					</div>
					<div className='input-div'>
						<Text type='secondary'>Last Name:</Text>
						<Paragraph
							editable={{
								onChange: setLastName,
								maxLength: 50,
								autoSize: { maxRows: 1, minRows: 1 },
							}}>
							{lastName}
						</Paragraph>
					</div>
					<div className='input-div'>
						<Text type='secondary'>Email:</Text>
						<Paragraph
							editable={{
								onChange: setEmail,
								maxLength: 50,
								autoSize: { maxRows: 2, minRows: 1 },
							}}>
							{email}
						</Paragraph>
					</div>
					<div>
						<Button
							type='primary'
							style={{ marginTop: '1rem' }}
							disabled={isDisabled}>
							Update{' '}
							{isDisabled && (
								<Spin size='small' indicator={antIcon} />
							)}
						</Button>
					</div>
				</Skeleton>
			</Card>
		</>
	)
}
