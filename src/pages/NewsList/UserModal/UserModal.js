import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../../../store/actions/user-action';
import { UserInfo } from './UserInfo/UserInfo';

export const UserModal = ({ setShowUserModal }) => {
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)

  const handleAdmin = () => {
    dispatch(setRole(true))
    setShowInfo(true)
  }

  const handleCloseModal = () => {
    setShowUserModal(false)
  }

  return (
    <div className="modal">
      <div>

        {showInfo ?
          <UserInfo handleCloseModal={handleCloseModal} />
          :
          <>
            <div style={{ textAlign: "center", marginBottom: 5 }}>Choose a role</div>
            <div>
              <button style={{ marginRight: 5 }} onClick={setShowInfo}>Guest</button>
              <button onClick={handleAdmin}>Admin</button>
            </div>
          </>
        }
      </div>
    </div>
  )
}