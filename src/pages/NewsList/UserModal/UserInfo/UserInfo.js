import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/actions/user-action";

const errorsField = {
  name: false,
  email: false,
  phone: false,
  text: false,
}

const userField = {
  name: '',
  email: '',
  phone: '',
  text: '',
}

export const UserInfo = ({ handleCloseModal }) => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState(userField)
  const [errors, setErrors] = useState(errorsField)

  const handleChangeInput = (e, field) => {
    const val = e.target.value
    switch (field) {
      case 'name':
        setUserInfo({ ...userInfo, name: val })
        if (errors.name) setErrors({ ...errors, name: false })
        break;
      case 'email':
        setUserInfo({ ...userInfo, email: val })
        if (errors.email) setErrors({ ...errors, email: false })
        break;
      case 'phone':
        setUserInfo({ ...userInfo, phone: val })
        if (errors.phone) setErrors({ ...errors, phone: false })
        break;
      case 'text':
        setUserInfo({ ...userInfo, text: val })
        if (errors.text) setErrors({ ...errors, text: false })
        break;
      default:
        break;
    }
  }

  const inputValidate = () => {
    const letters = /^[A-Za-zА-Яа-я]+$/;
    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const numbers = /^\d+$/;

    const err = { ...errors }

    if (!userInfo.name.match(letters)) {
      err.name = true
    }

    if (!userInfo.email.match(email)) {
      err.email = true
    }

    if (!userInfo.phone.match(numbers)) {
      err.phone = true
    }

    if (userInfo.text == '') {
      err.text = true
    }

    setErrors(err)
    if (Object.values(err).some(err => err)) return false
    return true
  }

  const addInfo = () => {
    if (inputValidate()) {
      dispatch(setUser(userInfo))
      handleCloseModal()
    }
  }

  return (
    <>
      <div style={{ marginBottom: 10 }}>Add some more information about yourself</div>
      <div style={{ textAlign: 'center' }}>
        <div className="input-section">
          <div>
            <input style={{ marginRight: 5 }} onChange={(e) => handleChangeInput(e, 'name')} className={errors.name ? 'danger-input' : ''} placeholder="Name" />
          </div>
          {errors.name && <div className={'danger-span'}>Only letters</div>}
        </div>
        <div className="input-section">
          <div>
            <input onChange={(e) => handleChangeInput(e, 'email')} className={errors.email ? 'danger-input' : ''} placeholder="email" />
          </div>
          {errors.email && <span className={'danger-span'}>Only email</span>}
        </div>
        <div className="input-section">
          <div>
            <input onChange={(e) => handleChangeInput(e, 'phone')} className={errors.phone ? 'danger-input' : ''} placeholder="phone" />
          </div>
          {errors.phone && <span className={'danger-span'}>Only numbers</span>}
        </div>
        <div className="input-section">
          <div>
            <input onChange={(e) => handleChangeInput(e, 'text')} className={errors.text ? 'danger-input' : ''} placeholder="text" />
          </div>
          {errors.text && <span className={'danger-span'}>Field must not be empty</span>}
        </div>
        <button onClick={addInfo}>Add info</button>
      </div>
    </>
  )
}