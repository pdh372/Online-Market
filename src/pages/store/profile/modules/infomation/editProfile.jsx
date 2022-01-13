import React from 'react';
import { Form, Input } from 'antd';
import Image from 'components/shared/image/Image';
const EditProfile = () => {
	const [ form ] = Form.useForm();

	const handleChangeInput = e => {
		console.log(e);
	};

	const onFinish = () => {};

	return (
		<article className='edit-profile'>
			<div className='edit-profile__explain'>
				<p>You can view and edit / update your personal details below:</p>
			</div>

			<section className='edit-profile__form'>
				<Form
					name='basic'
					autoComplete='off'
					onFinish={onFinish}
					form={form}
					onChange={handleChangeInput}
					layout='vertical'
					className='edit-profile__form-antd'
				>
					<div className='edit-profile__form-antd-input-group'>
						<article className='grid__item'>
							<Form.Item label='Display Name' name='displayname'>
								<Input placeholder='Khoa' />
							</Form.Item>
							<Form.Item label='First Name' name='firstname'>
								<Input placeholder='Lam' />
							</Form.Item>
							<Form.Item label='Last Name' name='lastname'>
								<Input placeholder='Ngoc' />
							</Form.Item>
						</article>

						<article className='grid__item'>
							<Form.Item label='Email' name='email' rules={[ { type: 'email' } ]}>
								<Input placeholder='r15@gmail.com' />
							</Form.Item>
						</article>

						<article className='grid__item'>
							<Form.Item label='Address' name='address'>
								<Input placeholder='Rach Gia' />
							</Form.Item>

							<Form.Item
								label='Phone Number'
								name='phone'
								rules={[
									{
										message : 'Please enter phone',
									},
									() => ({
										validator (_, value) {
											if (isNaN(value)) {
												return Promise.reject('Phone has to be a number.');
											}
											if (value.length >= 16) {
												return Promise.reject('Phone has to be a length less than 16.');
											}
											return Promise.resolve();
										},
									}),
								]}
							>
								<Input placeholder='(+84) 01824125' />
							</Form.Item>
						</article>

						<article className='grid__item' style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Image w={250} h={250} />
							<Image w={250} h={250} />
						</article>
					</div>

					<Form.Item>
						<button className='edit-profile__form-antd-submit' type='submit'>
							Update
						</button>
					</Form.Item>
				</Form>
			</section>
		</article>
	);
};

export default EditProfile;
