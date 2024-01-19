import React, { useState } from "react"
import { IconArrow } from "../../assets/icons/arrow"

export const RightLayoutItem = ({ title, description = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container-item">
      <div>
        <div className="arrow-btn">
          <button
            className="arrow-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            <div>
              <p
                className="title"
                style={{
                  fontWeight: isMenuOpen ? 700 : 400,}}>
                {title}
              </p>
            </div>
            <div style={{ transform: isMenuOpen ? 'rotate(180deg)' : undefined }}>
              <IconArrow />
            </div>
          </button>
        </div>
        <div className="description">{isMenuOpen ? description : null}</div>
      </div>
    </div>
  )
}
