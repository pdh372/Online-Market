import React from 'react';
import { Form, Input } from 'antd';
import BusinessLicense from './businessLicense';
import { useState } from 'react';
const EditProfile = () => {
	const [ form ] = Form.useForm();
	const [ avatar, setAvatar ] = useState('');

	const handleChangeInput = e => {
		const value = form.getFieldsValue();
		console.log(value);
	};

	const onFinish = () => {
		console.log(avatar);
	};

	return (
		<article className='edit-profile'>
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
							<Form.Item label='Tên cửa hàng' name='displayname'>
								<Input placeholder='Cửa hàng bán quần' />
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

						<BusinessLicense setAvatar={setAvatar} />
					</div>

					<Form.Item>
						<button className='edit-profile__form-antd-submit submit-change' type='submit'>
							Update
						</button>
					</Form.Item>
				</Form>
			</section>
		</article>
	);
};

export default EditProfile;
