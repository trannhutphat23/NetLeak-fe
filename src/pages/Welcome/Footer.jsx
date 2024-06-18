import './welcome.css'
import React from 'react'

const Footer = () => {
    return (
        <ul className='footer'>
            <li>
                <h3>Về Netflix</h3>
                <ul>
                    <li>Câu hỏi thường gặp</li>
                    <li>Quyền riêng tư</li>
                    <li>Tuỳ chọn cookie</li>
                    <li>Việc làm</li>
                    <li>Thông tin pháp lý</li>
                    <li>Chỉ có trên Netflix</li>
                </ul>
            </li>
            <li>
                <h3>Về chúng tôi</h3>
                <ul>
                    <li>21520419 - Phạm Ngọc Qúi</li>
                    <li>21520390 - Trần Nhựt Phát</li>
                    <li>21520905 - Nguyễn Thị Thu Hương</li>
                    <li>21521129 - Ngô Võ Quang Minh</li>
                    <li>21522162 - Nguyễn Võ Hoàng Huy</li>
                    <li>21522346 - Trần Tuấn Minh</li>
                </ul>
            </li>
        </ul>
    );
}

export default Footer;